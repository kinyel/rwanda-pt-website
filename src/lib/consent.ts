/**
 * Cookie consent, and the one preference it gates.
 *
 * SCOPE. There is exactly one category on this site: functional preferences.
 * There is no analytics, no advertising, no marketing, no third-party
 * anything. At the time of writing the site loads no external scripts at all,
 * so this module gates precisely one thing: remembering a returning visitor's
 * language so a later visit to the site root can send them to the right
 * locale.
 *
 * CONSENT IS NOT THE SOURCE OF TRUTH FOR LANGUAGE. The locale lives in the
 * URL and is read from the URL on every page. Declining costs a visitor almost
 * nothing: every locale URL still works, the switcher still works, and the
 * site still serves both languages. The only thing lost is the automatic
 * remembering between visits. If declining ever breaks the switcher, this
 * module is being used wrongly.
 *
 * WHY THE DECISION ITSELF IS NOT GATED. A visitor who declines has to be
 * remembered as having declined, or they are asked again on every page. The
 * decision cookie is what makes the refusal stick, so it is written for both
 * answers. It holds a version, a state and a timestamp, and nothing else. No
 * identifier, nothing personal, nothing that could be joined to anything.
 *
 * The version exists so that if the cookie policy ever changes, the banner can
 * re-ask the people whose recorded decision predates the change instead of
 * re-asking everybody.
 *
 * This file is deliberately framework-free and dependency-free. The React
 * island imports it, and the inline script in BaseLayout reimplements the two
 * reads it needs, because that script has to run before first paint and cannot
 * wait for a module.
 */

export const CONSENT_COOKIE = 'primetrack_consent';
export const LANGUAGE_COOKIE = 'primetrack_language';

/** Bump only when the cookie policy materially changes. */
export const CONSENT_VERSION = 1;

/** Twelve months, for the decision and for the preference alike. */
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 365;

export type ConsentState = 'granted' | 'denied';

export interface ConsentRecord {
  version: number;
  state: ConsentState;
  /** Seconds since the epoch, so the value stays short and opaque. */
  at: number;
}

/* Stored as `version.state.timestamp`, e.g. `1.granted.1767225600`.
   Deliberately not JSON: a cookie value cannot contain `;` or `,` without
   encoding, and this form is parsed by a one-line inline script in the
   document head with no dependency on this module. */
function serialise(record: ConsentRecord): string {
  return `${record.version}.${record.state}.${record.at}`;
}

function parse(value: string): ConsentRecord | null {
  const [version, state, at] = value.split('.');
  if (state !== 'granted' && state !== 'denied') return null;
  const v = Number(version);
  if (!Number.isFinite(v)) return null;
  return { version: v, state, at: Number(at) || 0 };
}

/** Reads a cookie. Returns '' when absent, or when cookies are unavailable. */
export function readCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  try {
    const match = document.cookie.match(`(?:^|;\\s*)${name}=([^;]*)`);
    return match ? decodeURIComponent(match[1]) : '';
  } catch {
    return '';
  }
}

/**
 * Writes a first-party cookie.
 *
 * `Secure` is added only over HTTPS. Setting it unconditionally makes the
 * cookie silently fail on a plain-HTTP origin, which would mean the whole
 * mechanism appeared to work in production and did nothing in local
 * development, with no error to explain it.
 */
export function writeCookie(name: string, value: string, maxAge: number): void {
  if (typeof document === 'undefined') return;
  try {
    const secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie =
      `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
  } catch {
    /* Storage blocked. The site keeps working; nothing is remembered. */
  }
}

export function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return;
  try {
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
  } catch {
    /* Nothing to do: an unwritable cookie is also an unreadable one. */
  }
}

/** The recorded decision, or null if there is none this version understands. */
export function getConsent(): ConsentRecord | null {
  const raw = readCookie(CONSENT_COOKIE);
  if (!raw) return null;
  const record = parse(raw);
  if (!record) return null;
  /* A decision recorded against an older policy is treated as no decision, so
     the banner re-asks exactly the people whose answer predates the change. */
  if (record.version !== CONSENT_VERSION) return null;
  return record;
}

export function hasConsented(): boolean {
  return getConsent()?.state === 'granted';
}

/**
 * Records a decision.
 *
 * Withdrawal deletes the language cookie rather than merely ceasing to write
 * it. A preference the visitor has asked us to forget must actually be gone.
 */
export function setConsent(state: ConsentState): void {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    state,
    at: Math.floor(Date.now() / 1000),
  };
  writeCookie(CONSENT_COOKIE, serialise(record), CONSENT_MAX_AGE);
  if (state === 'denied') deleteCookie(LANGUAGE_COOKIE);
}

/** Stores the language preference, but only with consent. */
export function rememberLanguage(locale: string): void {
  if (!hasConsented()) return;
  writeCookie(LANGUAGE_COOKIE, locale, CONSENT_MAX_AGE);
}
