import { company } from './company';

/**
 * JSON-LD builders.
 *
 * Every value is drawn from src/data/company.ts, which in turn holds only facts
 * verified on the live Rwanda site. No ratings, no review counts, no employee
 * numbers and no founding date, because none of those are published anywhere we
 * can point to. Structured data that cannot be substantiated is worse than none.
 */

const SITE = 'https://primetrack.rw';

export function organizationSchema(logoUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE}/#organization`,
    name: company.legalName,
    alternateName: company.shortName,
    url: SITE,
    logo: logoUrl,
    email: company.email,
    telephone: company.phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressCountry: 'RW',
    },
    sameAs: company.socials.map((s) => s.url),
  };
}

export function localBusinessSchema(logoUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}/#localbusiness`,
    name: company.legalName,
    image: logoUrl,
    url: SITE,
    email: company.email,
    telephone: company.phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressCountry: 'RW',
    },
    areaServed: { '@type': 'Country', name: 'Rwanda' },
    /* PrimeCARE is published as 24/7 support, so this is a stated fact. */
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

export function productSchema(input: { name: string; description: string; url: string; image?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    url: input.url,
    ...(input.image ? { image: input.image } : {}),
    brand: { '@type': 'Brand', name: company.shortName },
    /* No `offers`: the site publishes no prices, and inventing one would be
       both a factual claim and a rich-result violation. */
  };
}

export function serviceSchema(input: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: input.url,
    provider: { '@id': `${SITE}/#organization` },
    areaServed: { '@type': 'Country', name: 'Rwanda' },
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: input.url,
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    author: { '@type': 'Organization', name: company.legalName },
    publisher: { '@id': `${SITE}/#organization` },
  };
}
