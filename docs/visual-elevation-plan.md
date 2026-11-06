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

| Page | Concept | Technique |
|---|---|---|
| **Homepage hero** | **A route crossing terrain, in perspective.** Layered ridgelines at real `translateZ` depths, a road threading them, the vehicle riding it as you scroll. The camera dollies and tilts with scroll, so near hills part faster than far ones. | `perspective` + `preserve-3d`, layered SVG ridges, `offset-path`, one `--p` |
| **Products (helix)** | Already a CSS 3D helix. Gains Nigeria's missing depth cues: night ground, aurora wash, star points. | existing helix, extended |
| **Solutions** | **Signal from altitude.** Concentric range rings in perspective, tilted away from the camera. | `rotateX` rings |
| **Industries** | **The wall, given depth.** Tiles on a slight Z-stagger so the lattice has thickness. | `translateZ` per tile |
| **Product pages** | **Exploded device on a plinth.** The unit lifted off a contour floor. | `preserve-3d` stack |
| **Contact** | **Convergence.** Routes from the eight industries arriving at one point. | SVG paths + depth |

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
