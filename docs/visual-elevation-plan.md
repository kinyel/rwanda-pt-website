# Visual elevation: plan

Written before any code, per the brief. Two decisions were taken by the client
before work started, and both narrow the problem usefully.

## The two decisions

**1. The hero is unfrozen.** It had been read-only through three previous
briefs. The client has now released it so the hero can become the centrepiece
the brief asks for. The route-journey concept survives; the visual is rebuilt.

**2. CSS 3D and SVG, no WebGL.** Roughly 0 KB of added JavaScript.

That second decision is better supported than it might look. The brief names
primetracknigeria.com as the quality benchmark, so I audited it:

| | Nigeria benchmark |
|---|---|
| three.js / Spline / WebGL | **none** |
| `<video>` | **none** |
| Scripts on the homepage | **3**, one of them Cloudflare analytics |
| `<canvas>` | 1, and it is 2D, not WebGL |
| `<svg>` | **208** |

Its premium feel is SVG, CSS 3D transforms and restraint. Its visual vocabulary
is `rd-tilt`, `rd-glow`, `rd-orbit` for the hero radar, and `spiral-night`,
`spiral-aurora`, `spiral-points` for the helix. So "match this benchmark" and
"add a 3D engine" were pulling in opposite directions, and the benchmark wins.

Rwanda ships 257 KB of JS today. three.js alone would have been about 150 KB
gzipped on top, on a site whose own code comments record that a large share of
its audience is on 3G.

## The organising idea: a thousand hills

Rwanda is the land of a thousand hills, and the design system already committed
to contour geometry as the local substrate, for an honest reason recorded in
`global.css`: terrain genuinely shapes fleet work here, because gradient drives
fuel burn and hills drive route times. It reads as elevation data rather than
as scenery.

That gives the site a Rwandan identity that is structural rather than
decorative, and it is the thing Nigeria's flat coordinate grid and radar cannot
be. **Nigeria is a plane. Rwanda is a landscape.** Every 3D concept below is a
different way of looking at that landscape, which is what keeps the pages
distinct from each other and the site coherent as one product.

## Per-page concepts

Each is a different camera on the same world, not a repeated object.

**All of it is built.** The table records what shipped, which is the plan
with three deliberate departures, noted underneath.

| Page | Concept | Where it lives |
|---|---|---|
| **Homepage hero** | **A route crossing terrain, in perspective.** A laminated relief model at real `translateZ` depths, a road cut across it, the vehicle riding it as you scroll, and the rock going to glass while the vehicle is inside it. | `HeroRelief.astro` |
| **Products (helix)** | The existing CSS 3D helix, plus the depth cues it was missing: cool aurora far back, 26 star points through the middle distance, and a tilted contour ground with a pool of light under the spine. | `ProductSpiral.astro` |
| **Solutions**, security, why PrimeTrack | **Signal from altitude.** Range rings in perspective, each stepping *down* as it widens, with a mast at the centre. | `PageHeroScene` `rings` |
| **Industries** hub and verticals | **The wall, given depth.** Tiles on a Z-stagger, turned on `rotateY`, each with a real side face. | `PageHeroScene` `wall` |
| **Product and service pages** | **Exploded unit on a plinth.** The unit taken apart above a contour floor, lit face and lens on top, aerial above. | `PageHeroScene` `device` |
| **Contact** | **Convergence.** Eight routes arriving at one point, bowed alternately off their own straight line. | `PageHeroScene` `converge` |
| Warranty, careers, tools, blog, legal, 404 | **The hill and nothing else.** A loud object on a privacy policy is a mistake. | `PageHeroScene` `terrain` |
| Articles | The same hill, in the gutter beside the headline, absolutely positioned so it costs no height. | `ArticlePage.astro` |

### Three departures from the plan, and why

**Services share the products' camera.** The plan gave a scene to product
pages and said nothing about the three service pages. A service here is a
unit's output, so an exploded unit is a fair picture of where the data comes
from, and inventing a seventh composition to avoid a repeat would have been
the wrong kind of variety.

**Articles get a background motif, not a feature object.** Every other inner
page puts its scene in a second grid column. Article headlines run to 137
characters and the h1 is given 76ch to do it in; at 58% of the width the
longest wrap to six lines. A decorative object that costs a reader two extra
lines of headline is a worse page. It sits in the gutter instead, and on a
phone it goes to the bottom-right corner beside the byline.

**Nothing animates except one arrival.** The scenes are static compositions
with a single 760ms entrance on the whole scene, disabled under reduced
motion. The benchmark's premium feel is restraint, and a site of perpetually
turning objects is a different, worse thing.

### The lesson that cost the most time

A 1px edge on a plane tilted 62deg is 0.47px once projected, and a
half-pixel line on a near-black field is a rumour. Two of the five scenes and
the helix's new ground all rendered invisible on their first pass, and every
one of them looked like a colour problem. Line weights in a tilted scene are
specified for their **final** size, and any camera steeper than about 60deg
has to earn it.

## Non-negotiables carried from the brief

- **Hero gets the most attention.** It is the centrepiece.
- **No page's 3D is hidden on mobile.** Each gets a mobile composition, not a
  `display: none`.
- **SEO is preserved exactly.** No URL, title, description, canonical, heading
  or structured-data change. Verified by diffing the build before and after.
- **Reduced motion** resolves to a finished static composition everywhere.
- **No layout animation.** Transform, opacity and filter only.

## How SEO is protected

The visual work touches presentation, not content. To prove that rather than
assert it, I snapshot every page's URL, title, meta description, canonical,
hreflang set and heading outline before starting, and diff the same set after.
Any difference has to be deliberate and explained, or it is a regression.
