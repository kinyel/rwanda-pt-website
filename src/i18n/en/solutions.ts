/**
 * The five solution areas.
 *
 * Four of them are existing pages elevated in place, so their URLs and ranking
 * history are untouched: fleet tracking, video telematics, fuel monitoring and
 * fleet analytics. Only vehicle and asset security is a new page, and its
 * content is assembled from capabilities the existing product pages already
 * verify (STAR trackers, PrimeSOLAR tamper alerts, eCTS seals, geofencing).
 *
 * Copy is outcome-first per brief section 7: the problem, then what changes,
 * with the hardware supporting rather than leading.
 */
export const solutions = {
  index: {
    eyebrow: 'Solutions',
    title: 'One platform, five things it does well',
    lead:
      'Fleet technology gets sold as a list of features. It is easier to judge by what it changes: what you can see, what you stop losing, and what you can finally prove.',
    pageTitle: 'What PrimeTrack does for a fleet',
    cta: 'Explore solutions',
    relatedTitle: 'Solutions that work together',
  },

  items: {
    fleetTracking: {
      name: 'Fleet tracking',
      menuDescriptor: 'Live position, routes and trip history',
      outcome: 'Know where every vehicle is, and where it has been',
    },
    videoTelematics: {
      name: 'AI video telematics',
      menuDescriptor: 'Vehicle CCTV with ADAS and in-cab alerts',
      outcome: 'See what happened, instead of arguing about it',
    },
    fuelMonitoring: {
      name: 'Fuel monitoring',
      menuDescriptor: 'Tank level, consumption and theft alerts',
      outcome: 'Find out where the fuel actually goes',
    },
    vehicleSecurity: {
      name: 'Vehicle and asset security',
      menuDescriptor: 'Tamper alerts, geofencing and cargo seals',
      outcome: 'Know the moment something moves that should not',
    },
    fleetAnalytics: {
      name: 'Fleet analytics and insights',
      menuDescriptor: 'Fifteen reporting capabilities across the fleet',
      outcome: 'Turn what the fleet reports into decisions',
    },
  },

  /** The new page. Everything below traces to existing verified product copy. */
  vehicleSecurity: {
    eyebrow: 'Vehicle and asset security',
    title: 'Know the moment something moves that should not',
    lead:
      'Most fleet losses are not dramatic. A tracker is unplugged, a container leaves a yard at night, a vehicle takes a detour nobody authorised. Security here means noticing all three while there is still time to act.',
    problemTitle: 'The problem',
    problemBody:
      'A tracker that can be found and cut is a tracker that will be. A vehicle that only reports its position when the ignition is on tells you nothing about the hours that matter. And an asset with no power source of its own falls off the map the moment it is separated from the vehicle carrying it.',
    approachTitle: 'How PrimeTrack handles it',
    capabilities: {
      tamper: {
        name: 'Hardware that resists being disabled',
        body: 'PrimeSOLAR needs no connection to the vehicle battery, so there is no wiring to cut. Tamper with it and an alert goes out immediately. A built-in vibration sensor registers movement even when the vehicle is off.',
      },
      independent: {
        name: 'Assets that track themselves',
        body: 'STAR trackers carry their own power and run for months on a single charge, with a magnetised weather-proof body that attaches to any metal surface. Cargo stays visible whether or not it is still on the vehicle.',
      },
      geofence: {
        name: 'Boundaries that report themselves',
        body: 'Draw a boundary around a yard, a site or a corridor, and get an alert the moment a vehicle enters or leaves it. Route adherence and out-of-hours movement both become visible without anyone watching a screen.',
      },
      seals: {
        name: 'Cargo that cannot be opened quietly',
        body: 'Electronic cargo seals record where and when they were opened, with Bluetooth, password and app unlocking. Chain of custody becomes a record rather than an assurance.',
      },
      evidence: {
        name: 'Evidence when it is disputed',
        body: 'Video telematics keeps a recorded timeline from four angles. After an incident you can establish cause and liability from footage rather than from competing accounts.',
      },
    },
    outcomeTitle: 'What changes',
    outcomes: [
      'Movement outside agreed hours or areas reaches you as an alert, not as a discovery',
      'Assets stay trackable when separated from the vehicle carrying them',
      'Tampering is reported by the device rather than found at the next inspection',
      'Disputes are settled from a record instead of from memory',
    ],
    ctaTitle: 'Talk through what you are protecting',
    ctaBody:
      'Tell us what you are losing and where. We will tell you which part of this addresses it, and which part does not.',
  },
} as const;
