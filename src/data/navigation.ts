import type { ImageKey } from './images';
import { industries as industryList, industryPath as industryPathOf } from './industries';

/**
 * Route map and navigation structure.
 *
 * URL RULE: every path below is exactly what exists on the live WordPress site
 * today, trailing slash included. Nothing is "tidied up", because every one of
 * these URLs is already indexed. The only new routes are /blog/ (an index for
 * articles that currently have no home) and /404/.
 *
 * Paths are stored locale-free. localizePath() in src/i18n/paths.ts turns them
 * into /rw/... when needed, so no component ever hardcodes a locale.
 */

export { routes, type RouteKey } from './routes';
import { routes } from './routes';
import { company } from './company';


/**
 * A navigation entry. `titleKey` and `descriptorKey` are dotted paths into the
 * translation dictionary, resolved at render time, so no label is hardcoded.
 */
export interface NavItem {
  /** Dotted path into the dictionary, e.g. 'products.videoTracking.name'. */
  titleKey: string;
  descriptorKey?: string;
  href: string;
  imageKey?: ImageKey;
  /** Renders an external-link marker and rel="noopener". */
  external?: boolean;
}

export interface NavGroup {
  titleKey: string;
  href?: string;
  items?: NavItem[];
  /** Shown in the mega-menu's right-hand rail. */
  railKeys?: string[];
  /**
   * One line at the head of the mega-menu panel, giving the group a subject
   * rather than leaving it as a bare list of links.
   *
   * Always an EXISTING index heading, never new copy: these four groups each
   * already have a verified `index.title` written for their own section, and
   * reusing it means the menu and the page it leads to say the same thing.
   */
  introKey?: string;
  /** Index page for the group, where one exists. Omitted where none does. */
  indexHref?: string;
  indexLabelKey?: string;
}

/** The six product lines, in the order the live site lists them. */
export const productNav: NavItem[] = [
  {
    titleKey: 'products.videoTracking.name',
    descriptorKey: 'products.videoTracking.menuDescriptor',
    href: routes.videoTracking,
    imageKey: 'productVideoTracker',
  },
  {
    titleKey: 'products.primesolar.name',
    descriptorKey: 'products.primesolar.menuDescriptor',
    href: routes.primesolar,
    imageKey: 'productSolarTracker',
  },
  {
    titleKey: 'products.fuelmanagement.name',
    descriptorKey: 'products.fuelmanagement.menuDescriptor',
    href: routes.fuelmanagement,
    imageKey: 'productFuelSensor',
  },
  {
    titleKey: 'products.containertracking.name',
    descriptorKey: 'products.containertracking.menuDescriptor',
    href: routes.containertracking,
    imageKey: 'productStarTracker',
  },
  {
    titleKey: 'products.fleettracking.name',
    descriptorKey: 'products.fleettracking.menuDescriptor',
    href: routes.fleettracking,
    imageKey: 'productFleetTracker',
  },
  {
    titleKey: 'products.ectss.name',
    descriptorKey: 'products.ectss.menuDescriptor',
    href: routes.ectss,
    imageKey: 'productEcts',
  },
];

/**
 * Solutions: the five outcome areas.
 *
 * Four of these point at pages that already exist and already rank, so the
 * solution-first restructure costs no URL changes at all. Only vehicle and
 * asset security is a new route.
 *
 * Fleet tracking, video telematics and fuel monitoring appear in both this menu
 * and the Products menu, deliberately. They are one page reachable two ways,
 * which is how a buyer who thinks in outcomes and a buyer who thinks in devices
 * both get where they are going.
 */
export const solutionNav: NavItem[] = [
  {
    titleKey: 'solutions.items.fleetTracking.name',
    descriptorKey: 'solutions.items.fleetTracking.menuDescriptor',
    href: routes.fleettracking,
  },
  {
    titleKey: 'solutions.items.videoTelematics.name',
    descriptorKey: 'solutions.items.videoTelematics.menuDescriptor',
    href: routes.videoTracking,
  },
  {
    titleKey: 'solutions.items.fuelMonitoring.name',
    descriptorKey: 'solutions.items.fuelMonitoring.menuDescriptor',
    href: routes.fuelmanagement,
  },
  {
    titleKey: 'solutions.items.vehicleSecurity.name',
    descriptorKey: 'solutions.items.vehicleSecurity.menuDescriptor',
    href: routes.vehicleSecurity,
  },
  {
    titleKey: 'solutions.items.fleetAnalytics.name',
    descriptorKey: 'solutions.items.fleetAnalytics.menuDescriptor',
    href: routes.fleetAnalytics,
  },
];

