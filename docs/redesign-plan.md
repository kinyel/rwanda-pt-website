# PrimeTrack Rwanda — solution-first redesign

Steps 1 and 2 of the brief: what exists, what must survive untouched, and the
information architecture the rebuild targets. Written before any code changes.

---

## 1. Audit: what exists today

**87 built pages.** 19 English routes, 19 Kinyarwanda mirrors, 48 migrated
articles, one 404.

| Group | Routes |
|---|---|
| Home | `/` |
| Device families | `/video-tracking/` `/primesolar/` `/fuelmanagement/` `/containertracking/` `/fleettracking/` `/ectss/` |
| Services | `/fleet-analytics/` `/api-integrations/` `/drivermonitoring/` |
| Company | `/contactus/` `/why-choose-prime/` `/prime-warranties/` `/prime-careers/` `/tools/` |
| Legal | `/terms-of-service/` `/privacy-policy/` |
| Tools | `/analyze-your-fleet/` |
| Content | `/blog/` + 48 articles at root-level slugs |
| Kinyarwanda | `/rw/` mirror of everything except articles |

**Verified business facts** (`src/data/company.ts`, the only place they live):
RURA licence, warranty up to 5 years, 24/7 PrimeCARE, 5,000+ active trackers,
15+ years, 5+ countries, ten named client organisations, Kigali address,
`+250 793 017 263`, `admin@primetrack.rw`. Nothing outside this file is a fact.

**Working systems that must keep working:** language switching (URL-authoritative,
preference applied only at the English homepage), the country switcher, hreflang
and canonicals on all 86 indexable pages, the sitemap, the redirect table, the
content check that fails the build on em dashes / wrong warranty term / Nigeria
contact details.

---

## 2. The hero SVG: exactly what is frozen

The animation lives in `src/components/HeroJourney.astro`, which also contains
the hero copy and the report presentation. The boundary is by CLASS, not by line
number: line numbers rot, and this file has been edited several times since.

**Read-only. Do not touch:**

| What | Where |
|---|---|
| `.journey-rail`, `.journey-stage`, `.journey-svg` | markup and CSS |
| `.journey-trace`, `.journey-marker`, `.journey-label`, `.journey-vehicle` | markup and CSS |
| `ROUTE`, the `waypoints` array (`at` / `x` / `y` / `side`) | frontmatter |
| The `<script>` that writes `--p` | end of file |
| `--lit` / `--near` / `--dist` as they apply to markers and labels | driven block |

**Editable:** everything in the left column. `.journey-panel` (hero copy),
`.journey-report` and everything inside it, `.journey-wash`, and the section's
own layout variables.

**The one thing that couples them: section height.** `--p` is
`-rect.top / (rect.height - innerHeight)`, so the section's total height sets
how much scroll the drive is spread over. Anything that changes the left
column's height changes that number. It is the only channel through which an
edit on the left can reach the rail on the right.

### What the report presentation cost, measured

Building the pinned presentation needed scroll to pin through, so the section
grew. Measured at 1280x800:

| | Before (list) | After (drum) |
|---|---|---|
| Section height | 1.96 screens | 3.65 screens |
| Drive travel | 693px | 2120px |
| Waypoints at | 8 / 36 / 64 / 92% | 8 / 36 / 64 / 92% |
| `offset-distance` at `--p` | equal to `--p` | equal to `--p` |
| Rail pin | sticky, `top: var(--header-h)`, one screen tall | unchanged |
| Stage aspect ratio | `360 / 1000` | unchanged |

Verified by reading `offset-distance` and `stroke-dashoffset` at
`--p` = 0, .08, .36, .5, .64, .92, 1: the vehicle sits at 0%, 8%, 36%, 50%,
64%, 92%, 100% and the trace draws 1 to 0. The route, the waypoints, the
markers, the labels, the pin and the aspect ratio are all as they were.

**What did change is the pace.** The same drive is now spread over 2.65 screens
of scroll instead of 0.96, so the vehicle covers 5.7% of the route per 100px of
scroll where it used to cover 14.4%. Nothing about the animation was retimed;
it was given more room. `--report-track` in the component (currently `280svh`)
is the single number that sets this, and lowering it speeds the drive back up
in exact proportion.

### The descriptor band

Removing it from the hero was agreed and done. It sits under the hero as its own
band now. Its removal shortened the section slightly and shifted the drive's
mapping by about 3%, which was flagged and approved before the change.

---

## 3. Information architecture

### Navigation

```
utility   +250 793 017 263 · About · Careers · RWA ▾
main      [logo]  Solutions ▾  Industries ▾  Products ▾  Resources ▾  Contact
                                          EN|KIN   [Request a demo]
```

Five nav items, two switchers and one CTA is more than the current header
carries. Company moves to the utility row rather than becoming a sixth dropdown,
which keeps the main bar at the same density it has now. The language switcher
stays in the collapsed mobile header; Company and region move into the drawer.

### The URL map

**The important result: not one existing URL moves.** Four of the five solutions
already have ranking pages, so they are elevated in place rather than recreated
at a new path.

