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
  homeVideoTelematics: 'Road-facing telematics camera recording from a vehicle cab',
  homeFuelMonitoring: 'Fuel level sensor being fitted to a commercial vehicle tank',
  homeMobileApps: 'The PrimeTrack mobile app showing live vehicle positions on a phone',

  productVideoTracker: 'PrimeTrack video telematics dashcam and DVR recording unit',
  productSolarTracker: 'PrimeSOLAR solar-powered GPS tracker for trucks',
  productFuelSensor: 'Capacitive fuel level sensor used for PrimeTrack fuel monitoring',
  productStarTracker: 'STAR stand-alone rechargeable tracker magnetised to a shipping container',
  productFleetTracker: 'PrimeTrack GPS fleet tracking unit fitted inside a vehicle',
  productEcts: 'PrimeTrack electronic cargo smart padlock with Bluetooth, password and app unlocking',

  serviceFleetAnalytics: 'Fleet manager reviewing PrimeTrack analytics reports',
  serviceDriverMonitoring: 'Professional driver at the wheel of a commercial vehicle in Rwanda',
  serviceApiIntegration: 'Operations team working with fleet telematics data on desktop systems',

  companyOffice: 'The PrimeTrack Rwanda office at Yyussa City Centre in Kigali',
  companyInstall: 'PrimeTrack technician fitting a tracking device to a customer vehicle',

  ogDefault: 'PrimeTrack Telematics Rwanda',

  /** Templated: the client name is substituted per logo. */
  clientLogo: '{name} logo',
} as const;
