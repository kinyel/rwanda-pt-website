import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

/**
 * "What are you trying to stop losing?", as a working brief.
 *
 * It was eight static cards linking out to the page that solves each problem.
 * That is a fine router and it asks the reader for nothing: the question at
 * the top of the block was rhetorical and the answer went nowhere. This is the
 * same eight, tickable, with somewhere for the answer to go.
 *
 * THE HEADING LIVES IN HERE, which is the point of the second pass. It used to
 * be a `SectionHeader` on the light page above a dark panel, and the two read
 * as a caption and an unrelated widget. The eyebrow, the question and the lead
 * are inside the panel now, on its own ground, so the section is one object:
 * you are asked a question and the means of answering it is in the same frame.
 *
 * THE EIGHT LINKS SURVIVE, which is the constraint that shaped the markup.
 * They are eight internal links from the site's most important page into its
 * commercial pages, and losing them to make a form would be a bad trade. Each
 * card is a toggle BUTTON carrying the label and the body exactly as before,
 * with the link alongside as an arrow whose accessible name comes from an
 * `aria-label` — so the hrefs and the body text are unchanged and the page
 * gains a form rather than swapping one for the other.
 *
 * COLOUR IS DATA HERE. Each of the nine choices owns a stop on a gold-to-ember
 * ramp, and that one hue drives its dot in the list, its card when chosen, and
 * its plate and tag on the tower. Tick "fuel theft" and an amber plate lands;
 * the amber in the list is the same amber. The ramp stays inside the brand's
 * warm family and the cool counterpart is the teal the relief palette already
 * uses, so the section is genuinely colourful without inventing a palette.
 *
 * THE 3D IS THE SECTION. Every tick drops a lit plate onto a tower standing in
 * the frame, each tagged with what it is, the tags spiralling up on the golden
 * angle so no two ever line up. The tower turns slowly on its own, takes an
 * offset from the pointer, and throws light down onto a grid floor that
 * brightens as the brief grows. By the time you submit you are looking at the
 * shape of your own problem.
 *
 * COST. No WebGL and no 3D library: plates at real `translateZ` inside one
 * `preserve-3d` world under a shared `perspective`. One pointermove listener,
 * rAF-throttled, attached only on a device with a fine pointer. Transform,
 * opacity and filter only. Everything ambient stops under reduced motion.
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
  eyebrow: string;
  title: string;
  lead: string;
}

const OTHER = '__other__';

/**
 * Gold to ember, nine stops, plus the pale gold the free-text choice gets so
 * it reads as the odd one out. Ordered so neighbours in the list are
 * neighbours on the ramp: the grid reads as a gradient before anyone has
 * ticked anything, which is most of where the colour in this block comes from.
 */
const RAMP = [
  '#ffcf66',
  '#ffb02e',
  '#ff8c00',
  '#ff7d29',
  '#f35d01',
  '#e2490a',
  '#cc3a10',
  '#b02f14',
];
const OTHER_TONE = '#ffe3b0';

