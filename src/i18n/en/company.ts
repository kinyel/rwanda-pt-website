/**
 * Company, trust and legal pages.
 *
 * Sources: /why-choose-prime/, /prime-warranties/, /prime-careers/,
 * /contactus/, /terms-of-service/, /privacy-policy/ and /tools/.
 *
 * Two corrections were made against the live site, both flagged in
 * docs/handoff.md rather than made silently:
 *   1. The live privacy policy tells Rwandan users to contact
 *      admin@primetracknigeria.net. That is a Nigeria address on a Rwanda
 *      page. It is replaced with admin@primetrack.rw, which is the Rwanda
 *      contact address published everywhere else on the same site.
 *   2. The live STAR Trackers page refers to "PrimeTrack Nigeria's STAR
 *      Trackers". Corrected to the unqualified brand name in products.ts.
 *
 * The terms of service genuinely publish info@primetrack.rw for legal
 * queries, distinct from the general admin@ address. That distinction is
 * preserved rather than flattened.
 */
export const companyPages = {
  whyChoose: {
    eyebrow: 'Why PrimeTrack',
    title: 'Seven advantages that set us apart',
    lead:
      'Every tracking company says it is reliable. These are the seven specific things we point to when a fleet operator asks why they should trust us with their vehicles.',
    advantages: {
      regulator: {
        title: 'Regulator-approved',
        body:
          'PrimeTrack is fully licensed in Rwanda by RURA to provide GPS vehicle tracking and telematics services. Your fleet runs on a legally compliant, officially recognised system that meets national standards. Some competitors operate in a regulatory grey zone. We do not.',
      },
      support: {
        title: 'PrimeCARE support, 24/7',
        body:
          'Our PrimeCARE team works round the clock to keep service uninterrupted. Beyond responding to issues, they actively monitor your system and identify anomalies before they become problems, which keeps downtime to a minimum. You get always-on support from people who understand that fleet operations do not pause overnight.',
      },
      hardware: {
        title: 'Hardware built for African conditions',
        body:
          'PrimeTrack devices are engineered for the heat, dust, humidity and network variability common across African operating environments. The result is hardware that lasts longer, performs more consistently, and costs less to maintain, including in genuinely harsh conditions.',
      },
      ai: {
        title: 'AI-driven telematics that cut cost and improve safety',
        body:
          'The platform turns raw fleet data into something you can act on. Fuel optimisation, driver behaviour scoring and predictive maintenance recommendations help you save money and reduce risk, delivered through interfaces simple enough to use without training.',
      },
      warranty: {
        title: 'Long warranty and after-sales support',
        body:
          'PrimeTrack offers one of the longest warranties in the industry, backed by guaranteed support and quick mean-time-to-repair. Your investment is protected for years rather than months.',
      },
      scale: {
        title: 'Seamless integrations and a system that scales',
        body:
          'Whether you are managing three vehicles or three thousand, PrimeTrack scales with the operation. Open APIs, a modular design and iVTS-compatible features make integration with ERPs, logistics platforms and industry-specific systems straightforward. You use, and pay for, only what you need.',
      },
      values: {
        title: 'Our core values spell P.R.I.M.E.',
        body: 'Performance, Reliability, Innovation, Multi-functionality, Efficiency.',
      },
    },
    ctaTitle: 'Still deciding?',
    ctaBody: 'The fastest way to judge a tracking company is to give it a real problem. Send us yours.',
  },

  warranty: {
    eyebrow: 'Prime warranties',
    title: 'Warranty cover of up to five years',
    lead:
      'PrimeTrack offers a comprehensive warranty to the original purchaser of up to five years, guaranteeing that our products are free from defects in materials and workmanship under normal and proper use.',
    intro:
      'During the warranty period, PrimeTrack will repair or replace any product showing a factory defect at no cost to the client. The full terms are below.',
    coveredTitle: 'What is covered',
    covered: [
      'The warranty applies to products sold through PrimeTrack\'s authorised representatives or distribution channels.',
      'All warranty work must be performed by PrimeTrack or authorised PrimeTrack staff and agents.',
      'Any self-repair, unauthorised service, tampering or alteration of the product voids the warranty.',
    ],
    notCoveredTitle: 'What is not covered',
    notCovered: [
      'Physical damage caused by accidents, unauthorised removal or attempted repair of the device or its components, tampering, or modification.',
      'Damage resulting from fire, earthquake, external impacts, electrical surges, vehicle power or battery malfunctions, or force majeure events.',
      'Acts of sabotage by third parties outside PrimeTrack\'s control.',
      'Cosmetic damage or defects arising from normal wear and tear or product aging.',
      'Damage from operating the product outside its agreed permitted or intended uses.',
      'Damage from service by anyone other than PrimeTrack or a PrimeTrack authorised service provider.',
    ],
    extensionTitle: 'Extension of coverage',
    extensionBody:
      'Subject to the terms and limitations of this PrimeTrack Standard Limited Warranty, the warranty covers any new product found to be defective within the applicable warranty period. PrimeTrack reserves the right to examine the allegedly defective product to determine whether the warranty applies, with the final determination of coverage at PrimeTrack\'s discretion. Where warranty coverage applies, PrimeTrack will repair or replace the product, or any part of it, at its discretion. Where the product has been subjected to conditions that exclude warranty coverage, the customer will be notified and given the option to authorise a paid repair or choose another disposition for the product.',
  },

  careers: {
    eyebrow: 'Prime careers',
    title: 'A job at PrimeTrack is different',
    lead:
      'It will challenge you. It will inspire you. Beyond that it will reward you to the measure of the talent and productivity you bring, so that you can grow and achieve what you set out to. Every PrimePerson knows this from the day they join the team.',
    questionsTitle: 'Two questions worth sitting with',
    questions: [
      'How big are your dreams, and how confident are you in your ability to achieve them?',
      'How passionate are you about creating exceptional value in everything you do?',
    ],
    closing:
      'If you are convinced you have what it takes to be a PrimePerson, whether through talent, skills or qualifications, send us a brief résumé.',
    applyCta: 'Send your résumé',
    applyNote: 'Applications go to {email}.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Talk to PrimeTrack Rwanda',
    lead:
      'Tell us what you need to track and we will recommend a setup. For anything urgent, PrimeCARE is reachable on WhatsApp at any hour.',
    formTitle: 'Send us a message',
    formLead: 'We reply to every message. If it is faster for you, WhatsApp works just as well.',
    officeTitle: 'Rwanda office',
    hoursNote: 'PrimeCARE support is available 24 hours a day.',
    nigeriaTitle: 'Looking for PrimeTrack Nigeria?',
    nigeriaBody: 'Our Nigeria operation runs its own site with its own contact details.',
    nigeriaCta: 'Visit primetracknigeria.com',
    directTitle: 'Reach us directly',
    mapLabel: 'Map showing the PrimeTrack Rwanda office in Kigali',
  },

  /** The live /tools/ page exists and is linked in the footer, but renders
   *  with no content. It is preserved as a real URL with a marked placeholder
   *  rather than dropped, because the link is already published. */
  tools: {
    eyebrow: 'PrimeTOOLS',
    title: 'Support manuals and documents',
    lead: 'Device manuals, installation guides and platform documentation for PrimeTrack customers.',
    pendingTitle: 'Documents coming to this page',
    pendingBody:
      'This page is published but its document library has not been supplied yet. In the meantime, PrimeCARE can send you the manual for any PrimeTrack device directly.',
    pendingCta: 'Request a manual from PrimeCARE',
  },

  terms: {
    eyebrow: 'Legal',
    title: 'Terms of service',
    intro:
      'Welcome to PrimeTrack Telematics Limited. These Terms of Service govern your use of our GPS tracking and telematics services. By accessing or using our services, you agree to comply with and be bound by these terms. Please read them carefully.',
    sections: [
      {
        title: 'Service description',
        body: 'PrimeTrack Rwanda provides GPS tracking and telematics services that enable users to track and monitor vehicles, assets or individuals through our platform and associated software.',
      },
      {
        title: 'User obligations',
        body: 'By using our services, you represent and warrant that you are legally capable and have the authority to enter into this agreement. You agree to use the services in compliance with applicable laws and regulations in Rwanda, and you will not use the services for any illegal, unauthorised or fraudulent purposes.',
      },
      {
        title: 'User account',
        body: 'To access and use our services, we provide you with appropriate user accounts carrying rights commensurate with your purchase plan. You are responsible for maintaining the confidentiality of your account information, and you accept responsibility for all activities that occur under your account.',
      },
      {
        title: 'Data privacy and security',
        body: 'At PrimeTrack Rwanda we prioritise the privacy and security of your data. Our Privacy Policy explains how we collect, use and protect your personal information. By using our services, you consent to the collection, use and disclosure of your information as described in that policy.',
      },
      {
        title: 'Intellectual property',
        body: 'Our services and all related software, technology and content are protected by intellectual property laws. You agree not to copy, modify, distribute or create derivative works based on our services without our prior written consent.',
      },
      {
        title: 'Termination',
        body: 'We may suspend or terminate your access to our services at any time and for any reason, including if you violate these terms. You may also terminate your account by providing written notice to us.',
      },
      {
        title: 'Governing law and jurisdiction',
        body: 'These terms are governed by the laws of Rwanda. Any disputes arising out of or relating to them are subject to the exclusive jurisdiction of the courts in Rwanda.',
      },
      {
        title: 'Limitations of liability',
        body: 'Our services are provided on an "as is" and "as available" basis. While we work to ensure accuracy and reliability, we do not guarantee uninterrupted availability of the third-party services our services rely on, such as GSM network availability and GPS satellites. To that extent, you accept that we are not liable for any direct, indirect, incidental, consequential or punitive damages arising out of or in connection with the use of our services where such third-party services fail or are affected by outside factors, or where acts of sabotage affect our service.',
      },
      {
        title: 'Caveat emptor',
        body: 'Tracking devices are valuable aids in monitoring assets, ensuring vehicle safety and gathering telematics data. Their functionality depends on a number of external factors beyond the control of the tracker hardware: the availability and reliability of GSM network signals, the availability of GPS satellites in the area, variations in terrain and topography, and weather conditions from time to time. Users are advised not to rely solely on trackers in emergency situations or for critical data assessments. While trackers play a major role in enhancing security and telematics data collection, users should consider keeping alternative emergency measures in place alongside their tracking devices. This caveat is an industry-wide acknowledgment of the dependencies inherent in tracking technology worldwide.',
      },
      {
        title: 'Entire agreement',
        body: 'These terms constitute the entire agreement between you and PrimeTrack Rwanda regarding the use of our services, and supersede any prior agreements or understandings.',
      },
    ],
    contactNote: 'If you have questions or concerns about these terms, please contact us at {email}.',
    /** The terms page publishes a distinct legal address from the general one. */
    legalEmail: 'info@primetrack.rw',
    privacyLink: 'Read our privacy policy',
  },

  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    intro:
      'This Privacy Policy explains how PrimeTrack Telematics Rwanda Limited ("we", "us" or "our") collects, uses and protects the personal information of visitors and users ("you" or "your") of our website, www.primetrack.rw. By accessing or using our website, you consent to the collection, use and disclosure of your personal information as outlined here.',
    sections: [
      {
        title: 'Information we collect',
        body: 'We collect personal information that you voluntarily provide when you interact with our website. This may include your name, email address, contact number, and other information you provide while making enquiries or using our services.',
      },
      {
        title: 'Use of information',
        body: 'We use the personal information we collect to provide the services you request, respond to your enquiries, communicate with you, and improve our services. With your consent, we may also send you updates or promotional material about our products and services.',
      },
      {
        title: 'Disclosure of information',
        body: 'We may share your personal information with trusted third-party service providers who assist us in operating our website and providing our services. These providers are required to protect your information and may only use it for the purposes we specify. We may also disclose your personal information if required by law, or to protect our rights or the safety of others.',
      },
      {
        title: 'Data security',
        body: 'We employ reasonable security measures to protect your personal information from unauthorised access, disclosure or alteration. Please be aware that no method of data transmission over the internet, and no method of electronic storage, is completely secure.',
      },
      {
        title: 'Cookies',
        body: 'Our website may use cookies and similar technologies to improve your browsing experience, analyse usage patterns and personalise content. You can disable cookies through your browser settings, though this may affect certain features of the site.',
      },
      {
        title: 'Changes to this policy',
        body: 'We may update this Privacy Policy periodically. Any changes will be posted here with a revised effective date. We encourage you to review it from time to time to stay informed about how we handle your personal information.',
      },
      {
        title: 'Contact us',
        body: 'If you have questions, concerns or requests regarding this Privacy Policy or our privacy practices, please contact us at {email}.',
      },
    ],
    closing: 'By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.',
  },

  /** Standalone version of the homepage challenge selector, preserved because
   *  /analyze-your-fleet/ is an existing indexed URL. */
  analyzeFleet: {
    eyebrow: 'Fleet check',
    title: 'Identify your top fleet management challenges',
    lead:
      'Pick the problems that apply to your operation. Each one links through to the part of the PrimeTrack system built to address it, so you can see what a fix would actually involve before talking to anyone.',
    selectedTitle: 'What you selected',
    emptyState: 'Choose at least one challenge above to see the matching part of the system.',
    ctaTitle: 'Send us your selection',
    ctaBody: 'Get in touch and mention the areas you picked. We will come back with a specific recommendation.',
  },

  blog: {
    eyebrow: 'Insights',
    title: 'Vehicle tracking and fleet management in Rwanda',
    lead:
      'Notes from our team on tracking, fleet operations and vehicle security, written for the Rwandan market.',
    readArticle: 'Read: {title}',
    backToIndex: 'All articles',
    relatedTitle: 'Related reading',
    author: 'primeTEAM',
  },
} as const;
