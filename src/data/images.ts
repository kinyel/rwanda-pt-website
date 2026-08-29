/**
 * Central image manifest.
 *
 * Every image on the site is imported here exactly once and exported by key.
 * Components reference the key, never a path, so renaming a file is a one-line
 * change in this file rather than a search across the codebase.
 *
 * To replace a placeholder: save your file over the one in src/assets/images/
 * using the same filename. Nothing here changes. See the README in that folder
 * for the required dimensions of each one.
 *
 * Alt text does NOT live here. It lives in src/i18n/en/images.ts so it can be
 * translated, which means swapping a file never touches its accessibility or
 * SEO text. Use the `<Picture>` component, which pairs the two by key.
 */
import type { ImageMetadata } from 'astro';

import logo from '../assets/images/brand/primetrack-logo.png';

import homeHero from '../assets/images/home/home-hero-fleet.jpg';
import homeVideoTelematics from '../assets/images/home/home-video-telematics.jpg';
import homeFuelMonitoring from '../assets/images/home/home-fuel-monitoring.jpg';
import homeMobileApps from '../assets/images/home/home-mobile-apps.jpg';

import productVideoTracker from '../assets/images/products/products-video-tracker.jpg';
import productSolarTracker from '../assets/images/products/products-solar-tracker.jpg';
import productFuelSensor from '../assets/images/products/products-fuel-sensor.jpg';
import productStarTracker from '../assets/images/products/products-star-tracker.jpg';
import productFleetTracker from '../assets/images/products/products-fleet-tracker.jpg';
import productEcts from '../assets/images/products/products-ects.png';

import serviceFleetAnalytics from '../assets/images/services/services-fleet-analytics.jpg';
import serviceDriverMonitoring from '../assets/images/services/services-driver-monitoring.jpg';
import serviceApiIntegration from '../assets/images/services/services-api-integration.jpg';

import companyOffice from '../assets/images/company/company-office-kigali.jpg';
import companyInstall from '../assets/images/company/company-installation.jpg';

import ogDefault from '../assets/images/og/og-primetrack-rwanda.jpg';

import clientSavvy from '../assets/images/clients/client-savvy.jpg';
import clientSoftPackaging from '../assets/images/clients/client-soft-packaging.jpg';
import clientUnhcr from '../assets/images/clients/client-unhcr.png';
import clientWesternSeed from '../assets/images/clients/client-western-seed.png';
import clientAfricanEnterprise from '../assets/images/clients/client-african-enterprise.png';
import clientAfriglobal from '../assets/images/clients/client-afriglobal-group.png';
import clientApmTerminals from '../assets/images/clients/client-apm-terminals.jpg';
import clientCadbury from '../assets/images/clients/client-cadbury.png';
import clientEcogas from '../assets/images/clients/client-ecogas.png';
import clientIPosita from '../assets/images/clients/client-i-posita.jpg';

import specs from './image-specs.json';

export const images = {
  logo,
  homeHero,
  homeVideoTelematics,
  homeFuelMonitoring,
  homeMobileApps,
  productVideoTracker,
  productSolarTracker,
  productFuelSensor,
  productStarTracker,
  productFleetTracker,
  productEcts,
  serviceFleetAnalytics,
  serviceDriverMonitoring,
  serviceApiIntegration,
  companyOffice,
  companyInstall,
  ogDefault,
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof images;

/** Client logos, in the order they appear on the live site's carousel. */
export const clientLogos = [
  { key: 'savvy', name: 'SAVVY', src: clientSavvy },
  { key: 'softPackaging', name: 'Soft Packaging', src: clientSoftPackaging },
  { key: 'unhcr', name: 'UNHCR', src: clientUnhcr },
  { key: 'westernSeed', name: 'Western Seed', src: clientWesternSeed },
  { key: 'africanEnterprise', name: 'African Enterprise', src: clientAfricanEnterprise },
  { key: 'afriglobal', name: 'Afriglobal Group', src: clientAfriglobal },
  { key: 'apmTerminals', name: 'APM Terminals', src: clientApmTerminals },
  { key: 'cadbury', name: 'Cadbury', src: clientCadbury },
  { key: 'ecogas', name: 'ECOGAS', src: clientEcogas },
  { key: 'iPosita', name: 'I-Posita', src: clientIPosita },
] satisfies { key: string; name: string; src: ImageMetadata }[];

/** Which keys are still awaiting a real file. Drives the on-page dev badge. */
export const placeholderKeys: ReadonlySet<string> = new Set(
  specs.images.filter((s) => s.status === 'placeholder').map((s) => s.key),
);

export function isPlaceholder(key: ImageKey): boolean {
  return placeholderKeys.has(key);
}
