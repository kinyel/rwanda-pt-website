/**
 * The site's route map.
 *
 * Lives in its own module because both navigation.ts and industries.ts need it,
 * and having them import each other produced a cycle in which `routes` was
 * still undefined when the industry list evaluated.
 *
 * URL RULE, unchanged: every path here that existed on the WordPress site is
 * reproduced exactly, trailing slash included, because all of them are indexed.
 * Only /industries/, /solutions/, /solutions/vehicle-security/ and /faqs/ are
 * new. Paths are stored locale-free; localizePath() adds /rw/ at render time.
 */
export const routes = {
  home: '/',
  // Products
  videoTracking: '/video-tracking/',
  primesolar: '/primesolar/',
  fuelmanagement: '/fuelmanagement/',
  containertracking: '/containertracking/',
  fleettracking: '/fleettracking/',
  ectss: '/ectss/',
  // Services
  fleetAnalytics: '/fleet-analytics/',
  apiIntegrations: '/api-integrations/',
  drivermonitoring: '/drivermonitoring/',
  // Company
  contact: '/contactus/',
  whyChoose: '/why-choose-prime/',
  warranty: '/prime-warranties/',
  careers: '/prime-careers/',
  tools: '/tools/',
  terms: '/terms-of-service/',
  privacy: '/privacy-policy/',
  analyzeFleet: '/analyze-your-fleet/',
  // Solutions and industries (redesign)
  industries: '/industries/',
  solutions: '/solutions/',
  vehicleSecurity: '/solutions/vehicle-security/',
  faqs: '/faqs/',
  // Content
  blog: '/blog/',
  notFound: '/404/',
  /**
   * VRAS has no page. /vras/ on the live site returns a database error with no
   * recoverable content, so nothing can be migrated and nothing may be invented.
   * Per the client's instruction the menu entry resolves to the 404 page: the
   * legacy URL is kept, and because no page is built at it the host serves the
   * styled 404 with a proper status code.
   *
   * This is a deliberate dead end pending copy from the client. See
   * docs/handoff.md, item 1.
   */
  vras: '/vras/',
} as const;

export type RouteKey = keyof typeof routes;
