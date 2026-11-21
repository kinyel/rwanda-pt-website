/**
 * Open positions at PrimeTrack Rwanda, as posted on Job in Rwanda.
 *
 * Each links to its posting, which carries the full description and the way
 * to apply. Audit source: the two postings themselves (location, contract and
 * deadline are as they publish them). Titles and locations are in the
 * dictionaries, under `companyPages.careers.openings`, keyed the same.
 *
 * A posting is only listed until it closes: the build leaves out any whose
 * deadline has passed, and the page hides one that closes between builds, so
 * a closed role is never advertised. To add one, add it here and give it a
 * title and location in both dictionaries; to take one down early, delete it.
 *
 * `closes` is the deadline in Kigali time (UTC+2), as the posting states it.
 */
export const openings = [
  {
    key: 'gpsTechnician',
    url: 'https://www.jobinrwanda.com/job/gps-tracker-technician',
    closes: '2026-12-05T17:00:00+02:00',
  },
  {
    key: 'juniorAdmin',
    url: 'https://www.jobinrwanda.com/job/junior-administrative-officer',
    closes: '2026-12-01T17:00:00+02:00',
  },
] as const;

export type OpeningKey = (typeof openings)[number]['key'];

/**
 * The Personal Driver to the CEO advert, shown in full on the careers page
 * rather than linked out: it is not posted on Job in Rwanda. Its copy is in
 * both dictionaries under `companyPages.careers.driver`; the five
 * requirements there are the CEO's own words. Applications go to the
 * recruitment agency, not to admin@, by the CEO's instruction.
 *
 * No deadline has been set, so it does not expire on its own; set `open` to
 * false (or delete the box) to take it down.
 */
export const driverRole = {
  open: true,
  email: 'pgnventures@gmail.com',
  /** As the CEO gave it, and in international form for the tel: link. */
  phone: { display: '0793017263', tel: '+250793017263' },
  /** Pre-filled in the email the button opens. */
  subject: 'Application: Personal Driver to the CEO',
} as const;
