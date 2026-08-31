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
    /** Reopens the cookie preferences dialog. */
    cookiePreferences: 'Cookie preferences',
  },

  /**
   * Cookie consent.
   *
   * One category, because the site has one: functional preferences. There is
   * no analytics, advertising or third-party tracking on this site, and this
   * copy must never imply otherwise. "Accept" rather than "Accept all", since
   * there is nothing to accept all of.
   *
   * Accept and Decline are written to the same length and weight for a reason:
   * they are rendered as the same size and prominence, and copy that made one
   * sound like the safe default would undo that.
   */
  cookies: {
    title: 'We value your privacy',
    body:
      'We use a small number of functional cookies to remember your preferences, such as your preferred language. These cookies help us provide a more consistent experience across visits.',
    accept: 'Accept',
    decline: 'Decline',
    manage: 'Cookie preferences',
    /** Names the banner region for a screen reader. */
    bannerLabel: 'Cookie notice',

    panelTitle: 'Cookie preferences',
    panelIntro:
      'This site uses one category of cookie. You can change your choice at any time, and the site works either way.',
    functionalTitle: 'Functional and preference cookies',
    functionalBody: 'These cookies remember choices such as your preferred language.',
    /** The toggle's accessible name, and its two spoken states. */
    toggleLabel: 'Functional and preference cookies',
    on: 'On',
    off: 'Off',
    save: 'Save preferences',
    close: 'Close',
    /** Confirmation after saving, announced politely. */
    saved: 'Your cookie preferences have been saved.',
    /** Names what is actually stored, so the panel is specific rather than vague. */
    storedTitle: 'What is stored',
    storedConsent: 'Your choice on this notice, so you are not asked again.',
    storedLanguage: 'Your language preference, only if you accept.',
    /** Links out to the full policy, which is an existing page. */
    policyLink: 'Read our privacy policy',
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
    /* Labels float inside their field rather than sitting above it, so each one
       doubles as the placeholder and the field needs no second line of text. */
    name: 'Your name',
    namePlaceholder: 'Your full name',
    email: 'Email address',
    phone: 'Phone number',
    /* The old single "email or phone" field is gone. Splitting it means the
       phone can have a country selector and the email can be validated, and it
       stops a reply going to whichever one the visitor happened to pick. */
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
    validationEmail: 'Please enter an email address we can reply to.',
    validationEmailFormat: 'That does not look like an email address.',
    validationMessage: 'Please tell us a little about what you need.',

    /** The topic chips. Each maps to a real part of the range. */
    topicLegend: 'What is this about?',
    topics: {
      tracking: 'Vehicle tracking',
      fuel: 'Fuel monitoring',
      video: 'Video and cameras',
      cargo: 'Cargo and containers',
      support: 'Existing customer',
      other: 'Something else',
    },

    /** Fleet size, as bands rather than a number nobody knows exactly. */
    fleetLegend: 'How many vehicles?',
    fleetBands: {
      small: '1 to 5',
      mid: '6 to 20',
      large: '21 to 50',
      xl: 'Over 50',
    },

    /** International phone field. */
    phoneCountry: 'Country code',
    phoneSearch: 'Search countries',
    phoneNoMatches: 'No country matches that',
    phonePlaceholder: '788 123 456',
    validationPhone: 'That does not look like a complete number for the country selected.',

    /** Shown under the message box. */
    charactersLeft: '{n} characters left',
    /** Reassurance under the submit button. */
    privacyNote: 'We use your details to answer your enquiry and nothing else.',
    /** The success panel's second line, above the direct routes. */
    successNext: 'What happens next',
    successSteps: [
      'A specialist reads your message and works out what you actually need.',
      'We come back with a recommendation and pricing, usually the same working day.',
      'If it is urgent, PrimeCARE answers WhatsApp around the clock.',
    ],
    sendAnother: 'Send another message',

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
