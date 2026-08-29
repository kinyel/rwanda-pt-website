import { DEFAULT_LOCALE, LOCALES, isLocale, localeMeta, type Locale } from './config';

/**
 * URL helpers shared by every component that emits a link.
 *
 * The invariant these enforce: a path is stored ONCE, unprefixed and
 * locale-free (`/video-tracking/`), and is turned into a real URL at render
 * time. Nothing in the codebase ever hardcodes `/rw/...`.
 */

/** Normalise to a leading and trailing slash, matching `trailingSlash: 'always'`. */
export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const withLeading = path.startsWith('/') ? path : `/${path}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

/**
 * Turn a locale-free path into the URL for a given locale.
 *   localizePath('/video-tracking/', 'en') -> '/video-tracking/'
 *   localizePath('/video-tracking/', 'rw') -> '/rw/video-tracking/'
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = normalizePath(path);
  const { prefix } = localeMeta[locale];
  if (!prefix) return clean;
  return clean === '/' ? `/${prefix}/` : `/${prefix}${clean}`;
}

/**
 * Strip any locale prefix back off a URL, giving the canonical locale-free
 * path. This is what makes "switch language, stay on the same page" work:
 * the switcher takes the current URL, strips it, and re-localizes it.
 */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const clean = normalizePath(pathname);
  const segments = clean.split('/').filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first) && first !== DEFAULT_LOCALE) {
    const rest = segments.slice(1).join('/');
    return { locale: first, path: normalizePath(rest ? `/${rest}` : '/') };
  }
  return { locale: DEFAULT_LOCALE, path: clean };
}

/** Every locale variant of a path, for hreflang alternates. */
export function getAlternates(path: string, site: string | URL | undefined) {
  const base = site ? new URL(site).origin : '';
  return LOCALES.map((locale) => ({
    locale,
    hreflang: localeMeta[locale].hreflang,
    href: `${base}${localizePath(path, locale)}`,
  }));
}

/** The opposite locale. With exactly two locales this is the switcher target. */
export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'rw' : 'en';
}
