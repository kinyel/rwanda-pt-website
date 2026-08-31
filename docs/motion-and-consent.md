# Motion system and cookie consent

Two systems, both added in the same pass. They are unrelated except that both
are built from the existing design tokens and both must survive JavaScript
being switched off.

---

## 1. Motion

### The vocabulary

Everything lives in `@theme` in `src/styles/global.css`. Nothing in the
codebase may write a raw duration or easing value; if something needs a step
that is not here, the scale is wrong and the scale gets fixed.

| Token | Value | For |
|---|---|---|
| `--duration-instant` | 90ms | Button press |
| `--duration-fast` | 160ms | Hover, focus, small state change |
| `--duration-base` | 240ms | Dropdowns, reveals, most transitions |
| `--duration-slow` | 360ms | Larger panels, the mobile drawer |
| `--ease-prime` | `cubic-bezier(0.4, 0, 0.2, 1)` | General purpose, in-place change |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances |
| `--ease-in` | `cubic-bezier(0.7, 0, 0.84, 0)` | Exits |
| `--stagger-step` | 60ms | Gap between siblings |
| `--stagger-cap` | 5 | Index past which siblings share the last slot |

Two ambient loops sit outside that scale and are labelled as such, so nothing
mistakes them for transition durations: `--duration-marquee` (34s, the client
strip) and `--duration-pulse` (2.6s, the live tick on the report read head).

**Four values changed** from what was there before. They are listed in the
comment above the tokens as well:

- `--ease-prime` was `cubic-bezier(0.22, 0.61, 0.36, 1)`, an ease-out used for
  everything. It is now symmetric, and the ease-out behaviour moved to
  `--ease-out`, where entrances can use it deliberately.
- `--duration-fast` 140ms to 160ms, `--duration-base` 220ms to 240ms.
- `--duration-slow` 420ms to 360ms. At 420ms a panel read as hesitant.

### Reveals are one shot, and no longer scroll-linked

This is the substantive change.

The old `.reveal` / `.reveal-soft` used `animation-timeline: view()`. A view
timeline binds an animation to scroll **position**, not to an event, so
scrolling back up played it backwards and every element re-ran its entrance on
every pass. A reader moving up to re-read a paragraph watched that paragraph
fade out from under them. An entrance is an event, and it happens once.

They are now transitions, flipped by one shared `IntersectionObserver`
registered at the end of `<body>` in `BaseLayout.astro`. Each element is
unobserved the moment it fires, so the observer empties itself as the reader
goes down the page.

**Why content can never be left hidden.** The hidden state hangs off
`[data-reveal]`, an attribute only the script writes, and only ever onto
elements that start below the fold:

| Situation | Result |
|---|---|
| JavaScript off | Attribute never written, nothing hidden |
| Already on screen at load | Attribute never written, so no flash |
| `prefers-reduced-motion: reduce` | Script returns before writing anything |
| No `IntersectionObserver` | Same, returns early |

The attribute and the observer are written in the same synchronous pass, so
there is no window in which an element is hidden but unobserved. Confirmed
against the build: `data-reveal` appears in the output only inside the script
itself, never as an attribute on an element.

`will-change` rides the same attribute, so it is present exactly while an
element waits to animate and gone the moment it has. No bookkeeping.

### The stagger is scheduled, not delayed

`transition-delay` was the obvious way to stagger and it was wrong twice over,
both found by measuring rather than by reading:

1. A component that writes `transition` as a **shorthand** resets
   `transition-delay` to zero and silently wipes the stagger. The industry wall
   did exactly this.
2. A delay that lives on the element goes on delaying that element's **hover**
   for the rest of the page's life.

So the observer schedules the reveal instead, reading `--n` from the inline
style the components already set. The delay therefore exists only for the
entrance. The numbers still live in CSS, read once at init, so the tokens
remain the single source of truth.

A related trap worth knowing: a component that sets its own `transition` will
replace the reveal's `transition-property` entirely. `.industry-tile` now lists
`background-color, opacity` in longhand for that reason. A sweep across all 45
revealing elements confirms zero remaining collisions.