export default function FleetBrief({
  items,
  labels,
  seeAnswer,
  formId,
  eyebrow,
  title,
  lead,
}: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [otherText, setOtherText] = useState('');
  const [touched, setTouched] = useState(false);
  const [state, submitToFormspree] = useForm(formId || 'disabled');
  const stageRef = useRef<HTMLDivElement>(null);

  const tone = useCallback(
    (key: string) => {
      if (key === OTHER) return OTHER_TONE;
      const index = items.findIndex((item) => item.key === key);
      return RAMP[index % RAMP.length];
    },
    [items],
  );

  const toggle = useCallback((key: string) => {
    /* Appended rather than sorted, so the tower is built in the order the
       reader thought of things and the newest plate is always on top. */
    setSelected((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  }, []);

  const otherOn = selected.includes(OTHER);

  const plates = useMemo(
    () =>
      selected.map((key) => ({
        key,
        tone: tone(key),
        label:
          key === OTHER
            ? otherText.trim() || labels.otherLabel
            : (items.find((item) => item.key === key)?.label ?? key),
      })),
    [selected, otherText, items, labels.otherLabel, tone],
  );

  /* ------------------------------------------------------------------
     The tower takes an offset from the pointer.

     Only on a fine pointer: on a phone there is nothing to follow, and the
     idle turn in CSS carries it there instead. Reads are batched into a
     frame, so a fast sweep costs one write per frame rather than one per
     event, and the whole section drives it rather than just the stage —
     the reader's cursor is over the checkboxes while they work, and a
     tower that only moves when you touch it is a tower nobody discovers.
  ------------------------------------------------------------------ */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const still = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || still.matches) return;

    let frame = 0;
    /* Target and current, not one value. Writing the cursor's position
       straight onto the stage makes the tower a rigged prop that is exactly
       where the mouse is; easing toward it gives the thing mass. The loop
       runs only while there is still distance to close, so an idle pointer
       costs nothing. */
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const step = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      stage.style.setProperty('--mx', cx.toFixed(4));
      stage.style.setProperty('--my', cy.toFixed(4));
      frame = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(step) : 0;
    };
    const run = () => {
      if (!frame) frame = requestAnimationFrame(step);
    };
    const onMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1));
      ty = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1));
      run();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      run();
    };

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
  const ready = count > 0;

  const header = (
    <header className="brief-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="brief-title text-h2 text-white">{title}</h2>
      <p className="brief-lead measure text-lead text-ink-300">{lead}</p>
    </header>
  );

  if (state.succeeded) {
    return (
      <div className="brief" data-brief>
        {header}
        <div className="brief-done">
          <span className="brief-done-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12.5 10 17.5 19 7"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="text-h3 text-white">{labels.successTitle}</p>
          <p className="mx-auto mt-3 max-w-[46ch] text-ink-300">{labels.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="brief" data-brief>
      {header}

      <div className="brief-body">
        {/* ---------------- The form ---------------- */}
        <form
          className="brief-form"
          onSubmit={(event) => {
            setTouched(true);
            if (!ready) {
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
                <li
                  key={item.key}
                  className="brief-option"
                  style={{ '--tone': tone(item.key) } as React.CSSProperties}
                >
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
                          strokeWidth="2.2"
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
                  {/* The internal link this block has always carried. No text
                      of its own: the accessible name is on the element, so
                      the page's body copy is exactly what it was. */}
                  <a
                    href={item.href}
                    className="brief-jump"
                    aria-label={`${seeAnswer}: ${item.label}`}
                  >
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              );
            })}

            <li
              className="brief-option brief-option-other"
              style={{ '--tone': OTHER_TONE } as React.CSSProperties}
            >
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
                      strokeWidth="2.2"
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

          {/* What the selection actually sends. One field rather than nine,
              so the email that arrives reads as a sentence. */}
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="field-error"
              />
            </label>
          </div>

          {touched && !ready && <p className="field-error mt-3">{labels.needOne}</p>}

          <div className="brief-send">
            <button type="submit" disabled={state.submitting} className="btn btn-lg btn-primary">
              {state.submitting ? labels.sending : labels.submit}
            </button>
            <p className="brief-privacy">{labels.privacy}</p>
          </div>
          <ValidationError errors={state.errors} className="field-error mt-3" />
        </form>

        {/* ---------------- The tower ---------------- */}
        <div className="brief-visual">
          <div
            className="brief-stage"
            ref={stageRef}
            data-filled={ready ? '' : undefined}
            aria-hidden="true"
          >
            <span className="brief-pool" />
            <div className="brief-world">
              <span className="brief-floor">
                <svg viewBox="0 0 400 400" focusable="false">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <ellipse key={i} className="brief-ringline" cx="200" cy="200" rx={44 + i * 38} ry={36 + i * 31} />
                  ))}
                </svg>
              </span>
              <span className="brief-mast" />
              {plates.map((plate, i) => (
                <span
                  key={plate.key}
                  className="brief-plate"
                  style={
                    {
                      '--i': i,
                      '--tone': plate.tone,
                      /* The golden angle. Anything smaller lines two tags up
                         sooner or later, because the rim is foreshortened to
                         about a third of its height and neighbours collapse
                         onto each other on the near side. */
                      '--a': `${i * 137.5 - 30}deg`,
                    } as React.CSSProperties
                  }
                >
                  <span className="brief-plate-face" />
                  <span className="brief-tag">{plate.label}</span>
                </span>
              ))}
              {/* Ambient rise. Twelve motes on staggered loops, which is the
                  only thing in the scene that moves without being asked —
                  and the thing that stops an empty frame reading as broken. */}
              {Array.from({ length: 12 }, (_, i) => (
                <span key={`m${i}`} className="brief-mote" style={{ '--m': i } as React.CSSProperties} />
              ))}
            </div>
          </div>

          <p className="brief-readout" aria-live="polite">
            <span className="brief-readout-n">{String(count).padStart(2, '0')}</span>
            <span className="brief-readout-label">
              {count === 0 ? labels.emptyTitle : count === 1 ? labels.countOne : labels.countMany}
            </span>
          </p>
          {count === 0 && <p className="brief-hint">{labels.emptyBody}</p>}
        </div>
      </div>
    </div>
  );
}
