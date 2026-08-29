import { routes } from './navigation';
import type { ImageKey } from './images';

/**
 * Per-page configuration for the product and service templates.
 *
 * Declared once and shared by both the English and the Kinyarwanda route file,
 * so a change to a page's imagery or its related links happens in one place
 * rather than twice.
 *
 * The `related` arrays are the site's internal link graph, chosen rather than
 * generated: each product points at the services that operate on its data and
 * the products a buyer would genuinely compare it against, and each service
 * points back at the products that feed it.
 */

const P = {
  video: { href: routes.videoTracking, titleKey: 'products.videoTracking.name', descriptorKey: 'products.videoTracking.menuDescriptor' },
  solar: { href: routes.primesolar, titleKey: 'products.primesolar.name', descriptorKey: 'products.primesolar.menuDescriptor' },
  fuel: { href: routes.fuelmanagement, titleKey: 'products.fuelmanagement.name', descriptorKey: 'products.fuelmanagement.menuDescriptor' },
  star: { href: routes.containertracking, titleKey: 'products.containertracking.name', descriptorKey: 'products.containertracking.menuDescriptor' },
  fleet: { href: routes.fleettracking, titleKey: 'products.fleettracking.name', descriptorKey: 'products.fleettracking.menuDescriptor' },
  ects: { href: routes.ectss, titleKey: 'products.ectss.name', descriptorKey: 'products.ectss.menuDescriptor' },
} as const;

const S = {
  analytics: { href: routes.fleetAnalytics, titleKey: 'services.fleetAnalytics.name', descriptorKey: 'services.fleetAnalytics.menuDescriptor' },
  api: { href: routes.apiIntegrations, titleKey: 'services.apiIntegrations.name', descriptorKey: 'services.apiIntegrations.menuDescriptor' },
  driver: { href: routes.drivermonitoring, titleKey: 'services.drivermonitoring.name', descriptorKey: 'services.drivermonitoring.menuDescriptor' },
} as const;

export interface ProductPageConfig {
  productKey: 'videoTracking' | 'primesolar' | 'fuelmanagement' | 'containertracking' | 'fleettracking' | 'ectss';
  path: string;
  imageKey: ImageKey;
  seoKey: 'videoTracking' | 'primesolar' | 'fuelmanagement' | 'containertracking' | 'fleettracking' | 'ectss';
  related: { href: string; titleKey: string; descriptorKey?: string }[];
}

export const productPages: Record<string, ProductPageConfig> = {
  videoTracking: {
    productKey: 'videoTracking',
    path: routes.videoTracking,
    imageKey: 'productVideoTracker',
    seoKey: 'videoTracking',
    related: [S.driver, S.analytics, P.fleet],
  },
  primesolar: {
    productKey: 'primesolar',
    path: routes.primesolar,
    imageKey: 'productSolarTracker',
    seoKey: 'primesolar',
    related: [P.fleet, P.star, S.analytics],
  },
  fuelmanagement: {
    productKey: 'fuelmanagement',
    path: routes.fuelmanagement,
    imageKey: 'productFuelSensor',
    seoKey: 'fuelmanagement',
    related: [S.analytics, S.driver, P.fleet],
  },
  containertracking: {
    productKey: 'containertracking',
    path: routes.containertracking,
    imageKey: 'productStarTracker',
    seoKey: 'containertracking',
    related: [P.ects, P.fleet, S.analytics],
  },
  fleettracking: {
    productKey: 'fleettracking',
    path: routes.fleettracking,
    imageKey: 'productFleetTracker',
    seoKey: 'fleettracking',
    related: [S.analytics, S.driver, S.api],
  },
  ectss: {
    productKey: 'ectss',
    path: routes.ectss,
    imageKey: 'productEcts',
    seoKey: 'ectss',
    related: [P.star, P.fleet, S.analytics],
  },
};

export interface ServicePageConfig {
  serviceKey: 'fleetAnalytics' | 'apiIntegrations' | 'drivermonitoring';
  path: string;
  imageKey: ImageKey;
  seoKey: 'fleetAnalytics' | 'apiIntegrations' | 'drivermonitoring';
  related: { href: string; titleKey: string; descriptorKey?: string }[];
}

export const servicePages: Record<string, ServicePageConfig> = {
  fleetAnalytics: {
    serviceKey: 'fleetAnalytics',
    path: routes.fleetAnalytics,
    imageKey: 'serviceFleetAnalytics',
    seoKey: 'fleetAnalytics',
    related: [P.fleet, P.video, S.api],
  },
  apiIntegrations: {
    serviceKey: 'apiIntegrations',
    path: routes.apiIntegrations,
    imageKey: 'serviceApiIntegration',
    seoKey: 'apiIntegrations',
    related: [S.analytics, P.fleet, S.driver],
  },
  drivermonitoring: {
    serviceKey: 'drivermonitoring',
    path: routes.drivermonitoring,
    imageKey: 'serviceDriverMonitoring',
    seoKey: 'drivermonitoring',
    related: [P.video, S.analytics, P.fleet],
  },
};
