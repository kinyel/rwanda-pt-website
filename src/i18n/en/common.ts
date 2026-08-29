/**
 * Site-wide chrome: navigation, footer, buttons, forms, accessibility labels.
 *
 * Every user-facing string on the site lives in one of the `src/i18n/en/*`
 * files. Components receive keys, never literals. This is what makes a
 * Kinyarwanda drop-in a data change rather than a code change.
 */
export const common = {
  brand: {
    name: 'PrimeTrack',
    legalName: 'PrimeTrack Telematics Limited',
    /** Used in the logo's accessible name and the footer positioning line. */
    tagline: 'GPS vehicle tracking and fleet management in Rwanda',
  },

  nav: {
    /** Accessible name for the primary <nav> landmark. */
    primaryLabel: 'Primary',
    home: 'Home',
    solutions: 'Solutions',
    industries: 'Industries',
    products: 'Products',
    services: 'Services',
    resources: 'Resources',
    whyPrime: 'Why PrimeTrack',
    contact: 'Contact',
    blog: 'Insights',
    menu: 'Menu',
    openMenu: 'Open the main menu',
    closeMenu: 'Close the main menu',
    /** Shown in the mega-menu's trust rail. */
    trustRailTitle: 'Every PrimeTrack device ships with',
    skipToContent: 'Skip to content',
  },

  /** Country switcher. Preserved from the live site's "Home" dropdown. */
  country: {
    label: 'Region',
    srLabel: 'Choose a PrimeTrack region',
    current: 'Current region',
    opensExternal: 'Opens the PrimeTrack site for this region',
    names: {
      NGR: 'Nigeria',
      RWA: 'Rwanda',
      EGY: 'Egypt',
    },
  },

  /** Language switcher. Deliberately explicit: this control is never an icon. */
  language: {
    label: 'Language',
    srLabel: 'Choose a language',
    /** Announced on the option that is already active. */
    current: 'Current language',
    /** Template for the inactive option's accessible name. */
    switchTo: 'Switch to {language}',
    pendingNotice: 'Kinyarwanda translation in progress. Pages not yet translated are shown in English.',
  },

  cta: {
    contactUs: 'Talk to an expert',
    talkToUs: 'Talk to our team',
    getStarted: 'Get started',
    callUs: 'Call us',
    whatsapp: 'WhatsApp',
    whatsappUs: 'Message us on WhatsApp',
    emailUs: 'Email us',
    learnMore: 'Learn more',
    /** Templated so link text is never a bare "Read more". */
    readAbout: 'Read about {topic}',
    exploreProduct: 'Explore {product}',
    seeService: 'See how {service} works',
    backHome: 'Back to the homepage',
    allProducts: 'All products',
    allServices: 'All services',
    allArticles: 'All articles',
  },

  footer: {
    /** Column headings, kept in PrimeTrack's own naming. */
    infoTitle: 'PrimeINFO',
    toolsTitle: 'PrimeTOOLS',
    productsTitle: 'Products',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    socialsTitle: 'Follow PrimeTrack',
    careTitle: 'PrimeCARE',
    careBody:
      'PrimeCARE is our 24/7 customer service line. Call or message us on WhatsApp, or send an email and we will pick it up the same day.',
    tipsTitle: 'PrimeTIPS',
    tipsBody: 'Occasional fleet and tracking notes from our team. No spam, and you can leave whenever you like.',
    emailPlaceholder: 'Your email address',
    emailLabel: 'Email address for PrimeTIPS updates',
    subscribe: 'Subscribe',
    /** {year} is substituted at build time. */
    copyright: '© {year} PrimeTrack Telematics Limited. All rights reserved.',
    licensed: 'Licensed in Rwanda by RURA',
    warrantyLine: 'Up to 5-year product warranty',
    supportLine: '24/7 PrimeCARE support',
    officeTitle: 'Rwanda office',
    nigeriaOfficeTitle: 'Nigeria office',
    nigeriaOfficeLink: 'Visit primetracknigeria.com',
    sitemapLabel: 'Footer',
  },

  links: {
    supportManuals: 'Support manuals and documents',
    whyChoose: 'Why choose PrimeTrack',
    warranties: 'Prime warranties',
    careers: 'Prime careers',
    termsOfService: 'Terms of service',
    privacyPolicy: 'Privacy policy',
    vras: 'VRAS',
  },

  form: {
    name: 'Name',
    namePlaceholder: 'Your full name',
    contactField: 'Email or phone number',
    contactPlaceholder: 'So we can reply to you',
    company: 'Company',
    companyPlaceholder: 'Optional',
    fleetSize: 'Fleet size',
    fleetSizePlaceholder: 'Optional, for example 12 vehicles',
    message: 'Message',
    messagePlaceholder: 'Tell us what you need to track and we will suggest the right setup.',
    required: 'Required',
    optional: 'Optional',
    send: 'Send message',
    sending: 'Sending',
    successTitle: 'Message sent',
    successBody: 'Thank you. Our team will get back to you shortly. For anything urgent, PrimeCARE is on WhatsApp around the clock.',
    errorTitle: 'That did not send',
    errorBody: 'Something went wrong on the way. Please try again, or reach us directly on WhatsApp or by email.',
    validationName: 'Please enter your name.',
    validationContact: 'Please enter an email address or phone number so we can reply.',
    validationMessage: 'Please tell us a little about what you need.',
    /** Rendered when PUBLIC_FORMSPREE_ID has not been set. */
    unconfiguredTitle: 'Form not yet connected',
    unconfiguredBody:
      'This form needs a Formspree form ID before it can accept submissions. Until then, please reach us on WhatsApp or by email.',
  },

  common: {
    /** Breadcrumb root. */
    home: 'Home',
    breadcrumbLabel: 'Breadcrumb',
    relatedTitle: 'Related pages',
    onThisPage: 'On this page',
    published: 'Published',
    updated: 'Updated',
    by: 'By',
    readingTime: '{minutes} min read',
    placeholderBadge: 'Placeholder image',
    externalLink: 'Opens in a new tab',
    loading: 'Loading',
  },

  notFound: {
    code: '404',
    title: 'We could not find that page',
    body:
      'The page you asked for is not here. It may have moved, or the link that brought you here may be out of date. The main sections of the site are below.',
    suggestionsTitle: 'Try one of these',
  },
} as const;
