import { routes } from './routes';

/**
 * The eight industry verticals: structure only. Copy lives in
 * src/i18n/en/industries.ts so it can be translated.
 *
 * `solutions` and `products` are the internal link graph for each sector page,
 * chosen by hand rather than generated. They are what makes an industry page do
 * SEO work: it lands on the sector's language, then routes to the commercial
 * pages that serve it.
 */
export interface Industry {
  /** Key into the industries dictionary, and the URL slug. */
  key: string;
  slug: string;
  icon: string;
  /** Locale-free routes this sector should push traffic toward. */
  solutions: string[];
  products: string[];
}

export const industries: Industry[] = [
  {
    key: 'construction',
    slug: 'construction',
    icon: 'truck',
    solutions: [routes.fleettracking, routes.fuelmanagement, routes.drivermonitoring],
    products: [routes.primesolar, routes.fleettracking],
  },
  {
    key: 'foodAndBeverage',
    slug: 'food-and-beverage',
    icon: 'package',
    solutions: [routes.fleettracking, routes.fleetAnalytics, routes.containertracking],
    products: [routes.fleettracking, routes.containertracking],
  },
  {
    key: 'emergencyServices',
    slug: 'emergency-services',
    icon: 'shield',
    solutions: [routes.fleettracking, routes.drivermonitoring, routes.fleetAnalytics],
    products: [routes.fleettracking, routes.videoTracking],
  },
  {
    key: 'logistics',
    slug: 'logistics',
    icon: 'package',
    solutions: [routes.fleettracking, routes.ectss, routes.fleetAnalytics],
    products: [routes.containertracking, routes.ectss],
  },
  {
    key: 'fuelDistribution',
    slug: 'fuel-distribution',
    icon: 'fuel',
    solutions: [routes.fuelmanagement, routes.fleettracking, routes.ectss],
    products: [routes.primesolar, routes.ectss],
  },
  {
    key: 'transportation',
    slug: 'transportation',
    icon: 'truck',
    solutions: [routes.fleettracking, routes.fuelmanagement, routes.drivermonitoring],
    products: [routes.fleettracking, routes.primesolar],
  },
  {
    key: 'passengerTransit',
    slug: 'passenger-transit',
    icon: 'video',
    solutions: [routes.videoTracking, routes.drivermonitoring, routes.fleetAnalytics],
    products: [routes.videoTracking, routes.fleettracking],
  },
  {
    key: 'pharmaceutical',
    slug: 'pharmaceutical',
    icon: 'lock',
    solutions: [routes.ectss, routes.fleettracking, routes.fleetAnalytics],
    products: [routes.ectss, routes.containertracking],
  },
];

/** `/industries/{slug}/`, locale-free. */
export const industryPath = (slug: string) => `/industries/${slug}/`;
