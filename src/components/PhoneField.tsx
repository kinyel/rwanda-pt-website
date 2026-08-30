import { useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  countryFor,
  countryForDigits,
  flagFor,
  nationalMax,
  orderedCountries,
  PRIORITY_COUNT,
  DEFAULT_ISO,
  E164_MAX,
  type Country,
} from '../data/countries';

/**
 * International phone field: a country selector welded to a number input.
 *
 * WHAT IT SUBMITS. One hidden input, `name`, carrying E.164: a plus, the dial
 * code, then the national digits, no spaces or dashes. That is the only format
 * that survives being pasted into a dialler, a CRM or a WhatsApp link, and it
 * is what the visible field is quietly assembling the whole time it is typed
 * in. The pretty spacing on screen is presentation and never leaves the page.
 *
 * WHY NOT A `<select>`. A native select cannot show a flag beside a dial code
 * and a name on one row on every platform, and on Android it renders as a
 * full-screen list with no search, which is the worst experience of the two
 * hundred entries here. This is the ARIA combobox pattern instead: a button
 * that owns `aria-expanded`, a real listbox, arrow keys, type-ahead search,
 * Escape to close, and focus returned to the trigger on close.
 *
 * VALIDATION is length only, and only where `countries.ts` is certain of the
 * length. It will not tell someone their real number is wrong because a range
 * was guessed: an unknown country falls back to the E.164 limits.
 */
interface Labels {
  label: string;
  optional: string;
  countryLabel: string;
  searchPlaceholder: string;
  noMatches: string;
  placeholder: string;
  invalid: string;
}

interface Props {
  /** Submitted field name. The value is always E.164. */
  name: string;
  labels: Labels;
  id: string;
  invalid?: boolean;
  describedBy?: string;
  onValidityChange?: (state: { empty: boolean; valid: boolean; e164: string }) => void;
}

/** Digits only. Everything a person might type as separators is dropped. */
const digitsOf = (s: string) => s.replace(/\D+/g, '');

/**
 * Readability only, and it never leaves the page.
 *
 * Threes until four or fewer digits remain, then whatever is left in one
 * group. A flat every-three split stranded the last digit of a ten-digit
 * number on its own: "801 234 567 8". This gives "801 234 5678", and still
 * gives "788 123 456" for a nine-digit Rwandan number.
 */
function pretty(digits: string): string {
  const groups: string[] = [];
  let i = 0;
  while (digits.length - i > 4) {
    groups.push(digits.slice(i, i + 3));
    i += 3;
  }
  if (i < digits.length) groups.push(digits.slice(i));
  return groups.join(' ');
}

export function e164(country: Country, national: string): string {
  const d = digitsOf(national);
  return d ? `+${country.dial}${d}` : '';
}

export function phoneIsValid(country: Country, national: string): boolean {
  const d = digitsOf(national);
  if (!d) return false;
  const [min, max] = country.len ?? [4, E164_MAX - country.dial.length];
  return d.length >= min && d.length <= max;
}

export default function PhoneField({ name, labels, id, invalid, describedBy, onValidityChange }: Props) {
  const listId = useId();
  const [iso, setIso] = useState(DEFAULT_ISO);
  const [national, setNational] = useState('');
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const country = countryFor(iso);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return orderedCountries;
    const bare = q.replace(/^\+/, '');
    return orderedCountries.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dial.startsWith(bare) || c.iso.toLowerCase() === q,
    );
  }, [query]);

  /* The parent needs to know whether this field is empty, because it is
     optional when empty and must be a real number when it is not. */
  useEffect(() => {
    onValidityChange?.({
      empty: digitsOf(national).length === 0,
      valid: phoneIsValid(country, national),
      e164: e164(country, national),
    });
  }, [national, iso]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Close on an outside click or on Escape, and hand focus back to the
     trigger so a keyboard user is never dropped at the top of the document. */
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      searchRef.current?.focus();
      setActive(Math.max(0, results.findIndex((c) => c.iso === iso)));
    } else {
      setQuery('');
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (open) optionRefs.current[active]?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  function choose(c: Country) {
    setIso(c.iso);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function onSearchKey(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(results.length - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const c = results[active];
      if (c) choose(c);
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  }

  /* Pasting a full international number re-points the country selector at it
     instead of stuffing the dial code into the national part. */
  function onNationalChange(raw: string) {
    const trimmed = raw.trim();
    if (trimmed.startsWith('+')) {
      const d = digitsOf(trimmed);
      const match = countryForDigits(d);
      if (match) {
        setIso(match.iso);
        setNational(d.slice(match.dial.length).slice(0, nationalMax(match)));
        return;
      }
    }
    setNational(digitsOf(raw).slice(0, E164_MAX - country.dial.length));
  }

  return (
    <div className="field" ref={wrapRef}>
      <div className={`phone-shell${invalid ? ' is-invalid' : ''}`}>
        <button
          ref={triggerRef}
          type="button"
          className="phone-country"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-label={`${labels.countryLabel}: ${country.name} +${country.dial}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="phone-flag" aria-hidden="true">{flagFor(country.iso)}</span>
          <span className="phone-dial">+{country.dial}</span>
          <svg className="phone-caret" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span className="phone-divider" aria-hidden="true" />

        {/* The label floats inside this wrapper rather than inside the shell,
            so it is positioned against the number entry alone and does not have
            to know how wide the country button is. A +1 and a +250 give that
            button two different widths. */}
        <span className="phone-entry">
          <input
            id={id}
            data-field={name}
            className="phone-input"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder=" "
            value={pretty(national)}
            /* Deliberately no maxLength. It caps the DISPLAYED string, so
               pasting "+234 801 234 5678" into a field sized for ten national
               digits lost the end of the number before onChange ever saw it.
               The cap belongs on the digits, and it is applied there. */
            aria-invalid={invalid || undefined}
            aria-describedby={describedBy}
            onChange={(e) => onNationalChange(e.target.value)}
          />
          <label htmlFor={id} className="phone-label">
            {labels.label} <span className="phone-optional">({labels.optional})</span>
          </label>
          <span className="phone-hint" aria-hidden="true">{labels.placeholder}</span>
        </span>
      </div>

      {/* The one value that is actually submitted. */}
      <input type="hidden" name={name} value={e164(country, national)} />

      {open && (
        <div className="phone-pop">
          <input
            ref={searchRef}
            type="text"
            className="phone-search"
            placeholder={labels.searchPlaceholder}
            aria-label={labels.searchPlaceholder}
            aria-controls={listId}
            aria-activedescendant={results[active] ? `${listId}-${results[active].iso}` : undefined}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onSearchKey}
          />

          {results.length === 0 ? (
            <p className="phone-empty">{labels.noMatches}</p>
          ) : (
            <ul className="phone-list" id={listId} role="listbox" aria-label={labels.countryLabel}>
              {results.map((c, i) => (
                <li
                  key={c.iso}
                  id={`${listId}-${c.iso}`}
                  ref={(el) => {
                    optionRefs.current[i] = el;
                  }}
                  role="option"
                  aria-selected={c.iso === iso}
                  className={
                    'phone-option' +
                    (i === active ? ' is-active' : '') +
                    (c.iso === iso ? ' is-chosen' : '') +
                    /* Rules under the last of the countries this form actually
                       receives numbers from, but only in the unfiltered list. */
                    (!query && i === PRIORITY_COUNT - 1 ? ' is-last-priority' : '')
                  }
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(c)}
                >
                  <span className="phone-flag" aria-hidden="true">{flagFor(c.iso)}</span>
                  <span className="phone-option-name">{c.name}</span>
                  <span className="phone-option-dial">+{c.dial}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