### What is deliberately left alone

- **The hero journey rail.** Off limits. Its markup, classes, styles, path,
  waypoints, aspect ratio, sticky behaviour and script are untouched. The only
  edit anywhere near it was replacing the raw `2.6s` on the read head's live
  tick with `--duration-pulse`, which is the same value.
- **The product helix.** It has its own `--p` scroll handler, as specified.
- **The marquee.** A continuous ribbon rather than a loop the eye is asked to
  follow. It carries no state and nothing in it needs to be caught. It stops
  for anyone who might be reading it, now on `:focus-within` as well as
  `:hover`, and it does not run at all under reduced motion. This is a
  judgement call against the "no infinite loops" rule and is flagged as one.

### Not built

The brief refers to a four-stage TRACK / PROTECT / OPTIMISE / UNDERSTAND
section. **That section does not exist yet.** It is still an open item from the
earlier redesign brief. Nothing was added on top of it because there is nothing
there.

---

## 2. Cookie consent

### Scope

One category: functional preferences. It gates exactly one thing, remembering
a returning visitor's language so a later visit to the site root can send them
to the right locale.

**There is no analytics on this site.** No Cloudflare Web Analytics, no Google
Analytics, no pixel, no tag manager, no third-party script of any kind. The
build contains zero external script origins. Nothing is described as a cookie
that is not one, and nothing is gated that does not exist.

### Consent is not the source of truth for language

The locale lives in the URL and is read from the URL on every page. That did
not change. Declining costs a visitor almost nothing: every locale URL still
works, the switcher still works, both languages still serve. The only thing
lost is the automatic remembering between visits.

Verified: after declining, the switcher still renders, still navigates, and
stores nothing.

### Storage

Two first-party cookies, `SameSite=Lax`, twelve months, `Secure` on HTTPS only.

| Cookie | Written | Holds |
|---|---|---|
| `primetrack_consent` | On **both** accept and decline | `version.state.timestamp`, e.g. `1.granted.1767225600` |
| `primetrack_language` | Only with consent | `en` or `rw` |

The decision cookie is not itself gated by consent. A visitor who declines has
to be remembered as having declined or they are asked again on every visit. It
holds a version, a state and a timestamp and nothing else: no identifier,
nothing personal, nothing joinable.

The version exists so that if the cookie policy ever changes, `CONSENT_VERSION`
can be bumped and the banner re-asks only the people whose recorded decision
predates the change.

`Secure` is conditional on the page being HTTPS. Setting it unconditionally
makes the cookie fail silently on a plain-HTTP origin, so the mechanism would
work in production and do nothing in local development with no error to explain
it.

### Migration

An earlier build remembered the language in `localStorage` under
`primetrack-locale`, with no consent step. That value was collected before
anyone was asked, so the inline script **deletes** it rather than migrating it
into the new cookie.

### Withdrawal really withdraws

Turning the toggle off and saving deletes `primetrack_language`. It does not
merely stop writing it. Verified end to end.

### It waits three seconds, then materialises

The notice is not why anyone opened the page, so it lets them arrive first.

The wait is a **mount delay, not an animation delay**: for those three seconds
the banner does not exist in the DOM, so it costs nothing, occupies no
compositor work and cannot shift anything. The timer is armed only for a
visitor with no decision on file, so the delay cannot reintroduce the flash the
component exists to avoid. Measured: absent at 500ms, 1500ms and 2500ms,
present at 3700ms.

The entrance is **two animations on one element**, because the arrival has two
channels that want different timings:

| Channel | Duration | Curve |
|---|---|---|
| `cookie-fade` opacity 0 to 1 | `--duration-arrive` 1000ms | `linear` |
| `cookie-lift` 10px rise | `--duration-slow` 360ms | `--ease-out` |

