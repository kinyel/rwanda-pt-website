# PrimeTrack Rwanda — information architecture

The route map, the navigation, and the reasoning behind both. Written during the
rebuild and kept as the record of why the site is shaped this way.

---

## 1. Route map

Every English path below exists on the live WordPress site today and is reproduced
exactly, trailing slash included. Astro runs with `trailingSlash: 'always'` and
`build.format: 'directory'` so output matches one to one.

| Route | Page | Home in nav | Source |
|---|---|---|---|
| `/` | Home | — | Rebuilt (§3) |
| `/video-tracking/` | Video Trackers, Ai-PRIME | Products | Live page |
| `/primesolar/` | Solar Trackers, PrimeSOLAR | Products | Live page |
| `/fuelmanagement/` | Fuel Trackers | Products | Live page |
| `/containertracking/` | STAR Trackers | Products | Live page |
| `/fleettracking/` | Fleet Trackers | Products | Live page |
| `/ectss/` | eCT Systems | Products | Live page |
| `/fleet-analytics/` | Fleet Analytics | Services | Live page |
| `/api-integrations/` | API Integrations | Services | Live page |
| `/drivermonitoring/` | Driver Monitoring | Services | Live page |
| `/contactus/` | Contact | Top level | Live page |
| `/why-choose-prime/` | Why PrimeTrack | Top level + footer | Live page |
| `/prime-warranties/` | Prime Warranties | Footer | Live page |
| `/prime-careers/` | Prime Careers | Footer | Live page |
| `/tools/` | Support manuals | Footer | Live page, empty upstream |
| `/terms-of-service/` | Terms of service | Footer | Live page |
| `/privacy-policy/` | Privacy policy | Footer | Live page |
| `/analyze-your-fleet/` | Fleet challenge selector | Linked from home | Live page |
| `/blog/` | Article index | Top level, "Insights" | **New** |
| `/{article-slug}/` × 48 | Migrated SEO articles | Blog index | Live posts |
| `/404/` | Not found | — | **New** |
| `/rw/...` | Kinyarwanda mirror of all of the above except articles | — | **New** |

Two promotions from the live structure:

- **Why PrimeTrack** moves from footer-only into the primary nav. It is the strongest
  trust page on the site (seven advantages, RURA licensing, warranty) and client
  confidence is a primary objective. It stays in the footer too. No URL change.
- **Insights** (`/blog/`) is new. The 48 articles rank on Rwanda-specific queries but
  had no index and no internal links pointing at them: they were reachable only from
  search results. They now have a hub.

Not rebuilt: `/egy/` (empty stub, 301s to the Nigeria Egypt page, which is where the
country switcher has always pointed) and `/vras/` (broken upstream, and removed from the site entirely; see handoff §4).

---

## 2. Navigation

### Desktop

```
[logo]   Products ▾   Services ▾   Why PrimeTrack   Insights   Contact      EN|KIN   [Contact us]
                                                            ─────────────────────────────────────
utility row:                                        +250 793 017 263  ·  RWA ▾
```

The three global controls are designed as a set with a deliberate loudness order:

1. **Language (EN | KIN)** is the loudest. It is a segmented control, not a dropdown:
   with exactly two languages it shows both options and the current state at a glance,
   costs one tap instead of two, and needs no JavaScript. Present at every breakpoint.
2. **Region (RWA ▾)** is quiet and collapsed, in the utility row. Switching country is
   a rare action and should not compete with language for attention.
3. **The CTA** is the only filled button in the header, so it stays unambiguous.

Mega-menus open on hover **and** on click, Enter or Space, since hover alone reaches
neither keyboard nor touch. They deliberately do not open on focus, or tabbing through
the header would flap every menu open in turn. Escape closes and returns focus to the
trigger. Closing is delayed ~120ms on mouse-leave so a diagonal move from trigger to
panel does not dismiss it mid-travel.

The Products panel carries a trust rail: RURA-licensed, up to 5-year warranty,
24/7 PrimeCARE. Those three facts do more work next to a product list than anywhere
else on the site.

### Mobile

Full-height drawer, portalled to `<body>`. Products and Services become accordions.
The region switcher and phone number appear as tappable rows inside it. Focus is
trapped, Escape closes, body scroll is locked, touch targets are at least 44px.

**The language switcher stays in the collapsed header, never inside the drawer.**

---

## 3. Homepage order, and why

The live site runs: hero → a checkbox list of fleet challenges that does nothing →
value proposition → four capability cards. The Nigeria rebuild runs: hero → descriptor
band → stats → products. Rwanda does neither.

