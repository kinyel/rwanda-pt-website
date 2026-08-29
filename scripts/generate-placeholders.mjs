/**
 * Draw a visibly-labelled placeholder plate for every image in
 * src/data/image-specs.json that does not yet have a real file.
 *
 * The plates are deliberately ugly: mid-grey, a diagonal hatch, the target
 * filename and the required pixel dimensions printed across the middle. Nobody
 * can mistake one for finished artwork, which is the whole point.
 *
 * A plate is written at the exact filename and exact dimensions the real image
 * will use, so replacing it is a straight overwrite with no code change.
 * Existing files are never overwritten: drop your photo in and re-run safely.
 *
 *   node scripts/generate-placeholders.mjs
 *   node scripts/generate-placeholders.mjs --force   (redraw plates)
 */
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const IMAGES_DIR = join(root, 'src/assets/images');
const specs = JSON.parse(readFileSync(join(root, 'src/data/image-specs.json'), 'utf8'));
const force = process.argv.includes('--force');

const escapeXml = (s) =>
  s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]);

/** A grey plate carrying its own filename and target size. */
function plateSvg(file, width, height) {
  const label = escapeXml(file.split('/').pop());
  const dims = `${width} x ${height}`;
  // Scale the type to the plate so a 400px thumb and a 2400px hero both read.
  const base = Math.min(width, height);
  const nameSize = Math.max(13, Math.round(base * 0.052));
  const dimSize = Math.max(11, Math.round(base * 0.036));
  const tagSize = Math.max(10, Math.round(base * 0.028));

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <defs>
    <pattern id="h" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="18" height="18" fill="#d8dce2"/>
      <rect width="9" height="18" fill="#d1d6dd"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#h)"/>
  <rect x="8" y="8" width="${width - 16}" height="${height - 16}" fill="none"
        stroke="#8b95a3" stroke-width="3" stroke-dasharray="14 10"/>
  <g font-family="Helvetica, Arial, sans-serif" text-anchor="middle">
    <text x="${width / 2}" y="${height / 2 - dimSize * 1.1}" font-size="${tagSize}"
          fill="#ab3d00" letter-spacing="${tagSize * 0.18}" font-weight="bold">PLACEHOLDER</text>
    <text x="${width / 2}" y="${height / 2 + nameSize * 0.36}" font-size="${nameSize}"
          fill="#1b1f26" font-weight="bold">${label}</text>
    <text x="${width / 2}" y="${height / 2 + nameSize * 0.36 + dimSize * 1.6}" font-size="${dimSize}"
          fill="#5a6472">${dims}</text>
  </g>
</svg>`);
}

let written = 0;
let skipped = 0;

for (const spec of specs.images) {
  if (spec.status !== 'placeholder') continue;

  const target = join(IMAGES_DIR, spec.file);
  if (existsSync(target) && !force) {
    skipped++;
    continue;
  }

  mkdirSync(dirname(target), { recursive: true });

  const pipeline = sharp(plateSvg(spec.file, spec.width, spec.height));
  if (spec.format === 'png') {
    await pipeline.png({ compressionLevel: 9 }).toFile(target);
  } else {
    await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(target);
  }

  console.log(`  drew  ${spec.file}  ${spec.width}x${spec.height}`);
  written++;
}

console.log(`\nPlaceholders: ${written} drawn, ${skipped} left alone (real file already present).`);
if (skipped && !force) console.log('Pass --force to redraw plates over existing placeholder files.');
