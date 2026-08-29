/**
 * Locale configuration for PrimeTrack Rwanda.
 *
 * English is the default and stays unprefixed at the site root, so every URL
 * that ranks today keeps its exact path. Kinyarwanda lives under `/rw/`.
 * `rw` is the ISO 639-1 code for Kinyarwanda, which also makes it the correct
 * value for the `lang` attribute and for hreflang.
 */

export const LOCALES = ['en', 'rw'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const localeMeta: Record<
  Locale,
  {
    /** `lang` attribute and hreflang value. */
    code: string;
    /** Regional hreflang, used in the sitemap and alternates. */
    hreflang: string;
    /** Short label for the switcher. Never abbreviated past recognition. */
    short: string;
    /** Full name, written in that language (an endonym). */
    name: string;
    /** English name, for screen-reader context on the opposite option. */
    englishName: string;
    /** URL path segment. Empty string means "lives at the root". */
    prefix: string;
  }
> = {
  en: {
    code: 'en',
    hreflang: 'en-RW',
    short: 'EN',
    name: 'English',
    englishName: 'English',
    prefix: '',
  },
  rw: {
    code: 'rw',
    hreflang: 'rw-RW',
    short: 'KIN',
    name: 'Kinyarwanda',
    englishName: 'Kinyarwanda',
    prefix: 'rw',
  },
};

/** Cookie/localStorage key used to remember the visitor's language choice. */
export const LOCALE_STORAGE_KEY = 'primetrack-locale';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
