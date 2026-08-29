import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  /* Aliased: the bare name would shadow the DOM KeyboardEvent, which the two
     document-level listeners below are typed against. */
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import { createPortal } from 'react-dom';

/**
 * Primary navigation: desktop mega-menu and mobile drawer.
 *
 * All labels arrive pre-translated from Astro, so this component holds no copy
 * and needs no access to the i18n layer. Colour comes entirely from the
 * header's `data-theme` via the `--nav-*` custom properties, so this file never
 * needs to know which ground it is sitting on.
 *
 * DESKTOP BEHAVIOUR
 *
 * Pointer: a panel opens on hover, but only where hover is a real input.
 * `(hover: hover) and (pointer: fine)` gates it, because a tap on a touch
 * screen also emits mouseover, and the sequence "mouseover opens, click then
 * toggles it shut" is why a first tap used to open the menu and bounce it
 * straight closed again. On touch the trigger is a plain button: tap opens,
 * tap closes.
 *
 * The close is delayed on mouse-leave and a bridge element covers the gap
 * between the trigger and the panel, so a diagonal move from one to the other
 * cannot dismiss the menu mid-travel. The gap stays: the fix for crossing it is
 * a hit area and an intent delay, not a panel grown upwards to touch the bar.
 *
 * Keyboard: Enter, Space and ArrowDown open a panel and move focus to its first
 * link; ArrowUp opens it at the last. Inside, arrows walk the links, Home and
 * End jump to the ends, Escape closes and returns focus to the trigger, and
 * tabbing out of the panel closes it. Panels deliberately do NOT open on focus,
 * because tabbing along the bar would otherwise flap every menu open in turn.
 *
 * PANEL PLACEMENT. The panel is centred on its trigger and then clamped into
 * the viewport. Centring alone put the Solutions panel 440px off the left edge
 * at 1024px wide, with the first column of links unreachable. The clamp is
 * measured on open and on resize only — never on scroll.
 */

export interface NavLink {
  label: string;
  descriptor?: string;
  href: string;
  external?: boolean;
  active?: boolean;
}

export interface NavEntry {
  label: string;
  href?: string;
  items?: NavLink[];
  /** One line of subject at the head of the panel. See navigation.ts. */
  intro?: string;
  indexHref?: string;
  indexLabel?: string;
  rail?: string[];
  active?: boolean;
}

export interface RegionLink {
  code: string;
  name: string;
  url: string;
  active: boolean;
  external: boolean;
}

interface Props {
  entries: NavEntry[];
  ctaLabel: string;
  ctaHref: string;
  menuLabel: string;
  openLabel: string;
  closeLabel: string;
  navLabel: string;
  railTitle: string;
  phoneLabel: string;
  phoneHref: string;
  /**
   * Regions for the mobile drawer. On desktop the region switcher lives in the
   * header's utility row, which is hidden on small screens, so the drawer is
   * where it belongs there. The LANGUAGE switcher deliberately stays in the
   * collapsed header at every breakpoint and never appears here.
   */
  regions: RegionLink[];
  regionLabel: string;
  regionCurrentLabel: string;
}

/** Long enough to cross the gap diagonally, short enough not to feel sticky. */
const CLOSE_DELAY = 140;