**Opacity carries the whole second, linearly, and that is the point.** An eased
fade spends most of its opacity early. Measured on the first attempt at this,
an ease-in-out over 1s was already at **0.86 opacity by 580ms**, so the last
420ms was invisible and the extra duration bought nothing. Linear spends it
evenly: 0.36 at 360ms, 0.70 at 700ms, still visibly climbing at 850ms. That
even ramp is what reads as smooth, not the duration on its own.

**The rise is short, early, and over before you really see it.** It travels 86%
of its 10px in the first 100ms and settles at 360ms, while the panel is only
about a third visible. Movement is what the eye tracks and what makes an
entrance feel busy; getting it done while the panel is faint leaves the last
two thirds as a still, pure materialisation in place.

A single keyframe set cannot do this: one easing has to serve both channels, so
whichever curve suits the movement then dictates how the opacity is spent. That
is exactly how the first version went wrong.

`--duration-arrive` is deliberately **not** on the interaction scale. Everything
there answers something the visitor just did, and an answer that takes a second
is a slow interface. Nothing is waiting on this one. Past about 1.2s it stops
reading as smooth and starts reading as broken, so 1000ms is near the ceiling.

The **dialog keeps its own faster entrance**, `cookie-in` at `--duration-base`
with its movement intact: a panel that took a full second to answer a button
press would read as lag, not as polish.

Under reduced motion the banner fades at `--duration-fast` with no movement at
all, rather than snapping into existence after a silent three-second wait.

### Behaviour, as tested

| Step | Result |
|---|---|
| Fresh visitor | Banner shown, no cookies set |
| Decline | `1.denied.<ts>`, no language cookie, banner dismissed |
| Switcher after decline | Still works, stores nothing |
| Reopen preferences | Opens as a real modal, toggle reflects the stored decline |
| Accept via panel | `1.granted.<ts>`, save confirmed politely |
| Switcher after accept | `primetrack_language=rw` written |
| Withdraw via panel | `1.denied.<ts>` and the language cookie is gone |
| Return visit with grant + `rw` | `/` redirects to `/rw/`, no banner |
| Deep link `/primesolar/` with `rw` stored | Stays English. The URL is authoritative |

### Accessibility

- Banner is a `role="region"` inside an `aria-live="polite"` wrapper. It
  announces itself and does **not** take focus. Confirmed: focus stays on
  `<body>` when it appears.
- Preferences panel is a native `<dialog>` opened with `showModal()`, so focus
  containment, Escape and inertness come from the platform. Focus moves in on
  open and returns to the control that opened it.
- Every action is a real `<button>`. The toggle is a `<button role="switch">`
  with `aria-checked`, so its state is in the accessibility tree.
- All touch targets are at least 44px, measured at 320px.
- Accept and Decline are rendered at identical width and height. Making refusal
  harder than acceptance is a dark pattern and would undermine the consent.

### Contrast

- Banner body `ink-600` on white: 8.6:1
- Switch state label `ink-500` on `ink-50`: 5.2:1

### Language

The English copy is complete. In Kinyarwanda, only the **actions** are
translated: Emera, Anga, Bika, Funga, and the preferences label. Every one is
marked `@review` and needs native confirmation before launch.

The explanatory paragraphs are deliberately **not** translated and fall back to
English, following the rule already stated at the top of `src/i18n/rw.ts`:
machine-translating copy nobody on this build can check is worse than showing
English. Consent copy is the last place to break that rule. All of it is listed
in `docs/translation-checklist.md`.

### French

The brief listed `en`, `fr` and `rw`. **French was not added.** This site is
built for English and Kinyarwanda: there are no French translations, no French
routes, and no French entry in the switcher or in `hreflang`. Adding a French
option to the cookie system alone would offer a language the site cannot serve.
If French is genuinely wanted it is a separate piece of work covering routes,
translations, `hreflang` and the switcher.

---

## Legal note

This is an engineering description, not legal advice, and it is not a claim of
compliance with any jurisdiction. Rwanda's data protection requirements apply,
and further requirements may apply depending on where the site operates and who
it targets, potentially including the EU and EEA. The banner wording, the
consent approach, the privacy policy and overall compliance should be reviewed
and confirmed by a qualified legal or privacy professional before launch.
