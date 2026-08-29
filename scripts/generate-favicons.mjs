/**
 * Builds every favicon and app icon from the one source logo.
 *
 *   node scripts/generate-favicons.mjs        (npm run images:favicons)
 *
 * WHY A SCRIPT AND NOT A COMMITTED SET OF PNGs. There is exactly one piece of
 * brand art on this site, `src/assets/images/brand/primetrack-logo.png`, and
 * every icon below is derived from it. If the client sends a new logo, this
 * regenerates the whole set from it in one command rather than leaving five
 * stale PNGs in `public/` that nobody remembers to redraw.
 *
 * THE WHITE PLATE is not decoration. The source logo is a BLACK wordmark on a
 * transparent ground, so dropped straight into a browser tab it disappears
 * entirely against a dark tab strip — which is what most people are running.
 * The plate is the same fix the site already uses for the same reason: the
 * footer and the dark-theme header both sit the mark on a white plate. Doing it
 * here keeps the favicon consistent with how the brand is presented everywhere
 * else, and makes it legible on light and dark chrome alike.
 *
 * A NOTE ON LEGIBILITY. The logo is a landscape lockup — a broken ring with the
 * wordmark running straight through it — so at 16px the words are around two
 * pixels tall and read as a bar rather than as "PrimeTRACK". That is inherent
 * to the artwork, not to this script: no favicon of this logo can be more
 * legible than the logo is at that size. What survives is the silhouette, the
 * orange ring and the dark bar, which is enough to pick the tab out. If a
 * sharper mark is wanted, the fix is a device-only variant of the logo with no
 * wordmark, and this script would then use that as its source.
 */
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(root, 'src/assets/images/brand/primetrack-logo.png');
const OUT = join(root, 'public');

/** The plate. White, because the wordmark is black. */
const PLATE = '#ffffff';

/**
 * Each icon, with the padding and the corner radius it wants.
 *
 * `pad` is the share of the canvas left as margin around the mark, and `radius`
 * is the corner rounding as a share of the canvas.
 *
 *   Tab favicons     rounded, tight padding. Every pixel counts at 16px, and a
 *                    rounded plate sits better in a tab strip than a hard
 *                    white square.
 *   apple-touch      square and unrounded: iOS applies its own mask and rounds
 *                    a second time if the art is already rounded. It also
 *                    composites transparency onto black, so this one must be
 *                    fully opaque.
 *   Android / PWA    rounded, and padded further: launchers crop icons to
 *                    whatever shape the device uses, so the mark is kept well
 *                    inside the safe area.
 */
const ICONS = [
  { file: 'favicon-16.png', size: 16, pad: 0.06, radius: 0.16 },
  { file: 'favicon-32.png', size: 32, pad: 0.06, radius: 0.16 },
  { file: 'favicon-48.png', size: 48, pad: 0.07, radius: 0.16 },
  { file: 'apple-touch-icon.png', size: 180, pad: 0.14, radius: 0 },
  { file: 'icon-192.png', size: 192, pad: 0.12, radius: 0.2 },
];

/** The sizes packed into favicon.ico. */
const ICO_SIZES = [16, 32, 48];

/** The plate as an SVG, so the rounding is drawn rather than masked. */
const plate = (size, radius) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">` +
      `<rect width="${size}" height="${size}" rx="${size * radius}" ry="${size * radius}" fill="${PLATE}"/>` +
      `</svg>`,
  );

/**
 * Packs PNGs into a .ico.
 *
 * `favicon.ico` is still worth shipping in 2026, not for browsers — they all
 * take the PNG links in the document — but because crawlers, feed readers, link
 * unfurlers and a long tail of tooling request `/favicon.ico` blind and log a
 * 404 when it is not there.
 *
 * The ICO container has allowed PNG-encoded entries since Vista, so this is a
 * header and a directory around the PNGs already generated above rather than a
 * re-encode into the old BMP form.
 */
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = icon
  header.writeUInt16LE(entries.length, 4);

  const directory = Buffer.alloc(16 * entries.length);
  let offset = header.length + directory.length;

  entries.forEach(({ size, data }, i) => {
    const at = i * 16;
    /* 0 means 256 in this field; none of our sizes reach it, but the encoding
       is the reason the field is a single byte. */
    directory.writeUInt8(size >= 256 ? 0 : size, at);
    directory.writeUInt8(size >= 256 ? 0 : size, at + 1);
    directory.writeUInt8(0, at + 2); // palette size: 0 for truecolour
    directory.writeUInt8(0, at + 3); // reserved
    directory.writeUInt16LE(1, at + 4); // colour planes
    directory.writeUInt16LE(32, at + 6); // bits per pixel
    directory.writeUInt32LE(data.length, at + 8);
    directory.writeUInt32LE(offset, at + 12);
    offset += data.length;
  });

  return Buffer.concat([header, directory, ...entries.map((e) => e.data)]);
}

async function main() {
  await mkdir(OUT, { recursive: true });

  /* Trim first. The source has transparent margin on every side, and fitting
     the untrimmed square would shrink the mark inside its own padding twice
     over. Trimmed, the art is 2171x1788 — a landscape lockup, which is why the
     fit below is `contain` rather than `cover`: cropping it to a square would
     cut the ends off the wordmark. */
  const mark = await sharp(SOURCE).trim({ threshold: 1 }).toBuffer();

  /** Kept so the .ico can reuse the PNGs rather than re-render them. */
  const written = new Map();

  for (const { file, size, pad, radius } of ICONS) {
    const inner = Math.round(size * (1 - pad * 2));

    const resized = await sharp(mark)
      .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    const png = await sharp(plate(size, radius))
      .composite([{ input: resized, gravity: 'centre' }])
      /* Flattened onto the plate: no icon here may ship with transparency, or
         iOS will composite it onto black and undo the whole point of it. */
      .flatten({ background: PLATE })
      .png({ compressionLevel: 9 })
      .toBuffer();

    await writeFile(join(OUT, file), png);
    written.set(size, png);
    console.log(`  ${file.padEnd(22)} ${size}x${size}  ${(png.length / 1024).toFixed(1)} kB`);
  }

  const ico = buildIco(ICO_SIZES.map((size) => ({ size, data: written.get(size) })));
  await writeFile(join(OUT, 'favicon.ico'), ico);
  console.log(`  ${'favicon.ico'.padEnd(22)} ${ICO_SIZES.join('/')}    ${(ico.length / 1024).toFixed(1)} kB`);

  console.log('\nFavicons written to public/. Referenced from src/layouts/BaseLayout.astro.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
