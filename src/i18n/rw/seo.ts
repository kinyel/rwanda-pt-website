import type { Dictionary, Translation } from '../index';

/**
 * Page titles and meta descriptions for the Kinyarwanda pages (/rw/...).
 * Mirrors src/i18n/en/seo.ts.
 *
 * The English pages' titles and descriptions are untouched; these apply only to
 * the /rw/ URLs, which until now carried the English text and so told search
 * engines a Kinyarwanda page (lang="rw", hreflang rw-RW) was in English. Each
 * is the Kinyarwanda equivalent of the same page's English cluster, with the
 * brand and product names (PrimeTrack, PrimeSOLAR, STAR Trackers, eCTS) and
 * the terms people search with as-is (GPS, API, ERP) kept exactly. Titles stay
 * near 60 characters, descriptions near 155.
 */
export const seo: Translation<Dictionary['seo']> = {
  home: {
    title: 'Gukurikirana Ibinyabiziga hakoreshejwe GPS mu Rwanda | PrimeTrack',
    description:
      'Gukurikirana ibinyabiziga hakoreshejwe GPS, kubicunga, amashusho na lisansi mu Rwanda. Twemewe na RURA, ubufasha bwa PrimeCARE 24/7, garanti kugeza ku myaka 5.',
  },
  videoTracking: {
    title: 'Kamera n’Amashusho by’Ibinyabiziga mu Rwanda | PrimeTrack',
    description:
      'Kamera z’ibinyabiziga zifite AI: kamera enye zidapfa n’imvura, ADAS ifasha umushoferi, kwirinda ahatagaragara n’ububiko bwa 256GB kugeza kuri 4TB.',
  },
  primesolar: {
    title: 'Ibikoresho bya GPS by’Amakamyo bikoresha Izuba | PrimeSOLAR',
    description:
      'Igikoresho cyo gukurikirana gikoresha imirasire y’izuba, kidahuzwa na bateri, gifite bateri imara nibura imyaka 3, integuza iyo gikozweho kandi kidapfa n’amazi.',
  },
  fuelmanagement: {
    title: 'Kugenzura Lisansi no Kumenya Ubujura bwayo mu Rwanda | PrimeTrack',
    description:
      'Sensor zo mu kigega n’ibipima itemba bipima ikoreshwa nyaryo rya lisansi, bikamenya ako kanya ivomwa ryayo kandi bigatanga raporo y’ipfa ubusa ku binyabiziga byawe.',
  },
  containertracking: {
    title: 'Gukurikirana Kontineri n’Imizigo mu Rwanda | STAR Trackers',
    description:
      'Ibikoresho byigenga byongererwa umuriro bimara amezi ku muriro umwe, bifata na rukuruzi kandi bidapfa n’ibihe, ku kontineri n’ibicuruzwa bigenda ahatari amashanyarazi.',
  },
  fleettracking: {
    title: 'Sisitemu yo Gucunga Ibinyabiziga mu Rwanda | GPS ya PrimeTrack',
    description:
      'Gukurikirana ibinyabiziga hakoreshejwe GPS ku ntera ya metero eshanu, bivugururwa buri masegonda icumi, hamwe n’imbibi zagenwe, raporo ku bashoferi n’integuza za OBD.',
  },
  ectss: {
    title: 'Sisitemu yo Gukurikirana Imizigo (eCTS) mu Rwanda | PrimeTrack',
    description:
      'Gukurikirana imizigo mu buryo bw’ikoranabuhanga mu Rwanda: imiterere y’imizigo ako kanya, inzira zagenewe imbibi, kwinjira kurinzwe n’integuza zihita ziza.',
  },
  fleetAnalytics: {
    title: 'Isesengura na Raporo z’Ibinyabiziga mu Rwanda | PrimeTrack',
    description:
      'Uburyo cumi na butanu bwo gusesengura ibinyabiziga bujyanye n’aho biri, ibiciro, umutekano w’abashoferi n’imiterere y’ibinyabiziga, ku bikoresho byose bya PrimeTrack.',
  },
  apiIntegrations: {
    title: 'Guhuza Telematiki na ERP na ERM hakoreshejwe API | PrimeTrack',
    description:
      'Huza amakuru y’ibinyabiziga ya PrimeTrack na sisitemu y’ikigo itsinda ryawe risanzwe rikoresha, hamwe na API zisobanuye, guhererekanya ako kanya n’integuza.',
  },
  drivermonitoring: {
    title: 'Sisitemu zo Gukurikirana Imyitwarire y’Abashoferi | PrimeTrack',
    description:
      'Pima gufata feri bikabije, kurenza umuvuduko, kongera umuvuduko no gukata nabi kuri buri mushoferi, ufite integuza z’ako kanya, raporo n’inama mu modoka.',
  },
  contact: {
    title: 'Twandikire: PrimeTrack Rwanda | Ibikoresho bya GPS i Kigali',
    description:
      'PrimeTrack Rwanda, Igorofa rya 6, Tower A, Yyussa City Centre, Kigali. Hamagara cyangwa WhatsApp +250 793 017 263, cyangwa imeyili admin@primetrack.rw. PrimeCARE isubiza 24/7.',
  },
  whyChoose: {
    title: 'Impamvu Wahitamo PrimeTrack Rwanda | Ibyiza 7',
    description:
      'Twemewe na RURA, ubufasha bwa PrimeCARE 24/7, ibikoresho byubakiwe imiterere ya Afurika, telematiki ishingiye kuri AI n’imwe muri garanti ndende muri uru rwego.',
  },
  warranty: {
    title: 'Garanti za Prime | Kugeza ku Myaka 5 | PrimeTrack Rwanda',
    description:
      'Ibicuruzwa bya PrimeTrack bifite garanti igera ku myaka itanu ku muguzi wa mbere, ikubiyemo inenge mu bikoresho no mu mikorere iyo bikoreshejwe mu buryo busanzwe.',
  },
  careers: {
    title: 'Akazi muri PrimeTrack Rwanda | Injira mu Itsinda',
    description:
      'PrimeTrack Rwanda irashaka abantu bahanga agaciro kadasanzwe. Ohereza umwirondoro wawe kuri admin@primetrack.rw utubwire icyo wazana.',
  },
  tools: {
    title: 'Amabwiriza n’Inyandiko z’Ubufasha | PrimeTrack Rwanda',
    description:
      'Amabwiriza y’ibikoresho, ibisobanuro byo kubishyiraho n’inyandiko z’urubuga ku bakiriya ba PrimeTrack mu Rwanda. PrimeCARE yakoherereza amabwiriza ayo ari yo yose.',
  },
  terms: {
    title: 'Amabwiriza y’Imikoreshereze | PrimeTrack Rwanda',
    description:
      'Amabwiriza agenga ikoreshwa rya serivisi za PrimeTrack Rwanda zo gukurikirana hakoreshejwe GPS na telematiki, harimo inshingano, imbibi z’inshingano n’amategeko abigenga.',
  },
  privacy: {
    title: 'Politiki yo Kurinda Amakuru Bwite | PrimeTrack Rwanda',
    description:
      'Uko PrimeTrack Telematics Rwanda ikusanya, ikoresha kandi ikarinda amakuru bwite y’abasura n’abakoresha primetrack.rw.',
  },
  analyzeFleet: {
    title: 'Menya Ibibazo mu Micungire y’Ibinyabiziga | PrimeTrack Rwanda',
    description:
      'Hitamo ibibazo by’ibinyabiziga bikuhombya cyane, kuva ku bujura bw’ibinyabiziga kugeza kuri lisansi n’imyitwarire y’abashoferi, urebe igice cya PrimeTrack kibikemura.',
  },
  products: {
    title: 'Ibikoresho bya GPS na Telematiki mu Rwanda | PrimeTrack',
    description:
      'Amoko atandatu y’ibikoresho bya PrimeTrack: ibikurikirana ibinyabiziga, ibikoresha izuba ku makamyo, kamera, sensor za lisansi, ibikurikirana imizigo na eCTS.',
  },
  servicesIndex: {
    title: 'Serivisi za Telematiki z’Ibinyabiziga mu Rwanda | PrimeTrack',
    description:
      'Isesengura ry’ibinyabiziga, gukurikirana imyitwarire y’abashoferi no guhuza telematiki hakoreshejwe API, bihindura amakuru y’ibikoresho bya PrimeTrack ibyemezo.',
  },
  blog: {
    title: 'Inyandiko ku Gukurikirana Ibinyabiziga mu Rwanda | PrimeTrack',
    description:
      'Inyandiko ku gukurikirana ibinyabiziga, imicungire yabyo n’umutekano wabyo mu Rwanda, zanditswe n’itsinda rya PrimeTrack ku bakora muri iri soko.',
  },
  industriesIndex: {
    title: 'Gukurikirana Ibinyabiziga mu Nzego Zitandukanye | PrimeTrack',
    description:
      'Gukurikirana ibinyabiziga hakoreshejwe GPS, amashusho no kugenzura lisansi ku binyabiziga by’ubwubatsi, ubwikorezi, imiti, ubutabazi no gukwirakwiza lisansi mu Rwanda.',
  },
  solutionsIndex: {
    title: 'Ibisubizo byo Gucunga Ibinyabiziga mu Rwanda | PrimeTrack',
    description:
      'Gukurikirana ibinyabiziga, amashusho hifashishijwe AI, kugenzura lisansi, umutekano w’ibinyabiziga n’imitungo, n’isesengura, byose ku rubuga rumwe mu Rwanda.',
  },
  vehicleSecurity: {
    title: 'Umutekano w’Ibinyabiziga n’Imitungo mu Rwanda | PrimeTrack',
    description:
      'Umutekano w’ibinyabiziga n’imitungo mu Rwanda: integuza zo kwangiza, kurenga imbibi, gukurikirana imizigo mu buryo bwigenga n’ibifunga by’ikoranabuhanga, ubimenya ako kanya.',
    schemaName: 'Umutekano w’ibinyabiziga n’imitungo',
  },
  industryPage: {
    title: '{name}: Gukurikirana Ibinyabiziga mu Rwanda | PrimeTrack',
    schemaName: 'Gukurikirana ibinyabiziga: {name}',
  },
  notFound: {
    title: 'Urupapuro Ntirwabonetse | PrimeTrack Rwanda',
    description: 'Urupapuro washakaga ntirwabonetse. Reba ibicuruzwa, serivisi n’aho wabariza PrimeTrack Rwanda.',
  },
};