| # | Section | Why here |
|---|---|---|
| 1 | Hero journey | What we do, then what a unit reports, carried across both by one pinned scroll-driven rail |
| 2 | Challenges | The visitor's own problem, first. Eight real links into the page that solves each one |
| 3 | Value proposition | Solutions / Service / Simplicity, as the answer to what was just asked |
| 4 | Products | All six, as a CSS 3D helix on a light ground, with a synced index that doubles as navigation |
| 5 | Video telematics | Flagship product, full-bleed dark |
| 6 | Fuel monitoring | Second feature, light split, opposite image side |
| 7 | Services | What happens to the data once it arrives |
| 8 | Platform capabilities | Mobile apps, driver behaviour, preventive maintenance, speed limiters |
| 9 | Why PrimeTrack + stats | Credibility, with the numbers |
| 10 | Clients | Ten named organisations |
| 11 | CTA | Conversion |

**Section 4 is a helix, not a grid.** The six product families sit on a vertical
spiral in CSS 3D, ported from the Nigeria PRODUCTS section, with a paired index
list beside it whose active entry tracks the card facing the camera. Below 768px,
with reduced motion, or with JavaScript off, it is a plain card grid and the index
is still a working list of links. See §7.

**The single biggest change is section 2.** The old site's most interesting element
was its list of fleet pain points, and it was wasted on a control that led nowhere.
Making each one a real link into the relevant product turns the homepage's weakest
moment into its most useful, adds eight internal links to commercial pages, and needs
no JavaScript. The interactive multi-select version survives at `/analyze-your-fleet/`,
whose URL is preserved.

Tone alternates deliberately (dark, light, tint, light, ink, light, tint, dark, light,
tint, ink) so a long page stays navigable without rules drawn across it.

---

## 4. Language and URL strategy

English is the default and stays unprefixed at the root, so every URL that ranks today
keeps its exact path. Kinyarwanda lives under `/rw/` (`rw` is the ISO 639-1 code, which
makes it correct for the `lang` attribute and for hreflang too).

- Paths are stored **once**, locale-free, in `src/data/navigation.ts`. `localizePath()`
  turns them into URLs at render time. No component hardcodes `/rw/`.
- Switching language keeps the visitor on the same page: the switcher strips the locale
  off the current path and re-localizes it.
- The choice is remembered in `localStorage` and applied before first paint by an
  inline script, once per session, so a shared link is never hijacked on later
  navigation.
- Every page emits `hreflang` for `en-RW`, `rw-RW` and `x-default`, plus a
  self-referencing canonical.
- Articles are English only and emit no alternates, because advertising a `/rw/` URL
  that does not exist is worse than advertising none.

---

## 5. Keyword mapping

One commercial cluster per page, so pages do not compete with each other.

| Route | Primary cluster |
|---|---|
| `/` | vehicle tracking Rwanda · GPS tracking Rwanda |
| `/fleettracking/` | fleet management system Rwanda · fleet tracking |
| `/video-tracking/` | video telematics · vehicle CCTV Rwanda |
| `/primesolar/` | solar GPS tracker · truck tracker Rwanda |
| `/fuelmanagement/` | fuel monitoring · fuel theft detection Rwanda |
| `/containertracking/` | container tracking · cargo tracker Rwanda |
| `/ectss/` | electronic cargo tracking system Rwanda |
| `/fleet-analytics/` | fleet analytics · telematics reporting |
| `/drivermonitoring/` | driver behaviour monitoring Rwanda |
| `/api-integrations/` | telematics API integration |
| `/contactus/` | GPS tracker Kigali · contact |
| Articles | the informational long tail |

Internal linking is chosen, not generated: each product points at the services that
operate on its data and the products a buyer would genuinely compare it against; each
service points back at the products that feed it; each article points at the commercial
pages it supports. The graph lives in `src/data/page-config.ts`.

---

## 6. Rules enforced at build time

`npm run build` runs `scripts/check-content.mjs` first and fails on:

- an em dash anywhere in site copy
- a 3-year warranty claim (Rwanda publishes up to 5 years; Nigeria is the 3-year site)
- a Nigeria phone number, email, office location or the NCC regulator on the Rwanda site

Source comments are excluded, so documenting a rule does not trip it.

`npm run qa` then sweeps the built HTML for missing titles or descriptions, missing or
duplicate `h1`, wrong `lang`, missing hreflang, images without `alt`, broken internal
links, non-descriptive link text, and em dashes in rendered output.


---

## 7. Motion: the two scroll-driven pieces

Both are native CSS. There is no GSAP, no ScrollTrigger, no Lenis and no
animation library anywhere in the project.

### The hero (`HeroStory.astro`)

Three scenes on one pinned stage, each copy on the left and an object on the
right, all drawn in CSS 3D (no WebGL, no images) in one material: lit orange
line work on dark glass, on a shared dotted floor under one camera.

1. **Overview.** The h1 over Rwanda drawn as nothing but its roads and towns
   (projected from real longitude and latitude): no outline, fill or dots.
   No road shows until you scroll; then each draws itself in, and a
   vehicle crosses the country on the Central Corridor with its live position
   standing over it. The vehicle is hidden until the reader scrolls.
