/**
 * Homepage copy.
 *
 * Section order is a deliberate rebuild, not a port. The live site opens with
 * a hero, then a dead Elementor checkbox list of "fleet challenges", then a
 * value proposition, then four capability cards. All of that content survives
 * here, but the challenge list becomes a working router into the product that
 * actually solves each problem, which is what it was always trying to be.
 *
 * The order also deliberately differs from the Nigeria homepage: Rwanda opens
 * on the customer's problem, Nigeria opens on the product range.
 */
export const home = {
  hero: {
    /* The eyebrow carries the primary keyword so the h1 can be short and
       outcome-led rather than a search phrase read aloud. The page title and
       meta description carry it too. */
    eyebrow: 'GPS tracking and fleet management in Rwanda',
    /** The single h1 for the site's most important page, in two parts: the
        subject large, and what it gets, set smaller on its own line. Read
        together they are one heading. */
    title: 'Your fleet -',
    titleRest: 'visible, compliant, safe',
    lead:
      'PrimeTrack helps you track your vehicles, monitor driver behaviour, control operating costs, enforce policy compliance, & enhance security, all in real time.',
    primaryCta: 'Talk to our expert',
    secondaryCta: 'Explore solutions',
    /** Descriptor band. Source: the live site's hero subhead. Lifted out of the
     *  hero section during the redesign so the hero reads cleaner; it now sits
     *  as its own band directly beneath it. */
    descriptors: [
      'AI-enabled video telematics',
      'Solar-powered tracking',
      'IoT-driven fleet management',
      'Precision vehicle tracking',
      'Premium goods tracking',
      '15+ years industry experience',
    ],
  },

  /** Reworked from the live site's "What Are Your Most Pressing Fleet
   *  Challenges?" checkbox block, which currently leads nowhere. */
  challenges: {
    eyebrow: 'Start here',
    title: 'What are you trying to stop losing?',
    lead:
      'Pick what is costing you most. We will point you to the part of the system built for it, and you can decide from there whether it is worth a conversation.',
    /** Each maps to a real product or service page. */
    items: {
      theft: { label: 'Vehicle theft', body: 'Live location, geofence breaches and instant alerts the moment a vehicle moves when it should not.' },
      accident: { label: 'Vehicle accidents', body: 'Four camera angles and a recorded timeline, so liability is established from footage rather than argument.' },
      tampering: { label: 'Device tampering', body: 'A tracker with no wiring to cut, its own power, a vibration sensor, and an alert the moment it is touched.' },
      documents: { label: 'Vehicle documents', body: 'Automated reminders for service intervals and paper renewal dates, so nothing lapses unnoticed.' },
      fuelTheft: { label: 'Fuel theft', body: 'Tank sensors and flow meters that turn a sudden drop in level into an immediate alert.' },
      goodsTheft: { label: 'Goods theft', body: 'Stand-alone trackers on the cargo itself, reporting from anywhere, with no dependence on the vehicle.' },
      driverBehaviour: { label: 'Driver behaviour', body: 'Harsh braking, speeding and cornering measured per driver, with in-cab correction as it happens.' },
      reporting: { label: 'Reporting', body: 'Fifteen analytics capabilities covering location, cost, safety and vehicle condition.' },
    },
    seeAnswer: 'See how we handle this',
    /** The block is a working brief now, not a list, so it needs the words a
     *  form needs. Everything here is new UI copy; nothing replaces an
     *  existing string, and the eight labels and bodies above are untouched. */
    form: {
      otherLabel: 'Something else',
      otherPlaceholder: 'Tell us what it is',
      emailLabel: 'Where should we send it?',
      emailPlaceholder: 'you@company.rw',
      nameLabel: 'Your name',
      namePlaceholder: 'Optional',
      submit: 'Send my brief',
      sending: 'Sending',
      successTitle: 'On its way',
      successBody:
        'We have your brief. PrimeCARE will come back to you with what we would put on your fleet, and what it costs.',
      emptyTitle: 'Nothing picked yet',
      emptyBody: 'Tick what is costing you most and it will stack up here.',
      countOne: 'thing to fix',
      countMany: 'things to fix',
      needOne: 'Pick at least one, or tell us what else it is.',
      needEmail: 'Add an email so we can reply.',
      privacy: 'We use this to answer you and nothing else.',
      unconfigured:
        'The form is not connected yet. In the meantime, PrimeCARE is on the number and the WhatsApp line above.',
    },
  },

  /** The live site's "OUR VALUE PROPOSTION" trio, kept in their own framing. */
  valueProp: {
    eyebrow: 'Our value proposition',
    title: 'Three things we hold ourselves to',
    items: {
      solutions: {
        title: 'Solutions',
        body: 'Practical technology aimed at the parts of fleet operations that actually hurt, rather than features that demonstrate well and change nothing.',
      },
      service: {
        title: 'Service',
        body: 'PrimeCARE answers at any hour. Beyond responding to faults, the team watches for problems developing and gets ahead of them.',
      },
      simplicity: {
        title: 'Simplicity',
        body: 'The best technology is the kind nobody needs training to use. Our interfaces are built so a dispatcher can pick them up on the first morning.',
      },
    },
  },

  trust: {
    eyebrow: 'Why operators trust us',
    licensed: { title: 'Licensed by RURA', body: 'Fully licensed in Rwanda to provide GPS vehicle tracking and telematics services.' },
    warranty: { title: 'Up to 5-year warranty', body: 'One of the longest warranties in the industry, covering defects in materials and workmanship.' },
    support: { title: '24/7 PrimeCARE', body: 'A support line that answers at any hour, on the phone, on WhatsApp, or by email.' },
    experience: { title: '15+ years in telematics', body: 'Operating across five countries, with over a decade of service in the industry.' },
  },

  products: {
    eyebrow: 'The range',
    title: 'Six device families, six different problems',
    lead:
      'A camera system and a cargo tag have almost nothing in common beyond the platform they report into. Pick by what you need to see.',
    cta: 'View all products',
    /** Heading above the index list beside the helix. */
    menuTitle: 'What are you looking for?',
    /** Link text on each card in the helix. */
    cardCta: 'See the hardware',
  },

  services: {
    eyebrow: 'Services',
    title: 'What we do with the data once it arrives',
    lead:
      'Hardware is half the job. These three services decide whether the reporting becomes a management tool or another dashboard nobody opens.',
  },

  /** The live homepage's four capability cards, preserved. */
  capabilities: {
    eyebrow: 'On the platform',
    title: 'Included with the tracking, not sold separately',
    items: {
      mobile: {
        title: 'Track on the go',
        body: 'PrimeTrack\'s mobile apps are available on iOS and Android, carrying the tools needed to manage a fleet from a phone rather than a desk.',
      },
      driver: {
        title: 'Driver behaviour monitoring',
        body: 'Detailed reporting on driving habits, so poor behaviour is identified in time to correct it rather than after it has affected operations.',
      },
      maintenance: {
        title: 'Preventive maintenance',
        body: 'Automated maintenance scheduling, which takes service due dates and vehicle paper renewals off somebody\'s memory and into the system.',
      },
      speedLimiters: {
        title: 'Arrive Alive speed limiters',
        body: 'Speed limiting fitted alongside the tracking, supporting both driver safety and compliance with road speed requirements.',
      },
    },
  },

  /** Flagship product feature block. Source: homepage video telematics section. */
  videoFeature: {
    eyebrow: 'AI-enabled video telematics',
    title: 'Your vehicle\'s smart CCTV',
    body:
      'Real-time video streaming and 360 degree monitoring of the vehicle and the road around it. ADAS and blind-spot mitigation give drivers a warning before a situation develops, and the AI-interactive features keep drivers and the control room connected while the vehicle is still moving.',
    closing: 'Keep your fleet safe, smart and secure on every journey.',
    primaryCta: 'Talk to us about video tracking',
    secondaryCta: 'More about video tracking',
  },

  /**
   * The hero's three scenes after the opening (see HeroStory). Every fact is
   * one PrimeTrack already publishes: five-metre accuracy and ten-second
   * updates (Fleet Trackers page), tank probes that flag a sudden drop and
   * recommend rather than chart (the fuel copy), per-driver behaviour
   * (Driver Monitoring), four cameras recorded as evidence (Video Tracking).
   */
  story: {
    /** The three steps of the hero, for its progress marker. */
    steps: ['Overview', 'Fuel', 'Tracking'],
    fuel: {
      eyebrow: 'Fuel monitoring',
      title: 'Every litre, accounted for.',
      body: 'Probes in the tank measure every litre in and out. A sudden drop is flagged the moment it happens, with a clear next step instead of a chart to decode.',
      primaryCta: 'Talk to us about fuel tracking',
      secondaryCta: 'More about fuel tracking',
      readoutLevel: 'Fuel level',
      readoutAlert: 'Drain detected',
      overview: 'See the fuel monitoring overview',
    },
    tracking: {
      eyebrow: 'GPS fleet tracking',
      title: 'One unit. Four reports.',
      reports: {
        position: { label: 'Position', line: 'Where every vehicle is, to within five metres.' },
        fuel: { label: 'Fuel', line: 'Tank level, consumption and every sudden drop.' },
        driver: { label: 'Driver behaviour', line: 'Speeding, harsh braking and cornering, per driver.' },
        video: { label: 'Video', line: 'Four cameras, recorded as evidence.' },
      },
      specs: {
        accuracy: { value: '5', unit: 'm', label: 'Location accuracy' },
        interval: { value: '10', unit: 's', label: 'Update interval' },
      },
    },
  },

  stats: {
    eyebrow: 'PrimeTrack by the numbers',
    title: 'The scale we operate at',
    labels: {
      trackers: 'Active trackers in service',
      years: 'Years of industry experience',
      countries: 'Countries in operation',
      support: 'Customer service, every day',
    },
  },

  /** P.R.I.M.E. core values. Source: homepage and /why-choose-prime/. */
  values: {
    eyebrow: 'Our core values',
    title: 'P.R.I.M.E.',
    items: {
      performance: { letter: 'P', title: 'Performance', body: 'Precision tracking that delivers when it matters.' },
      reliability: { letter: 'R', title: 'Reliability', body: 'A service you can depend on when the chips are down.' },
      innovation: { letter: 'I', title: 'Innovation', body: 'Always at the cutting edge of evolving technology.' },
      multifunction: { letter: 'M', title: 'Multi-function', body: 'One versatile platform for every tracking need.' },
      efficiency: { letter: 'E', title: 'Efficiency', body: 'Our most enduring strength, and it speaks for itself.' },
    },
  },

  clients: {
    eyebrow: 'Some brands we serve',
    title: 'Organisations running on PrimeTrack',
  },

  /** Marquee strip. Source: the live site's two scrolling bands. */
  marquee: {
    primary: 'See your vehicle\'s every move',
    items: ['Super-fast MTTR', '24-hour service', 'Extended warranty'],
  },

  whyPrime: {
    eyebrow: 'Why PrimeTrack',
    title: 'What separates us from the rest',
    lead: 'Seven things we point to when someone asks why they should trust us with their fleet. Three of them are below.',
    cta: 'Read all seven advantages',
  },

  finalCta: {
    eyebrow: 'Get started',
    title: 'Tell us what you need to see',
    body:
      'Describe your fleet and the problem you are trying to solve. We will recommend a configuration, explain what it does and does not cover, and give you a straight answer on cost.',
    primary: 'Contact our team',
    secondary: 'Message us on WhatsApp',
  },
} as const;
