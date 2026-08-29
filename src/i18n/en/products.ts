/**
 * The six PrimeTrack Rwanda product lines.
 *
 * Every claim below traces to the live primetrack.rw product pages captured in
 * the Phase 1 audit. The prose is rewritten for readability; the facts,
 * figures, component names and report lists are not changed, added to, or
 * rounded. Where the live page carried an obvious error it is corrected in one
 * direction only, toward what is verifiably true of Rwanda (noted inline).
 */
export const products = {
  /** Shared chrome for the product index and every product page. */
  index: {
    eyebrow: 'Products',
    title: 'Tracking hardware built for how Rwanda actually drives',
    lead:
      'Six device families, each solving a different problem. Some watch the road, some watch the tank, some run for months with no power source at all. If you are not sure which one fits, tell us what you are trying to stop losing and we will point you at the right one.',
    chooseTitle: 'Not sure which device you need?',
    chooseBody: 'Describe your fleet and what you need to see. We will recommend a setup and explain why.',
    specsTitle: 'At a glance',
    featuresTitle: 'What it does',
  },

  videoTracking: {
    name: 'Video Trackers',
    /** The product's own name on the live site. */
    productName: 'Ai-PRIME Video Telematics',
    menuDescriptor: 'Vehicle CCTV with ADAS and AI driver alerts',
    tagline: 'CCTV for your vehicles, watching the road and the cab at once',
    heroKicker: 'Video telematics',
    summary:
      'Four weatherproof cameras and a high-capacity DVR give you a 360 degree record of every trip, with AI watching the footage in real time and speaking up when a driver drifts out of line.',
    specs: ['4K DVR cameras', 'ADAS sensors', 'All-weather firmware', 'Over-the-air upgrades'],
    intro: 'Our video telematics is CCTV for your vehicles.',
    sections: {
      liveFeeds: {
        title: 'Live video, from four angles',
        body:
          'The system pairs a high-storage dynamic DVR with four audio and visual infra-red weatherproof cameras. One sits in the cab and three face the road, which together cover 360 degrees around the vehicle. ADAS driver assistance and blind-spot mitigation run alongside the feed, and alert prompts reach your control centre the moment something happens.',
      },
      aiEnabled: {
        title: 'AI that talks to the driver, not just the office',
        body:
          'Artificial intelligence analyses the video stream continuously and responds while the vehicle is still moving. Non-conforming driver activity is flagged to the control room and announced to the driver through an AI-compatible speaker, so the correction happens in the cab rather than in a report a week later. That is what turns footage into avoided incidents.',
      },
      analytics: {
        title: 'Reporting that covers the whole trip',
        body: 'Available report types include:',
        items: [
          'Historical video report',
          'Idling report',
          'Odometer',
          'Vehicle trip report',
          'Harsh acceleration',
          'Sharp cornering report',
          'Alarm frequency report',
          'Overspeed driving report',
          'Driver behaviour analysis report',
          'YAW route deviation report',
          'Trip turnaround time report',
          'Geofence report',
          'POI marking',
          'Traffic congestion indicator',
          'Parking duration report',
          'Service due maintenance reminder',
          'Automatic email notifications',
          'Engine start report',
          'SOS alarm',
        ],
      },
      investigations: {
        title: 'Evidence when an incident is disputed',
        body:
          'This is where video tracking earns its keep. After an incident you can see the cause, follow the sequence of events, and establish liability without a drawn-out argument. It settles disputes, protects your organisation\'s position, and keeps costs down.',
      },
      customAnalytics: {
        title: 'Alerts tuned to your operation',
        body:
          'The video analytics are configurable. Set triggers for the events that matter to you, such as speeding, sudden lane changes, or unauthorised vehicle access, and act on them as they happen rather than after the fact.',
      },
      storage: {
        title: 'Storage sized to your recording needs',
        body:
          'The DVR comes in 256GB, 1TB and 4TB variants, each rated for continuous recording of at least eight hours a day.',
      },
    },
    /** Feature chips used on the homepage video section. */
    highlights: [
      'Real-time video tracking',
      'ADAS driver assistance',
      'Large storage capacity',
      'Blind-spot error mitigation',
      'Historical query',
      'Customisable reporting',
    ],
    ctaTitle: 'Interested in video telematics?',
    ctaBody: 'Tell us what your vehicles carry and where they run. We will spec the camera and storage configuration to match.',
  },

  primesolar: {
    name: 'Solar Trackers',
    productName: 'PrimeSOLAR',
    menuDescriptor: 'Maintenance-free solar tracking for trucks',
    tagline: 'The maintenance-free truck tracker',
    heroKicker: 'Solar tracking',
    summary:
      'A tracker that never touches your truck\'s battery, keeps reporting while the vehicle sits in the workshop, and recharges on daylight alone.',
    specs: ['No vehicle battery connection', 'Minimum 3-year battery', 'Tamper alerts', 'Built for the tropics'],
    sections: {
      maintenanceFree: {
        title: 'It keeps working when the truck stops',
        body:
          'PrimeSOLAR runs uninterrupted even while your truck is in the workshop for mechanical repairs, because it never needs a connection to the vehicle battery. Tamper with it and you get an instant alert. You can hear conversations taking place around it, and a built-in vibration sensor picks up movement. The embedded battery lasts a minimum of three years before replacement and recharges daily on a modest amount of sunshine. It is waterproof, weatherproof and temperature proof: the hardware is built rugged for tropical conditions and the software was redesigned from the ground up. It carries the same precision reports and breach alerts as the rest of the tracking platform and the Prime mobile apps.',
      },
      proofing: {
        title: 'Waterproof, weatherproof, temperature proof',
        body:
          'Track your trucks wherever they go with practically no downtime caused by outside conditions. PrimeSOLAR lets you see the vehicle\'s every move without interruption.',
      },
      noLoss: {
        title: 'No power loss, no SIM loss, no health checks',
        body:
          'Straightforward tracking of your trucks and goods, wherever they are, from wherever you are, whenever you want to look. It answers the tracker sabotage problem directly and without complication.',
      },
      rugged: {
        title: 'Built for conditions that break other hardware',
        body:
          'PrimeSOLAR is designed for a wide range of environments and usage patterns. The rugged construction holds up across high and low temperatures, humidity and the general wear of field conditions, so it stays reliable whether the weather is punishing or ordinary.',
      },
    },
    ctaTitle: 'Interested in our solar trackers?',
    ctaBody: 'Going green on your fleet tracking removes the wiring, the battery drain and the health checks. Let us show you the numbers for your trucks.',
  },

  fuelmanagement: {
    name: 'Fuel Trackers',
    productName: 'Prime Fuel Telematics',
    menuDescriptor: 'Fuel level, flow and theft monitoring',
    tagline: 'Find out where the fuel actually goes',
    heroKicker: 'Fuel monitoring',
    summary:
      'Capacitive tank sensors and in-line flow meters measure real consumption, so siphoning shows up as an alert rather than as an unexplained gap in the month\'s figures.',
    specs: ['Capacitive tank sensors', 'In-line flow meters', 'Theft alerts', 'Consumption reporting'],
    intro:
      'Fuel is one of the few fleet costs you can change quickly, which is why we treat consumption as a core KPI rather than a line item. Our system combines proprietary software with GPS and telematics hardware to show where fuel is going and what to do about it.',
    sections: {
      technology: {
        title: 'How the measurement works',
        body: 'The fuel tracking hardware is built on IoT sensors working alongside GPS. Three components do the work:',
        items: [
          'Fuel level sensors. Highly accurate capacitive sensors installed in the fuel tank, able to detect small changes in level.',
          'Fuel flow meters. Fitted along the fuel line to monitor the rate of consumption and give real-time usage data.',
          'Telematics control unit. The brain of the system, collecting data from the sensors and meters, processing it, and transmitting it to our cloud platform over GSM or GPRS.',
        ],
      },
      functionality: {
        title: 'What you see day to day',
        items: [
          'Real-time monitoring. Fuel levels and consumption rates update live on the web and mobile platforms.',
          'Fuel theft detection. Unauthorised siphoning and sudden drops in level trigger an immediate alert by SMS, email or in-app notification.',
          'Consumption analysis. Detailed reports on usage, trends and anomalies, which feed into route planning, driver coaching and procurement decisions.',
        ],
      },
      outcome: {
        title: 'Turning the numbers into savings',
        body:
          'Fuel consumption has a direct effect on profitability, so the reporting is built to be acted on. Usage trends over time reveal patterns and inefficiencies, and the system flags non-conformities such as excessive idling, speeding and wasteful driving. With that in hand you can put specific corrections in place instead of guessing at where the waste sits.',
      },
    },
    ctaTitle: 'Interested in fuel tracking?',
    ctaBody: 'Send us your fleet size and the vehicles involved. We will explain what the sensors can and cannot measure on each one.',
  },

  containertracking: {
    name: 'STAR Trackers',
    productName: 'STAR Trackers',
    menuDescriptor: 'Stand-alone rechargeable container and cargo tracking',
    tagline: 'Stand-alone, rechargeable, and magnetised to the container',
    heroKicker: 'Container and goods tracking',
    summary:
      'Trackers that run for months on one charge, attach magnetically to any metal surface, and keep reporting from places with no power and no infrastructure.',
    specs: ['Months per charge', 'Magnetised base', 'Weather-proof alloy body', 'Works off-grid'],
    /* NOTE: the live Rwanda page says "PrimeTrack Nigeria's STAR Trackers",
       which is a copy-paste error from the Nigeria site. Corrected here to
       the brand name with no country attached. */
    sections: {
      battery: {
        title: 'Battery life measured in months',
        body:
          'STAR Trackers use advanced power management to run unattended for months on a single full charge, and a few hours of charging is enough to top them back up. The bodies are made of weather-proof alloys with a magnetised base, so they attach to any metallic surface. That makes them equally suited to haulage containers, loose goods and custodian tracking.',
      },
      anywhere: {
        title: 'Reporting from remote and off-grid locations',
        body:
          'Because each unit carries its own power, it does not depend on the asset it is attached to. STAR Trackers transmit accurate real-time location data from remote and off-grid areas, so whether your cargo is moving or sitting in a yard somewhere with no infrastructure, you still know where it is and what state it is in.',
      },
      rugged: {
        title: 'Built for the conditions cargo actually travels in',
        body:
          'Containers and goods take a beating in transit and storage. These trackers are built to withstand extreme temperatures, moisture and other demanding conditions without losing accuracy or dropping out.',
      },
      integration: {
        title: 'Feeds the same platform as everything else',
        body:
          'STAR Trackers report into our fleet management software alongside your vehicles, so cargo and fleet sit in one interface. Real-time updates and detailed reports give you a view of how goods are moving, which is what makes route and supply chain decisions something other than guesswork.',
      },
    },
    ctaTitle: 'Interested in STAR tracking?',
    ctaBody: 'Tell us what you are moving and over what distances. We will advise on unit count, mounting and charge cycles.',
  },

  fleettracking: {
    name: 'Fleet Trackers',
    productName: 'Fleet Tracking Systems',
    menuDescriptor: 'GPS fleet management, from a few vehicles to thousands',
    tagline: 'The core of fleet efficiency',
    heroKicker: 'Fleet tracking',
    summary:
      'GPS, onboard diagnostics and telematics working together to show you where every vehicle is, how it is being driven, and what it is about to need.',
    specs: ['Accurate to within 5 metres', 'Updates every 10 seconds', 'OBD engine data', '4G/LTE and GSM/GPRS'],
    intro: 'Our fleet management offering is built to make fleet efficiency something you operate rather than something you hope for.',
    sections: {
      technology: {
        title: 'The technology in the vehicle',
        body: 'The system combines GPS with telematics and IoT platforms. Three components sit in or on the vehicle:',
        items: [
          'GPS trackers. Compact vehicle-mounted devices that continuously record location, speed and route.',
          'Onboard diagnostics devices. Connected directly to the vehicle\'s computer to collect engine data, vehicle status and diagnostics.',
          'Telematics control unit. The central device that aggregates data from the GPS trackers, the OBD system and any additional sensors such as fuel or temperature, then transmits it to our cloud platform over GSM, GPRS or 4G/LTE.',
        ],
      },
      functionality: {
        title: 'What the platform does with it',
        items: [
          'Real-time location tracking. Monitor the exact position of every vehicle as it moves, which makes dispatch decisions and route changes possible while they still matter.',
          'Geofencing. Draw virtual boundaries around specific areas and get an alert when a vehicle enters or leaves one, which supports both route adherence and security.',
          'Driver behaviour monitoring. Track and report speeding, harsh braking, rapid acceleration and idling, to encourage safer driving and reduce wear on the vehicle.',
          'Route optimisation. The system analyses traffic conditions and vehicle performance to suggest more efficient routes, saving both fuel and time.',
          'Vehicle maintenance alerts. Reading the OBD system lets the platform track engine health and give early warning of maintenance needs, which cuts downtime and repair bills.',
        ],
      },
      performance: {
        title: 'How it performs in the field',
        body:
          'The system is in use across logistics, transportation and public services. Its measured characteristics:',
        items: [
          'High-precision GPS tracking. Location accuracy within five metres, updated every ten seconds.',
          'Comprehensive reporting. Detailed reports on trip history, driver performance, fuel consumption and vehicle health.',
          'Scalability. The same platform supports a business with a handful of vehicles and an enterprise running a large fleet.',
          'Mobile app access. Manage the fleet from anywhere, with real-time updates, alerts and reports on the phone in your pocket.',
        ],
      },
      comparison: {
        title: 'Where we differ from other systems',
        items: [
          'Real-time data rather than delayed or batched updates, so what you are looking at is what is happening now.',
          'Broader driver behaviour monitoring, which gives driver coaching something specific to work from.',
          'Customisable alerts and reports, tuned to how your operation actually runs rather than to a fixed template.',
          'An interface built to be used without training, with straightforward navigation and nothing cluttering the screen.',
        ],
      },
      service: {
        title: 'What we commit to after installation',
        items: [
          '24/7 support. Our team is available around the clock, so a system problem does not become a day of lost operations.',
          'Training programmes. Comprehensive training for fleet managers and operators, so the platform gets used properly.',
          'Proactive maintenance. Regular hardware and software updates to keep the system current and performing.',
        ],
      },
    },
    ctaTitle: 'Interested in fleet tracking?',
    ctaBody: 'Whether you run three vehicles or three thousand, the conversation starts the same way. Tell us what you need to see.',
  },

  ectss: {
    name: 'eCT Systems',
    productName: 'Electronic Cargo Tracking Systems',
    menuDescriptor: 'Electronic cargo tracking against transit fraud',
    tagline: 'Cargo visibility from loading to delivery',
    heroKicker: 'Electronic cargo tracking',
    summary:
      'Electronic cargo tracking for logistics operations, built to close the gaps where transit fraud happens.',
    specs: ['Real-time cargo status', 'Geo-fenced corridors', 'Encrypted access', 'Breach alerts'],
    sections: {
      features: {
        title: 'Key features',
        items: [
          'Real-time tracking. Monitor your cargo\'s location and status as it moves, so you can respond to changes and delays while there is still time to act.',
          'Geo-fencing. Set virtual boundaries and get alerts when cargo enters or leaves a designated area, which tightens both security and control.',
          'Customisable reports. Comprehensive reporting and analytics on cargo performance, feeding route optimisation and operational decisions.',
          'Secure access. Access controls and encryption protocols protect your data and keep it confidential.',
          'Instant alerts. Breach events reach you in real time, as they happen.',
        ],
      },
      why: {
        title: 'Why operators choose PrimeTrack for cargo',
        items: [
          'Reliable service. We build for reliability and accuracy, with tracking configured around what your business actually moves.',
          'Customisation. We work through your requirements with you and tailor the setup rather than handing over a fixed product.',
          'Expert support. A dedicated support team, available for both quick questions and real technical problems.',
          'Experience. Over a decade in the industry, providing telematics services across multiple countries in Africa.',
        ],
      },
    },
    ctaTitle: 'Interested in electronic cargo tracking?',
    ctaBody: 'Tell us the corridors you run and what your cargo is worth. We will show you where the visibility gaps are.',
  },
} as const;
