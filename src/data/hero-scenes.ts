/**
 * Which camera each family of pages gets.
 *
 * Every page but the homepage shares one hero component, so without this the
 * site has one piece of real geometry in it and 108 copies of a gradient. Each
 * scene below is a different camera on the SAME landscape rather than a
 * different object, which is what keeps the families distinct from each other
 * and the site coherent as one product. The compositions themselves, and the
 * reasoning behind each, live in `components/PageHeroScene.astro`.
 *
 * The mapping is here rather than in the templates for two reasons: it is the
 * only place you can read the whole scheme at once and see that two families
 * have not accidentally been given the same shot, and the type it exports is
 * what stops a template asking for a scene that does not exist.
 */
export type SceneKind =
  /** Coverage seen from directly above the thing doing the covering. */
  | 'rings'
  /** The industry lattice, turned so its stagger has thickness. */
  | 'wall'
  /** A unit taken apart and held above a contour plinth. */
  | 'device'
  /** Eight routes arriving at one point. */
  | 'converge'
  /** The hill and nothing else, for pages a loud object would be wrong on. */
  | 'terrain';

/**
 * WHY EACH FAMILY GETS WHAT IT GETS.
 *
 * `solutions` — the five outcome areas are all answers to "how much of my
 *   fleet can you see, and from where", so the hub and the security page get
 *   reach drawn as altitude. Why PrimeTrack is the same argument made about
 *   the company rather than the product, so it shares the shot.
 *
 * `industries` — the eight verticals are already a wall of tiles further down
 *   both pages. The hero is that wall seen from the side, which ties the top
 *   of the page to the body of it.
 *
 * `product` — a product page is about one object, so the hero is that object,
 *   exploded, standing on the landscape. Services get it too: a service here
 *   is a unit's output, and an exploded unit is a fair picture of where the
 *   data comes from.
 *
 * `contact` — the one page where every thread of the site is supposed to end,
 *   drawn as exactly that.
 *
 * `quiet` — warranty, careers, tools, the blog index, the legal pages and 404.
 *   A loud object on a privacy policy is a mistake, so these get the hill with
 *   none of the instrumentation. Still 3D, still the same world, turned down.
 */
export const heroScenes = {
  solutions: 'rings',
  industries: 'wall',
  product: 'device',
  contact: 'converge',
  quiet: 'terrain',
} as const satisfies Record<string, SceneKind>;
