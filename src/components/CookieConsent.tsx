import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  CONSENT_COOKIE,
  LANGUAGE_COOKIE,
  deleteCookie,
  getConsent,
  setConsent,
} from '../lib/consent';

/**
 * Cookie notice and preferences dialog.
 *
 * NO FLASH FOR RETURNING VISITORS. Nothing is rendered on the server and
 * nothing is rendered on the first client pass. The component decides what to
 * show only after it has read the cookie in an effect, so a visitor with a
 * recorded decision never sees the banner appear and disappear. The
 * alternative, rendering it and hiding it, is exactly the flash this avoids.
 *
 * IT WAITS THREE SECONDS. The notice is not the reason anyone opened the page,
 * so it lets them arrive first and then rises into the corner. The wait is a
 * mount delay: for those three seconds the banner does not exist in the DOM at
 * all, so it costs nothing and cannot shift anything. The timer is armed only
 * for a visitor who has no decision on file.
 *
 * NOT A MODAL. Functional-only cookies do not justify trapping the page, so
 * the banner is a region the visitor can ignore, scroll past and read around.
 * The preferences dialog IS deliberate, so that one does trap focus, and it
 * uses a native <dialog> to get focus containment, Escape and inertness from
 * the platform rather than from hand-written key handling.
 *
 * FOCUS IS NEVER STOLEN. The banner announces itself through a polite live
 * region and leaves the caret where it was. The dialog takes focus because the
 * visitor asked for it, and hands it back to the control that opened it.
 *
 * NO LAYOUT SHIFT. Fixed position, out of flow, so it cannot move the page or
 * contribute to CLS whenever it appears.
 */

interface Labels {
  title: string;
  body: string;
  accept: string;
  decline: string;
  manage: string;
  bannerLabel: string;
  panelTitle: string;
  panelIntro: string;
  functionalTitle: string;
  functionalBody: string;
  toggleLabel: string;
  on: string;
  off: string;
  save: string;
  close: string;
  saved: string;
  storedTitle: string;
  storedConsent: string;
  storedLanguage: string;
  policyLink: string;
}

interface Props {
  labels: Labels;
  privacyHref: string;
}

/**
 * How long the page is left alone before the notice appears.
 *
 * A scheduling delay, not an animation delay, which is why it is a plain
 * constant here rather than a duration token: nothing is on screen, nothing is
 * mounted, and nothing is occupying the compositor while it waits. The banner
 * does not exist until the timer fires.
 *
 * Three seconds is long enough for the visitor to have taken in the page they
 * came for and short enough that the notice does not interrupt something they
 * have already started reading further down.
 */
const APPEARANCE_DELAY_MS = 3000;

