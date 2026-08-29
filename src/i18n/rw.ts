import type { DeepPartial } from './index';
import type { en } from './index';

/**
 * KINYARWANDA (rw)
 * ============================================================================
 * STATUS: interface chrome only. All business copy is pending human translation.
 *
 * WHAT IS IN THIS FILE
 * Only short, unambiguous interface words whose standard Kinyarwanda form is
 * well established: navigation labels, button verbs, form field names. Every
 * one of them is still listed in docs/translation-checklist.md and MUST be
 * confirmed by a native speaker before launch. They are provided so the
 * language switcher demonstrably works end to end, not because they are
 * signed off.
 *
 * WHAT IS DELIBERATELY NOT IN THIS FILE
 * Marketing copy, product descriptions, technical explanations, warranty
 * terms, legal text and meta descriptions. Machine-translating any of that
 * would put unverified claims about a real company in front of customers in a
 * language nobody on this build can check. Those keys are absent, so they fall
 * back to English automatically and are reported as pending.
 *
 * HOW TO ADD A TRANSLATION
 * Mirror the key path from the English file and add the string. Anything you
 * add wins over English immediately; anything you leave out keeps falling back.
 * Run `npm run i18n:status` to see what is still outstanding.
 *
 * Kinyarwanda runs roughly 15 to 30 percent longer than English for the same
 * meaning. Layouts are built for that, but check navigation and buttons at the
 * 360px breakpoint after adding copy.
 */
export const rw: DeepPartial<typeof en> = {
  common: {
    nav: {
      // @review — standard site navigation terms, native confirmation needed.
      home: 'Ahabanza',
      products: 'Ibicuruzwa',
      services: 'Serivisi',
      contact: 'Twandikire',
      menu: 'Ibikubiyemo',
      openMenu: 'Fungura menu',
      closeMenu: 'Funga menu',
      skipToContent: 'Simbukira ku bikubiyemo',
    },
    country: {
      // @review
      label: 'Igihugu',
      srLabel: 'Hitamo igihugu',
      current: 'Igihugu ugezemo',
      names: {
        NGR: 'Nigeriya',
        RWA: 'U Rwanda',
        EGY: 'Misiri',
      },
    },
    language: {
      // @review
      label: 'Ururimi',
      srLabel: 'Hitamo ururimi',
      current: 'Ururimi rukoreshwa',
      switchTo: 'Hindura ujye ku {language}',
    },
    cta: {
      // @review
      contactUs: 'Twandikire',
      callUs: 'Duhamagare',
      whatsapp: 'WhatsApp',
      emailUs: 'Twoherereze imeyili',
      learnMore: 'Menya byinshi',
      backHome: 'Subira ku rupapuro rw\'ibanze',
    },
    form: {
      // @review
      name: 'Amazina',
      message: 'Ubutumwa',
      send: 'Ohereza ubutumwa',
      sending: 'Kohereza',
      required: 'Birakenewe',
      optional: 'Si ngombwa',
    },
    common: {
      // @review
      home: 'Ahabanza',
      loading: 'Birimo gupakirwa',
    },
  },
};
