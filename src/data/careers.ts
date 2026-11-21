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