2. **Fuel.** A tank cut open with its probe. The level holds, drops sharply,
   and the drop is flagged. The fuel infographic stays on the page as this
   scene's thumbnail and opens full size.
3. **Tracking.** The unit opens into its four layers, each lighting as its
   report is named on the left.

The script writes `--p` (section progress) and, per scene, `--in` (presence)
and `--t` (progress through it); everything else is CSS reading those. A tiny
inline script decides before the first paint whether the stage pins, so the
hero never jumps when the main script arrives. Without JavaScript, under
reduced motion, or on a phone on its side, the scenes are three still blocks
in their finished state.

The section keeps the `hero-journey` class and sets `data-journey-live` while it
plays, which is what the product helix reads to start one screen early beneath
it; the stage fades to black over its last stretch and the helix fades up from
that black.

### The helix (`ProductSpiral.astro`)

Each `.spiral-item` places itself from its own `--i`: rotate by
`--i * --step-angle`, push out by `--radius`, rise by `--i * --step-rise`. The
ring counter-rotates and descends by `--k`, the fractional card index derived
from `--p`. Card facing is `cos()` of the angle from the camera, so the fade is
pure CSS with no per-card JavaScript.

JavaScript writes exactly one value, `--p`, batched into a `requestAnimationFrame`
and skipped entirely when the section is off screen.

Same technique as Nigeria, different parameters, which is what makes them read as
siblings rather than the same shot twice:

| | Nigeria | Rwanda |
|---|---|---|
| Cards | 5 | 6 |
| Angular step | 72deg | 60deg |
| Radius (sm/md/lg) | 8 / 11.5 / 14.5rem | 8.5 / 12 / 15rem |
| Step rise | 4.75 / 7 / 8rem | 5.25 / 7.75 / 9rem |
| Perspective | 760 / 1000 / 1200px | 820 / 1080 / 1320px |
| Camera origin | 50% | 50% 38% |

Six steps at 60 degrees with a taller rise is a denser, steeper staircase, and
the raised camera looks down it rather than at it.

### Degradation, for both

Checked in this order, and any one of them yields the resting state, which is the
finished design rather than a broken one:

1. No `html.is-loaded` class (JavaScript off)
2. `prefers-reduced-motion: reduce`
3. No `animation-timeline: view()` support (Safari, Firefox today)
4. For the helix, viewport below 768px; for the journey, below 1024px (the rail
   is hidden and its four stops read as an ordinary list, which is the same
   content)

`is-loaded` is set synchronously in `<head>` rather than on
`requestAnimationFrame`, so it exists before first paint and does not depend on a
frame ever being rendered.

On viewports under 640px the card runs full width, so the entry is halved (7
degrees rather than 14): the same rotation would swing its corners far enough
for the hero's overflow clip to eat them, and the motion should read as a card
settling rather than one being trimmed by the edge of the screen.

Only `transform`, `opacity` and `filter` are animated. Nothing can move layout.


---

## 8. Two clipping bugs, and why `clip` is not `hidden`

Both of these produced visible breakage and both had the same cause, so they are
worth recording together.

**Cards escaping the helix.** The helix rises as it turns, so at six steps the
upper cards sit roughly 750px above the stage. With nothing clipping them they
left the section entirely and floated over the section above it. The fix is
`overflow: clip` on `.spiral-viewport`, the sticky element: it is exactly the
visible band, so cards are cut at the edge of the screen where the cut cannot be
seen.

**The journey rail refusing to pin.** `overflow: hidden` on `.hero-journey` was
added to contain terrain overspill, and it silently killed the whole effect. A
scroll container becomes the scrollport its sticky descendants position against,
so the rail was sticky relative to a box that never scrolls: it rode the page
instead of pinning, and the journey stopped tracking scroll. Measured before and
after a 700px scroll, the rail moved exactly 700px.

`overflow: clip` fixes both. It clips without creating a scroll container, so
sticky descendants keep referencing the document. **On any ancestor of a sticky
element, use `clip`, never `hidden`.**

---

## 9. Light surfaces

The hero and the helix both sit on light grounds. Two things that had to change
when they did:

- **The depth falloff.** On dark, cards facing away from the camera faded to 0.28
  opacity and read as receding. On a light ground a white card at 0.28 washes out
  into the background instead. The floor rose to 0.46 and a blur derived from the
  same `--face` value took over the work, so far cards recede as depth of field
  rather than as fog.
- **The index numbers.** `ink-300` at label size lands at 2.6:1 on the `ink-50`
  ground, well under AA. They are now `ink-500` at 5.5:1, which still reads as
  secondary beside the `ink-900` label next to it. Every changed pairing was
  re-measured; the full set passes AA.

With the hero on white, tone alternation across the homepage was re-set to
white / tint / white / tint before the first dark section. Leaving the challenges
section white as well ran four light sections together into one flat block.
