import { useMemo, useState } from 'react';

/**
 * Interactive version of the fleet-challenge block, used on
 * /analyze-your-fleet/.
 *
 * The live site renders these as checkboxes that do nothing. Here, selecting
 * challenges builds a running summary and pre-fills a message on the contact
 * page, so the interaction produces something.
 *
 * Copy arrives pre-translated from Astro; this component holds no strings of
 * its own beyond punctuation.
 */
export interface ChallengeItem {
  key: string;
  label: string;
  body: string;
  href: string;
  /** Name of the page it routes to, for the summary. */
  target: string;
}

interface Props {
  items: ChallengeItem[];
  selectedTitle: string;
  emptyState: string;
  ctaLabel: string;
  ctaHref: string;
  seeAnswer: string;
}

export default function ChallengeSelector({ items, selectedTitle, emptyState, ctaLabel, ctaHref, seeAnswer }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (key: string) =>
    setSelected((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  const chosen = useMemo(() => items.filter((i) => selected.includes(i.key)), [items, selected]);

  /* Carry the selection to the contact form as a readable sentence. */
  const ctaWithSelection = useMemo(() => {
    if (chosen.length === 0) return ctaHref;
    const list = chosen.map((c) => c.label).join(', ');
    return `${ctaHref}?topic=${encodeURIComponent(list)}`;
  }, [chosen, ctaHref]);

  return (
    <div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const isSelected = selected.includes(item.key);
          return (
            <li key={item.key}>
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => toggle(item.key)}
                className={`flex h-full w-full flex-col rounded-[--radius-card] border p-5 text-left
                            transition-[border-color,background-color,box-shadow,transform]
                            duration-[--duration-base] ease-[--ease-prime] motion-safe:hover:-translate-y-0.5
                            ${
                              isSelected
                                ? 'border-prime-500 bg-prime-50 shadow-[--shadow-card]'
                                : 'border-ink-100 bg-white hover:border-ink-200 hover:shadow-[--shadow-card]'
                            }`}
              >
                <span
                  className={`mb-3 inline-flex h-6 w-6 items-center justify-center rounded-md border transition-colors
                              duration-[--duration-fast]
                              ${isSelected ? 'border-prime-500 bg-prime-500 text-white' : 'border-ink-300 bg-white text-transparent'}`}
                  aria-hidden="true"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
                    <path d="m2.5 7.2 3 3L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-h4 text-ink-950">{item.label}</span>
                <span className="mt-2 text-[0.875rem] leading-snug text-ink-600">{item.body}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 rounded-[--radius-panel] border border-ink-100 bg-ink-50 p-6 sm:p-8">
        <h2 className="text-h3">{selectedTitle}</h2>

        {chosen.length === 0 ? (
          <p className="mt-3 measure text-ink-600">{emptyState}</p>
        ) : (
          <>
            <ul className="mt-5 flex flex-col divide-y divide-ink-200">
              {chosen.map((item) => (
                <li key={item.key} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3">
                  <span className="font-semibold text-ink-900">{item.label}</span>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[0.9375rem] font-bold text-prime-700 hover:text-prime-800"
                  >
                    {seeAnswer}: {item.target}
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={ctaWithSelection}
              className="btn btn-lg btn-primary mt-7"
            >
              {ctaLabel}
            </a>
          </>
        )}
      </div>
    </div>
  );
}