export default function CookieConsent({ labels, privacyHref }: Props) {
  const id = useId();
  /* `null` means "not yet read". It is what keeps the first paint empty. */
  const [decided, setDecided] = useState<boolean | null>(null);
  /* The appearance delay has elapsed. Separate from `decided` so the two
     conditions stay independent and neither can be mistaken for the other. */
  const [armed, setArmed] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);
  const [savedNotice, setSavedNotice] = useState('');

  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  /* Read the decision once, on the client only, then wait before showing
     anything.

     The timer is armed ONLY for a visitor with no decision on file. A
     returning visitor never starts it and never mounts the banner, so the
     delay cannot reintroduce the flash this component exists to avoid: there
     is nothing to flash. */
  useEffect(() => {
    const record = getConsent();
    setDecided(record !== null);
    setToggleOn(record?.state === 'granted');
    if (record !== null) return;

    const timer = window.setTimeout(() => setArmed(true), APPEARANCE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  /* The footer link lives in Astro markup, so it reaches this island through a
     delegated listener rather than a prop. One listener on the document covers
     every such link on the page, now and later. */
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest?.<HTMLElement>('[data-cookie-preferences]');
      if (!trigger) return;
      event.preventDefault();
      openerRef.current = trigger;
      setToggleOn(getConsent()?.state === 'granted');
      setSavedNotice('');
      setPanelOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  /* Drive the native dialog from state, and give focus back on the way out. */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (panelOpen && !dialog.open) {
      dialog.showModal();
    } else if (!panelOpen && dialog.open) {
      dialog.close();
      openerRef.current?.focus();
      openerRef.current = null;
    }
  }, [panelOpen]);

  const decide = useCallback((granted: boolean) => {
    setConsent(granted ? 'granted' : 'denied');
    setToggleOn(granted);
    setDecided(true);
  }, []);

  const savePreferences = useCallback(() => {
    setConsent(toggleOn ? 'granted' : 'denied');
    /* Withdrawal must remove what was already stored, not just stop adding to
       it. `setConsent` deletes it too; this is belt and braces for the case
       where the panel is saved off while a language cookie is present. */
    if (!toggleOn) deleteCookie(LANGUAGE_COOKIE);
    setDecided(true);
    setSavedNotice(labels.saved);
  }, [toggleOn, labels.saved]);

  /* Both must be true: no decision on file, and the delay has passed. */
  const showBanner = decided === false && armed;

  return (
    <>
      {/* Polite, so a screen reader is told the notice exists without being
          interrupted mid-sentence and without the caret being moved. */}
      <div aria-live="polite" className="cookie-live">
        {showBanner && (
          <section className="cookie-banner" role="region" aria-label={labels.bannerLabel}>
            <div className="cookie-banner-inner">
              <div className="cookie-banner-copy">
                <p className="cookie-banner-title">{labels.title}</p>
                <p className="cookie-banner-body">{labels.body}</p>
              </div>

              <div className="cookie-banner-actions">
                {/* Equal size, equal weight, equal reach. Refusing must not be
                    harder than agreeing, or the consent is not worth having. */}
                <button type="button" className="btn btn-md btn-primary cookie-action" onClick={() => decide(true)}>
                  {labels.accept}
                </button>
                <button type="button" className="btn btn-md btn-secondary cookie-action" onClick={() => decide(false)}>
                  {labels.decline}
                </button>
                <button type="button" className="cookie-manage" data-cookie-preferences>
                  {labels.manage}
                </button>
              </div>
            </div>
          </section>
        )}
      </div>

      <dialog ref={dialogRef} className="cookie-panel" aria-labelledby={`${id}-title`} onClose={() => setPanelOpen(false)}>
        <div className="cookie-panel-head">
          <h2 id={`${id}-title`} className="cookie-panel-title">
            {labels.panelTitle}
          </h2>
          <button type="button" className="cookie-close" onClick={() => setPanelOpen(false)} aria-label={labels.close}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <p className="cookie-panel-intro">{labels.panelIntro}</p>

        <div className="cookie-category">
          <div className="cookie-category-copy">
            <h3 className="cookie-category-title">{labels.functionalTitle}</h3>
            <p className="cookie-category-body">{labels.functionalBody}</p>
          </div>

          {/* A real switch, with its state in the accessibility tree rather
              than only in the paint. */}
          <button
            type="button"
            role="switch"
            aria-checked={toggleOn}
            aria-label={labels.toggleLabel}
            className="cookie-switch"
            onClick={() => setToggleOn((on) => !on)}
          >
            <span className="cookie-switch-track" aria-hidden="true">
              <span className="cookie-switch-knob" />
            </span>
            <span className="cookie-switch-state">{toggleOn ? labels.on : labels.off}</span>
          </button>
        </div>

        <div className="cookie-stored">
          <h3 className="cookie-stored-title">{labels.storedTitle}</h3>
          <dl className="cookie-stored-list">
            <div>
              <dt>{CONSENT_COOKIE}</dt>
              <dd>{labels.storedConsent}</dd>
            </div>
            <div>
              <dt>{LANGUAGE_COOKIE}</dt>
              <dd>{labels.storedLanguage}</dd>
            </div>
          </dl>
        </div>

        <div className="cookie-panel-foot">
          <button type="button" className="btn btn-md btn-primary" onClick={savePreferences}>
            {labels.save}
          </button>
          <a href={privacyHref} className="cookie-policy-link">
            {labels.policyLink}
          </a>
        </div>

        <p aria-live="polite" className="cookie-saved">
          {savedNotice}
        </p>
      </dialog>
    </>
  );
}
