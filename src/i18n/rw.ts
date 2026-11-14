import type { Translation } from './index';
import { common } from './rw/common';
import { home } from './rw/home';
import { products } from './rw/products';
import { services } from './rw/services';
import { companyPages } from './rw/company';
import { industries } from './rw/industries';
import { solutions } from './rw/solutions';
import { seo } from './rw/seo';
import { images } from './rw/images';

/**
 * KINYARWANDA (rw)
 * ============================================================================
 * The complete Kinyarwanda dictionary, one file per English dictionary in
 * src/i18n/rw/, each mirroring its English counterpart in src/i18n/en/ key for
 * key.
 *
 * WHY IT IS COMPLETE AND TYPED AS COMPLETE. This file used to carry only the
 * navigation and button words, and every other key fell back to English
 * through the overlay in ./index. That is why switching to Kinyarwanda
 * translated the menu and nothing else: the pages were already rendered in
 * Kinyarwanda, from a dictionary that was 94% English.
 *
 * It is now typed as `Translation`, the full shape of the English dictionary
 * with every key REQUIRED. A string added to the English site and not to
 * Kinyarwanda is a type error at build time, so the menu-only situation cannot
 * come back quietly. The overlay in ./index stays as a last line of defence.
 *
 * WHAT STAYS IN ENGLISH, deliberately: brand and product names (PrimeTrack,
 * PrimeCARE, PrimeSOLAR, STAR Trackers, Video Trackers, eCT Systems...), and
 * technical terms used as-is in Rwanda (GPS, API, ADAS, OBD, IoT, SIM, ERP).
 *
 * REVIEW. These translations should be confirmed by a native speaker before
 * they are relied on, the legal pages above all; until then the English
 * version of a legal page is the authoritative one. `npm run i18n:status`
 * writes the full list to docs/translation-checklist.md.
 */
export const rw: Translation = {
  common,
  home,
  products,
  services,
  companyPages,
  industries,
  solutions,
  seo,
  images,
};
