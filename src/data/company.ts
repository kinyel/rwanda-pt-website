/**
 * Verified PrimeTrack Rwanda business facts.
 *
 * SOURCE RULE: every value in this file was read off the live primetrack.rw
 * site during the Phase 1 audit. Nothing here is inferred, rounded, borrowed
 * from PrimeTrack Nigeria, or invented. If a fact is not in this file it does
 * not appear on the site.
 *
 * These are deliberately NOT translated — a phone number, an address and a
 * regulator's name read the same in English and Kinyarwanda.
 */

export const company = {
  legalName: 'PrimeTrack Telematics Limited',
  shortName: 'PrimeTrack',
  country: 'Rwanda',

  /* Contact — audit source: /contactus/ and the site-wide footer. ---------- */
  phone: {
    /** E.164, for tel: and wa.me links. */
    e164: '+250793017263',
    /** Human-readable, for display. */
    display: '+250 793 017 263',
  },
  email: 'admin@primetrack.rw',
  /** Careers applications go to the same address (audit: /prime-careers/). */
  careersEmail: 'admin@primetrack.rw',

  whatsappUrl: 'https://api.whatsapp.com/send?phone=250793017263',

  /** Device manuals and platform documentation, on their own subdomain. */
  manualsUrl: 'https://manuals.primetrack.rw',

  address: {
    line1: '6th Floor, Tower A',
    line2: 'Yyussa City Centre',
    city: 'Kigali',
    country: 'Republic of Rwanda',
    /** Single-line form for schema.org and meta descriptions. */
    full: '6th Floor, Tower A, Yyussa City Centre, Kigali, Republic of Rwanda',
  },

  /* Social profiles — audit source: footer social icons. ------------------
     The LinkedIn URL genuinely points at the group's Nigeria-registered
     company page; that is what the Rwanda site links to today, so it is
     preserved rather than "corrected" to a page that may not exist. */
  socials: [
    { key: 'instagram', url: 'https://www.instagram.com/primetracktelematics/' },
    { key: 'twitter', url: 'https://twitter.com/PrimeTrack' },
    { key: 'facebook', url: 'https://facebook.com/primetrackltd' },
    { key: 'linkedin', url: 'https://www.linkedin.com/company/primetrack-telematics-nigeria-ltd./' },
  ],

  /* Headline figures — audit source: the homepage Elementor counters
     (data-to-value attributes). These are PrimeTrack's own stated claims. */
  stats: [
    { key: 'trackers', value: 5000, suffix: '+' },
    { key: 'years', value: 15, suffix: '+' },
    { key: 'countries', value: 5, suffix: '+' },
    { key: 'support', value: 24, suffix: 'hr' },
  ],

  /** Rwanda's telecoms/transport regulator. Audit source: /why-choose-prime/
   *  "fully licensed in Rwanda by RURA". Nigeria's equivalent claim is NCC;
   *  the two must never be swapped. */
  regulator: 'RURA',

  /** Audit source: /prime-warranties/ — "a comprehensive warranty to the
   *  original purchaser of up to 5 years". Rwanda's term differs from
   *  Nigeria's 3 years. A build-time check enforces this string site-wide. */
  warrantyYears: 5,

  /** The 24/7 support brand. Audit source: site-wide footer. */
  supportBrand: 'PrimeCARE',
} as const;

/* --- Country switcher -----------------------------------------------------
   Audit source: the homepage "Home" dropdown. Preserved exactly, including
   the fact that EGY points at the Nigeria domain rather than a Rwanda page.
   The orphaned local /egy/ page is not linked from the switcher, matching
   current behaviour. */
export const countries = [
  { code: 'NGR', locale: 'en-NG', url: 'https://www.primetracknigeria.com', external: true },
  { code: 'RWA', locale: 'en-RW', url: '/', external: false },
  { code: 'EGY', locale: 'en-EG', url: 'https://primetracknigeria.com/egy', external: true },
] as const;

export type CountryCode = (typeof countries)[number]['code'];
export const ACTIVE_COUNTRY: CountryCode = 'RWA';

/* --- Clients --------------------------------------------------------------
   Audit source: the homepage "Some Brands We Serve" carousel. Unlike the
   Nigeria site (where the equivalent section held no real names and was
   therefore dropped), the Rwanda site names actual organisations, so they are
   preserved. Logo files are downloaded from the live site into
   src/assets/images/clients/ — see that folder's README for replacements. */
export const clients = [
  'SAVVY',
  'Soft Packaging',
  'UNHCR',
  'Western Seed',
  'African Enterprise',
  'Afriglobal Group',
  'APM Terminals',
  'Cadbury',
  'ECOGAS',
  'I-Posita',
] as const;

/* --- P.R.I.M.E. core values ----------------------------------------------
   Audit source: homepage "Our Core Values - P.R.I.M.E." and /why-choose-prime/
   advantage 7. The initial letter of each value spells the company name. */
export const primeValues = ['performance', 'reliability', 'innovation', 'multifunction', 'efficiency'] as const;

/* --- Formspree ------------------------------------------------------------
   The live form ID, with PUBLIC_FORMSPREE_ID able to override it.

   WHY THIS IS COMMITTED RATHER THAN ENV-ONLY. It is not a secret and cannot be
   one: the ID is the POST target of the contact form and the footer signup, so
   it ships inside the HTML and JS of every deployed page and is readable with
   View Source. Keeping it out of the repo bought no security at all, and it
   cost the live site its contact form, because `.env` is gitignored (rightly)
   and the deploy therefore built with the ID undefined. The form was then
   replaced at BUILD time by the unconfigured notice, on every page, silently,
   with a green build. Config whose absence breaks production and whose
   presence protects nothing belongs in the repo.

   To point a deployment at a different form, set PUBLIC_FORMSPREE_ID in that
   environment; it wins over this default. Genuine secrets must never be
   handled this way, and none exist in this project. */
const FORMSPREE_ID_DEFAULT = 'xaeynrge';

export const FORMSPREE_ID: string =
  import.meta.env.PUBLIC_FORMSPREE_ID || FORMSPREE_ID_DEFAULT;
export const formspreeEndpoint = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : '';
