import type { Dictionary, Translation } from '../index';

/**
 * The three service pages in Kinyarwanda. Mirrors src/i18n/en/services.ts.
 *
 * Unlike the hardware product lines, the service names are descriptions
 * rather than brand names, so they are translated. "API" and "ERM/ERP" are
 * kept: they are the terms an IT team in Kigali uses.
 */
export const services: Translation<Dictionary['services']> = {
  index: {
    eyebrow: 'Serivisi',
    title: 'Agaciro k’ibikoresho gashingiye ku cyo ukora ku makuru',
    lead:
      'Ibikoresho bitanga amakuru. Izi serivisi zihindura ayo makuru ibyemezo: umushoferi ukeneye kuganirizwa, inzira ikuhombya utabizi, n’uko ibyo byose bigera muri sisitemu ubucuruzi bwawe busanzwe bukoresha.',
  },

  fleetAnalytics: {
    name: 'Isesengura ry’ibinyabiziga',
    menuDescriptor: 'Uburyo cumi na butanu bwa raporo n’isesengura',
    tagline: 'Uburyo cumi na butanu bwo gusobanukirwa ibinyabiziga byawe',
    heroKicker: 'Isesengura ry’ibinyabiziga',
    summary:
      'Urwego rwa raporo ku bikoresho byose bya PrimeTrack, rushyizwe mu matsinda hakurikijwe ikibazo wibaza koko.',
    intro: 'Isesengura ry’ibinyabiziga ni ryo rihindura gukurikirana ibinyabiziga ikarita igaragaza ibiba ako kanya ikaba igikoresho cyo kuyobora.',
    groups: {
      where: {
        title: 'Kiri he, kandi cyanyuze he?',
        items: [
          {
            name: 'Gukurikirana ako kanya',
            body: 'Amakuru y’ako kanya ku hantu ibinyabiziga biri, ku buryo ushobora gufata ibyemezo no gutabara mu bihe byihutirwa bikiba.',
          },
          {
            name: 'Gusubiramo ingendo zabaye',
            body: 'Subiramo inzira n’ahantu ibinyabiziga byanyuze kugira ngo usuzume imikorere, wongere urebe urugendo ruvugwaho impaka, kandi utegure izindi nziza kurushaho.',
          },
          {
            name: 'Imbibi zagenwe (geofencing)',
            body: 'Imbibi zishyirwa ku turere runaka, n’integuza zihita ziza iyo ikinyabiziga cyinjiye cyangwa gisohotse. Bikumira gukoresha ibinyabiziga utabyemerewe kandi bigatuma abashoferi baguma mu nzira zemeranyijweho.',
          },
          {
            name: 'Gusesengura inzira nziza',
            body: 'Amakuru y’inzira zakoreshejwe n’imiterere y’urujya n’uruza asesengurwa kugira ngo haboneke inzira zinoze kurushaho, bigabanya lisansi n’igihe cy’urugendo.',
          },
        ],
      },
      cost: {
        title: 'Kubikoresha bitwara angahe?',
        items: [
          {
            name: 'Kugenzura lisansi',
            body: 'Urugero rwa lisansi n’uko ikoreshwa ku binyabiziga byose, ari byo bituma ibidasanzwe, ubujura bushoboka n’uburyo bubi bwo kunywesha lisansi bigaragara.',
          },
          {
            name: 'Kumenya moteri yaka imodoka ihagaze',
            body: 'Moteri yaka imodoka ihagaze nta mpamvu iramenyekana igakorerwa raporo. Bitwika lisansi, byongera imyuka ihumanya kandi bigasaza moteri nta rugendo rukozwe.',
          },
          {
            name: 'Raporo z’imikoreshereze y’ibinyabiziga',
            body: 'Imikoreshereze ikurikiranwa ku binyabiziga byose kugira ngo ibinyabiziga n’ibikoresho bidakoreshwa bihagije bigaragare, kandi akenshi ni ho ubwizigame bworoshye buba buri.',
          },
          {
            name: 'Raporo y’igihe cy’urugendo',
            body: 'Igihe ingendo zimara kibarwa kugira ngo igihe cyo kugeza ibicuruzwa gitegurwe hashingiwe ku bimenyetso, amatariki ntarengwa yubahirizwe, kandi ubwikorezi bunozwe.',
          },
        ],
      },
      safety: {
        title: 'Gitwarwa mu mutekano?',
        items: [
          {
            name: 'Kugenzura umuvuduko',
            body: 'Umuvuduko w’ibinyabiziga ako kanya, n’amateka y’inshuro umuvuduko warenzwe. Umuvuduko ukwiye unasobanura lisansi nke n’ibiciro byo gusana bigabanutse.',
          },
          {
            name: 'Gukurikirana imyitwarire y’abashoferi',
            body: 'Kongera umuvuduko bikabije, gufata feri no gukata nabi bipimwa kuri buri mushoferi, biha inama zigirwa abashoferi ishingiro rifatika.',
          },
          {
            name: 'Gukurikirana hakoreshejwe amashusho',
            body: 'Amashusho y’imbere n’inyuma y’ikinyabiziga, afasha mu gukora iperereza ku mpanuka, kugira inama abashoferi no gusaba ubwishingizi, kandi ubwayo akumira amakosa.',
          },
          {
            name: 'Integuza y’ubutabazi (SOS)',
            body: 'Integuza zihita ziza iyo umushoferi akanze SOS, ku buryo ubutabazi butangira ako kanya.',
          },
          {
            name: 'Raporo n’integuza z’ibyabaye',
            body: 'Kumenyeshwa ako kanya impanuka, ibinyabiziga byapfiriye mu nzira n’ibindi bintu bikomeye, ku buryo ihungabana rikumirwa aho kumenyekana nyuma.',
          },
        ],
      },
      condition: {
        title: 'Ni iki gikeneye kwitabwaho ubutaha?',
        items: [
          {
            name: 'Integuza zo gusana',
            body: 'Kumenyeshwa hakiri kare igihe cyo gusana cyateganyijwe, isuzuma ry’ikinyabiziga no kwibutswa serivisi, ari bwo buryo bwo kwirinda gupfa mu nzira aho kubikemura byamaze kuba.',
          },
          {
            name: 'Kugenzura ubushyuhe',
            body: 'Ubushyuhe mu binyabiziga bikonjesha no mu bice by’imizigo, birinda imizigo yangizwa n’ubushyuhe ndetse n’inyandiko zigaragaza kubahiriza amabwiriza.',
          },
        ],
      },
    },
    ctaTitle: 'Koresha raporo mu kazi',
    ctaBody: 'Tubwire ibibazo muri ibi sisitemu ukoresha ubu idashobora gusubiza, tukwereke uko iyacu ibisubiza.',
  },

  apiIntegrations: {
    name: 'Guhuza sisitemu (API)',
    menuDescriptor: 'Huza amakuru ya telematiki na sisitemu yawe ya ERM cyangwa ERP',
    tagline: 'Amakuru ya telematiki aho ubucuruzi bwawe busanzwe bukorera',
    heroKicker: 'Guhuza hakoreshejwe API',
    summary:
      'Huza PrimeTrack na porogaramu yawe yo gucunga umutungo w’ikigo ku buryo amakuru y’ibinyabiziga agera muri sisitemu itsinda ryawe risanzwe rikoresha.',
    intro:
      'PrimeTrack itanga uburyo bwa API buhuza porogaramu yawe yo gucunga umutungo w’ikigo n’urubuga rwacu rwa telematiki mu buryo butaziguye. Aho kwinjira ukwabyo no kureba ku yindi ecran, amakuru y’ibinyabiziga agera aho abakozi bawe basanzwe bakorera.',
    homeTitle: 'Guhuza telematiki hakoreshejwe API',
    homeBody:
      'Huza API za PrimeTrack zakozwe ku bushake bwawe na sisitemu yawe yo gucunga umutungo w’ikigo, amakuru ahererekanywe mu buryo bwikora, intambwe zikorwa n’intoki zigabanuke, kandi ibyemezo ku binyabiziga bifatwe hashingiwe ku makuru agezweho.',
    homeCta: 'Twandikire tugusobanurire API ku buntu',
    groups: {
      why: {
        title: 'Impamvu yo guhuza',
        items: [
          { name: 'Gukora neza', body: 'Guhererekanya no guhuza amakuru hagati ya PrimeTrack na ERM yawe mu buryo bwikora, bikuraho kongera kwandika amakuru n’intoki.' },
          { name: 'Amakuru y’ako kanya', body: 'Amakuru yo gukurikirana ibinyabiziga, isesengura ry’imyitwarire y’abashoferi n’ibipimo by’imikorere y’ibinyabiziga biboneka muri ERM yawe.' },
          { name: 'Guhuza n’ibyo ukeneye', body: 'Aho API ihurira n’amakuru ihererekanya bishobora guhindurwa, ku buryo guhuza bihura n’uko ubucuruzi bwawe bukora.' },
          { name: 'Kwaguka', body: 'Guhuza kwaguka uko ibinyabiziga byiyongera aho kongera kubakwa bundi bushya.' },
          { name: 'Ubushobozi bwiyongereye', body: 'Imbibi zagenwe, kugenzura lisansi no kumenya hakiri kare igihe cyo gusana bigaragara muri porogaramu usanzwe ukoresha.' },
        ],
      },
      how: {
        title: 'Uko guhuza bikorwa',
        items: [
          { name: 'Guhuza', body: 'API zisobanuye neza n’amabwiriza yo guhuza porogaramu yawe ya ERM na PrimeTrack.' },
          { name: 'Guhererekanya amakuru', body: 'Amakuru agenda hagati ya ERM yawe na PrimeTrack ako kanya, ku buryo sisitemu zombi zihora zifite ishusho imwe.' },
          { name: 'Kumenyeshwa ibibaye', body: 'Integuza za API ya PrimeTrack zigera muri ERM yawe, ku buryo ibibazo bikomeye bigera vuba ku bantu bikwiye.' },
          { name: 'Gusesengura amakuru', body: 'Isesengura na raporo bikorwa ku makuru y’ibinyabiziga yakusanyijwe binyuze kuri API.' },
          { name: 'Ibikorwa byikora', body: 'Imirimo isanzwe ikorwa n’uburyo bwo guhuza aho gutwara igihe cy’abakozi.' },
        ],
      },
      benefits: {
        title: 'Icyo ubikuramo',
        items: [
          { name: 'Kubona byose hamwe', body: 'Amakuru y’ibinyabiziga aturuka kuri PrimeTrack ari hamwe n’andi makuru y’ibikorwa byawe ahantu hamwe.' },
          { name: 'Ibyemezo byiza kurushaho', body: 'Ibyemezo bifatwa hashingiwe ku makuru agezweho kandi yuzuye aho kuba ayo mu cyumweru gishize.' },
          { name: 'Imirimo mike y’ubuyobozi', body: 'Kwandika amakuru n’intoki no gutunganya inyandiko bigabanuka.' },
          { name: 'Umusaruro', body: 'Amakuru y’ako kanya n’imikorere inoze ku itsinda rigomba kuyakoresha.' },
          { name: 'Uburyo bwo guhinduka', body: 'Guhuza kumenyera uko ibyo ubucuruzi bwawe bukeneye n’ikoranabuhanga bihinduka.' },
        ],
      },
    },
    ctaTitle: 'Tuvugishe ku guhuza sisitemu',
    ctaBody: 'Tubwire sisitemu ukoresha, tukwereke icyo kuyihuza bisaba. Ikiganiro cyo kugusobanurira ni ubuntu.',
  },

  drivermonitoring: {
    name: 'Gukurikirana abashoferi',
    menuDescriptor: 'Amanota y’imyitwarire ajyanye n’umutekano, lisansi no kubahiriza amategeko',
    tagline: 'Abashoferi bawe ni bo bagena byinshi mu biciro by’ibinyabiziga byawe',
    heroKicker: 'Gukurikirana imyitwarire y’abashoferi',
    summary:
      'Pima uko buri kinyabiziga gitwarwa koko, hanyuma ubigire ho igikorwa bikiri ingenzi.',
    intro:
      'Abashoferi ni bo bagena byinshi mu byo ibinyabiziga bitwara n’ibyago byinshi bihura nabyo. Gukurikirana imyitwarire y’abashoferi bipima ibibera ku muzunguruko bikabikugezaho mu buryo ushobora kubigiraho igikorwa.',
    groups: {
      why: {
        title: 'Impamvu yo gukurikirana imyitwarire y’abashoferi',
        items: [
          { name: 'Umutekano', body: 'Gutwara bishyira mu kaga, nko gufata feri bikabije, kurenza umuvuduko no gukata nabi, bimenyekana ako kanya mu gihe hakiri amahirwe yo kugira icyo ukora.' },
          { name: 'Ibyago n’inshingano', body: 'Imigenzereze iteje akaga ikemurwa mbere y’uko ivamo impanuka n’ibirego bizikurikira.' },
          { name: 'Kuzigama lisansi', body: 'Umuvuduko uhamye no kwatsa moteri imodoka ihagaze bigabanuka, ari bwo buryo budashamaje ariko bwizewe cyane bwo kugabanya amafaranga ya lisansi.' },
          { name: 'Kubahiriza amategeko', body: 'Uko abashoferi bubahiriza amategeko y’umutekano wo mu muhanda n’amabwiriza y’ikigo bikurikiranwa aho gukekwa gusa.' },
          { name: 'Umusaruro', body: 'Ibimenyetso bigaragara by’aho amahugurwa yahindura imikorere y’ibinyabiziga.' },
        ],
      },
      how: {
        title: 'Uko bikora',
        items: [
          { name: 'Gukurikirana ako kanya', body: 'GPS na telematiki bitanga amakuru y’ako kanya ku muvuduko, kongera umuvuduko, gufata feri n’ibindi.' },
          { name: 'Integuza zihindurwa uko ubishaka', body: 'Integuza zishyirwaho hakurikijwe imbibi zawe, ku buryo ibidakurikije amabwiriza bikugeraho hakiri igihe cyo kubikemura.' },
          { name: 'Raporo zuzuye', body: 'Imikorere y’abashoferi ikurikiranwa uko igihe gihita, ku buryo imigendekere rusange na buri muntu bigaragara.' },
          { name: 'Inama n’amahugurwa', body: 'Inama zihariye zishingiye ku bimenyetso kuri buri mushoferi, n’amahugurwa agenewe buri wese ashingiye ku makuru ye bwite.' },
          { name: 'Guhuza na ERM', body: 'Sisitemu yo gukurikirana ihuzwa na porogaramu yawe isanzwe yo gucunga umutungo w’ikigo.' },
        ],
      },
      benefits: {
        title: 'Ibihinduka',
        items: [
          { name: 'Umutekano wiyongereye', body: 'Impanuka n’ibikomere bigabanuka uko imigenzereze yo gutwara ihinduka.' },
          { name: 'Kuzigama amafaranga', body: 'Amafaranga y’ubwishingizi make, lisansi ikoreshwa nke n’ibiciro byo gusana bito.' },
          { name: 'Isura nziza', body: 'Amateka y’umutekano agaragara, ari ingenzi ku bakiriya, ibigo by’ubwishingizi n’inzego zigenzura.' },
          { name: 'Kubahiriza amabwiriza', body: 'Kubahiriza amabwiriza n’ibipimo by’uru rwego, no kwirinda ibihano biterwa no kutabyubahiriza.' },
          { name: 'Inyungu mu mikorere', body: 'Imikorere myiza y’abashoferi n’imikoreshereze myiza y’ibinyabiziga byose.' },
        ],
      },
    },
    ctaTitle: 'Reba ibyo abashoferi bawe bakora',
    ctaBody: 'Tuzakwereka raporo ku kinyabiziga nyacyo mbere y’uko ugira icyo wiyemeza.',
  },
};