/** Keeps a clamped panel off the viewport edge. */
const PANEL_MARGIN = 16;

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3 w-3 shrink-0 transition-transform duration-[--duration-base] ease-[--ease-prime] ${
        open ? 'rotate-180' : ''
      }`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MainNav({
  entries,
  ctaLabel,
  ctaHref,
  menuLabel,
  openLabel,
  closeLabel,
  navLabel,
  railTitle,
  phoneLabel,
  phoneHref,
  regions,
  regionLabel,
  regionCurrentLabel,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  /**
   * Where focus should land once a panel opened by keyboard has rendered.
   *
   * Kept as state and consumed in an effect rather than moved inside a
   * requestAnimationFrame. A panel opened from the keyboard has to be in the
   * layout before anything in it can take focus, and rAF does not run at all
   * in a background tab: the callback would simply never fire and focus would
   * be stranded on the trigger. An effect runs on commit either way.
   */
  const [focusOnOpen, setFocusOnOpen] = useState<'first' | 'last' | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  /**
   * The header's theme at the moment the drawer opened.
   *
   * The drawer is portalled to <body>, so it is outside the header and cannot
   * inherit its `--nav-*` tokens. Copying the attribute onto the drawer's own
   * root puts it back in scope, and the drawer is then correct on a dark
   * ground and on a light one, which is what makes the open-drawer state right
   * in both themes rather than only in the one it was drawn against. The page
   * cannot scroll while the drawer is open, so this cannot go stale.
   */
  const [drawerTheme, setDrawerTheme] = useState<string>('dark');

  /* The drawer is portalled to <body>. It has to be: the header's surface uses
     backdrop-filter, and a backdrop-filter creates a containing block for
     fixed-position descendants, so a `fixed inset-0` drawer rendered inside it
     would size itself to the header bar rather than the viewport. */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const closeTimer = useRef<number | undefined>(undefined);
  const navRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const baseId = useId();

  const triggerFor = useCallback(
    (index: number) =>
      navRef.current?.querySelector<HTMLButtonElement>(`#${CSS.escape(`${baseId}-trigger-${index}`)}`) ?? null,
    [baseId],
  );

  const cancelClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), CLOSE_DELAY);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  /* Hover is an input on a mouse and a side effect on a touch screen. Gating
     the hover handlers on a real pointer is what stops the first tap opening
     the menu and the click that follows it closing it again. */
  const [hoverCapable, setHoverCapable] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setHoverCapable(query.matches);
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  /* While any layer is open the header is forced to its solid state, so a
     panel never hangs off a bare bar, and released again on close. The
     attribute is the header's own contract; see global.css. */
  useEffect(() => {
    const header = navRef.current?.closest<HTMLElement>('[data-site-header]');
    if (!header) return;
    if (openIndex !== null || drawerOpen) header.setAttribute('data-solid', '');
    else header.removeAttribute('data-solid');
    return () => header.removeAttribute('data-solid');
  }, [openIndex, drawerOpen]);

  /* Restored from the back/forward cache. The DOM and this component's state
     come back exactly as they were left, so a menu that was open when the
     visitor navigated away is still open when they come back to it. */
  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return;
      setOpenIndex(null);
      setDrawerOpen(false);
    };
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  const closeMenu = useCallback(
    (index: number, restoreFocus = true) => {
      cancelClose();
      setOpenIndex(null);
      if (restoreFocus) triggerFor(index)?.focus();
    },
    [cancelClose, triggerFor],
  );

  const openDrawer = useCallback(() => {
    const header = navRef.current?.closest<HTMLElement>('[data-site-header]');
    setDrawerTheme(header?.dataset.theme ?? 'dark');
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback((restoreFocus = true) => {
    setDrawerOpen(false);
    /* Focus must come back to the control that opened the drawer on EVERY
       close, not only on Escape. Closing on the backdrop used to drop focus
       on <body>, which puts a keyboard visitor back at the top of the
       document with no idea where they are. */
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  /* Escape closes whichever layer is open. */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (drawerOpen) closeDrawer();
      else if (openIndex !== null) closeMenu(openIndex);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen, openIndex, closeDrawer, closeMenu]);

  /* A click anywhere outside the desktop nav closes any open panel. */
  useEffect(() => {
    if (openIndex === null) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenIndex(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [openIndex]);

  /* Tabbing out of an open panel closes it: leaving a panel standing open
     behind the focus ring is how you end up with a menu covering the page. */
  useEffect(() => {
    if (openIndex === null) return;
    const onFocusIn = (event: FocusEvent) => {
      const trigger = triggerFor(openIndex);
      const panel = panelRefs.current[openIndex];
      const target = event.target as Node;
      if (trigger?.contains(target) || panel?.contains(target)) return;
      setOpenIndex(null);
    };
    document.addEventListener('focusin', onFocusIn);
    return () => document.removeEventListener('focusin', onFocusIn);
  }, [openIndex, triggerFor]);

  /* ---- Panel placement -------------------------------------------------
     Centre on the trigger, then clamp into the viewport. Measured on open and
     on resize only; nothing here runs while scrolling. */
  useLayoutEffect(() => {
    if (openIndex === null) return;

    const place = () => {
      const panel = panelRefs.current[openIndex];
      const trigger = triggerFor(openIndex);
      const host = trigger?.parentElement;
      if (!panel || !trigger || !host) return;

      const viewport = document.documentElement.clientWidth;
      const available = viewport - PANEL_MARGIN * 2;
      const width = Math.min(panel.offsetWidth, available);

      const centre = trigger.getBoundingClientRect().left + trigger.offsetWidth / 2;
      const wanted = centre - width / 2;
      const clamped = Math.min(Math.max(wanted, PANEL_MARGIN), viewport - width - PANEL_MARGIN);

      panel.style.left = `${clamped - host.getBoundingClientRect().left}px`;
    };

    place();
    window.addEventListener('resize', place, { passive: true });
    return () => window.removeEventListener('resize', place);
  }, [openIndex, triggerFor]);

  /* ---- Keyboard inside a panel ---------------------------------------- */
  const panelLinks = (index: number) =>
    Array.from(panelRefs.current[index]?.querySelectorAll<HTMLElement>('a[href]') ?? []);

  const focusPanelLink = (index: number, position: number | 'first' | 'last') => {
    const links = panelLinks(index);
    if (links.length === 0) return;
    const target =
      position === 'first' ? 0 : position === 'last' ? links.length - 1 : (position + links.length) % links.length;
    links[target]?.focus();
  };

  const onTriggerKeyDown = (event: ReactKeyboardEvent, index: number, isOpen: boolean) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      cancelClose();
      setOpenIndex(index);
      setFocusOnOpen(event.key === 'ArrowUp' ? 'last' : 'first');
    } else if ((event.key === 'Enter' || event.key === ' ') && !isOpen) {
      /* The button's own click handler does the opening; this only says where
         focus goes once it has, so Enter and Space behave like ArrowDown. */
      setFocusOnOpen('first');
    }
  };

  useEffect(() => {
    if (openIndex === null || focusOnOpen === null) return;
    focusPanelLink(openIndex, focusOnOpen);
    setFocusOnOpen(null);
    /* focusPanelLink reads a ref, so it is stable enough not to be a dep. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, focusOnOpen]);

  const onPanelKeyDown = (event: ReactKeyboardEvent, index: number) => {
    const links = panelLinks(index);
    const here = links.indexOf(document.activeElement as HTMLElement);
    if (here === -1) return;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      focusPanelLink(index, here + 1);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      focusPanelLink(index, here - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusPanelLink(index, 'first');
    } else if (event.key === 'End') {
      event.preventDefault();
      focusPanelLink(index, 'last');
    }
  };

  /* Drawer: lock body scroll and trap focus while it is open. */
  useEffect(() => {
    if (!drawerOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const panel = drawerRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter((el) => el.offsetParent !== null);

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    panel?.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      panel?.removeEventListener('keydown', onKeyDown);
    };
  }, [drawerOpen]);

  return (
    <>
      {/* ---------------- Desktop ---------------- */}
      <div ref={navRef} className="hidden lg:flex lg:items-center">
        <nav aria-label={navLabel}>
          <ul className="flex items-center">
            {entries.map((entry, index) => {
              const isOpen = openIndex === index;
              const triggerId = `${baseId}-trigger-${index}`;
              const panelId = `${baseId}-panel-${index}`;

              if (!entry.items) {
                return (
                  <li key={entry.label}>
                    <a href={entry.href} aria-current={entry.active ? 'page' : undefined} className="nav-item">
                      {entry.label}
                    </a>
                  </li>
                );
              }

              return (
                <li
                  key={entry.label}
                  className="relative"
                  onMouseEnter={
                    hoverCapable
                      ? () => {
                          cancelClose();
                          setOpenIndex(index);
                        }
                      : undefined
                  }
                  onMouseLeave={hoverCapable ? scheduleClose : undefined}
                >
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    data-open={isOpen}
                    data-active={entry.active}
                    onClick={() => {
                      setOpenIndex(isOpen ? null : index);
                      /* A mouse click must not pull focus into the panel; only
                         the keyboard path sets this. */
                      if (isOpen) setFocusOnOpen(null);
                    }}
                    onKeyDown={(event) => onTriggerKeyDown(event, index, isOpen)}
                    className="nav-item"
                  >
                    {entry.label}
                    <Chevron open={isOpen} />
                  </button>

                  {/* The bridge over the gap between the trigger and the panel.
                      It is a child of the same <li>, so the pointer never
                      actually leaves the element on the way down and mouseleave
                      never fires mid-travel. */}
                  {isOpen && <span className="absolute inset-x-0 top-full h-2.5" aria-hidden="true" />}

                  <div
                    id={panelId}
                    ref={(el) => {
                      panelRefs.current[index] = el;
                    }}
                    role="group"
                    aria-labelledby={triggerId}
                    hidden={!isOpen}
                    onKeyDown={(event) => onPanelKeyDown(event, index)}
                    className="nav-panel absolute top-[calc(100%+0.625rem)] z-50 w-[min(52rem,calc(100vw-2rem))]
                               p-2.5 motion-safe:animate-[nav-panel-in_var(--duration-base)_var(--ease-prime)]"
                  >
                    <div
                      className={`grid gap-2 sm:grid-cols-[11.5rem_minmax(0,1fr)] ${
                        entry.rail ? 'lg:grid-cols-[11.5rem_minmax(0,1fr)_14rem]' : ''
                      }`}
                    >
                      {/* Column one: what this menu is about, and the way in to
                          the section as a whole where one exists. */}
                      <div className="flex flex-col px-3 py-2.5">
                        <p className="text-label uppercase text-[color:var(--nav-accent)]">{entry.label}</p>
                        {entry.intro && (
                          <p className="mt-2.5 text-[0.875rem] leading-snug text-[color:var(--nav-fg-muted)] text-pretty">
                            {entry.intro}
                          </p>
                        )}
                        {entry.indexHref && entry.indexLabel && (
                          <a
                            href={entry.indexHref}
                            className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.875rem] font-bold
                                       text-[color:var(--nav-accent)] underline-offset-4 hover:underline"
                          >
                            {entry.indexLabel}
                            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                              <path
                                d="M2.5 6h7M6.5 3l3 3-3 3"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        )}
                      </div>

                      <ul className="grid gap-0.5 sm:grid-cols-2">
                        {entry.items.map((item) => (
                          <li key={item.href + item.label}>
                            <a
                              href={item.href}
                              aria-current={item.active ? 'page' : undefined}
                              className={`group/item flex min-h-14 flex-col justify-center gap-0.5 rounded-[--radius-card]
                                          px-3.5 py-2.5 transition-colors duration-[--duration-fast] ease-[--ease-prime]
                                          hover:bg-[color:var(--nav-panel-hover)]
                                          ${item.active ? 'bg-[color:var(--nav-panel-hover)]' : ''}`}
                            >
                              <span
                                className={`text-[0.9375rem] font-bold ${
                                  item.active
                                    ? 'text-[color:var(--nav-accent)]'
                                    : 'text-[color:var(--nav-fg-strong)]'
                                }`}
                              >
                                {item.label}
                              </span>
                              {item.descriptor && (
                                <span className="text-[0.8125rem] leading-snug text-[color:var(--nav-fg-muted)] text-pretty">
                                  {item.descriptor}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {entry.rail && (
                        <aside className="hidden rounded-[--radius-card] bg-ink-950 p-4 lg:block">
                          <p className="text-label uppercase text-prime-400">{railTitle}</p>
                          <ul className="mt-3 flex flex-col gap-2.5">
                            {entry.rail.map((line) => (
                              <li key={line} className="flex items-start gap-2 text-[0.875rem] leading-snug text-ink-200">
                                <svg className="mt-1 h-3 w-3 shrink-0 text-prime-400" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                  <path d="m2 6.4 2.6 2.6L10 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {line}
                              </li>
                            ))}
                          </ul>
                        </aside>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* ---------------- Mobile trigger ---------------- */}
      <button
        ref={toggleRef}
        type="button"
        onClick={() => (drawerOpen ? closeDrawer(false) : openDrawer())}
        aria-expanded={drawerOpen}
        aria-label={drawerOpen ? closeLabel : openLabel}
        className="nav-control inline-flex h-11 w-11 shrink-0 items-center justify-center hover:bg-[color:var(--nav-chip-hover-bg)] lg:hidden"
      >
        <span className="sr-only">{menuLabel}</span>
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {drawerOpen ? (
            <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* ---------------- Mobile drawer ---------------- */}
      {drawerOpen && mounted && createPortal(
        /* GEOMETRY, and why there is no scrim.

           `100dvh`, not `100vh`. A fixed element sized to the viewport is sized
           to the LARGE viewport while a mobile browser's toolbars are showing,
           so the foot of the drawer — the CTA and the phone number — would sit
           behind the browser chrome exactly when the toolbars are out. The
           dynamic unit tracks them.

           The drawer starts BELOW the header and sits UNDER it in the stack.
           It used to be `inset-0` at z-60 with a translucent scrim, and that
           scrim covered the header: with the drawer open, a tap on the language
           switcher landed on the scrim and closed the drawer instead of
           switching language. The scrim was doing nothing else — the drawer is
           full-width and opaque, so there is no page showing around it to dim
           and nothing outside it to click. Dropping it puts the header back on
           top, still visible, still legible, and still operable, which is what
           the language switcher being present at every breakpoint is for.
           Escape and the close button in the bar both still close the drawer. */
        <div
          className="nav-drawer fixed inset-x-0 top-[var(--header-h)] z-40 h-[calc(100dvh-var(--header-h))] lg:hidden"
          data-theme={drawerTheme}
        >
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label={navLabel}
            className="h-full overflow-y-auto overscroll-contain
                       border-t border-[color:var(--nav-hairline)] bg-[color:var(--nav-panel-bg)] px-5 pb-10 pt-4
                       motion-safe:animate-[drawer-in_var(--duration-base)_var(--ease-prime)]"
          >
            <nav aria-label={navLabel}>
              <ul className="flex flex-col divide-y divide-[color:var(--nav-rule)]">
                {entries.map((entry, index) => {
                  if (!entry.items) {
                    return (
                      <li key={entry.label}>
                        <a
                          href={entry.href}
                          aria-current={entry.active ? 'page' : undefined}
                          onClick={() => closeDrawer(false)}
                          className={`flex min-h-14 items-center text-[1.0625rem] font-bold
                                      ${
                                        entry.active
                                          ? 'text-[color:var(--nav-accent)]'
                                          : 'text-[color:var(--nav-fg-strong)]'
                                      }`}
                        >
                          {entry.label}
                        </a>
                      </li>
                    );
                  }

                  const isExpanded = expanded === index;
                  const sectionId = `${baseId}-m-${index}`;
                  return (
                    <li key={entry.label}>
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={sectionId}
                        onClick={() => setExpanded(isExpanded ? null : index)}
                        className="flex min-h-14 w-full items-center justify-between gap-3 text-left text-[1.0625rem]
                                   font-bold text-[color:var(--nav-fg-strong)]"
                      >
                        {entry.label}
                        <Chevron open={isExpanded} />
                      </button>
                      <ul id={sectionId} hidden={!isExpanded} className="flex flex-col gap-0.5 pb-3 pl-1">
                        {entry.items.map((item) => (
                          <li key={item.href + item.label}>
                            <a
                              href={item.href}
                              aria-current={item.active ? 'page' : undefined}
                              onClick={() => closeDrawer(false)}
                              className={`flex min-h-12 flex-col justify-center rounded-[--radius-card] px-3 py-2
                                          ${
                                            item.active
                                              ? 'bg-[color:var(--nav-panel-hover)] text-[color:var(--nav-accent)]'
                                              : 'text-[color:var(--nav-fg)]'
                                          }`}
                            >
                              <span className="text-[0.9375rem] font-semibold">{item.label}</span>
                              {item.descriptor && (
                                <span className="text-[0.8125rem] leading-snug text-[color:var(--nav-fg-muted)]">
                                  {item.descriptor}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={ctaHref}
                onClick={() => closeDrawer(false)}
                className="inline-flex min-h-13 items-center justify-center rounded-[--radius-card] bg-prime-500 px-6
                           text-[1.0625rem] font-bold text-ink-950"
              >
                {ctaLabel}
              </a>
              <a
                href={phoneHref}
                className="inline-flex min-h-13 items-center justify-center rounded-[--radius-card]
                           border border-[color:var(--nav-chip-border)] bg-[color:var(--nav-chip-bg)] px-6
                           text-[1.0625rem] font-bold text-[color:var(--nav-fg-strong)]"
              >
                {phoneLabel}
              </a>
            </div>

            <div className="mt-8 border-t border-[color:var(--nav-rule)] pt-6">
              <h2 className="text-label uppercase text-[color:var(--nav-fg-muted)]">{regionLabel}</h2>
              <ul className="mt-2 flex flex-col">
                {regions.map((region) => (
                  <li key={region.code}>
                    <a
                      href={region.url}
                      aria-current={region.active ? 'true' : undefined}
                      {...(region.external ? { rel: 'noopener' } : {})}
                      className={`flex min-h-12 items-center justify-between gap-3 text-[1rem]
                                  ${
                                    region.active
                                      ? 'font-bold text-[color:var(--nav-accent)]'
                                      : 'text-[color:var(--nav-fg)]'
                                  }`}
                    >
                      {region.name}
                      <span className="text-[0.75rem] font-bold tracking-[0.12em] text-[color:var(--nav-fg-muted)]">
                        {region.code}
                        {region.active && <span className="sr-only">. {regionCurrentLabel}</span>}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
