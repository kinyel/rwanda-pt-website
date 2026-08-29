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
    /** The single h1 for the site's most important page. Four words on purpose. */
    title: 'Your fleet, completely visible',
    lead:
      'PrimeTrack connects every vehicle, driver and load you run to one platform: where things are, how they are being driven, and what the fleet is costing you.',
    primaryCta: 'Talk to an expert',
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
      'Pick what is costing you most. We will point you at the part of the system built for it, and you can decide from there whether it is worth a conversation.',
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

  /**
   * The hero journey: the scroll-driven narrative that runs from the headline
   * down into the first content section.
   *
   * The idea is that scrolling IS the trip. A vehicle travels a route down the
   * right of the screen while the reader scrolls, and each waypoint it passes
   * reveals one of the things a PrimeTrack unit actually reports. For a company
   * whose entire product is following a vehicle along a route, that is the one
   * animation on this site that is not decoration: it is the product, drawn.
   *
   * Every figure and every waypoint below is verified from the live site. The
   * two specs are the strongest concrete numbers PrimeTrack publishes (Fleet
   * Trackers page: "location accuracy within five metres, updated every ten
   * seconds"). Nothing is a fabricated interface or invented telemetry.
   */
  journey: {
    eyebrow: 'What a PrimeTrack unit reports',
    title: 'Where every vehicle is, to within five metres',
    /* Two sentences, because in the pinned presentation this sits between the
       heading and the report sequence and has room for about two lines. Every
       fact in it is also stated in full by the four reports below. */
    lead:
      'Position every ten seconds. Fuel, driver behaviour and camera footage on the same connection, into one platform.',
    /** The line the sequence is travelling toward. It replaces the lead in the
     *  same slot when the fourth report lands, so the section closes on a
     *  sentence rather than trailing off. */
    closing:
      'Four reports on one connection. By the end of the trip you have a record of a journey you were never on.',
    specs: {
      accuracy: { value: '5', unit: 'm', label: 'Location accuracy' },
      interval: { value: '10', unit: 's', label: 'Update interval' },
    },
    /**
     * The four reports, in the order the vehicle reaches them.
     *
     * `refrain` is the storytelling spine: each report adds one more thing the
     * operator knows, so read top to bottom the section is certainty
     * accumulating over a single trip. `label` is the plain name of the report
     * and is also what the route graphic prints beside each waypoint, so the
     * two columns name the same thing at the same moment. `body` is the
     * verified capability, unchanged.
     */
    waypoints: {
      position: {
        label: 'Position and route',
        refrain: 'You know where it is.',
        body: 'Location, speed and the full trip history, accurate to five metres.',
      },
      fuel: {
        label: 'Fuel',
        refrain: 'You know what it is burning.',
        body: 'Tank level and consumption rate, with an alert the moment fuel drops suddenly.',
      },
      driver: {
        label: 'Driver behaviour',
        refrain: 'You know how it is being driven.',
        body: 'Harsh braking, speeding and sharp cornering, measured per driver.',
      },
      video: {
        label: 'Video',
        refrain: 'You know what happened.',
        body: 'Live feed from four weatherproof cameras, and the recording as evidence.',
      },
    },
    /** Accessible name for the route graphic. */
    railLabel: 'A vehicle travelling a route, marking what the tracker reports at each stage',
    /** Names the report counter for a screen reader. The visible counter is
     *  decorative chrome for the scroll sequence and is hidden from the tree. */
    counterLabel: 'Reports in a single trip',
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

  /** Source: homepage fuel monitoring section. */
  fuelFeature: {
    eyebrow: 'Fuel monitoring',
    title: 'Monitor consumption, find the waste, deter the theft',
    body:
      'Monitoring probes track fuel usage precisely and identify where it is being wasted. The system pinpoints the inefficiencies and gives you specific recommendations rather than a chart to interpret on your own.',
    primaryCta: 'Talk to us about fuel tracking',
    secondaryCta: 'More about fuel tracking',
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
    lead: 'The five words the company is named after, in the order they spell it.',
    items: {
      performance: { letter: 'P', title: 'Performance', body: 'Systems judged by what they change in your operation, not by their specification sheet.' },
      reliability: { letter: 'R', title: 'Reliability', body: 'Hardware and support you can plan around, in conditions that are hard on both.' },
      innovation: { letter: 'I', title: 'Innovation', body: 'AI, IoT and solar power applied where they solve a real problem.' },
      multifunction: { letter: 'M', title: 'Multifunction', body: 'One platform covering vehicles, cargo, fuel and drivers rather than four separate contracts.' },
      efficiency: { letter: 'E', title: 'Efficiency', body: 'Every capability measured against whether it lowers what the fleet costs to run.' },
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
