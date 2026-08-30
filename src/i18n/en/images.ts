/**
 * Alt text for every image, kept in the i18n layer rather than beside the
 * imports. Replacing an image file therefore never disturbs its accessibility
 * or SEO text, and a Kinyarwanda translation of alt text drops in like any
 * other string.
 *
 * Writing rule: describe what the image shows and why it is on the page. Do not
 * start with "Image of". Decorative images carry an empty string, which renders
 * alt="" and hides them from assistive technology.
 */
export const images = {
  /** Decorative: the logo sits inside a link whose own text names the company. */
  logo: '',

  homeHero: 'A PrimeTrack-tracked commercial vehicle on a Rwandan road',
  homeVideoTelematics: 'A road-facing PrimeTrack dash camera mounted on a windscreen, its screen showing the live forward view',
  homeFuelMonitoring: 'PrimeTrack fuel tank monitoring: a tanker, the tank sensor, and the platform showing refuelling and fuel-drain events',
  homeMobileApps: 'The PrimeTrack mobile app on two phones, showing the live vehicle map and the reports list',

  productVideoTracker: 'The PrimeTrack video telematics dash camera and DVR unit, with recorded road footage on its screen',
  productSolarTracker: 'A tracked truck at dusk with location markers above it, representing PrimeSOLAR truck tracking',
  productFuelSensor: 'The capacitive fuel level probe used for PrimeTrack fuel monitoring, beside the platform fuel readings',
  productStarTracker: 'The STAR stand-alone rechargeable cargo tracker, showing its case and charging ports',
  productFleetTracker: 'A tracked PrimeTrack fleet on the road, with the tracking, analytics, safety and automation capabilities listed',
  productEcts: 'PrimeTrack electronic cargo smart padlock with Bluetooth, password and app unlocking',

  serviceFleetAnalytics: 'The PrimeTrack tracking platform in use, showing a live map, vehicle details and speed and fuel gauges',
  serviceDriverMonitoring: 'A professional driver at the wheel of a truck on an open road, seen from behind the cab',
  serviceApiIntegration: 'PrimeTrack API integration, shown as a connected set of systems and data services',

  companyOffice: 'The PrimeTrack Rwanda office at Yyussa City Centre in Kigali',
  companyInstall: 'PrimeTrack technician fitting a tracking device to a customer vehicle',

  ogDefault: 'PrimeTrack Telematics Rwanda',

  /** Templated: the client name is substituted per logo. */
  clientLogo: '{name} logo',
} as const;
