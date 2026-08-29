/**
 * The three PrimeTrack Rwanda service pages.
 *
 * Content traces to /fleet-analytics/, /api-integrations/ and
 * /drivermonitoring/ as captured in the Phase 1 audit. The fifteen fleet
 * analytics capabilities are preserved in full; they are regrouped by the
 * question each one answers rather than listed flat, which is a presentation
 * change, not a content change.
 */
export const services = {
  index: {
    eyebrow: 'Services',
    title: 'What the hardware is worth depends on what you do with the data',
    lead:
      'Devices report. These services turn that reporting into decisions: which driver needs a conversation, which route is quietly costing you, and how any of it reaches the systems your business already runs on.',
  },

  fleetAnalytics: {
    name: 'Fleet Analytics',
    menuDescriptor: 'Fifteen reporting and analytics capabilities',
    tagline: 'Fifteen ways to read your fleet',
    heroKicker: 'Fleet analytics',
    summary:
      'The reporting layer across every PrimeTrack device, grouped by the question you are actually asking.',
    intro: 'Fleet analytics is what turns vehicle tracking from a live map into a management tool.',
    groups: {
      where: {
        title: 'Where is it, and where has it been?',
        items: [
          {
            name: 'Real-time tracking',
            body: 'Live updates on vehicle locations, so you can make decisions and respond to emergencies while they are still unfolding.',
          },
          {
            name: 'History playback',
            body: 'Replay past routes and locations to evaluate performance, review a disputed trip, and plan better ones.',
          },
          {
            name: 'Geofencing',
            body: 'Virtual boundaries around specific areas, with instant alerts when a vehicle enters or leaves. It deters unauthorised use and keeps drivers on agreed routes.',
          },
          {
            name: 'Route optimisation analysis',
            body: 'Historical route data and traffic patterns analysed to find more efficient routes, cutting both fuel use and travel time.',
          },
        ],
      },
      cost: {
        title: 'What is it costing to run?',
        items: [
          {
            name: 'Fuel monitoring',
            body: 'Fuel levels and consumption patterns across the fleet, which is how anomalies, possible theft and poor refuelling schedules become visible.',
          },
          {
            name: 'Idling detection',
            body: 'Unnecessary engine idling identified and reported. Idling burns fuel, adds emissions and wears the engine for no distance covered.',
          },
          {
            name: 'Asset utilisation reports',
            body: 'Usage tracked across the fleet so underused vehicles and equipment show up, which is usually where the easiest savings are.',
          },
          {
            name: 'Turnaround time reporting',
            body: 'Trip durations calculated so delivery timelines can be planned on evidence, deadlines met, and logistics tightened.',
          },
        ],
      },
      safety: {
        title: 'Is it being driven safely?',
        items: [
          {
            name: 'Speed monitoring',
            body: 'Vehicle speeds in real time, plus a record of speeding incidents. Safer speeds also mean better fuel figures and lower maintenance costs.',
          },
          {
            name: 'Driver behaviour monitoring',
            body: 'Harsh acceleration, braking and cornering measured per driver, which gives coaching something specific to work from.',
          },
          {
            name: 'Video telematics',
            body: 'Footage from inside and outside the vehicle, useful for accident investigation, driver coaching and insurance claims, and a deterrent in its own right.',
          },
          {
            name: 'Emergency notification (SOS)',
            body: 'Immediate alerts when a driver triggers an SOS, so a response can start straight away.',
          },
          {
            name: 'Incident reporting and alerts',
            body: 'Instant notification of accidents, breakdowns and other critical events, so disruption is contained rather than discovered later.',
          },
        ],
      },
      condition: {
        title: 'What needs attention next?',
        items: [
          {
            name: 'Maintenance alerts',
            body: 'Proactive notifications for scheduled maintenance, vehicle diagnostics and service reminders, which is how you avoid the breakdown rather than react to it.',
          },
          {
            name: 'Temperature monitoring',
            body: 'Temperature levels in refrigerated vehicles and cargo compartments, protecting temperature-sensitive loads and the compliance record that goes with them.',
          },
        ],
      },
    },
    ctaTitle: 'Put the reporting to work',
    ctaBody: 'Tell us which of these questions your current system cannot answer and we will show you how ours does.',
  },

  apiIntegrations: {
    name: 'API Integrations',
    menuDescriptor: 'Connect telematics data to your ERM or ERP',
    tagline: 'Telematics data where your business already works',
    heroKicker: 'API integration',
    summary:
      'Connect PrimeTrack to your enterprise resource management software so vehicle data arrives in the system your team already uses.',
    intro:
      'PrimeTrack offers API integrations that connect your enterprise resource management software directly to our telematics platform. Instead of a separate login and a separate screen, the fleet data lands where your people are already working.',
    homeTitle: 'Telematics API integration',
    homeBody:
      'Connect PrimeTrack\'s custom-built APIs to your enterprise resource management system for automated data exchange, fewer manual steps, and fleet decisions made on current data.',
    homeCta: 'Get in touch for a free API introduction',
    groups: {
      why: {
        title: 'Why integrate at all',
        items: [
          { name: 'Efficiency', body: 'Automated data exchange and synchronisation between PrimeTrack and your ERM, which removes a whole category of manual re-entry.' },
          { name: 'Real-time insights', body: 'Vehicle tracking data, driver behaviour analytics and fleet performance metrics available inside your ERM platform.' },
          { name: 'Customisation', body: 'Configurable API endpoints and data parameters, so the integration matches how your business runs.' },
          { name: 'Scalability', body: 'Integrations that grow with the fleet rather than needing to be rebuilt when it does.' },
          { name: 'Extended functionality', body: 'Geofencing, fuel monitoring and predictive maintenance surfaced through your existing software.' },
        ],
      },
      how: {
        title: 'How the integration works',
        items: [
          { name: 'Connection', body: 'Well-documented API endpoints and integration guides to connect your ERM software to PrimeTrack.' },
          { name: 'Data exchange', body: 'Data moves between your ERM and PrimeTrack in real time, so both systems hold the same picture.' },
          { name: 'Event notifications', body: 'Alerts from the PrimeTrack API arrive inside your ERM platform, so critical incidents reach the right people quickly.' },
          { name: 'Data analysis', body: 'Analytics and reporting run against the fleet data collected through the API.' },
          { name: 'Automated processes', body: 'Routine tasks handled by the integration rather than by staff time.' },
        ],
      },
      benefits: {
        title: 'What you get out of it',
        items: [
          { name: 'Consolidated visibility', body: 'Fleet data from PrimeTrack sitting alongside the rest of your operational data in one place.' },
          { name: 'Better decisions', body: 'Decisions made against current, complete information rather than last week\'s export.' },
          { name: 'Lower overhead', body: 'Less manual data entry and less administrative handling.' },
          { name: 'Productivity', body: 'Real-time information and streamlined workflows for the team that has to act on them.' },
          { name: 'Room to change', body: 'Integrations that adapt as your business needs and technology change.' },
        ],
      },
    },
    ctaTitle: 'Talk to us about an integration',
    ctaBody: 'Tell us what system you run and we will walk you through what connecting it involves. The introduction call is free.',
  },

  drivermonitoring: {
    name: 'Driver Monitoring',
    menuDescriptor: 'Behaviour scoring for safety, fuel and compliance',
    tagline: 'Your drivers decide most of your fleet costs',
    heroKicker: 'Driver behaviour monitoring',
    summary:
      'Measure how each vehicle is actually being driven, then act on it while it still matters.',
    intro:
      'Drivers determine most of what a fleet costs to run and most of the risk it carries. Driver behaviour monitoring measures what is happening behind the wheel and puts it in front of you in a form you can act on.',
    groups: {
      why: {
        title: 'Why monitor driver behaviour',
        items: [
          { name: 'Safety', body: 'Risky driving such as harsh braking, speeding and sharp turns identified in real time, while there is still an opportunity to intervene.' },
          { name: 'Risk and liability', body: 'Unsafe practices addressed before they turn into accidents and the claims that follow them.' },
          { name: 'Fuel efficiency', body: 'Steady speeds and less idling, which is the least glamorous and most reliable way to cut fuel spend.' },
          { name: 'Compliance', body: 'Driver adherence to road safety regulations and company policy, tracked rather than assumed.' },
          { name: 'Productivity', body: 'Clear evidence of where training would make a difference to fleet performance.' },
        ],
      },
      how: {
        title: 'How it works',
        items: [
          { name: 'Real-time monitoring', body: 'GPS and telematics reporting live on speed, acceleration, braking and more.' },
          { name: 'Customisable alerts', body: 'Alerts configured to your thresholds, so deviations reach you when intervention is still possible.' },
          { name: 'Comprehensive reporting', body: 'Driver performance tracked over time, so trends and individuals both become visible.' },
          { name: 'Feedback and training', body: 'Specific, evidence-based feedback for each driver, plus targeted training built on their own data.' },
          { name: 'ERM integration', body: 'The monitoring system connects to your existing enterprise resource management software.' },
        ],
      },
      benefits: {
        title: 'What changes',
        items: [
          { name: 'Improved safety', body: 'Fewer accidents and injuries as driving habits change.' },
          { name: 'Cost savings', body: 'Lower insurance premiums, reduced fuel consumption and smaller maintenance bills.' },
          { name: 'Reputation', body: 'A demonstrable safety record, which matters to clients, insurers and regulators.' },
          { name: 'Regulatory compliance', body: 'Compliance with industry regulations and standards, and the penalties that come with falling short avoided.' },
          { name: 'Operational gains', body: 'Better driver performance and vehicle utilisation across the fleet.' },
        ],
      },
    },
    ctaTitle: 'See what your drivers are doing',
    ctaBody: 'We will show you the reporting on a real vehicle before you commit to anything.',
  },
} as const;
