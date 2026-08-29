/**
 * Pre-build content guard.
 *
 * These are the rules that are easy to break months from now by editing one
 * string, and expensive to notice: a Nigeria phone number pasted into the
 * Rwanda site, the wrong warranty term, an em dash, a machine-sounding phrase.
 * The build fails rather than shipping any of them.
 *
 * Scope: user-facing copy only (src/i18n/**, src/content/**). Source-code
 * comments are not site content and are not scanned.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const errors = [];
const warnings = [];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (/\.(ts|tsx|md|json)$/.test(name)) out.push(full);
  }
  return out;
}

const files = [...walk(join(root, 'src/i18n')), ...walk(join(root, 'src/content'))];

/**
 * Strip source comments before scanning.
 *
 * Comments are not site content, and documenting a rule often means naming the
 * thing the rule forbids. Blanking them (rather than deleting) preserves line
 * numbers so reported positions stay accurate. Markdown is returned untouched,
 * because `//` and `/* *\/` carry no meaning there.
 */
function stripComments(text, file) {
  if (file.endsWith('.md')) return text;
  return text
    .replace(/\/\*[\s\S]*?\*\//g, (block) => block.replace(/[^\n]/g, ' '))
    .replace(/(^|[^:"'`\\])\/\/[^\n]*/g, (match, prefix) => prefix + ' '.repeat(match.length - prefix.length));
}

/** file -> comment-free text, read once. */
const sources = new Map(files.map((file) => [file, stripComments(readFileSync(file, 'utf8'), file)]));

/* --- Rule 1: no em dashes anywhere in site content. -------------------- */
for (const [file, text] of sources) {
  text.split('\n').forEach((line, i) => {
    if (line.includes('—')) {
      errors.push(`${relative(root, file)}:${i + 1}  em dash (U+2014) in content: ${line.trim().slice(0, 90)}`);
    }
  });
}

/* --- Rule 2: Rwanda's warranty is up to 5 years, never Nigeria's 3. ---- */
const warrantyWrong = /\b3[- ]year warranty|\bthree[- ]year warranty/i;
for (const [file, text] of sources) {
  if (warrantyWrong.test(text)) {
    errors.push(`${relative(root, file)}  states a 3-year warranty. Rwanda publishes up to 5 years.`);
  }
}

/* --- Rule 3: no Nigeria contact details on the Rwanda site. -----------
   The Rwanda site legitimately LINKS to primetracknigeria.com, so the domain
   itself is allowed; the Nigeria contact channels are not. */
const nigeriaContact = [
  { pattern: /admin@primetracknigeria\.net/i, what: 'Nigeria email address' },
  { pattern: /\+?234[\s\d-]{7,}/, what: 'Nigeria phone number' },
  { pattern: /\bLagos\b/i, what: 'Nigeria office location' },
  { pattern: /\bIkeja\b|L'?Monarch|Opebi/i, what: 'Nigeria street address' },
  { pattern: /\bNCC[- ]licen[cs]ed\b/i, what: "Nigeria's regulator (Rwanda is RURA)" },
];
for (const [file, text] of sources) {
  for (const { pattern, what } of nigeriaContact) {
    if (pattern.test(text)) errors.push(`${relative(root, file)}  contains ${what}.`);
  }
}

/* --- Rule 4: phrases that read as machine-written. ---------------------
   Warnings, not errors: an article migrated verbatim from the old site may
   legitimately contain one, and rewriting legacy copy is a judgement call. */
const tells = [
  /in today'?s (fast[- ]paced|digital|modern) world/i,
  /whether you'?re .{3,40} or .{3,40},/i,
  /it'?s not just .{3,30}, it'?s/i,
  /unlock the (power|potential) of/i,
  /take your .{3,30} to the next level/i,
  /revolutioni[sz]e your/i,
  /in conclusion,/i,
  /delve into/i,
];
for (const [file, text] of sources) {
  text.split('\n').forEach((line, i) => {
    for (const tell of tells) {
      if (tell.test(line)) {
        warnings.push(`${relative(root, file)}:${i + 1}  machine-sounding phrase: ${line.trim().slice(0, 90)}`);
      }
    }
  });
}

/* --- Report ------------------------------------------------------------ */
if (warnings.length) {
  console.log(`\nContent warnings (${warnings.length}):`);
  for (const warning of warnings) console.log(`  ! ${warning}`);
}

if (errors.length) {
  console.error(`\nContent check FAILED (${errors.length}):`);
  for (const error of errors) console.error(`  x ${error}`);
  process.exit(1);
}

console.log(`Content check passed. ${files.length} files scanned, ${warnings.length} warning(s).`);
