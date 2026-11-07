import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

/**
 * "What are you trying to stop losing?", as a working brief.
 *
 * It was eight static cards linking out to the page that solves each problem.
 * That is a fine router and it asks the reader for nothing: the question at
 * the top of the block is rhetorical, and the answer goes nowhere. This is the
 * same eight, tickable, with somewhere for the answer to go.
 *
 * THE EIGHT LINKS SURVIVE, which is the constraint that shaped the markup.
 * They are eight internal links from the site's most important page into its
 * commercial pages, and losing them to make a form would be a bad trade. Each
 * card is a toggle BUTTON carrying the label and the body exactly as before,
 * with the link alongside it as an arrow whose accessible name comes from an
 * `aria-label` — so the hrefs and the body text are unchanged and the page
 * gains a form rather than swapping one for the other.
 *
 * THE 3D IS THE POINT OF THE SECTION. Every tick drops a plate onto a stack
 * standing beside the form, each one lit, each one tagged with what it is, the
 * tags spiralling up around the tower as it grows. It is the brief being
 * assembled in front of you: by the time you submit, you are looking at the
 * shape of your own problem. The stack also follows the pointer, which is the
 * cheapest honest way to make a CSS 3D object read as an object rather than a
 * picture — parallax is the depth cue the eye actually trusts.
 *
 * COST. No WebGL and no 3D library: plates at real `translateZ` inside one
 * `preserve-3d` world under a shared `perspective`. One pointermove listener,
 * rAF-throttled, attached only on a device with a fine pointer and only when
 * motion is allowed. Transform and opacity only.
 */

export interface BriefItem {
  key: string;
  label: string;
  body: string;
  href: string;
}

export interface BriefLabels {
  otherLabel: string;
  otherPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  nameLabel: string;
  namePlaceholder: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  emptyTitle: string;
  emptyBody: string;
  countOne: string;
  countMany: string;
  needOne: string;
  needEmail: string;
  privacy: string;
  unconfigured: string;
}

interface Props {
  items: BriefItem[];
  labels: BriefLabels;
  seeAnswer: string;
  formId: string;
}

const OTHER = '__other__';

