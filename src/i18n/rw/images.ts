import type { Dictionary, Translation } from '../index';

/**
 * Alt text in Kinyarwanda, for the /rw/ pages only. Mirrors src/i18n/en/images.ts.
 * The English pages' alt text is untouched. Decorative images stay empty.
 */
export const images: Translation<Dictionary['images']> = {
  logo: '',

  homeHero: 'Ikinyabiziga cy’ubucuruzi gikurikiranwa na PrimeTrack kiri mu muhanda wo mu Rwanda',
  homeVideoTelematics: 'Kamera ya PrimeTrack ireba umuhanda ishyizwe ku kirahure cy’imbere, ecran yayo yerekana amashusho y’imbere y’ikinyabiziga ako kanya',
  homeFuelMonitoring: 'Kugenzura ikigega cya lisansi kwa PrimeTrack: ikamyo itwara lisansi, sensor yo mu kigega, n’urubuga rwerekana igihe lisansi yongewemo n’igihe yagabanutse',
  homeMobileApps: 'Porogaramu ya telefoni ya PrimeTrack kuri telefoni ebyiri, yerekana ikarita y’ibinyabiziga ako kanya n’urutonde rwa raporo',

  productVideoTracker: 'Kamera ya PrimeTrack yo gukurikirana amashusho n’igikoresho cya DVR, ecran yacyo yerekana amashusho y’umuhanda yafashwe',
  productSolarTracker: 'Ikamyo ikurikiranwa ku mugoroba, hejuru yayo hari ibimenyetso by’aho iri, bigaragaza gukurikirana amakamyo kwa PrimeSOLAR',
  productFuelSensor: 'Sensor ipima urugero rwa lisansi ikoreshwa mu kugenzura lisansi kwa PrimeTrack, iruhande rw’imibare ya lisansi iri ku rubuga',
  productStarTracker: 'Igikoresho cya STAR cyigenga cyongererwa umuriro cyo gukurikirana imizigo, cyerekana igikonoshwa cyacyo n’aho cyongererwa umuriro',
  productFleetTracker: 'Ibinyabiziga bikurikiranwa na PrimeTrack biri mu muhanda, hamwe n’urutonde rw’ubushobozi bwo gukurikirana, gusesengura, umutekano n’ibikorwa byikora',
  productEcts: 'Ingufuri y’ubwenge ya PrimeTrack ifunga imizigo, ifungurwa hakoreshejwe Bluetooth, ijambobanga cyangwa porogaramu',

  serviceFleetAnalytics: 'Urubuga rwa PrimeTrack rwo gukurikirana rukoreshwa, rwerekana ikarita y’ako kanya, amakuru y’ikinyabiziga n’ibipimo by’umuvuduko na lisansi',
  serviceDriverMonitoring: 'Umushoferi w’umwuga utwaye ikamyo mu muhanda ugaragara neza, abonwa aturutse inyuma y’icyumba cy’umushoferi',
  serviceApiIntegration: 'Guhuza sisitemu hakoreshejwe API ya PrimeTrack, bigaragazwa nk’uruhererekane rwa sisitemu na serivisi z’amakuru bihuye',

  companyOffice: 'Ibiro bya PrimeTrack Rwanda biri muri Yyussa City Centre i Kigali',
  companyInstall: 'Umutekinisiye wa PrimeTrack ashyira igikoresho cyo gukurikirana mu kinyabiziga cy’umukiriya',

  ogDefault: 'PrimeTrack Telematics Rwanda',

  clientLogo: 'Ikirango cya {name}',
};
