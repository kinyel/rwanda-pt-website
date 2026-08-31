/**
 * Post-build QA sweep over dist/.
 *
 * Checks the rendered HTML rather than the source, so it catches anything a
 * component introduces at render time: a missing h1, a broken internal link, an
 * image without alt text, a page that lost its hreflang pair.
 *
 *   npm run build && npm run qa
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const DIST = join(root, 'dist');

if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

const pages = walk(DIST);
const errors = [];
const warnings = [];
const routeOf = (file) => `/${relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/')}`;

/** Text content of the <body>, with tags, scripts and styles removed. */
function bodyText(html) {
  const body = html.match(/<body[\s\S]*?>([\s\S]*)<\/body>/i)?.[1] ?? '';
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
}

const routes = new Set(pages.map(routeOf));
const stats = { pages: pages.length, h1: 0, images: 0, links: 0 };

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const route = routeOf(file);
  const at = (msg) => `${route}  ${msg}`;

  /* --- Head essentials --- */
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  if (!title) errors.push(at('missing <title>'));
  else if (title.length > 65) warnings.push(at(`title is ${title.length} chars, may be truncated: "${title}"`));

  const desc = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1];
  if (!desc) errors.push(at('missing meta description'));
  else if (desc.length > 165) warnings.push(at(`meta description is ${desc.length} chars`));

  /* A canonical asserts that this content lives at this address. A noindex
     page is asserting the opposite, and the 404 in particular is served at
     every unmatched URL, so it must not name one. The rule applies to pages
     that are meant to rank. */
  const isNoindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
  const hasCanonical = /<link[^>]+rel=["']canonical["']/i.test(html);
  if (!isNoindex && !hasCanonical) errors.push(at('missing canonical'));
  if (isNoindex && hasCanonical) errors.push(at('noindex page declares a canonical'));

  /* --- Headings --- */
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  stats.h1 += h1s.length;
  if (h1s.length === 0) errors.push(at('no <h1>'));
  if (h1s.length > 1) errors.push(at(`${h1s.length} <h1> elements (should be exactly 1)`));

  /* --- hreflang: both languages plus x-default, except article pages,
         which exist in English only and are intentionally single-language. --- */
  const isArticle = !/^\/(rw\/)?$|^\/(rw\/)?(video-tracking|primesolar|fuelmanagement|containertracking|fleettracking|ectss|fleet-analytics|api-integrations|drivermonitoring|contactus|why-choose-prime|prime-warranties|prime-careers|tools|terms-of-service|privacy-policy|analyze-your-fleet|blog|404)\//.test(route);
  const alts = [...html.matchAll(/<link[^>]+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["']/gi)].map((m) => m[1]);
  if (!isArticle) {
    for (const expected of ['en-RW', 'rw-RW', 'x-default']) {
      if (!alts.includes(expected)) errors.push(at(`missing hreflang="${expected}"`));
    }
  }

  /* --- Language --- */
  const lang = html.match(/<html[^>]+lang=["']([^"']+)["']/i)?.[1];
  const expectedLang = route.startsWith('/rw/') || route === '/rw/' ? 'rw' : 'en';
  if (lang !== expectedLang) errors.push(at(`html lang is "${lang}", expected "${expectedLang}"`));

  /* --- Images --- */
  for (const tag of html.match(/<img\b[^>]*>/gi) ?? []) {
    stats.images++;
    if (!/\salt=/.test(tag)) errors.push(at(`<img> without alt: ${tag.slice(0, 110)}`));
    if (!/\s(width|height)=/.test(tag)) warnings.push(at('<img> without width/height (CLS risk)'));
  }

  /* --- Internal links resolve ---
     /vras/ is a deliberate dead end: the source page is broken upstream and no
     copy exists to migrate. It is listed here so it does not hide a real
     regression, and it is tracked in docs/handoff.md. */
  const INTENTIONAL_DEAD_ENDS = new Set(['/vras/', '/rw/vras/']);
  for (const [, href] of html.matchAll(/<a\b[^>]*href=["'](\/[^"'#?]*)["']/gi)) {
    stats.links++;
    const target = href.endsWith('/') ? href : `${href}/`;
    if (INTENTIONAL_DEAD_ENDS.has(target)) continue;
    if (!routes.has(target) && !existsSync(join(DIST, href.replace(/^\//, '')))) {
      errors.push(at(`internal link 404: ${href}`));
    }
  }

  /* --- House style: no em dashes in rendered content --- */
  if (bodyText(html).includes('—')) {
    errors.push(at('em dash (U+2014) in rendered content'));
  }

  /* --- Non-descriptive link text --- */
  for (const [, text] of html.matchAll(/<a\b[^>]*>([\s\S]{0,60}?)<\/a>/gi)) {
    const label = text.replace(/<[^>]+>/g, '').trim().toLowerCase();
    if (label === 'click here' || label === 'read more' || label === 'here') {
      warnings.push(at(`non-descriptive link text: "${label}"`));
    }
  }
}

/* --- Sitemap and robots --- */
if (!existsSync(join(DIST, 'sitemap-index.xml'))) errors.push('sitemap-index.xml missing');
if (!existsSync(join(DIST, 'robots.txt'))) errors.push('robots.txt missing');
if (!existsSync(join(DIST, '404.html')) && !existsSync(join(DIST, '404/index.html'))) {
  errors.push('404 page missing');
}

/* --- Report --- */
const dedupe = (list) => [...new Set(list)];
const warn = dedupe(warnings);
const err = dedupe(errors);

console.log(`\nQA sweep: ${stats.pages} pages, ${stats.h1} h1, ${stats.images} images, ${stats.links} internal links.\n`);

if (warn.length) {
  console.log(`Warnings (${warn.length}):`);
  const shown = warn.slice(0, 25);
  for (const w of shown) console.log(`  ! ${w}`);
  if (warn.length > shown.length) console.log(`  ... and ${warn.length - shown.length} more`);
  console.log('');
}

if (err.length) {
  console.error(`FAILED (${err.length} errors):`);
  for (const e of err.slice(0, 40)) console.error(`  x ${e}`);
  if (err.length > 40) console.error(`  ... and ${err.length - 40} more`);
  process.exit(1);
}

console.log('QA passed: no errors.');