/**
 * Services.
 *
 * VRAS appears in the live Services menu, but /vras/ currently returns a
 * database error with no recoverable content. Per the client's instruction it
 * points at the 404 page rather than being silently dropped or given invented
 * copy. Tracked in docs/handoff.md.
 */
export const serviceNav: NavItem[] = [
  {
    titleKey: 'services.fleetAnalytics.name',
    descriptorKey: 'services.fleetAnalytics.menuDescriptor',
    href: routes.fleetAnalytics,
    imageKey: 'serviceFleetAnalytics',
  },
  {
    titleKey: 'services.apiIntegrations.name',
    descriptorKey: 'services.apiIntegrations.menuDescriptor',
    href: routes.apiIntegrations,
    imageKey: 'serviceApiIntegration',
  },
  {
    titleKey: 'services.drivermonitoring.name',
    descriptorKey: 'services.drivermonitoring.menuDescriptor',
    href: routes.drivermonitoring,
    imageKey: 'serviceDriverMonitoring',
  },
  {
    titleKey: 'common.links.vras',
    href: routes.vras,
  },
];

/**
 * Industry nav, built from the same source as the pages themselves so the two
 * can never disagree about which sectors exist.
 */
export const industryNav: NavItem[] = industryList.map((industry) => ({
  titleKey: `industries.items.${industry.key}.name`,
  descriptorKey: `industries.items.${industry.key}.summary`,
  href: industryPathOf(industry.slug),
}));

/** Resources. */
export const resourceNav: NavItem[] = [
  { titleKey: 'common.nav.blog', descriptorKey: 'companyPages.blog.eyebrow', href: routes.blog },
  { titleKey: 'common.links.supportManuals', href: routes.tools },
  { titleKey: 'common.links.whyChoose', href: routes.whyChoose },
];

/**
 * Primary header navigation, solution-first.
 *
 * Five items is the ceiling before the bar starts competing with the language
 * switcher and the CTA. Company links (Why PrimeTrack, Careers) live in the
 * utility row above rather than becoming a sixth dropdown.
 */
export const primaryNav: NavGroup[] = [
  {
    titleKey: 'common.nav.solutions',
    items: solutionNav,
    introKey: 'solutions.index.title',
    indexHref: routes.solutions,
    indexLabelKey: 'solutions.index.cta',
    railKeys: ['home.trust.licensed.title', 'home.trust.warranty.title', 'home.trust.support.title'],
  },
  {
    titleKey: 'common.nav.industries',
    items: industryNav,
    introKey: 'industries.index.title',
    indexHref: routes.industries,
    indexLabelKey: 'industries.index.cta',
  },
  /* Products and Services have no index page on this site, so they get the
     subject line and no "see all" link rather than a link to nowhere. */
  { titleKey: 'common.nav.products', items: productNav, introKey: 'products.index.title' },
  { titleKey: 'common.nav.services', items: serviceNav, introKey: 'services.index.title' },
  { titleKey: 'common.nav.contact', href: routes.contact },
];

/** Footer columns. Mirrors the live footer's own grouping and naming. */
export const footerNav = {
  products: productNav.map(({ titleKey, href }) => ({ titleKey, href })),
  services: serviceNav.map(({ titleKey, href }) => ({ titleKey, href })),
  info: [
    { titleKey: 'common.links.whyChoose', href: routes.whyChoose },
    { titleKey: 'common.links.warranties', href: routes.warranty },
    { titleKey: 'common.links.careers', href: routes.careers },
    { titleKey: 'common.nav.blog', href: routes.blog },
  ],
  tools: [
    /* The manuals live on their own subdomain, so this leaves the site.
       `external` is what stops the footer running it through localizePath,
       which would otherwise turn it into /rw/https:/manuals.primetrack.rw. */
    { titleKey: 'common.links.supportManuals', href: company.manualsUrl, external: true },
    { titleKey: 'common.links.termsOfService', href: routes.terms },
    { titleKey: 'common.links.privacyPolicy', href: routes.privacy },
  ],
} as const;

/** Resolve a dotted key path against the translation dictionary. */
export function resolveKey(dict: unknown, path: string): string {
  const value = path
    .split('.')
    .reduce<unknown>((acc, part) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[part] : undefined), dict);
  return typeof value === 'string' ? value : path;
}