export default function FleetBrief({ items, labels, seeAnswer, formId }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [otherText, setOtherText] = useState('');
  const [touched, setTouched] = useState(false);
  const [state, submitToFormspree] = useForm(formId || 'disabled');
  const stageRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback((key: string) => {
    /* Appended rather than sorted, so the stack is built in the order the
       reader thought of things and the newest plate is always the top one. */
    setSelected((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  }, []);

  const otherOn = selected.includes(OTHER);

  /* What is actually on the stack: every tick in the order it was made, with
     the free-text one showing whatever has been typed into it so far. */
  const plates = useMemo(
    () =>
      selected.map((key) => {
        if (key === OTHER) return { key, label: otherText.trim() || labels.otherLabel };
        return { key, label: items.find((i) => i.key === key)?.label ?? key };
      }),
    [selected, otherText, items, labels.otherLabel],
  );

  /* ------------------------------------------------------------------
     The stack follows the pointer.

     Only on a fine pointer and only when motion is allowed: on a phone
     there is nothing to follow, and under reduced motion a scene that
     chases the cursor is exactly what the setting is asking us not to do.
     Reads are batched into a frame, so a fast sweep costs one write per
     frame rather than one per event.
  ------------------------------------------------------------------ */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const still = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || still.matches) return;

    let frame = 0;
    let mx = 0;
    let my = 0;

    const write = () => {
      frame = 0;
      stage.style.setProperty('--mx', mx.toFixed(3));
      stage.style.setProperty('--my', my.toFixed(3));
    };
    const onMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      mx = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1));
      my = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1));
      if (!frame) frame = requestAnimationFrame(write);
    };
    const onLeave = () => {
      mx = 0;
      my = 0;
      if (!frame) frame = requestAnimationFrame(write);
    };

    /* The whole section drives it, not just the stage: the reader's cursor
       is over the checkboxes while they work, and a stack that only moves
       when you touch it is a stack nobody discovers. */
    const zone = stage.closest('[data-brief]') ?? stage;
    zone.addEventListener('pointermove', onMove as EventListener, { passive: true });
    zone.addEventListener('pointerleave', onLeave);
    return () => {
      zone.removeEventListener('pointermove', onMove as EventListener);
      zone.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const count = plates.length;
  const hasPick = count > 0 && (!otherOn || otherText.trim().length > 0 || count > 1);

  if (!formId) {
    return (
      <div className="rounded-[--radius-panel] border border-prime-200 bg-prime-50 p-6 sm:p-8">
        <p className="measure text-ink-700">{labels.unconfigured}</p>
      </div>
    );
  }

  if (state.succeeded) {
    return (
      <div className="brief-done rounded-[--radius-panel] border border-prime-200 bg-white p-8 text-center sm:p-12">
        <p className="text-h3 text-ink-950">{labels.successTitle}</p>
        <p className="mx-auto mt-3 max-w-[46ch] text-ink-600">{labels.successBody}</p>
      </div>
    );
  }

  return (
    <div className="brief" data-brief>
      {/* ---------------- The stack ---------------- */}
      <div className="brief-visual">
        <div className="brief-stage" ref={stageRef} aria-hidden="true">
          <div className="brief-world" data-filled={count > 0 ? '' : undefined}>
            <span className="brief-base" />
            {plates.map((plate, i) => (
              <span
                key={plate.key}
                className="brief-plate"
                style={
                  {
                    '--i': i,
                    /* The golden angle. 47 degrees looked like plenty on
                       paper and was not: the rim is foreshortened to about
                       a third of its height by the tilt, so neighbouring
                       tags collapsed onto each other on the right-hand
                       side. At 137.5 degrees consecutive tags are always
                       most of a turn apart, and no number of plates ever
                       lines two of them up. */
                    '--a': `${i * 137.5 - 30}deg`,
                  } as React.CSSProperties
                }
              >
                <span className="brief-plate-face" />
                <span className="brief-tag">{plate.label}</span>
              </span>
            ))}
          </div>
        </div>

        <p className="brief-readout" aria-live="polite">
          {count === 0 ? (
            <>
              <span className="brief-readout-n">00</span>
              <span className="brief-readout-label">{labels.emptyTitle}</span>
            </>
          ) : (
            <>
              <span className="brief-readout-n">{String(count).padStart(2, '0')}</span>
              <span className="brief-readout-label">
                {count === 1 ? labels.countOne : labels.countMany}
              </span>
            </>
          )}
        </p>
        {count === 0 && <p className="brief-hint">{labels.emptyBody}</p>}
      </div>

      {/* ---------------- The form ---------------- */}
      <form
        className="brief-form"
        onSubmit={(event) => {
          setTouched(true);
          if (!hasPick) {
            event.preventDefault();
            return;
          }
          void submitToFormspree(event);
        }}
      >
        <ul className="brief-options" role="list">
          {items.map((item) => {
            const on = selected.includes(item.key);
            return (
              <li key={item.key} className="brief-option">
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(item.key)}
                  className="brief-choice"
                >
                  <span className="brief-box" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" className="brief-check">
                      <path
                        d="M3.5 8.5 6.5 11.5 12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="brief-choice-text">
                    <span className="brief-choice-label">{item.label}</span>
                    <span className="brief-choice-body">{item.body}</span>
                  </span>
                </button>
                {/* The internal link this block has always carried. No text of
                    its own: the accessible name is on the element, so the
                    page's body copy is exactly what it was. */}
                <a
                  href={item.href}
                  className="brief-jump"
                  aria-label={`${seeAnswer}: ${item.label}`}
                >
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            );
          })}

          <li className="brief-option brief-option-other">
            <button
              type="button"
              aria-pressed={otherOn}
              onClick={() => toggle(OTHER)}
              className="brief-choice"
            >
              <span className="brief-box" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" className="brief-check">
                  <path
                    d="M3.5 8.5 6.5 11.5 12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="brief-choice-text">
                <span className="brief-choice-label">{labels.otherLabel}</span>
              </span>
            </button>
            {otherOn && (
              <input
                type="text"
                name="other"
                value={otherText}
                onChange={(event) => setOtherText(event.target.value)}
                placeholder={labels.otherPlaceholder}
                className="brief-other-input"
                aria-label={labels.otherLabel}
              />
            )}
          </li>
        </ul>

        {/* What the selection actually sends. One hidden field rather than
            eight, so the email that arrives reads as a sentence. */}
        <input
          type="hidden"
          name="challenges"
          value={plates.map((plate) => plate.label).join(', ')}
        />

        <div className="brief-fields">
          <label className="brief-field">
            <span className="brief-field-label">{labels.nameLabel}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder={labels.namePlaceholder}
              className="brief-input"
            />
          </label>
          <label className="brief-field">
            <span className="brief-field-label">{labels.emailLabel}</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={labels.emailPlaceholder}
              className="brief-input"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
          </label>
        </div>

        {touched && !hasPick && <p className="field-error mt-3">{labels.needOne}</p>}

        <div className="brief-send">
          <button type="submit" disabled={state.submitting} className="btn btn-lg btn-primary">
            {state.submitting ? labels.sending : labels.submit}
          </button>
          <p className="brief-privacy">{labels.privacy}</p>
        </div>
        <ValidationError errors={state.errors} className="field-error mt-3" />
      </form>
    </div>
  );
}