| Solution | URL | Origin |
|---|---|---|
| Fleet Tracking | `/fleettracking/` | Existing, rewritten outcome-first |
| AI Video Telematics | `/video-tracking/` | Existing, rewritten outcome-first |
| Fuel Monitoring | `/fuelmanagement/` | Existing, rewritten outcome-first |
| Fleet Analytics and Insights | `/fleet-analytics/` | Existing, rewritten outcome-first |
| Vehicle and Asset Security | `/solutions/vehicle-security/` | **New.** Draws on the STAR, PrimeSOLAR and eCTS content |
| Solutions index | `/solutions/` | **New** |

Hardware keeps its own pages, so a buyer who wants the device still lands on it:
`/primesolar/`, `/containertracking/`, `/ectss/`. `/drivermonitoring/` and
`/api-integrations/` stay where they are and are linked from the solutions they
support. Nothing is orphaned and nothing competes with itself: each solution page
owns its keyword cluster, each hardware page owns its device.

| Industries | URL |
|---|---|
| Index | `/industries/` |
| Construction | `/industries/construction/` |
| Food and beverage | `/industries/food-and-beverage/` |
| Emergency services | `/industries/emergency-services/` |
| Logistics and supply chain | `/industries/logistics/` |
| Fuel distribution and haulage | `/industries/fuel-distribution/` |
| Transportation | `/industries/transportation/` |
| Passenger and transit | `/industries/passenger-transit/` |
| Pharmaceutical | `/industries/pharmaceutical/` |

Resources: `/blog/` and `/tools/` already exist and are reused. `/faqs/` is new.

Every new route gets its `/rw/` mirror and hreflang pair, exactly as the existing
ones do.

---

## 4. Homepage sequence

```
1  Hero                     cleaned up. SVG untouched
2  Industries showcase      NEW, the eight verticals you supplied
3  TRACK / PROTECT /        NEW four-stage scroll narrative
   OPTIMISE / UNDERSTAND
4  Solutions                the five, outcome-led
5  Products                 the existing helix, unchanged
6  Platform capabilities    existing
7  Why PrimeTrack + stats   existing
8  Clients                  existing, real logos
9  CTA                      existing
```

The existing challenge grid and value-proposition trio are absorbed: the
challenges become the entry points on the solution pages they already route to,
and Solutions / Service / Simplicity moves to the About page, where positioning
copy belongs. No content is lost, and the homepage drops from twelve sections to
nine.

---

## 5. Decisions I have made

**The new section is Industries, not Solutions.** The eight entries you supplied
(Construction, Food and Beverages, Emergency Services, and so on) are industry
verticals. Section 6 of the brief separately defines Solutions as the five
capability areas. Putting the eight under a "Solutions" heading would collide
with that and confuse both the nav and the keyword map. They ship as Industries,
placed directly after the hero as you asked.

Proposed title: **"Built for how Rwanda actually moves"**, eyebrow "Industries we
serve". It says the thing the section is for, it is specific to this market, and
it is not a category label.

**"Oil and Gas" is renamed.** Your own brief flags that upstream oil and gas does
not exist in Rwanda. The supplied copy for it describes cargo visibility and
journey monitoring, which is exactly fuel distribution and haulage. It ships as
**Fuel Distribution and Haulage** with the supplied copy intact.

**No Case Studies page.** Section 6 lists it, section 9 forbids inventing one. No
genuine case studies exist in anything I have. The nav slot is left out rather
than filled with a stub. Say the word and it goes in the moment you have one.

---

## 6. What I need from you

1. **The descriptor band.** Three options:
   a. **Leave it.** Zero risk to the SVG, hero stays slightly busier
   b. **Move it below the hero** into its own thin band. Declutters the hero, and
      makes the journey section exactly two panels tall, which is cleaner. Costs a
      ~3% shift in the journey's scroll mapping
   c. **Delete it.** Same 3% shift, and six verified descriptors are lost
   My recommendation is (b). It is the only one that both declutters and leaves
   the journey section's height defined purely by its panels. But it does touch
   the animation's timing, so it is your call.

2. **Primary CTA wording.** "Request a demo" or "Talk to an expert". The current
   site offers neither, so this is a new commitment. "Request a demo" implies a
   demo process exists; "Talk to an expert" is safe either way.

3. **Real assets for the four-stage narrative.** Stage visuals want real platform
   screenshots. Without them I will build the composition from the same honest
   abstract vocabulary the hero uses, and mark the slots in the placeholder list.

---

## 7. Order of work

1. Nav and IA scaffolding, new routes, i18n namespaces
2. Industries: index, eight pages, homepage showcase section
3. Hero cleanup, within section 2's boundary
4. Four-stage scroll narrative
5. Solution pages rewritten outcome-first, plus the new security page
6. Trust, FAQs, internal linking
7. SEO pass: titles, meta, schema, hreflang, sitemap
8. Responsive, reduced-motion and both languages
9. Regression against brief section 15

---

## 8. Status

