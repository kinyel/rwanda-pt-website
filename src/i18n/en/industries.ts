/**
 * The eight industry verticals.
 *
 * SOURCE: supplied by the client. The one-line descriptions are their words,
 * carried through unchanged apart from renaming one sector.
 *
 * "Oil and Gas" ships as "Fuel Distribution and Haulage". Upstream oil and gas
 * does not exist in Rwanda, and the supplied copy for that entry describes cargo
 * visibility and journey monitoring, which is exactly what fuel distribution and
 * haulage is here. The brief calls for that rename explicitly.
 *
 * The longer per-page copy below expands on the supplied line using only
 * capabilities the platform verifiably has (see products.ts and services.ts).
 * No sector claims, customer counts or deployments are invented.
 */
export const industries = {
  index: {
    eyebrow: 'Industries we serve',
    /** The homepage section heading. */
    title: 'Built for how Rwanda actually moves',
    lead:
      'A cement truck, an ambulance and a refrigerated delivery van have almost nothing in common except that somebody needs to know where they are. These are the operations we build for.',
    cta: 'See all industries',
    /** Heading on the /industries/ index page. */
    pageTitle: 'The operations PrimeTrack is built for',
    pageLead:
      'Every fleet has a different thing it cannot afford to lose. Pick the one closest to yours and see which part of the system addresses it.',
    /** Shown on each industry page above the solution list. */
    solutionsTitle: 'What these operations run on',
    productsTitle: 'The hardware behind it',
    challengesTitle: 'What tends to go wrong',
  },

  items: {
    construction: {
      name: 'Construction',
      /** Client-supplied line. Used on the homepage wall and the page hero. */
      summary:
        'Know where every vehicle is, reduce idle time, and keep your fleet performing at its best.',
      lead:
        'Plant and haulage spend their day away from any office, often on sites with no fixed address. The question is rarely whether a machine is working. It is whether it is working where it was sent, and how long it sat before it started.',
      challenges: [
        'Vehicles and plant spread across sites nobody can see from the yard',
        'Idle hours that never reach a timesheet',
        'Fuel drawn for one machine and used somewhere else',
        'Equipment moved off site outside working hours',
      ],
    },

    foodAndBeverage: {
      name: 'Food and beverage',
      summary:
        'Monitor deliveries from dispatch to destination, protect cargo, and keep temperature-sensitive goods on track.',
      lead:
        'Distribution runs to a schedule and a temperature. Both are invisible once the van leaves the depot, and a load that arrives warm is a load nobody pays for.',
      challenges: [
        'No view of a delivery between dispatch and arrival',
        'Chilled loads with no record of the temperature they travelled at',
        'Route order changed on the day, with no way to confirm it',
        'Disputes over what time a drop actually happened',
      ],
    },

    emergencyServices: {
      name: 'Emergency services',
      summary:
        'Track response vehicles live, identify faster routes, and stay in control when every second matters.',
      lead:
        'Dispatch decisions get made on whichever unit is genuinely closest, not whichever one answered the radio. That needs live position, not a last-known one.',
      challenges: [
        'Dispatching on assumed positions rather than actual ones',
        'No record of response times to review afterwards',
        'Crews out of contact once they leave the base',
        'Vehicles needing maintenance while still on the roster',
      ],
    },

    logistics: {
      name: 'Logistics and supply chain',
      summary:
        'See your entire fleet in motion, improve delivery coordination, and keep operations running efficiently.',
      lead:
        'Coordination is the whole job. When the fleet is visible in one place, the questions that fill a dispatcher\'s morning stop needing a phone call to answer.',
      challenges: [
        'Customers calling to ask where their delivery is',
        'Route adherence that can only be checked after the fact',
        'Cargo moving through areas nobody agreed to',
        'Turnaround times measured by memory rather than record',
      ],
    },

    fuelDistribution: {
      name: 'Fuel distribution and haulage',
      summary:
        'Maintain complete visibility across vehicles and cargo while monitoring journeys, locations, and operating conditions in real time.',
      lead:
        'When the cargo is the same thing that powers the vehicle, the margin between delivered and missing is thin, and it is measured in litres.',
      challenges: [
        'Product drawn off between the depot and the destination',
        'Unscheduled stops that never appear on a manifest',
        'Tanker journeys with no verified route record',
        'Loads that cannot be reconciled at the far end',
      ],
    },

    transportation: {
      name: 'Transportation',
      summary:
        'Keep vehicles moving efficiently with live fleet visibility, smarter route planning, and better trip management.',
      lead:
        'A vehicle earns nothing standing still. Most of what stops it is visible in the data well before it becomes a breakdown or a missed trip.',
      challenges: [
        'Trips planned on routes that stopped being the fastest',
        'Servicing tracked on paper, or on nobody',
        'Fuel spend that moves without an explanation',
        'Driving habits that cost more in wear than in fuel',
      ],
    },

    passengerTransit: {
      name: 'Passenger and transit',
      summary:
        'Stay on top of every vehicle, improve route efficiency, and use real-time fleet data to make better operational decisions.',
      lead:
        'Carrying people raises the stakes on everything: schedule, speed, and how the vehicle is actually driven with a full load aboard.',
      challenges: [
        'Schedule adherence nobody can verify in the moment',
        'Speeding that only surfaces after a complaint',
        'In-vehicle incidents with no record of what happened',
        'Route performance judged on impressions rather than data',
      ],
    },

    pharmaceutical: {
      name: 'Pharmaceutical',
      summary:
        'Track sensitive shipments throughout their journey while monitoring vehicles, drivers, and temperature conditions in real time.',
      lead:
        'A cold chain is only as good as its weakest hour, and the hour you cannot account for is the one that fails an audit.',
      challenges: [
        'Temperature excursions discovered on arrival, not in transit',
        'Chain of custody that cannot be evidenced',
        'High-value loads with no independent tracking',
        'Compliance records assembled after the fact',
      ],
    },
  },
} as const;
