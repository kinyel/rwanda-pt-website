# PrimeTrack Rwanda

The website for PrimeTrack Telematics Rwanda: GPS vehicle tracking, fleet management,
video telematics and fuel monitoring. Built with Astro and React, shipped as static
HTML, bilingual in English and Kinyarwanda.

**Start here:** [`docs/handoff.md`](docs/handoff.md) lists everything still needed
before launch. [`docs/information-architecture.md`](docs/information-architecture.md)
explains why the site is shaped the way it is.

---

## Running it

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>.

```bash
npm run build      # content check, then static build to dist/
npm run preview    # serve the built site
npm run verify     # build + translation status + QA sweep
```

### Configuration

Copy `.env.example` to `.env` and fill in:

| Variable | Purpose |
|---|---|
| `PUBLIC_FORMSPREE_ID` | The form ID from your Formspree endpoint URL. Powers the contact form and the PrimeTIPS signup. Without it both degrade to a labelled email fallback rather than failing silently. |

---

## How the code is organised

```
src/
  assets/images/     every image, by section. README.md there explains replacement
  components/        UI components. Astro by default, React only where interactive
  content/articles/  48 SEO articles migrated from WordPress, as Markdown
  data/              structure and verified facts. No user-facing copy lives here
  i18n/              all user-facing copy, English and Kinyarwanda
  layouts/           the single HTML shell
  page-templates/    full page compositions
  pages/             thin route files. One per URL, per language
  styles/global.css  the design system: colour, type, spacing, motion
```

**Three rules keep this maintainable.**

**1. No user-facing string is written in a component.** Everything comes from
`src/i18n/`, so a Kinyarwanda translation is a data change rather than a code change.
Components receive keys; `useTranslations(locale)` resolves them.

**2. No path is written twice.** Routes live once in `src/data/navigation.ts`, stored
without a locale prefix. `localizePath()` adds `/rw/` when needed. Nothing hardcodes
a language into a URL.

**3. No image path appears in a component.** Every image is imported once in
`src/data/images.ts` and referenced by key. Alt text lives separately in
`src/i18n/en/images.ts`, so replacing a picture never disturbs its accessibility or
SEO text.

### React usage

React is used for three components only: the navigation (mega-menu and mobile
drawer), the contact form, and the fleet challenge selector. Everything else is
static Astro, so crawlers get real HTML and the JavaScript budget stays small.

The homepage version of the challenge selector is deliberately static: eight real
crawlable links rather than an island, which is both faster and better for SEO. The
interactive multi-select lives at `/analyze-your-fleet/`.

---

## Design system

`src/styles/global.css` is the single source of truth for colour, typography, spacing,
radius, elevation and motion. It shares its architecture with the PrimeTrack Nigeria
build; the values are Rwanda's own.

- **Orange** `#f35d01`, read from the live Rwanda site. One step warmer and redder than
  Nigeria's `#ff7000`, which is what lets a single screenshot tell the two apart while
  keeping them the same brand. Contrast ratios are documented inline next to each step,
  with a note on where each is safe to use.
- **Alegreya Sans** throughout, four weights, self-hosted with `font-display: swap`.
  Hierarchy comes from size, weight, spacing and colour, never from effects.
- **Motion** is one easing curve and three durations. Scroll reveals are CSS-only
  (`animation-timeline: view()`), so there is no animation library. Everything respects
  `prefers-reduced-motion`.
- **The hero backdrop** is hand-drawn SVG, roughly 5KB, animating only `transform`,
  `opacity` and `offset-distance`. It switches itself off on Save-Data, 2G and weak
  touch devices. Its geometry is abstract on purpose: it is not a map of Rwanda and the
  moving markers are not live data, because implying either would be a factual claim.

---

## Content rules

The build enforces what is easy to break months from now by editing one string:

- **No em dashes** anywhere in site copy.
- **The warranty is up to 5 years.** Rwanda's term differs from Nigeria's 3 years, and
  the two sites share enough copy that a paste is a real risk.
- **No Nigeria contact details.** Phone, email, office and the NCC regulator are all
  blocked; Rwanda's regulator is RURA.

`npm run build` fails on any of these. Source comments are excluded, so documenting a
rule does not trip it.

Beyond that: nothing on this site was invented. No testimonials, certifications,
partnerships, prices, employee numbers or founding dates, because none are published
anywhere verifiable. Every business fact traces to `src/data/company.ts`, which was
populated from a full crawl of the live site.

---

## Languages

English is the default and unprefixed. Kinyarwanda lives under `/rw/`.

Kinyarwanda is currently **32 of 638 strings**, all interface chrome and all marked
`@review` pending a native speaker. Everything else falls back to English
automatically, so `/rw/` pages are complete and readable today.

```bash
npm run i18n:status   # regenerates docs/translation-checklist.md
```

To add translations, mirror the key path into `src/i18n/rw.ts`. Anything you add wins
immediately; anything you leave out keeps falling back. Business copy was deliberately
left untranslated rather than machine-translated: putting unverified claims about a
real company in front of customers in a language nobody on the build can check is not
a risk worth taking.

---

## Images

14 of 17 site images are placeholders: labelled grey plates at the exact filename and
dimensions the real image will use. Replacing one is a straight overwrite, no code
changes.

See [`src/assets/images/README.md`](src/assets/images/README.md) for the full
checklist, including what each photograph should show.
