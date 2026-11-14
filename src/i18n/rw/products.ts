import type { Dictionary, Translation } from '../index';

/**
 * The six product lines in Kinyarwanda. Mirrors src/i18n/en/products.ts.
 *
 * Product names (`name`, `productName`) stay exactly as they are in English:
 * they are the names on the hardware, the brochures and the Nigeria site, and
 * they are what customers search for. Technical terms that are used as-is in
 * Rwanda (GPS, DVR, ADAS, OBD, IoT, GSM, 4G/LTE, SIM) are kept too.
 */
export const products: Translation<Dictionary['products']> = {
  index: {
    eyebrow: 'Ibicuruzwa',
    title: 'Ibikoresho byo gukurikirana byubakiwe uko mu Rwanda batwara ibinyabiziga',
    lead:
      'Amoko atandatu y’ibikoresho, buri bwoko bukemura ikibazo cyabwo. Bimwe bireba umuhanda, ibindi bireba ikigega cya lisansi, ibindi bimara amezi menshi bidakeneye isoko y’amashanyarazi na gato. Niba utazi neza igikubereye, tubwire icyo ushaka kureka guhomba, tukwereke igikwiye.',
    chooseTitle: 'Ntuzi neza igikoresho ukeneye?',
    chooseBody: 'Tubwire ibinyabiziga byawe n’icyo ukeneye kubona. Tuzakugira inama ku buryo bukwiye tunagusobanurire impamvu.',
    specsTitle: 'Mu ncamake',
    featuresTitle: 'Icyo gikora',
  },

  videoTracking: {
    name: 'Video Trackers',
    productName: 'Ai-PRIME Video Telematics',
    menuDescriptor: 'Kamera z’ibinyabiziga zifite ADAS n’integuza za AI ku bashoferi',
    tagline: 'Kamera z’umutekano z’ibinyabiziga byawe, zireba umuhanda n’imbere mu modoka icyarimwe',
    heroKicker: 'Gukurikirana hakoreshejwe amashusho',
    summary:
      'Kamera enye zidapfa n’imvura na DVR ibika amakuru menshi bikubikira amashusho y’impande zose za buri rugendo, AI igakurikirana amashusho ako kanya ikaburira iyo umushoferi atangiye kwitwara nabi.',
    specs: ['Kamera za DVR za 4K', 'Sensor za ADAS', 'Porogaramu ihangana n’ibihe byose', 'Kuvugurura hifashishijwe interineti'],
    intro: 'Gukurikirana kwacu hakoreshejwe amashusho ni kamera z’umutekano z’ibinyabiziga byawe.',
    sections: {
      liveFeeds: {
        title: 'Amashusho y’ako kanya, aturutse ku mpande enye',
        body:
          'Sisitemu ihuza DVR ibika amakuru menshi na kamera enye zifata amajwi n’amashusho, zibona no mu mwijima kandi zidapfa n’imvura. Imwe iba imbere mu modoka naho eshatu zireba umuhanda, zose hamwe zikareba impande zose z’ikinyabiziga. ADAS ifasha umushoferi n’uburyo bwo kwirinda ahatagaragara bikora hamwe n’amashusho, kandi integuza zigera ku cyumba cyawe cy’ubugenzuzi iyo hari ikibaye.',
      },
      aiEnabled: {
        title: 'AI ivugana n’umushoferi, si ibiro gusa',
        body:
          'Ubwenge bw’ubukorano busesengura amashusho ubudahwema kandi bugasubiza ikinyabiziga kikigenda. Imyitwarire y’umushoferi idakurikije amabwiriza imenyeshwa icyumba cy’ubugenzuzi kandi ikabwirwa umushoferi binyuze mu ndangururamajwi ikorana na AI, ku buryo ikosa rikosorwa ari mu modoka aho kuba muri raporo nyuma y’icyumweru. Ibyo ni byo bihindura amashusho impanuka zirinzwe.',
      },
      analytics: {
        title: 'Raporo zikubiyemo urugendo rwose',
        body: 'Ubwoko bwa raporo buboneka harimo:',
        items: [
          'Raporo y’amashusho yabitswe',
          'Raporo y’igihe moteri yaka imodoka ihagaze',
          'Odometero',
          'Raporo y’urugendo rw’ikinyabiziga',
          'Kongera umuvuduko bikabije',
          'Raporo yo gukata nabi',
          'Raporo y’inshuro integuza zivuze',
          'Raporo yo kurenza umuvuduko',
          'Raporo isesengura imyitwarire y’umushoferi',
          'Raporo yo kuva mu nzira (YAW)',
          'Raporo y’igihe urugendo rwo kugenda no kugaruka rufata',
          'Raporo y’imbibi zagenwe (geofence)',
          'Kugaragaza ahantu h’ingenzi (POI)',
          'Ikimenyetso cy’umubyigano w’imodoka',
          'Raporo y’igihe imodoka imara iparitse',
          'Kwibutsa igihe cyo gusana',
          'Ubutumwa bwa imeyili bwikora',
          'Raporo yo gutangiza moteri',
          'Integuza y’ubutabazi (SOS)',
        ],
      },
      investigations: {
        title: 'Ibimenyetso iyo impanuka ivugwaho impaka',
        body:
          'Aha ni ho gukurikirana hakoreshejwe amashusho bigaragaza agaciro kabyo. Nyuma y’impanuka ushobora kubona icyayiteye, ugakurikirana uko ibintu byagenze, kandi ukamenya uwakoze amakosa nta mpaka ndende. Bikemura amakimbirane, birinda uruhande rw’ikigo cyawe, kandi bigabanya ibiciro.',
      },
      customAnalytics: {
        title: 'Integuza zihuzwa n’imikorere yawe',
        body:
          'Isesengura ry’amashusho rishobora guhindurwa. Shyiraho integuza ku bintu bikureba, nko kurenza umuvuduko, guhindura umukono mu buryo butunguranye, cyangwa kwinjira mu kinyabiziga utabyemerewe, maze ubyiteho bikiba aho kubimenya nyuma.',
      },
      storage: {
        title: 'Ububiko bujyanye n’ibyo ukeneye gufata',
        body:
          'DVR iboneka mu bwoko bwa 256GB, 1TB na 4TB, buri bwoko bushobora gufata amashusho ubudahwema nibura amasaha umunani ku munsi.',
      },
    },
    highlights: [
      'Gukurikirana amashusho ako kanya',
      'ADAS ifasha umushoferi',
      'Ububiko bunini',
      'Kwirinda amakosa yo ahatagaragara',
      'Gushakisha amateka',
      'Raporo zihindurwa uko ubishaka',
    ],
    ctaTitle: 'Ushishikajwe no gukurikirana hakoreshejwe amashusho?',
    ctaBody: 'Tubwire ibyo ibinyabiziga byawe bitwara n’aho bikorera. Tuzaguhitiramo kamera n’ububiko bibikwiriye.',
  },

  primesolar: {
    name: 'Solar Trackers',
    productName: 'PrimeSOLAR',
    menuDescriptor: 'Gukurikirana amakamyo hakoreshejwe imirasire y’izuba, nta kubungabunga',
    tagline: 'Igikoresho cyo gukurikirana amakamyo kidakenera kubungabungwa',
    heroKicker: 'Gukurikirana hakoreshejwe imirasire y’izuba',
    summary:
      'Igikoresho cyo gukurikirana kidakora kuri bateri y’ikamyo yawe, gikomeza gutanga amakuru ikinyabiziga kiri mu igaraje, kandi cyongera umuriro hifashishijwe urumuri rw’umunsi gusa.',
    specs: ['Ntigihuzwa na bateri y’ikinyabiziga', 'Bateri imara nibura imyaka 3', 'Integuza iyo gikozweho', 'Cyubakiwe ikirere gishyuha'],
    sections: {
      maintenanceFree: {
        title: 'Gikomeza gukora n’iyo ikamyo ihagaze',
        body:
          'PrimeSOLAR ikora ubudahagarara ndetse n’igihe ikamyo yawe iri mu igaraje bayisana, kuko itigera ikenera guhuzwa na bateri y’ikinyabiziga. Uyikozeho, uhita ubona integuza. Ushobora kumva ibiganiro bibera hafi yayo, kandi sensor yayo y’ihindagurika imenya iyo inyeganyeze. Bateri yayo imara nibura imyaka itatu mbere yo gusimbuzwa, kandi yongera umuriro buri munsi ku zuba rike. Ntipfa n’amazi, n’ibihe, n’ubushyuhe: ibikoresho byayo byubakiwe gukomera mu kirere gishyuha, kandi porogaramu yayo yongeye gukorwa bundi bushya. Itanga raporo zinoze n’integuza nk’izindi sisitemu zacu zo gukurikirana na porogaramu za telefoni za Prime.',
      },
      proofing: {
        title: 'Ntipfa n’amazi, n’ibihe, n’ubushyuhe',
        body:
          'Kurikirana amakamyo yawe aho agiye hose nta guhagarara guterwa n’ibihe byo hanze. PrimeSOLAR ikwereka buri ntambwe y’ikinyabiziga nta guhagarara.',
      },
      noLoss: {
        title: 'Nta kubura umuriro, nta kubura SIM, nta kugenzura buri gihe',
        body:
          'Gukurikirana amakamyo n’ibicuruzwa byawe mu buryo bworoshye, aho biri hose, aho uri hose, igihe cyose ushakiye kureba. Bikemura mu buryo butaziguye ikibazo cyo kwangiza nkana ibikoresho byo gukurikirana.',
      },
      rugged: {
        title: 'Cyubakiwe ibihe byangiza ibindi bikoresho',
        body:
          'PrimeSOLAR yakorewe ahantu henshi hatandukanye n’imikoreshereze itandukanye. Imiterere yayo ikomeye ihangana n’ubushyuhe bwinshi n’ubukonje, n’ubuhehere, n’iyangirika risanzwe ryo mu murima, ku buryo ikomeza kwizerwa haba mu bihe bikomeye cyangwa bisanzwe.',
      },
    },
    ctaTitle: 'Ushishikajwe n’ibikoresho byacu bikoresha imirasire y’izuba?',
    ctaBody: 'Gukurikirana ibinyabiziga mu buryo butangiza ibidukikije bikuraho insinga, kumara bateri n’igenzura rya buri gihe. Reka tukwereke imibare ijyanye n’amakamyo yawe.',
  },

  fuelmanagement: {
    name: 'Fuel Trackers',
    productName: 'Prime Fuel Telematics',
    menuDescriptor: 'Kugenzura urugero rwa lisansi, uko itemba n’ubujura bwayo',
    tagline: 'Menya aho lisansi ijya koko',
    heroKicker: 'Kugenzura lisansi',
    summary:
      'Sensor zo mu kigega n’ibipima itemba rya lisansi mu muyoboro bipima ikoreshwa nyaryo, ku buryo kuvoma lisansi mu buryo bw’ubujura bigaragara nk’integuza aho kuba icyuho kidasobanutse mu mibare y’ukwezi.',
    specs: ['Sensor zo mu kigega', 'Ibipima itemba mu muyoboro', 'Integuza z’ubujura', 'Raporo z’ikoreshwa'],
    intro:
      'Lisansi ni kimwe mu biciro bike by’ibinyabiziga ushobora guhindura vuba, ni yo mpamvu ikoreshwa ryayo turifata nk’igipimo cy’ingenzi aho kuba umurongo mu mibare gusa. Sisitemu yacu ihuza porogaramu yacu bwite n’ibikoresho bya GPS na telematiki kugira ngo yerekane aho lisansi ijya n’icyo wakora.',
    sections: {
      technology: {
        title: 'Uko ipima rikorwa',
        body: 'Ibikoresho byo gukurikirana lisansi byubakiye kuri sensor za IoT zikorana na GPS. Ibice bitatu ni byo bikora akazi:',
        items: [
          'Sensor zipima urugero rwa lisansi. Sensor zinoze cyane zishyirwa mu kigega cya lisansi, zibasha kumenya n’impinduka nto mu rugero rwayo.',
          'Ibipima itemba rya lisansi. Bishyirwa ku muyoboro wa lisansi kugira ngo bikurikirane uko ikoreshwa kandi bitange amakuru y’ako kanya.',
          'Igikoresho kigenzura telematiki. Ubwonko bwa sisitemu, gikusanya amakuru aturuka kuri sensor no ku bipima, kikayatunganya, kikayohereza ku rubuga rwacu rwo kuri interineti binyuze kuri GSM cyangwa GPRS.',
        ],
      },
      functionality: {
        title: 'Ibyo ubona buri munsi',
        items: [
          'Kugenzura ako kanya. Urugero rwa lisansi n’uko ikoreshwa bivugururwa ako kanya kuri mudasobwa no kuri telefoni.',
          'Kumenya ubujura bwa lisansi. Kuvoma lisansi utabyemerewe no kugabanuka gutunguranye kw’urugero rwayo bihita bitera integuza kuri SMS, imeyili cyangwa muri porogaramu.',
          'Gusesengura ikoreshwa. Raporo zirambuye ku ikoreshwa, imigendekere n’ibidasanzwe, zifasha mu gutegura inzira, kugira inama abashoferi no gufata ibyemezo byo kugura.',
        ],
      },
      outcome: {
        title: 'Guhindura imibare ubwizigame',
        body:
          'Ikoreshwa rya lisansi rifite ingaruka zitaziguye ku nyungu, bityo raporo zakozwe ku buryo zikoreshwa mu gufata ingamba. Imigendekere y’ikoreshwa uko igihe gihita igaragaza imiterere n’ibidakora neza, kandi sisitemu igaragaza ibidakurikije amabwiriza nko kwatsa moteri igihe kirekire imodoka ihagaze, kurenza umuvuduko no gutwara uvunga lisansi. Ibyo ubifite, ushobora gufata ingamba zihariye aho gukeka aho igihombo kiri.',
      },
    },
    ctaTitle: 'Ushishikajwe no gukurikirana lisansi?',
    ctaBody: 'Twoherereze umubare w’ibinyabiziga byawe n’ubwoko bwabyo. Tuzagusobanurira ibyo sensor zishobora n’izidashobora gupima kuri buri kimwe.',
  },

  containertracking: {
    name: 'STAR Trackers',
    productName: 'STAR Trackers',
    menuDescriptor: 'Gukurikirana kontineri n’imizigo hakoreshejwe ibikoresho byigenga byongererwa umuriro',
    tagline: 'Byigenga, byongererwa umuriro, kandi bifata kuri kontineri na rukuruzi',
    heroKicker: 'Gukurikirana kontineri n’ibicuruzwa',
    summary:
      'Ibikoresho byo gukurikirana bimara amezi ku muriro umwe, bifata na rukuruzi ku cyuma icyo ari cyo cyose, kandi bikomeza gutanga amakuru ahantu hatari amashanyarazi n’ibikorwa remezo.',
    specs: ['Amezi ku muriro umwe', 'Indiba ya rukuruzi', 'Igikonoshwa kidapfa n’ibihe', 'Bikora hatari amashanyarazi'],
    sections: {
      battery: {
        title: 'Bateri imara amezi',
        body:
          'STAR Trackers zikoresha uburyo bugezweho bwo gucunga umuriro, ku buryo zimara amezi zikora zonyine ku muriro umwe wuzuye, kandi amasaha make yo kuzongerera umuriro arahagije. Igikonoshwa cyazo gikozwe mu byuma bidapfa n’ibihe kandi indiba yazo ni rukuruzi, ku buryo zifata ku cyuma icyo ari cyo cyose. Ibyo bituma zibera kontineri zitwara imizigo, ibicuruzwa bidapakiye mu bikoresho binini, n’ibindi bintu bikeneye kurindwa.',
      },
      anywhere: {
        title: 'Gutanga amakuru aturutse ahantu hitaruye no hatari amashanyarazi',
        body:
          'Kubera ko buri gikoresho gifite umuriro wacyo, ntikishingikiriza ku kintu gifatanyeho. STAR Trackers zohereza amakuru y’aho ziri ako kanya zivuye ahantu hitaruye no hatari amashanyarazi, ku buryo imizigo yawe yaba iri mu nzira cyangwa ibitswe ahantu hatari ibikorwa remezo, ukomeza kumenya aho iri n’uko imeze.',
      },
      rugged: {
        title: 'Zubakiwe ibihe imizigo inyuramo koko',
        body:
          'Kontineri n’ibicuruzwa bihura n’ibibazo byinshi mu rugendo no mu bubiko. Ibi bikoresho byubakiwe guhangana n’ubushyuhe bukabije, ubuhehere n’ibindi bihe bikomeye bitabuze ubusobanuro cyangwa ngo bihagarike gukora.',
      },
      integration: {
        title: 'Zohereza amakuru ku rubuga rumwe n’ibindi byose',
        body:
          'STAR Trackers zohereza amakuru muri porogaramu yacu yo gucunga ibinyabiziga hamwe n’ibinyabiziga byawe, ku buryo imizigo n’ibinyabiziga biboneka ahantu hamwe. Amakuru y’ako kanya na raporo zirambuye bikwereka uko ibicuruzwa bigenda, ari byo bituma ibyemezo ku nzira no ku ruhererekane rw’ibicuruzwa biba ibindi bitari ugukeka.',
      },
    },
    ctaTitle: 'Ushishikajwe na STAR Trackers?',
    ctaBody: 'Tubwire ibyo utwara n’intera bigenda. Tuzakugira inama ku mubare w’ibikoresho, aho bishyirwa n’igihe cyo kubyongerera umuriro.',
  },

  fleettracking: {
    name: 'Fleet Trackers',
    productName: 'Fleet Tracking Systems',
    menuDescriptor: 'Gucunga ibinyabiziga hakoreshejwe GPS, kuva ku bike kugeza ku bihumbi',
    tagline: 'Ishingiro ry’imicungire inoze y’ibinyabiziga',
    heroKicker: 'Gukurikirana ibinyabiziga',
    summary:
      'GPS, igenzura rya mudasobwa y’ikinyabiziga na telematiki bikorera hamwe kugira ngo bikwereke aho buri kinyabiziga kiri, uko gitwarwa, n’icyo kigiye gukenera.',
    specs: ['Ubusobanuro bugera kuri metero 5', 'Bivugururwa buri masegonda 10', 'Amakuru ya moteri (OBD)', '4G/LTE na GSM/GPRS'],
    intro: 'Serivisi yacu yo gucunga ibinyabiziga yubakiwe gutuma imicungire inoze y’ibinyabiziga iba ikintu ukora koko, aho kuba ikintu wifuza gusa.',
    sections: {
      technology: {
        title: 'Ikoranabuhanga riri mu kinyabiziga',
        body: 'Sisitemu ihuza GPS na telematiki n’uburyo bwa IoT. Ibice bitatu bishyirwa mu kinyabiziga cyangwa kuri cyo:',
        items: [
          'Ibikoresho byo gukurikirana bya GPS. Ibikoresho bito bishyirwa mu kinyabiziga, bihora byandika aho kiri, umuvuduko n’inzira.',
          'Ibikoresho bigenzura mudasobwa y’ikinyabiziga (OBD). Bihuzwa n’iyo mudasobwa ubwayo kugira ngo bikusanye amakuru ya moteri, imiterere y’ikinyabiziga n’isuzuma ryacyo.',
          'Igikoresho kigenzura telematiki. Igikoresho cy’ingenzi gikusanya amakuru aturuka ku bikoresho bya GPS, kuri sisitemu ya OBD no ku zindi sensor nk’iza lisansi cyangwa ubushyuhe, kikayohereza ku rubuga rwacu rwo kuri interineti binyuze kuri GSM, GPRS cyangwa 4G/LTE.',
        ],
      },
      functionality: {
        title: 'Icyo urubuga rubikoresha',
        items: [
          'Gukurikirana aho biri ako kanya. Genzura aho buri kinyabiziga kiri neza neza kigenda, bigatuma ibyemezo byo kohereza imodoka no guhindura inzira bishoboka bigifite akamaro.',
          'Imbibi zagenwe (geofencing). Shushanya imbibi ku turere runaka maze uhabwe integuza iyo ikinyabiziga cyinjiyemo cyangwa kivuyemo, bifasha kubahiriza inzira n’umutekano.',
          'Gukurikirana imyitwarire y’abashoferi. Kurikirana kandi utangeho raporo ku kurenza umuvuduko, gufata feri bikabije, kongera umuvuduko vuba no kwatsa moteri imodoka ihagaze, kugira ngo utwarwe neza kandi ikinyabiziga kidasaza vuba.',
          'Gutoranya inzira nziza. Sisitemu isesengura uko umuhanda umeze n’imikorere y’ikinyabiziga ikakugira inama ku nzira zinoze kurushaho, bizigama lisansi n’igihe.',
          'Integuza zo gusana ibinyabiziga. Gusoma sisitemu ya OBD bituma urubuga rukurikirana ubuzima bwa moteri kandi rukaburira hakiri kare igihe cyo gusana kigeze, bigabanya igihe imodoka zimara zidakora n’ibiciro byo gusana.',
        ],
      },
      performance: {
        title: 'Uko ikora mu kazi',
        body:
          'Sisitemu ikoreshwa mu bikorwa byo gutwara ibicuruzwa, gutwara abantu no muri serivisi za Leta. Ibiyiranga byapimwe:',
        items: [
          'Gukurikirana kwa GPS kunoze cyane. Ubusobanuro bw’aho kiri bugera kuri metero eshanu, bivugururwa buri masegonda icumi.',
          'Raporo zuzuye. Raporo zirambuye ku mateka y’ingendo, imikorere y’abashoferi, ikoreshwa rya lisansi n’ubuzima bw’ibinyabiziga.',
          'Kwaguka. Urubuga rumwe rukorera ubucuruzi bufite ibinyabiziga bike n’ikigo kinini gifite ibinyabiziga byinshi.',
          'Porogaramu ya telefoni. Cunga ibinyabiziga aho uri hose, ubona amakuru y’ako kanya, integuza na raporo kuri telefoni iri mu mufuka wawe.',
        ],
      },
      comparison: {
        title: 'Icyo dutandukaniyeho n’izindi sisitemu',
        items: [
          'Amakuru y’ako kanya aho kuba amakuru atinda cyangwa aza ari menshi icyarimwe, ku buryo ibyo ureba ari byo biba ubu.',
          'Gukurikirana imyitwarire y’abashoferi mu buryo bwagutse, biha inama z’abashoferi ishingiro rifatika.',
          'Integuza na raporo bihindurwa uko ubishaka, bijyanye n’uko akazi kawe gakorwa koko aho kuba icyitegererezo kidahinduka.',
          'Uburyo bwubakiwe gukoreshwa nta mahugurwa, bworoshye kugenderamo kandi nta bintu byinshi byuzuye kuri ecran.',
        ],
      },
      service: {
        title: 'Ibyo twiyemeza nyuma yo gushyiraho sisitemu',
        items: [
          'Ubufasha amasaha 24 kuri 24. Itsinda ryacu riboneka igihe cyose, ku buryo ikibazo cya sisitemu kitaba umunsi w’akazi gapfuye.',
          'Amahugurwa. Amahugurwa yuzuye ku bayobozi b’ibinyabiziga n’ababikoresha, kugira ngo urubuga rukoreshwe neza.',
          'Kubungabunga mbere y’igihe. Kuvugurura ibikoresho na porogaramu buri gihe, kugira ngo sisitemu ihore igezweho kandi ikora neza.',
        ],
      },
    },
    ctaTitle: 'Ushishikajwe no gukurikirana ibinyabiziga?',
    ctaBody: 'Waba ufite ibinyabiziga bitatu cyangwa ibihumbi bitatu, ikiganiro gitangira kimwe. Tubwire icyo ukeneye kubona.',
  },

  ectss: {
    name: 'eCT Systems',
    productName: 'Electronic Cargo Tracking Systems',
    menuDescriptor: 'Gukurikirana imizigo mu buryo bw’ikoranabuhanga, kurwanya uburiganya mu nzira',
    tagline: 'Kubona imizigo kuva igipakirwa kugeza igeze iyo ijya',
    heroKicker: 'Gukurikirana imizigo mu buryo bw’ikoranabuhanga',
    summary:
      'Gukurikirana imizigo mu buryo bw’ikoranabuhanga ku bikorwa byo gutwara ibicuruzwa, byubakiwe gufunga ibyuho uburiganya bwo mu nzira bunyuramo.',
    specs: ['Imiterere y’imizigo ako kanya', 'Inzira zagenewe imbibi', 'Kwinjira kurinzwe', 'Integuza zo kurenga imbibi'],
    sections: {
      features: {
        title: 'Ibiyiranga by’ingenzi',
        items: [
          'Gukurikirana ako kanya. Genzura aho imizigo yawe iri n’uko imeze uko igenda, ku buryo ushobora gukemura impinduka n’ubukererwe hakiri igihe.',
          'Imbibi zagenwe (geo-fencing). Shyiraho imbibi maze uhabwe integuza iyo imizigo yinjiye cyangwa ivuye ahantu hagenwe, bikongera umutekano n’igenzura.',
          'Raporo zihindurwa uko ubishaka. Raporo zuzuye n’isesengura ku bijyanye n’imizigo, bifasha gutoranya inzira nziza no gufata ibyemezo by’imikorere.',
          'Kwinjira kurinzwe. Igenzura ry’abinjira n’uburyo bwo guhisha amakuru birinda amakuru yawe kandi bigakomeza kuyagira ibanga.',
          'Integuza ako kanya. Iyo imbibi zirenzwe ubimenya ako kanya, bikiba.',
        ],
      },
      why: {
        title: 'Impamvu abakiriya bahitamo PrimeTrack ku mizigo',
        items: [
          'Serivisi yizewe. Twubakira ku kwizerwa no ku busobanuro, dushyiraho uburyo bwo gukurikirana bujyanye n’ibyo ubucuruzi bwawe butwara koko.',
          'Guhuza n’ibyo ukeneye. Turebera hamwe nawe ibyo ukeneye tugahuza uburyo bwacu nabyo aho kuguha igicuruzwa kidahinduka.',
          'Ubufasha bw’inzobere. Itsinda ry’ubufasha ryihariye, riboneka ku bibazo byoroheje no ku bibazo bya tekiniki bikomeye.',
          'Uburambe. Imyaka irenga icumi muri uru rwego, dutanga serivisi za telematiki mu bihugu byinshi bya Afurika.',
        ],
      },
    },
    ctaTitle: 'Ushishikajwe no gukurikirana imizigo mu buryo bw’ikoranabuhanga?',
    ctaBody: 'Tubwire inzira ukoresha n’agaciro k’imizigo yawe. Tuzakwereka aho ibyuho byo kutabona biri.',
  },
};
