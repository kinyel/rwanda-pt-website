import { routes } from './navigation';

/**
 * The commercial pages an article should point at, chosen from what the
 * article is about (its slug). Shared by the English and Kinyarwanda article
 * routes, so both versions of an article close on the same links.
 *
 * Articles exist to support the money pages, and on the live site none of them
 * linked anywhere, which wasted every one of them.
 */
const P = {
  fleet: { href: routes.fleettracking, titleKey: 'products.fleettracking.name', descriptorKey: 'products.fleettracking.menuDescriptor' },
  video: { href: routes.videoTracking, titleKey: 'products.videoTracking.name', descriptorKey: 'products.videoTracking.menuDescriptor' },
  fuel: { href: routes.fuelmanagement, titleKey: 'products.fuelmanagement.name', descriptorKey: 'products.fuelmanagement.menuDescriptor' },
  star: { href: routes.containertracking, titleKey: 'products.containertracking.name', descriptorKey: 'products.containertracking.menuDescriptor' },
  solar: { href: routes.primesolar, titleKey: 'products.primesolar.name', descriptorKey: 'products.primesolar.menuDescriptor' },
  analytics: { href: routes.fleetAnalytics, titleKey: 'services.fleetAnalytics.name', descriptorKey: 'services.fleetAnalytics.menuDescriptor' },
  driver: { href: routes.drivermonitoring, titleKey: 'services.drivermonitoring.name', descriptorKey: 'services.drivermonitoring.menuDescriptor' },
};

type Related = (typeof P)[keyof typeof P];

export function relatedForArticle(slug: string): Related[] {
  const picked: Related[] = [];
  const add = (item: Related) => {
    if (!picked.some((p) => p.href === item.href)) picked.push(item);
  };

  if (/fuel/.test(slug)) add(P.fuel);
  if (/video|camera|telematic/.test(slug)) add(P.video);
  if (/container|cargo|goods|logistic|haulage|supply/.test(slug)) add(P.star);
  if (/solar|truck/.test(slug)) add(P.solar);
  if (/driver|speed|behaviou?r|safety|certification/.test(slug)) add(P.driver);
  if (/analytic|report|monitor|real-time|manifest|dispatch/.test(slug)) add(P.analytics);
  /* Fleet tracking is relevant to essentially every article, so it backfills. */
  add(P.fleet);
  add(P.analytics);

  return picked.slice(0, 3);
}
