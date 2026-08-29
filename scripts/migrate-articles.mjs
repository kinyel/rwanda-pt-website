/**
 * One-shot migration: turn the crawled WordPress article pages into Markdown
 * entries for the `articles` content collection.
 *
 * Kept in the repo rather than deleted after use, because it documents exactly
 * how the legacy content was transformed. Re-running it is safe: it overwrites
 * the generated Markdown and nothing else.
 *
 * Source HTML lives outside the repo (the crawl directory). Pass its path:
 *   node scripts/migrate-articles.mjs /path/to/crawl/html
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SRC = process.argv[2];
if (!SRC) {
  console.error('Usage: node scripts/migrate-articles.mjs <crawl-html-dir>');
  process.exit(1);
}

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const OUT = join(root, 'src/content/articles');
mkdirSync(OUT, { recursive: true });

/* Pages that are not articles: WordPress demo content, an unrelated advert,
   form receipts, and the site's real pages. Everything else is migrated. */
const NOT_ARTICLES = new Set([
  'home', 'video-tracking', 'primesolar', 'fuelmanagement', 'containertracking',
  'fleettracking', 'ectss', 'fleet-analytics', 'api-integrations', 'drivermonitoring',
  'analyze-your-fleet', 'contactus', 'why-choose-prime', 'prime-warranties',
  'prime-careers', 'terms-of-service', 'privacy-policy', 'egy', 'vras', 'tools',
  'confirmed', '2604e-received', 'confirmation',
  'nothing',                    // unrelated advertisement, no relation to the business
  'another-awesome-news-post',  // WordPress demo title, body duplicated from the 2020 note
  '10-reasons-you-should-track',// title does not match its body, which is the same 2020 note
]);

const decode = (s) =>
  s
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;|&#0?39;|&#x27;|&rsquo;|&lsquo;|&#8216;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8211;|&ndash;/g, '-')
    .replace(/&#8212;|&mdash;/g, ', ')  // house rule: no em dashes anywhere on the site
    .replace(/&hellip;|&#8230;/g, '...')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/—/g, ', ')          // literal em dash
    .replace(/–/g, '-');

const inline = (html) =>
  decode(
    html
      .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => `**${t.replace(/<[^>]+>/g, '').trim()}**`)
      .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => `*${t.replace(/<[^>]+>/g, '').trim()}*`)
      .replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => {
        const text = t.replace(/<[^>]+>/g, '').trim();
        return text ? `[${text}](${href})` : '';
      })
      .replace(/<[^>]+>/g, ''),
  )
    .replace(/[ \t]+/g, ' ')
    .trim();

function toMarkdown(html) {
  const blocks = [];
  /* Walk the top-level block elements in order. */
  const re = /<(h[1-6]|p|ul|ol|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(html))) {
    const tag = m[1].toLowerCase();
    const inner = m[2];

    if (tag === 'ul' || tag === 'ol') {
      const items = [...inner.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((li) => inline(li[1]))
        .filter(Boolean);
      if (items.length) {
        blocks.push(items.map((it, i) => (tag === 'ol' ? `${i + 1}. ${it}` : `- ${it}`)).join('\n'));
      }
      continue;
    }

    const text = inline(inner);
    if (!text) continue;

    if (tag === 'blockquote') {
      blocks.push(`> ${text}`);
    } else if (tag[0] === 'h') {
      /* Demote every heading one level: the page's h1 is the article title,
         so in-body headings must start at h2. */
      const level = Math.min(6, Number(tag[1]) + 1);
      blocks.push(`${'#'.repeat(Math.max(2, level))} ${text}`);
    } else if (/^\*\*[^*]+\*\*$/.test(text) && text.length < 120) {
      /* WordPress authors used <p><strong> where a heading belonged. Promoting
         these gives each article a real h2 hierarchy and removes a wall of
         bolded body copy, which the house style rules out. */
      const heading = text.slice(2, -2).trim();
      /* "1. Real-Time Vehicle Tracking" is a step under the preceding section,
         so it becomes h3. Everything else is a section heading. */
      blocks.push(`${/^\d+[.)]\s/.test(heading) ? '###' : '##'} ${heading}`);
    } else {
      blocks.push(text);
    }
  }
  return blocks.join('\n\n');
}

const MONTHS = {
  january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
  july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
};

function extractDate(html) {
  const m = html.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s*(\d{4})/i);
  if (!m) return undefined;
  return `${m[3]}-${MONTHS[m[1].toLowerCase()]}-${String(m[2]).padStart(2, '0')}`;
}

const yaml = (s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

let written = 0;
const skipped = [];

for (const file of readdirSync(SRC).filter((f) => f.endsWith('.html')).sort()) {
  const slug = file.replace(/\.html$/, '');
  if (NOT_ARTICLES.has(slug)) { skipped.push(slug); continue; }

  const html = readFileSync(join(SRC, file), 'utf8');

  const contentMatch = html.match(/<div class="entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/(?:article|div)>/i)
    ?? html.match(/<div class="entry-content[^"]*"[^>]*>([\s\S]*?)<footer/i);
  if (!contentMatch) { skipped.push(`${slug} (no entry-content)`); continue; }

  let body = contentMatch[1]
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    /* Strip the WordPress comment form and post pagination. */
    .replace(/<div[^>]*id=["']comments["'][\s\S]*$/i, '')
    .replace(/<div class="post-nav[\s\S]*$/i, '');

  const markdown = toMarkdown(body);
  if (markdown.length < 250) { skipped.push(`${slug} (body too short: ${markdown.length})`); continue; }

  /* Title: prefer <title>, fall back to the first h1, then the first heading
     line of the body (some posts have an empty h1). */
  let title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim());
  if (!title) title = inline(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? '');
  if (!title) title = markdown.split('\n')[0].replace(/^#+\s*/, '').slice(0, 90);
  /* Titles must be plain text: some posts wrap their h1 in <strong>. */
  title = title.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();

  const date = extractDate(html);

  /* Description: first substantial paragraph, trimmed to meta length. */
  const firstPara = markdown
    .split('\n\n')
    .find((b) => !b.startsWith('#') && !b.startsWith('-') && b.length > 80) ?? '';
  const description = firstPara.replace(/\*\*/g, '').slice(0, 155).replace(/\s+\S*$/, '').trim();

  const frontmatter = [
    '---',
    `title: ${yaml(title)}`,
    `description: ${yaml(description)}`,
    date ? `date: ${date}` : null,
    'author: "primeTEAM"',
    '---',
    '',
    '',
  ].filter((line) => line !== null).join('\n');

  writeFileSync(join(OUT, `${slug}.md`), frontmatter + markdown + '\n');
  written++;
}

console.log(`Articles written: ${written}`);
console.log(`Skipped (${skipped.length}): ${skipped.join(', ')}`);
