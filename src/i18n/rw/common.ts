import type { Dictionary, Translation } from '../index';

/**
 * Site-wide chrome in Kinyarwanda: navigation, footer, buttons, forms,
 * accessibility labels. Mirrors src/i18n/en/common.ts key for key.
 *
 * Brand and product names (PrimeTrack, PrimeCARE, PrimeTIPS, VRAS, RURA,
 * WhatsApp) stay as they are: they are names, and they are what people search
 * for. Everything else is written as natural Kinyarwanda rather than word for
 * word. See docs/translation-checklist.md for native-speaker review.
 */
export const common: Translation<Dictionary['common']> = {
  brand: {
    name: 'PrimeTrack',
    legalName: 'PrimeTrack Telematics Limited',
    tagline: 'Gukurikirana ibinyabiziga hakoreshejwe GPS no gucunga ibinyabiziga by’ikigo mu Rwanda',
  },

  address: {
    line1: 'Igorofa rya 6, Tower A',
    country: 'Repubulika y’u Rwanda',
  },

  nav: {
    primaryLabel: 'Ibikubiyemo by’ingenzi',
    home: 'Ahabanza',
    solutions: 'Ibisubizo',
    industries: 'Inzego',
    products: 'Ibicuruzwa',
    services: 'Serivisi',
    resources: 'Inyandiko',
    whyPrime: 'Impamvu PrimeTrack',
    contact: 'Twandikire',
    blog: 'Inyandiko',
    menu: 'Ibikubiyemo',
    openMenu: 'Fungura ibikubiyemo',
    closeMenu: 'Funga ibikubiyemo',
    trustRailTitle: 'Buri gikoresho cya PrimeTrack kizana na',
    skipToContent: 'Simbukira ku bikubiyemo',
  },

  country: {
    label: 'Akarere',
    srLabel: 'Hitamo akarere ka PrimeTrack',
    current: 'Akarere urimo',
    opensExternal: 'Ifungura urubuga rwa PrimeTrack rw’aka karere',
    names: {
      NGR: 'Nigeriya',
      RWA: 'U Rwanda',
      EGY: 'Misiri',
    },
  },

  language: {
    label: 'Ururimi',
    srLabel: 'Hitamo ururimi',
    current: 'Ururimi rukoreshwa',
    switchTo: 'Hindura ujye mu {language}',
    availability: 'Urubuga rwose ruboneka mu Cyongereza no mu Kinyarwanda.',
  },

  cta: {
    contactUs: 'Vugana n’impuguke',
    talkToUs: 'Vugana n’itsinda ryacu',
    getStarted: 'Tangira',
    callUs: 'Duhamagare',
    whatsapp: 'WhatsApp',
    whatsappUs: 'Twandikire kuri WhatsApp',
    emailUs: 'Twoherereze imeyili',
    learnMore: 'Menya byinshi',
    readAbout: 'Soma ibyerekeye {topic}',
    exploreProduct: 'Reba {product}',
    seeService: 'Reba uko {service} ikora',
    backHome: 'Subira ahabanza',
    allProducts: 'Ibicuruzwa byose',
    allServices: 'Serivisi zose',
    allArticles: 'Inyandiko zose',
  },

  footer: {
    infoTitle: 'PrimeINFO',
    toolsTitle: 'PrimeTOOLS',
    productsTitle: 'Ibicuruzwa',
    servicesTitle: 'Serivisi',
    contactTitle: 'Twandikire',
    socialsTitle: 'Kurikira PrimeTrack',
    careTitle: 'PrimeCARE',
    careBody:
      'PrimeCARE ni umurongo wacu wo kwita ku bakiriya amasaha 24 kuri 24, iminsi 7 kuri 7. Duhamagare cyangwa utwandikire kuri WhatsApp, cyangwa utwoherereze imeyili, tukagusubiza uwo munsi.',
    tipsTitle: 'PrimeTIPS',
    tipsBody: 'Inama n’amakuru ku gucunga ibinyabiziga no kubikurikirana, rimwe na rimwe, biturutse ku itsinda ryacu. Nta butumwa butari ngombwa, kandi ushobora kubihagarika igihe cyose ubishakiye.',
    emailPlaceholder: 'Aderesi ya imeyili yawe',
    emailLabel: 'Aderesi ya imeyili yo kwakira amakuru ya PrimeTIPS',
    subscribe: 'Iyandikishe',
    copyright: '© {year} PrimeTrack Telematics Limited. Uburenganzira bwose burabitswe.',
    licensed: 'Twemerewe gukorera mu Rwanda na RURA',
    warrantyLine: 'Garanti y’ibicuruzwa igera ku myaka 5',
    supportLine: 'Ubufasha bwa PrimeCARE amasaha 24 kuri 24',
    officeTitle: 'Ibiro byo mu Rwanda',
    nigeriaOfficeTitle: 'Ibiro byo muri Nigeriya',
    nigeriaOfficeLink: 'Sura primetracknigeria.com',
    sitemapLabel: 'Hasi ku rubuga',
    cookiePreferences: 'Uko cookies zikoreshwa',
  },

  cookies: {
    title: 'Twita ku buzima bwawe bwite',
    body:
      'Dukoresha cookies nke z’ingenzi zo kwibuka ibyo wahisemo, nk’ururimi ukunda. Izi cookies zidufasha kuguha uburyo bumwe kandi buhamye igihe cyose ugarutse.',
    accept: 'Emera',
    decline: 'Anga',
    manage: 'Uko cookies zikoreshwa',
    bannerLabel: 'Itangazo rya cookies',

    panelTitle: 'Uko cookies zikoreshwa',
    panelIntro:
      'Uru rubuga rukoresha ubwoko bumwe bwa cookies. Ushobora guhindura icyo wahisemo igihe cyose, kandi urubuga rukora uko wahitamo kose.',
    functionalTitle: 'Cookies z’imikorere n’ibyo ukunda',
    functionalBody: 'Izi cookies zibuka ibyo wahisemo, nk’ururimi ukunda.',
    toggleLabel: 'Cookies z’imikorere n’ibyo ukunda',
    on: 'Birakora',
    off: 'Ntibikora',
    save: 'Bika ibyo nahisemo',
    close: 'Funga',
    saved: 'Ibyo wahisemo kuri cookies byabitswe.',
    storedTitle: 'Ibibikwa',
    storedConsent: 'Icyo wahisemo kuri iri tangazo, kugira ngo utazongera kubazwa.',
    storedLanguage: 'Ururimi ukunda, ari uko gusa ubyemeye.',
    policyLink: 'Soma politiki yacu yo kurinda amakuru bwite',
  },

  links: {
    supportManuals: 'Amabwiriza n’inyandiko z’ubufasha',
    whyChoose: 'Impamvu wahitamo PrimeTrack',
    warranties: 'Garanti za Prime',
    careers: 'Akazi muri Prime',
    termsOfService: 'Amabwiriza y’imikoreshereze',
    privacyPolicy: 'Politiki yo kurinda amakuru bwite',
    vras: 'VRAS',
  },

  form: {
    name: 'Amazina yawe',
    namePlaceholder: 'Amazina yawe yose',
    email: 'Aderesi ya imeyili',
    phone: 'Nomero ya telefoni',
    contactField: 'Imeyili cyangwa nomero ya telefoni',
    contactPlaceholder: 'Kugira ngo tubashe kugusubiza',
    company: 'Ikigo',
    companyPlaceholder: 'Si ngombwa',
    fleetSize: 'Umubare w’ibinyabiziga',
    fleetSizePlaceholder: 'Si ngombwa, urugero: ibinyabiziga 12',
    message: 'Ubutumwa',
    messagePlaceholder: 'Tubwire icyo ushaka gukurikirana, tukakugira inama ku buryo bukwiye.',
    required: 'Birakenewe',
    optional: 'Si ngombwa',
    send: 'Ohereza ubutumwa',
    sending: 'Biroherezwa',
    successTitle: 'Ubutumwa bwoherejwe',
    successBody: 'Murakoze. Itsinda ryacu rizagusubiza vuba. Ku kintu cyihutirwa, PrimeCARE iboneka kuri WhatsApp amasaha 24 kuri 24.',
    errorTitle: 'Ubutumwa ntibwoherejwe',
    errorBody: 'Hari ikitagenze neza. Ongera ugerageze, cyangwa utuvugishe kuri WhatsApp cyangwa kuri imeyili.',
    validationName: 'Andika amazina yawe.',
    validationContact: 'Andika aderesi ya imeyili cyangwa nomero ya telefoni kugira ngo tubashe kugusubiza.',
    validationEmail: 'Andika aderesi ya imeyili twagusubirizaho.',
    validationEmailFormat: 'Iyo ntisa n’aderesi ya imeyili.',
    validationMessage: 'Tubwire gato icyo ukeneye.',

    topicLegend: 'Ni ibyerekeye iki?',
    topics: {
      tracking: 'Gukurikirana ibinyabiziga',
      fuel: 'Kugenzura lisansi',
      video: 'Amashusho na kamera',
      cargo: 'Imizigo na kontineri',
      support: 'Ndi umukiriya usanzwe',
      other: 'Ikindi',
    },

    fleetLegend: 'Ufite ibinyabiziga bingahe?',
    fleetBands: {
      small: '1 kugeza 5',
      mid: '6 kugeza 20',
      large: '21 kugeza 50',
      xl: 'Birenga 50',
    },

    phoneCountry: 'Kode y’igihugu',
    phoneSearch: 'Shakisha igihugu',
    phoneNoMatches: 'Nta gihugu gihuye n’ibyo wanditse',
    phonePlaceholder: '788 123 456',
    validationPhone: 'Iyo nomero ntisa n’iyuzuye ku gihugu wahisemo.',

    charactersLeft: 'Hasigaye inyuguti {n}',
    privacyNote: 'Amakuru yawe tuyakoresha gusa mu gusubiza ubusabe bwawe.',
    successNext: 'Ibikurikiraho',
    successSteps: [
      'Inzobere isoma ubutumwa bwawe ikamenya neza icyo ukeneye.',
      'Tukugarukira n’inama n’ibiciro, akenshi uwo munsi w’akazi.',
      'Niba byihutirwa, PrimeCARE isubiza kuri WhatsApp amasaha 24 kuri 24.',
    ],
    sendAnother: 'Ohereza ubundi butumwa',

    unconfiguredTitle: 'Ifishi ntirahuzwa',
    unconfiguredBody:
      'Iyi fishi ikeneye nomero ya Formspree kugira ngo ibashe kwakira ubutumwa. Kugeza icyo gihe, tuvugishe kuri WhatsApp cyangwa kuri imeyili.',
  },

  common: {
    home: 'Ahabanza',
    breadcrumbLabel: 'Inzira',
    relatedTitle: 'Impapuro zifitanye isano',
    onThisPage: 'Kuri uru rupapuro',
    published: 'Byatangajwe',
    updated: 'Byavuguruwe',
    by: 'Na',
    readingTime: 'Gusoma iminota {minutes}',
    placeholderBadge: 'Ifoto y’agateganyo',
    externalLink: 'Ifungura mu idirishya rishya',
    loading: 'Birimo gufunguka',
  },

  notFound: {
    code: '404',
    title: 'Ntitwabonye urwo rupapuro',
    body:
      'Urupapuro washakaga ntiruri hano. Rushobora kuba rwarimuwe, cyangwa umurongo wakuzanye hano ukaba utagikora. Ibice by’ingenzi by’urubuga biri hepfo.',
    suggestionsTitle: 'Gerageza kimwe muri ibi',
  },
};
