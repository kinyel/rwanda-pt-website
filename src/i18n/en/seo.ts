/**
 * Per-page title and meta description.
 *
 * Keyword strategy: one commercial cluster per page so pages do not compete
 * with each other for the same query.
 *
 *   /                        vehicle tracking Rwanda · GPS tracking Rwanda
 *   /fleettracking/          fleet management system Rwanda · fleet tracking
 *   /video-tracking/         video telematics · vehicle CCTV Rwanda
 *   /primesolar/             solar GPS tracker · truck tracker Rwanda
 *   /fuelmanagement/         fuel monitoring · fuel theft detection Rwanda
 *   /containertracking/      container tracking · cargo tracker Rwanda
 *   /ectss/                  electronic cargo tracking system Rwanda
 *   /fleet-analytics/        fleet analytics · telematics reporting
 *   /drivermonitoring/       driver behaviour monitoring Rwanda
 *   /api-integrations/       telematics API integration
 *   /contactus/              GPS tracker Kigali · contact
 *   /blog/ + articles        the long-tail informational queries
 *
 * Titles are front-loaded with the primary term and kept near 60 characters so
 * they are not truncated in results. Descriptions sit near 155.
 */
export const seo = {
  home: {
    title: 'Vehicle Tracking & Fleet Management in Rwanda | PrimeTrack',
    description:
      'GPS vehicle tracking, fleet management, video telematics and fuel monitoring in Rwanda. Licensed by RURA, 24/7 PrimeCARE support, warranty up to 5 years.',
  },
  videoTracking: {
    title: 'Vehicle Video Telematics & CCTV Systems Rwanda | PrimeTrack',
    description:
      'AI-enabled vehicle CCTV for Rwandan fleets: four weatherproof cameras, ADAS driver assistance, blind-spot mitigation and 256GB to 4TB recording.',
  },
  primesolar: {
    title: 'Solar GPS Truck Trackers in Rwanda | PrimeSOLAR by PrimeTrack',
    description:
      'A maintenance-free solar vehicle tracker with no battery connection, a minimum 3-year battery, tamper alerts and a waterproof build for tropical conditions.',
  },
  fuelmanagement: {
    title: 'Fuel Monitoring & Theft Detection Rwanda | PrimeTrack',
    description:
      'Capacitive tank sensors and in-line flow meters that measure real fuel consumption, detect siphoning instantly and report waste across your Rwandan fleet.',
  },
  containertracking: {
    title: 'Container & Cargo Tracking in Rwanda | STAR Trackers',
    description:
      'Stand-alone rechargeable trackers running for months per charge, with a magnetised weather-proof body for containers and goods moving off-grid.',
  },
  fleettracking: {
    title: 'Fleet Management System Rwanda | GPS Fleet Tracking',
    description:
      'GPS fleet tracking accurate to five metres and updated every ten seconds, with geofencing, driver behaviour reporting, route optimisation and OBD alerts.',
  },
  ectss: {
    title: 'Electronic Cargo Tracking System (eCTS) Rwanda | PrimeTrack',
    description:
      'Electronic cargo tracking for Rwandan logistics: real-time cargo status, geo-fenced corridors, encrypted access and instant breach alerts.',
  },
  fleetAnalytics: {
    title: 'Fleet Analytics & Telematics Reporting Rwanda | PrimeTrack',
    description:
      'Fifteen fleet analytics capabilities covering location, running cost, driver safety and vehicle condition, across every PrimeTrack device.',
  },
  apiIntegrations: {
    title: 'Telematics API Integration for ERP & ERM | PrimeTrack Rwanda',
    description:
      'Connect PrimeTrack vehicle data to the enterprise system your team already uses, with documented endpoints, real-time exchange and event notifications.',
  },
  drivermonitoring: {
    title: 'Driver Behaviour Monitoring Systems Rwanda | PrimeTrack',
    description:
      'Measure harsh braking, speeding, acceleration and cornering per driver, with real-time alerts, coaching reports and in-cab correction as it happens.',
  },
  contact: {
    title: 'Contact PrimeTrack Rwanda | GPS Trackers in Kigali',
    description:
      'PrimeTrack Rwanda, 6th Floor Tower A, Yyussa City Centre, Kigali. Call or WhatsApp +250 793 017 263, or email admin@primetrack.rw. PrimeCARE answers 24/7.',
  },
  whyChoose: {
    title: 'Why Choose PrimeTrack Rwanda | 7 Advantages',
    description:
      'RURA-licensed, 24/7 PrimeCARE support, hardware built for African conditions, AI-driven telematics and one of the longest warranties in the industry.',
  },
  warranty: {
    title: 'Prime Warranties | Up to 5-Year Cover | PrimeTrack Rwanda',
    description:
      'PrimeTrack products carry a warranty of up to five years for the original purchaser, covering defects in materials and workmanship under normal use.',
  },
  careers: {
    title: 'Careers at PrimeTrack Rwanda | Join the Team',
    description:
      'PrimeTrack Rwanda is looking for people who create exceptional value. Send your résumé to admin@primetrack.rw and tell us what you would bring.',
  },
  tools: {
    title: 'Support Manuals & Documents | PrimeTrack Rwanda',
    description:
      'Device manuals, installation guides and platform documentation for PrimeTrack customers in Rwanda. PrimeCARE can send any manual on request.',
  },
  terms: {
    title: 'Terms of Service | PrimeTrack Rwanda',
    description:
      'The terms governing use of PrimeTrack Rwanda GPS tracking and telematics services, including user obligations, liability limits and governing law.',
  },
  privacy: {
    title: 'Privacy Policy | PrimeTrack Rwanda',
    description:
      'How PrimeTrack Telematics Rwanda collects, uses and protects the personal information of visitors and users of primetrack.rw.',
  },
  analyzeFleet: {
    title: 'Identify Your Fleet Management Challenges | PrimeTrack Rwanda',
    description:
      'Pick the fleet problems costing you most, from vehicle theft to fuel loss to driver behaviour, and see which part of the PrimeTrack system addresses each one.',
  },
  products: {
    title: 'GPS Trackers & Telematics Products in Rwanda | PrimeTrack',
    description:
      'Six PrimeTrack device families for Rwandan operators: fleet trackers, solar truck trackers, video telematics, fuel sensors, cargo tags and eCTS.',
  },
  servicesIndex: {
    title: 'Fleet Telematics Services in Rwanda | PrimeTrack',
    description:
      'Fleet analytics, driver behaviour monitoring and telematics API integration, turning PrimeTrack device data into decisions your team can act on.',
  },
  blog: {
    title: 'Vehicle Tracking & Fleet Insights Rwanda | PrimeTrack',
    description:
      'Articles on vehicle tracking, fleet management and vehicle security in Rwanda, written by the PrimeTrack team for operators in this market.',
  },
  notFound: {
    title: 'Page Not Found | PrimeTrack Rwanda',
    description: 'The page you asked for could not be found. Browse PrimeTrack Rwanda products, services and contact details instead.',
  },
} as const;
