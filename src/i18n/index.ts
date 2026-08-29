import { common } from './en/common';
import { home } from './en/home';
import { products } from './en/products';
import { services } from './en/services';
import { companyPages } from './en/company';
import { industries } from './en/industries';
import { solutions } from './en/solutions';
import { seo } from './en/seo';
import { images } from './en/images';
import { rw as rwOverrides } from './rw';
import { DEFAULT_LOCALE, type Locale } from './config';

export * from './config';
export * from './paths';

/**
 * The complete English dictionary. This is the shape of record: every key that
 * exists on the site exists here, and its type flows through to every consumer.
 */
export const en = { common, home, products, services, companyPages, industries, solutions, seo, images } as const;

export type Dictionary = typeof en;

/**
 * A partial mirror of `Dictionary`, to any depth. This is what a translation
 * file may supply: some keys now, the rest later.
 *
 * String literals are widened back to `string`. The English dictionaries are
 * declared `as const`, which gives every value a literal type; without this
 * widening a translation would have to equal the English text to typecheck,
 * which is precisely backwards.
 */
export type DeepPartial<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer U)[]
      ? readonly DeepPartial<U>[]
      : T extends object
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : T;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Overlay a partial translation onto English.
 *
 * Anything the translation supplies wins; anything it omits falls back to the
 * English string. That is what lets Kinyarwanda ship incrementally without any
 * page rendering a blank or a raw key. Arrays are replaced wholesale rather
 * than merged element-by-element, because a partially translated list reads
 * worse than an untranslated one.
 */
function overlay<T>(base: T, patch: unknown): T {
  if (patch === undefined) return base;
  if (!isPlainObject(base) || !isPlainObject(patch)) return patch as T;

  const result: Record<string, unknown> = { ...base };
  for (const key of Object.keys(patch)) {
    if (key in base) {
      result[key] = overlay((base as Record<string, unknown>)[key], patch[key]);
    }
  }
  return result as T;
}

const dictionaries: Record<Locale, Dictionary> = {
  en,
  rw: overlay(en, rwOverrides),
};

/**
 * The translation accessor used by every component.
 *
 *   const t = useTranslations(locale);
 *   t.home.hero.title
 *
 * Always returns a fully populated dictionary, so a component never has to
 * handle a missing string.
 */
export function useTranslations(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

/**
 * Fill `{placeholders}` in a translated string.
 *
 *   interpolate(t.common.cta.readAbout, { topic: 'fuel monitoring' })
 *
 * Kept deliberately simple: no plurals, no dates, no number formatting, because
 * the site needs none of those. Anything unmatched is left as-is so a missing
 * value is visible in review rather than silently blank.
 */
export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
