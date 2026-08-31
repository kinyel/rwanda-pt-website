/**
 * Draw the Open Graph share card from the logo.
 *
 * This is the image every platform shows when someone pastes a primetrack.rw
 * link into WhatsApp, LinkedIn, Slack, X or iMessage. It is the only image on
 * the site that is seen more often OFF the site than on it.
 *
 *   node scripts/generate-og.mjs
 *
 * WHY WHITE. The logo is orange and black on transparency. On the brand's
 * ink-950 the wordmark and the inner arc are black on near-black and disappear
 * completely, so a dark card would need a knockout (white) version of the logo,
 * which does not exist in this repo. White is also what every messaging app
 * renders the card against anyway.
 *
 * WHY THE LOGO IS ONLY ~76% OF THE HEIGHT. WhatsApp and Slack scale this down
 * to roughly a 300px-wide thumbnail, and several platforms crop a few percent
 * off the edges. The margin keeps the mark whole and legible at that size.
 *
 * Re-run this after changing the logo. It overwrites the card.
 */
import { statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const LOGO = join(root, 'src/assets/images/brand/primetrack-logo.png');
const OUT = join(root, 'src/assets/images/og/og-primetrack-rwanda.jpg');

/* 1200x630 is the Open Graph standard (1.91:1). Facebook, LinkedIn and X all
   size against it, and anything else gets letterboxed or cropped. */
const WIDTH = 1200;
const HEIGHT = 630;
const LOGO_SIZE = Math.round(HEIGHT * 0.76);

const mark = await sharp(LOGO)
  .resize(LOGO_SIZE, LOGO_SIZE, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .toBuffer();

await sharp({
  create: { width: WIDTH, height: HEIGHT, channels: 3, background: '#ffffff' },
})
  .composite([{ input: mark, gravity: 'center' }])
  /* 4:4:4 rather than the default chroma subsampling: the logo's orange sits
     directly against black edges, and subsampled chroma smears that boundary
     badly at thumbnail size. */
  .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: '4:4:4' })
  .toFile(OUT);

const { size } = statSync(OUT);
const meta = await sharp(OUT).metadata();
console.log(`Wrote og-primetrack-rwanda.jpg  ${meta.width}x${meta.height}  ${Math.round(size / 1024)} KB`);
