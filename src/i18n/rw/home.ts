import type { Dictionary, Translation } from '../index';

/** Homepage copy in Kinyarwanda. Mirrors src/i18n/en/home.ts key for key. */
export const home: Translation<Dictionary['home']> = {
  hero: {
    eyebrow: 'Gukurikirana ibinyabiziga hakoreshejwe GPS no gucunga ibinyabiziga mu Rwanda',
    title: 'Ibinyabiziga byawe byose, ubibona neza',
    lead:
      'PrimeTrack ihuza buri kinyabiziga, buri mushoferi na buri mutwaro ufite ku rubuga rumwe: aho biri, uko bitwarwa, n’ibyo ibinyabiziga byawe bigutwara.',
    primaryCta: 'Vugana n’impuguke',
    secondaryCta: 'Reba ibisubizo',
    descriptors: [
      'Gukurikirana amashusho hifashishijwe AI',
      'Gukurikirana bikoresheje imirasire y’izuba',
      'Gucunga ibinyabiziga hifashishijwe IoT',
      'Gukurikirana ibinyabiziga mu buryo bunoze',
      'Gukurikirana ibicuruzwa by’agaciro',
      'Imyaka irenga 15 y’uburambe',
    ],
  },

  challenges: {
    eyebrow: 'Tangirira hano',
    title: 'Ni iki ushaka kureka guhomba?',
    lead:
      'Hitamo ikiguhombya cyane. Turakwereka igice cya sisitemu cyubakiwe icyo kibazo, hanyuma wihitiremo niba bikwiye ko tubiganiraho.',
    items: {
      theft: { label: 'Kwibwa ibinyabiziga', body: 'Aho kiri ako kanya, kurenga imbibi wagennye, n’integuza zihita ziza iyo ikinyabiziga kigiye kitagomba kugenda.' },
      accident: { label: 'Impanuka z’ibinyabiziga', body: 'Kamera enye n’amateka y’urugendo yanditswe, ku buryo uwakoze amakosa amenyekana hashingiwe ku mashusho aho kuba impaka.' },
      tampering: { label: 'Kwangiza igikoresho', body: 'Igikoresho cyo gukurikirana kidafite insinga zo guca, gifite ingufu zacyo, sensor y’ihindagurika, n’integuza iyo gikozweho.' },
      documents: { label: 'Ibyangombwa by’ibinyabiziga', body: 'Kwibutswa mu buryo bwikora igihe cyo gusana n’amatariki yo kuvugurura ibyangombwa, ku buryo nta na kimwe kirengerwa utabizi.' },
      fuelTheft: { label: 'Kwibwa lisansi', body: 'Sensor zo mu kigega n’ibipima umuvuduko wa lisansi bihindura igabanuka ritunguranye ry’urugero rwa lisansi integuza ihita iza.' },
      goodsTheft: { label: 'Kwibwa ibicuruzwa', body: 'Ibikoresho byo gukurikirana byigenga bishyirwa ku mutwaro ubwawo, bitanga amakuru aho waba uri hose, bitishingikirije ku kinyabiziga.' },
      driverBehaviour: { label: 'Imyitwarire y’abashoferi', body: 'Gufata feri bikabije, kurenza umuvuduko no gukata nabi bipimwa kuri buri mushoferi, akagirwa inama mu modoka ako kanya.' },
      reporting: { label: 'Raporo', body: 'Uburyo cumi na butanu bwo gusesengura amakuru bujyanye n’aho ibinyabiziga biri, ibiciro, umutekano n’imiterere y’ibinyabiziga.' },
    },
    seeAnswer: 'Reba uko tubikemura',
    form: {
      otherLabel: 'Ikindi',
      otherPlaceholder: 'Tubwire icyo ari cyo',
      emailLabel: 'Tukoherereze he?',
      emailPlaceholder: 'izina@ikigo.rw',
      nameLabel: 'Amazina yawe',
      namePlaceholder: 'Si ngombwa',
      submit: 'Ohereza ibyo nkeneye',
      sending: 'Biroherezwa',
      successTitle: 'Byoherejwe',
      successBody:
        'Twakiriye ibyo ukeneye. PrimeCARE izakugarukira ikubwire ibyo twashyira ku binyabiziga byawe n’icyo bizatwara.',
      emptyTitle: 'Nta na kimwe kirahitwamo',
      emptyBody: 'Shyira akamenyetso ku bikuguhombya cyane, bizajya byiyongera hano.',
      countOne: 'ikibazo cyo gukemura',
      countMany: 'ibibazo byo gukemura',
      needOne: 'Hitamo nibura kimwe, cyangwa utubwire ikindi icyo ari cyo.',
      needEmail: 'Andika imeyili kugira ngo tubashe kugusubiza.',
      privacy: 'Ibi tubikoresha gusa kugira ngo tugusubize.',
      unconfigured:
        'Ifishi ntirahuzwa. Hagati aho, PrimeCARE iboneka kuri nomero no kuri WhatsApp biri hejuru.',
    },
  },

  valueProp: {
    eyebrow: 'Agaciro tuguha',
    title: 'Ibintu bitatu twiyemeje',
    items: {
      solutions: {
        title: 'Ibisubizo',
        body: 'Ikoranabuhanga rifatika ryibanda ku bice by’imicungire y’ibinyabiziga bibabaza koko, aho kuba ibintu bisa neza mu imurikabikorwa ariko ntacyo bihindura.',
      },
      service: {
        title: 'Serivisi',
        body: 'PrimeCARE isubiza isaha iyo ari yo yose. Uretse gukemura ibibazo byavutse, itsinda rikurikirana ibibazo bitangiye kuvuka rikabikumira hakiri kare.',
      },
      simplicity: {
        title: 'Ubworoherane',
        body: 'Ikoranabuhanga ryiza ni iridasaba amahugurwa kugira ngo rikoreshwe. Uburyo bwacu bwubatswe ku buryo ushinzwe kohereza imodoka abasha kubukoresha kuva ku munsi wa mbere.',
      },
    },
  },

  journey: {
    eyebrow: 'Ibyo igikoresho cya PrimeTrack gitangaza',
    title: 'Aho buri kinyabiziga kiri, ku ntera ya metero eshanu',
    lead:
      'Aho kiri buri masegonda icumi. Lisansi, imyitwarire y’umushoferi n’amashusho ya kamera binyura ku murongo umwe, bigana ku rubuga rumwe.',
    closing:
      'Raporo enye ku murongo umwe. Iyo urugendo rurangiye, uba ufite amateka y’urugendo utigeze ujyamo.',
    specs: {
      accuracy: { value: '5', unit: 'm', label: 'Ubusobanuro bw’aho kiri' },
      interval: { value: '10', unit: 's', label: 'Igihe cyo kuvugurura' },
    },
    waypoints: {
      position: {
        label: 'Aho kiri n’inzira',
        refrain: 'Uzi aho kiri.',
        body: 'Aho kiri, umuvuduko n’amateka yose y’urugendo, ku ntera ya metero eshanu.',
      },
      fuel: {
        label: 'Lisansi',
        refrain: 'Uzi ibyo gikoresha.',
        body: 'Urugero rwa lisansi mu kigega n’uko ikoreshwa, n’integuza ihita iza iyo lisansi igabanutse mu buryo butunguranye.',
      },
      driver: {
        label: 'Imyitwarire y’umushoferi',
        refrain: 'Uzi uko gitwarwa.',
        body: 'Gufata feri bikabije, kurenza umuvuduko no gukata nabi, bipimwa kuri buri mushoferi.',
      },
      video: {
        label: 'Amashusho',
        refrain: 'Uzi ibyabaye.',
        body: 'Amashusho y’ako kanya aturuka kuri kamera enye zidapfa n’imvura, n’ayafashwe abikwa nk’ikimenyetso.',
      },
    },
    railLabel: 'Ikinyabiziga kigenda mu nzira, kigaragaza ibyo igikoresho gitangaza kuri buri cyiciro',
    counterLabel: 'Raporo mu rugendo rumwe',
  },

  trust: {
    eyebrow: 'Impamvu abakiriya batwizera',
    licensed: { title: 'Twemewe na RURA', body: 'Dufite uruhushya rwuzuye rwo gutanga serivisi zo gukurikirana ibinyabiziga hakoreshejwe GPS n’ikoranabuhanga rya telematiki mu Rwanda.' },
    warranty: { title: 'Garanti igera ku myaka 5', body: 'Imwe muri garanti ndende muri uru rwego, ikubiyemo inenge z’ibikoresho n’imikorere yabyo.' },
    support: { title: 'PrimeCARE amasaha 24 kuri 24', body: 'Umurongo w’ubufasha usubiza isaha iyo ari yo yose, kuri telefoni, kuri WhatsApp, cyangwa kuri imeyili.' },
    experience: { title: 'Imyaka irenga 15 muri telematiki', body: 'Dukorera mu bihugu bitanu, kandi tumaze imyaka irenga icumi dutanga serivisi muri uru rwego.' },
  },

  products: {
    eyebrow: 'Ibicuruzwa byacu',
    title: 'Amoko atandatu y’ibikoresho, ibibazo bitandatu bitandukanye',
    lead:
      'Sisitemu ya kamera n’akamenyetso k’imizigo nta kindi bihuriyeho uretse urubuga byoherezaho amakuru. Hitamo ukurikije icyo ukeneye kubona.',
    cta: 'Reba ibicuruzwa byose',
    menuTitle: 'Urashaka iki?',
    cardCta: 'Reba igikoresho',
  },

  services: {
    eyebrow: 'Serivisi',
    title: 'Icyo dukora ku makuru amaze kuhagera',
    lead:
      'Ibikoresho ni kimwe cya kabiri cy’akazi. Izi serivisi eshatu ni zo zigena niba raporo ziba igikoresho cyo kuyobora cyangwa indi mbonerahamwe nta we ufungura.',
  },

  capabilities: {
    eyebrow: 'Kuri porogaramu',
    title: 'Biri mu gukurikirana, ntibigurishwa ukwabyo',
    items: {
      mobile: {
        title: 'Kurikirana aho uri hose',
        body: 'Porogaramu za telefoni za PrimeTrack ziboneka kuri iOS na Android, zifite ibikoresho byose bikenewe mu gucunga ibinyabiziga uri kuri telefoni aho kuba ku biro.',
      },
      driver: {
        title: 'Gukurikirana imyitwarire y’abashoferi',
        body: 'Raporo zirambuye ku buryo abashoferi batwara, ku buryo imyitwarire mibi imenyekana hakiri kare igakosorwa mbere y’uko igira ingaruka ku kazi.',
      },
      maintenance: {
        title: 'Kubungabunga mbere y’uko bipfa',
        body: 'Gutegura igihe cyo gusana mu buryo bwikora, ku buryo amatariki yo gusana n’ayo kuvugurura ibyangombwa by’ibinyabiziga atagisigara mu mutwe w’umuntu ahubwo ajya muri sisitemu.',
      },
      speedLimiters: {
        title: 'Ibigabanya umuvuduko bya Arrive Alive',
        body: 'Igabanya umuvuduko ishyirwa hamwe n’igikoresho cyo gukurikirana, igafasha umutekano w’abashoferi no kubahiriza amategeko y’umuvuduko mu muhanda.',
      },
    },
  },

  videoFeature: {
    eyebrow: 'Gukurikirana amashusho hifashishijwe AI',
    title: 'Kamera z’ubwenge z’ikinyabiziga cyawe',
    body:
      'Kohereza amashusho ako kanya no kugenzura impande zose z’ikinyabiziga n’umuhanda ugikikije. ADAS n’uburyo bwo kwirinda ahatagaragara biburira umushoferi mbere y’uko ikibazo kivuka, kandi uburyo bwa AI bwo gusabana butuma abashoferi n’icyumba cy’ubugenzuzi bakomeza kuvugana mu gihe ikinyabiziga kikigenda.',
    closing: 'Ibinyabiziga byawe bigire umutekano, ubwenge n’ubwizigirwe kuri buri rugendo.',
    primaryCta: 'Tuvugishe ku gukurikirana amashusho',
    secondaryCta: 'Byinshi ku gukurikirana amashusho',
  },

  fuelFeature: {
    eyebrow: 'Kugenzura lisansi',
    title: 'Genzura ikoreshwa, menya ipfa ubusa, ukumire ubujura',
    body:
      'Sensor zo kugenzura zikurikirana neza uko lisansi ikoreshwa kandi zikerekana aho ipfira ubusa. Sisitemu igaragaza ibidakora neza ikaguha inama zihariye aho kuguha imbonerahamwe ngo wisobanurire wenyine.',
    primaryCta: 'Tuvugishe ku gukurikirana lisansi',
    secondaryCta: 'Byinshi ku gukurikirana lisansi',
  },

  stats: {
    eyebrow: 'PrimeTrack mu mibare',
    title: 'Ingano y’ibikorwa byacu',
    labels: {
      trackers: 'Ibikoresho byo gukurikirana bikora',
      years: 'Imyaka y’uburambe muri uru rwego',
      countries: 'Ibihugu dukoreramo',
      support: 'Serivisi ku bakiriya, buri munsi',
    },
  },

  values: {
    eyebrow: 'Indangagaciro zacu',
    title: 'P.R.I.M.E.',
    lead: 'Amagambo atanu y’Icyongereza izina ry’ikigo rikomokaho, akurikiranye uko yandika PRIME.',
    items: {
      performance: { letter: 'P', title: 'Imikorere (Performance)', body: 'Sisitemu zipimirwa ku cyo zihindura mu kazi kawe, si ku rupapuro rw’ibiziranga.' },
      reliability: { letter: 'R', title: 'Kwizerwa (Reliability)', body: 'Ibikoresho n’ubufasha ushobora kugenderaho, ndetse no mu bihe bikomereye byombi.' },
      innovation: { letter: 'I', title: 'Guhanga udushya (Innovation)', body: 'AI, IoT n’ingufu z’imirasire y’izuba bikoreshwa aho bikemura ikibazo nyacyo.' },
      multifunction: { letter: 'M', title: 'Gukora byinshi (Multifunction)', body: 'Urubuga rumwe rukubiyemo ibinyabiziga, imizigo, lisansi n’abashoferi, aho kuba amasezerano ane atandukanye.' },
      efficiency: { letter: 'E', title: 'Gukora neza (Efficiency)', body: 'Buri bushobozi bupimirwa ku kuba bugabanya ibyo gukoresha ibinyabiziga bitwara.' },
    },
  },

  clients: {
    eyebrow: 'Bamwe mu bakiriya bacu',
    title: 'Ibigo bikoresha PrimeTrack',
  },

  marquee: {
    primary: 'Reba buri ntambwe y’ikinyabiziga cyawe',
    items: ['Gusana byihuse cyane (MTTR)', 'Serivisi amasaha 24', 'Garanti yongerewe igihe'],
  },

  whyPrime: {
    eyebrow: 'Impamvu PrimeTrack',
    title: 'Icyo dutandukaniyeho n’abandi',
    lead: 'Ibintu birindwi twerekana iyo umuntu atubajije impamvu yakwizera ko tumwitaho ibinyabiziga. Bitatu muri byo biri hepfo.',
    cta: 'Soma ibyiza birindwi byose',
  },

  finalCta: {
    eyebrow: 'Tangira',
    title: 'Tubwire icyo ukeneye kubona',
    body:
      'Tubwire ibinyabiziga byawe n’ikibazo ushaka gukemura. Tuzakugira inama ku buryo bukwiye, tugusobanurire ibyo bukemura n’ibyo budakemura, kandi tukubwize ukuri ku giciro.',
    primary: 'Vugana n’itsinda ryacu',
    secondary: 'Twandikire kuri WhatsApp',
  },
};
