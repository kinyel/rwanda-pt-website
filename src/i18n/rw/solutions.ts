import type { Dictionary, Translation } from '../index';

/** The five solution areas in Kinyarwanda. Mirrors src/i18n/en/solutions.ts. */
export const solutions: Translation<Dictionary['solutions']> = {
  index: {
    eyebrow: 'Ibisubizo',
    title: 'Urubuga rumwe, ibintu bitanu rukora neza',
    lead:
      'Ikoranabuhanga ry’ibinyabiziga rigurishwa nk’urutonde rw’ibiriranga. Biroroha kurisuzuma ukurikije icyo rihindura: ibyo ushobora kubona, ibyo ureka gutakaza, n’ibyo amaherezo ushobora kugaragariza ibimenyetso.',
    pageTitle: 'Icyo PrimeTrack ikorera ibinyabiziga byawe',
    cta: 'Reba ibisubizo',
    relatedTitle: 'Ibisubizo bikorana',
  },

  items: {
    fleetTracking: {
      name: 'Gukurikirana ibinyabiziga',
      menuDescriptor: 'Aho biri ako kanya, inzira n’amateka y’ingendo',
      outcome: 'Menya aho buri kinyabiziga kiri, n’aho cyanyuze',
    },
    videoTelematics: {
      name: 'Gukurikirana amashusho hifashishijwe AI',
      menuDescriptor: 'Kamera z’ibinyabiziga zifite ADAS n’integuza mu modoka',
      outcome: 'Reba ibyabaye, aho kubijyaho impaka',
    },
    fuelMonitoring: {
      name: 'Kugenzura lisansi',
      menuDescriptor: 'Urugero rwa lisansi, ikoreshwa n’integuza z’ubujura',
      outcome: 'Menya aho lisansi ijya koko',
    },
    vehicleSecurity: {
      name: 'Umutekano w’ibinyabiziga n’imitungo',
      menuDescriptor: 'Integuza zo kwangiza, imbibi zagenwe n’ibifunga imizigo',
      outcome: 'Menya ako kanya iyo hari ikigiye kitagomba kugenda',
    },
    fleetAnalytics: {
      name: 'Isesengura n’ubusobanuro ku binyabiziga',
      menuDescriptor: 'Uburyo cumi na butanu bwa raporo ku binyabiziga byose',
      outcome: 'Hindura amakuru y’ibinyabiziga ibyemezo',
    },
  },

  vehicleSecurity: {
    eyebrow: 'Umutekano w’ibinyabiziga n’imitungo',
    title: 'Menya ako kanya iyo hari ikigiye kitagomba kugenda',
    lead:
      'Ibihombo byinshi by’ibinyabiziga ntibiba bitangaje. Igikoresho cyo gukurikirana gikurwamo, kontineri iva mu bubiko nijoro, ikinyabiziga kinyura inzira nta wemeje. Umutekano hano ni ukumenya ibyo uko ari bitatu hakiri igihe cyo kugira icyo ukora.',
    problemTitle: 'Ikibazo',
    problemBody:
      'Igikoresho cyo gukurikirana gishobora kuboneka kigacibwa ni igikoresho kizacibwa. Ikinyabiziga gitanga amakuru y’aho kiri ari uko moteri yatswe gusa nta cyo kikubwira ku masaha y’ingenzi. Kandi umutungo udafite isoko y’umuriro yawo uburirwa irengero ako kanya uvanywe ku kinyabiziga cyawutwaraga.',
    approachTitle: 'Uko PrimeTrack ibikemura',
    capabilities: {
      tamper: {
        name: 'Ibikoresho bidashobora gupfa ubusa byoroshye',
        body: 'PrimeSOLAR ntikenera guhuzwa na bateri y’ikinyabiziga, bityo nta nsinga zo guca. Uyikozeho, integuza ihita yoherezwa. Sensor yayo y’ihindagurika imenya iyo inyeganyeze n’igihe ikinyabiziga kizimije.',
      },
      independent: {
        name: 'Imitungo yikurikirana ubwayo',
        body: 'STAR trackers zifite umuriro wazo kandi zimara amezi ku muriro umwe, zifite igikonoshwa kidapfa n’ibihe gifata na rukuruzi ku cyuma icyo ari cyo cyose. Imizigo ikomeza kugaragara yaba ikiri ku kinyabiziga cyangwa itakiriho.',
      },
      geofence: {
        name: 'Imbibi zitanga amakuru ubwazo',
        body: 'Shyiraho imbibi ku bubiko, ahakorerwa imirimo cyangwa ku nzira, maze uhabwe integuza ako kanya iyo ikinyabiziga kinjiyemo cyangwa kivuyemo. Kubahiriza inzira no kugenda hanze y’amasaha y’akazi bigaragara nta muntu ukeneye kwicara areba ecran.',
      },
      seals: {
        name: 'Imizigo idashobora gufungurwa rwihishwa',
        body: 'Ibifunga imizigo by’ikoranabuhanga byandika aho n’igihe byafunguriwe, bigafungurwa hakoreshejwe Bluetooth, ijambobanga cyangwa porogaramu. Uruhererekane rw’ababifite mu nshingano ruba inyandiko aho kuba isezerano gusa.',
      },
      evidence: {
        name: 'Ibimenyetso iyo bivugwaho impaka',
        body: 'Gukurikirana hakoreshejwe amashusho bibika amateka yafashwe aturutse ku mpande enye. Nyuma y’impanuka ushobora kumenya icyayiteye n’uwakoze amakosa hashingiwe ku mashusho aho kuba ku nkuru zivuguruzanya.',
      },
    },
    outcomeTitle: 'Ibihinduka',
    outcomes: [
      'Kugenda hanze y’amasaha cyangwa uturere byemeranyijweho bikugeraho nk’integuza, si nk’ikintu uvumbura nyuma',
      'Imitungo ikomeza gukurikiranwa iyo itandukanyijwe n’ikinyabiziga cyayitwaraga',
      'Kwangiza igikoresho bimenyeshwa n’igikoresho ubwacyo aho kuboneka mu igenzura rikurikira',
      'Impaka zikemurwa hashingiwe ku nyandiko aho kuba ku byo abantu bibuka',
    ],
    ctaTitle: 'Tuganire ku byo urinda',
    ctaBody:
      'Tubwire ibyo utakaza n’aho ubitakariza. Tuzakubwira igice cy’ibi gikemura icyo kibazo, n’igice kitagikemura.',
  },
};
