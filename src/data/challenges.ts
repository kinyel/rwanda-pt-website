import { routes } from './navigation';

/**
 * The eight fleet challenges listed on the live site's homepage.
 *
 * On the live site these are checkboxes that lead nowhere: ticking them does
 * nothing and no destination is defined. Here each one routes to the product or
 * service that actually addresses it, which is what the block was evidently
 * trying to be. The labels and the eight categories are unchanged.
 */
export const challenges = [
  { key: 'theft', href: routes.fleettracking },
  { key: 'accident', href: routes.videoTracking },
  { key: 'tampering', href: routes.primesolar },
  { key: 'documents', href: routes.fleettracking },
  { key: 'fuelTheft', href: routes.fuelmanagement },
  { key: 'goodsTheft', href: routes.containertracking },
  { key: 'driverBehaviour', href: routes.drivermonitoring },
  { key: 'reporting', href: routes.fleetAnalytics },
] as const;

export type ChallengeKey = (typeof challenges)[number]['key'];