### Done

| Item | Notes |
|---|---|
| Audit and IA | This document, sections 1 to 7 |
| Hero cleanup | Headline down to four words, one-sentence lead, one primary and one secondary action. Descriptor band lifted out |
| **Hero SVG** | **Verified unchanged.** Rail, stage, road, 4 markers, 4 labels, vehicle and script all byte-identical; still pins throughout; still drives 0 to 100% across the section. See "The hero report sequence" below for the one thing that did change, which is the section's height |
| Hero report sequence | The left column under the headline rebuilt as a pinned scroll presentation, locked to the rail's waypoints |
| Industries showcase | New woven tile wall directly under the hero, "Built for how Rwanda actually moves" |
| Industry pages | Index plus eight sector pages, both locales, 18 new routes |
| Solutions layer | `/solutions/` index and the new `/solutions/vehicle-security/`, both locales |
| Navigation | Solutions, Industries, Products, Services, Contact, with "Talk to an expert" as the primary action |
| Route map | Extracted to `src/data/routes.ts` to break an import cycle. **No existing URL moved**: all 20 verified still built |

109 pages, 0 QA errors, 0 em dashes, content check clean, language switching verified on the new routes.

### Remaining

In brief order, not yet built:

1. **The four-stage scroll narrative** (TRACK / PROTECT / OPTIMISE / UNDERSTAND).
   The largest single remaining piece. Needs the pinned-stage treatment and a
   visual composition per stage
2. **Outcome-first rewrites** of the four existing solution pages. They are
   currently the original product and service copy, correct but specification-led
3. **FAQs page.** Route reserved at `/faqs/`, no content written
4. **Trust section expansion.** Currently the existing stat band and client
   logos; brief section 9 asks for more, but only where genuinely verifiable
5. **Article internal linking** into the new solution and industry pages
6. **Kinyarwanda** for the new strings. 635 pending, listed in
   `docs/translation-checklist.md`

### The hero report sequence

The left column below the headline was rebuilt as a scroll presentation. It is
in the same place it always was: the left column of `.hero-journey`, directly
under the hero. It did not move to another section and it did not become a card.

**What it is.** A pinned instrument. A meter fills with the trip, a counter runs
`01 / 04`, and a strip of four reports glides up by exactly one row each time the
vehicle on the right reaches a waypoint. A read head holds the report being
delivered at a fixed line and never moves; the strip moves past it. The four
reports carry a refrain that escalates: *you know where it is, you know what it
is burning, you know how it is being driven, you know what happened*. When the
last one lands, the lead sentence is replaced in place by the closing line.

Both columns read off the same `--p`, so the report being delivered and the
waypoint being reached are the same event and cannot drift apart. Measured at
1440x900: reports settle at p = 0.00, 0.44, 0.72 and 1.00, which is exactly 0.08
after each of the rail's waypoints at 0.36, 0.64 and 0.92.

**What this cost the rail, stated plainly.** The rail's markup, classes, styles,
path, waypoint values, aspect ratio, sticky behaviour and driving script are
byte-identical: verified by diffing all 18 rail CSS rules and the whole right
column and script before and after. The single edit inside that region was
deleting `.journey-list-item` from two grouped selectors, because the list it
referred to no longer exists; both declaration blocks are unchanged.

What did change is the section's HEIGHT. A pinned presentation needs scroll to be
pinned through, and there is no way to give it any without lengthening the
section, because 8% of the section is always inside the first screen. The section
went from 1.96 screens to 3.67. The vehicle still starts at 0%, still finishes at
100%, still reaches its four waypoints at 8, 36, 64 and 92%, and still pins
throughout: same route, same choreography, spread over 2400px of scroll instead
of 693px. It plays more slowly. `--report-track` in `HeroJourney.astro` is the
single number that sets it.

**Two bugs found and fixed during the build**, both worth remembering:

- `.journey-panel` centres its content, which is correct for the headline screen
  and wrong for a sticky one. A sticky element starts pinning from its static
  position, so centring the stage inside a 2016px track parked it 708px down and
  it did not pin until p = 0.64, by which point most of the drive was over. The
  track needs `justify-content: flex-start`.
- Fixed-height rows collide the moment a body wraps to a third line, which it
  does at 1024px and will do again in Kinyarwanda. The strip uses
  `grid-auto-rows: 1fr` instead, so every row is exactly as tall as the tallest
  and one row is always exactly 25% of the strip. The glide translates by that
  percentage, so the read head lands on a row boundary at every width.

**Degradation.** Every driven rule sits inside both `@media (width >= 64rem)` and
`@media (prefers-reduced-motion: no-preference)`, and is scoped to
`[data-journey-live]`. Under a narrow screen, reduced motion or no JavaScript the
section is a heading, two sentences, two figures and four numbered reports,
stacked and complete, with the taller track never applied. Verified at 375px.

### Placeholder images still outstanding

Unchanged from before: 14, listed in `src/assets/images/README.md`. The industry
and solution pages added so far are typographic and use none, so nothing new was
added to that list.
