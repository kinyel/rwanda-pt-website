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
  /** One platform, drawn as the layers it is made of. */
  | 'layers'
  /** Eight operations standing on one ground, each measured. */
  | 'field'
  /** The unit as an exploded technical drawing. */
  | 'blueprint'
  /** Eight routes arriving at one point. */
  | 'converge'
  /** A contract: three sheets, written, signed and sealed. */
  | 'agreement'
  /** Four shields, one inside the next, around a locked core. */
  | 'shield'
  /** A rosette whose ring is five years long. */
  | 'seal'
  /** Seven people round one table, each connected to it. */
  | 'team'
  /** An open book whose pages turn. */
  | 'manual'
  /** A located vehicle at the end of its route, signalling. */
  | 'signal'
  /** A radar sweep that finds the fleet and flags two of it. */
  | 'radar'
  /** A steering wheel over the road it drives down. */
  | 'drive';

/**
 * WHY EACH FAMILY GETS WHAT IT GETS.
 *
 * ALL OF THEM ARE LINE-WORK, and that is the whole lesson of the first build.
 * Those scenes were shaded solids — plinths, slabs, tiles, filled contours —
 * and on a near-black ground a shaded solid is a dark lump with a rim. The
 * one that worked was the one made of lit lines in space. Lines hold their
 * colour at any size, they never muddy against the ground, and they let the
 * depth behind them show through, which is exactly what sells the depth.
 * Every scene here is drawn, not modelled.
 *
 * `solutions` — the page's own argument is "one platform, five things it does
 *   well", so the hero is that platform drawn as the layers it is made of.
 *   Security and Why PrimeTrack are the same argument about a smaller part
 *   and about the company, so they share it.
 *
 * `industries` — eight verticals, drawn as eight columns of different height
 *   standing on one ground: different operations, same system measuring them.
 *
 * `product` — a product page is about one object, so the hero is that object
 *   as an exploded technical drawing. Services get it too: a service here is
 *   a unit's output, and the unit is a fair picture of where the data starts.
 *
 * `contact` — the one page where every thread of the site is supposed to end,
 *   drawn as exactly that.
 *
 * THE READING PAGES each get a drawing of their own subject. They used to
 *   share one drawing of the land with nothing on it, which said nothing
 *   about any of them. Their heroes are compact (see `PageHero`), so these
 *   are drawn small, beside the heading.
 *   `terms` — the contract itself, signed and sealed.
 *   `privacy` — protection, as layers round a lock.
 *   `warranty` — a seal whose ring is the five years it covers.
 *   `careers` — the team, round one table.
 *   `tools` — the manuals, as an open book.
 *   `blog` and `articles` — one family: every article is about tracking, so
 *   it is PrimeTrack's own mark, a located vehicle signalling.
 *   `analyze` — the diagnosis, as a radar finding the fleet's problems.
 */
export const heroScenes = {
  solutions: 'layers',
  industries: 'field',
  product: 'blueprint',
  contact: 'converge',
  terms: 'agreement',
  privacy: 'shield',
  warranty: 'seal',
  careers: 'team',
  tools: 'manual',
  blog: 'signal',
  articles: 'signal',
  analyze: 'radar',
  /* A job advert for a driver: the wheel. */
  driverAdvert: 'drive',
} as const satisfies Record<string, SceneKind>;
