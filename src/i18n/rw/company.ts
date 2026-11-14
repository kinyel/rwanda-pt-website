import type { Dictionary, Translation } from '../index';

/**
 * Company, trust and legal pages in Kinyarwanda. Mirrors src/i18n/en/company.ts.
 *
 * The terms of service and the privacy policy are legal text. They are
 * translated faithfully, sentence for sentence, but a legal translation must be
 * confirmed by a qualified native speaker before it is relied on; until then
 * the English version is the authoritative one. See
 * docs/translation-checklist.md.
 */
export const companyPages: Translation<Dictionary['companyPages']> = {
  whyChoose: {
    eyebrow: 'Impamvu PrimeTrack',
    title: 'Ibyiza birindwi bidutandukanya n’abandi',
    lead:
      'Buri kigo gikurikirana ibinyabiziga kivuga ko cyizewe. Ibi ni ibintu birindwi byihariye twerekana iyo umuyobozi w’ibinyabiziga atubajije impamvu yatwizera ibinyabiziga bye.',
    advantages: {
      regulator: {
        title: 'Twemewe n’urwego rugenzura',
        body:
          'PrimeTrack ifite uruhushya rwuzuye rwa RURA rwo gutanga serivisi zo gukurikirana ibinyabiziga hakoreshejwe GPS na telematiki mu Rwanda. Ibinyabiziga byawe bikoresha sisitemu yemewe n’amategeko, izwi ku mugaragaro kandi yujuje ibipimo by’igihugu. Bamwe mu bo duhanganye bakorera mu buryo budasobanutse imbere y’amategeko. Twe si ko bimeze.',
      },
      support: {
        title: 'Ubufasha bwa PrimeCARE, amasaha 24 kuri 24',
        body:
          'Itsinda ryacu rya PrimeCARE rikora amanywa n’ijoro kugira ngo serivisi itahagarara. Uretse gukemura ibibazo, rikurikirana sisitemu yawe kandi rikamenya ibidasanzwe mbere y’uko biba ibibazo, ku buryo igihe ibintu bimara bidakora kiba gito cyane. Ubona ubufasha buhoraho buturuka ku bantu bazi ko imirimo y’ibinyabiziga idahagarara nijoro.',
      },
      hardware: {
        title: 'Ibikoresho byubakiwe imiterere ya Afurika',
        body:
          'Ibikoresho bya PrimeTrack byakorewe guhangana n’ubushyuhe, ivumbi, ubuhehere n’ihindagurika ry’imiyoboro y’itumanaho bikunze kuboneka aho dukorera muri Afurika. Ibivamo ni ibikoresho biramba kurushaho, bikora neza buri gihe, kandi bitwara make mu kubibungabunga, ndetse no mu bihe bikomeye koko.',
      },
      ai: {
        title: 'Telematiki ishingiye kuri AI igabanya ibiciro ikongera umutekano',
        body:
          'Urubuga ruhindura amakuru y’ibanze y’ibinyabiziga ikintu ushobora kugiraho igikorwa. Kunoza ikoreshwa rya lisansi, amanota y’imyitwarire y’abashoferi n’inama zo gusana mbere y’uko bipfa bigufasha kuzigama amafaranga no kugabanya ibyago, binyuze mu buryo bworoshye gukoresha nta mahugurwa.',
      },
      warranty: {
        title: 'Garanti ndende n’ubufasha nyuma yo kugura',
        body:
          'PrimeTrack itanga imwe muri garanti ndende muri uru rwego, ishyigikiwe n’ubufasha bwizewe no gusana byihuse. Ishoramari ryawe rirarinzwe imyaka myinshi aho kuba amezi make.',
      },
      scale: {
        title: 'Guhuza sisitemu byoroshye na sisitemu yaguka',
        body:
          'Waba ucunga ibinyabiziga bitatu cyangwa ibihumbi bitatu, PrimeTrack yaguka uko ibikorwa byawe byaguka. API zifunguye, imiterere igizwe n’ibice bihuzwa n’ibiranga bihuye na iVTS bituma guhuza na ERP, porogaramu z’ubwikorezi n’izindi sisitemu zihariye z’urwego rwawe byoroha. Ukoresha, kandi wishyura, ibyo ukeneye gusa.',
      },
      values: {
        title: 'Indangagaciro zacu zandika P.R.I.M.E.',
        body: 'Imikorere (Performance), Kwizerwa (Reliability), Guhanga udushya (Innovation), Gukora byinshi (Multi-functionality), Gukora neza (Efficiency).',
      },
    },
    ctaTitle: 'Uracyatekereza?',
    ctaBody: 'Uburyo bwihuse bwo kumenya ikigo gikurikirana ibinyabiziga ni ukugiha ikibazo nyacyo. Twoherereze icyawe.',
  },

  warranty: {
    eyebrow: 'Garanti za Prime',
    title: 'Garanti igera ku myaka itanu',
    lead:
      'PrimeTrack iha umuguzi wa mbere garanti yuzuye igera ku myaka itanu, yemeza ko ibicuruzwa byacu nta nenge bifite mu bikoresho no mu mikorere yabyo iyo bikoreshejwe mu buryo busanzwe kandi bukwiye.',
    intro:
      'Mu gihe cya garanti, PrimeTrack izasana cyangwa isimbuze igicuruzwa icyo ari cyo cyose kigaragayeho inenge yo mu ruganda, nta kiguzi ku mukiriya. Amabwiriza yose ari hepfo.',
    coveredTitle: 'Ibyo garanti ikubiyemo',
    covered: [
      'Garanti ireba ibicuruzwa byagurishijwe binyuze ku bahagarariye PrimeTrack babyemerewe cyangwa ku nzira zemewe zo kubikwirakwiza.',
      'Imirimo yose ijyanye na garanti igomba gukorwa na PrimeTrack cyangwa abakozi n’abahagarariye PrimeTrack babyemerewe.',
      'Kwisanira, serivisi itemewe, kwangiza nkana cyangwa guhindura igicuruzwa bikuraho garanti.',
    ],
    notCoveredTitle: 'Ibyo garanti idakubiyemo',
    notCovered: [
      'Kwangirika guterwa n’impanuka, gukuramo igikoresho cyangwa ibice byacyo utabyemerewe cyangwa kugerageza kubisana, kwangiza nkana, cyangwa kubihindura.',
      'Kwangirika guterwa n’inkongi, umutingito, gukubitwa n’ibintu byo hanze, umuriro w’amashanyarazi urenze urugero, ibibazo by’umuriro cyangwa bateri y’ikinyabiziga, cyangwa ibiza bidashobora kwirindwa.',
      'Ibikorwa byo kwangiza nkana bikozwe n’abandi bantu PrimeTrack idashobora kugenzura.',
      'Kwangirika ku isura cyangwa inenge biterwa no gusaza bisanzwe cyangwa gukoreshwa igihe kirekire.',
      'Kwangirika guterwa no gukoresha igicuruzwa mu buryo butari ubwo cyemerewe cyangwa cyagenewe.',
      'Kwangirika guterwa na serivisi itanzwe n’undi muntu utari PrimeTrack cyangwa uwo PrimeTrack yemereye gutanga serivisi.',
    ],
    extensionTitle: 'Kwagura garanti',
    extensionBody:
      'Hakurikijwe amabwiriza n’imbibi z’iyi Garanti Isanzwe Igarukira ya PrimeTrack, garanti ikubiyemo igicuruzwa gishya icyo ari cyo cyose kigaragaye ko gifite inenge mu gihe cya garanti kijyanye nacyo. PrimeTrack ifite uburenganzira bwo gusuzuma igicuruzwa kivugwa ko gifite inenge kugira ngo imenye niba garanti ikireba, kandi icyemezo cya nyuma ku birebwa na garanti gifatwa na PrimeTrack. Iyo garanti ireba igicuruzwa, PrimeTrack izagisana cyangwa igisimbuze, cyangwa isane cyangwa isimbuze igice cyacyo, uko ibibona. Iyo igicuruzwa cyahuye n’ibihe bikuraho garanti, umukiriya azabimenyeshwa ahabwe amahitamo yo kwemera gusana yishyura cyangwa guhitamo ikindi cyakorerwa igicuruzwa.',
  },

  careers: {
    eyebrow: 'Akazi muri Prime',
    title: 'Gukora muri PrimeTrack biratandukanye',
    lead:
      'Bizagusaba byinshi. Bizagutera imbaraga. Kandi birenze ibyo bizaguhemba bijyanye n’impano n’umusaruro uzana, kugira ngo ukure kandi ugere ku byo wiyemeje. Buri PrimePerson abimenya kuva ku munsi wa mbere yinjiye mu itsinda.',
    questionsTitle: 'Ibibazo bibiri bikwiye gutekerezwaho',
    questions: [
      'Inzozi zawe ni nini zingana iki, kandi wizeye ute ubushobozi bwawe bwo kuzigeraho?',
      'Ushishikajwe ute no guhanga agaciro kadasanzwe muri byose ukora?',
    ],
    closing:
      'Niba wemera udashidikanya ko ufite ibisabwa kugira ngo ube PrimePerson, haba mu mpano, mu bumenyi cyangwa mu mpamyabumenyi, twoherereze umwirondoro wawe mu ncamake.',
    applyCta: 'Ohereza umwirondoro wawe',
    applyNote: 'Ubusabe bwoherezwa kuri {email}.',
  },

  contact: {
    eyebrow: 'Twandikire',
    title: 'Vugana na PrimeTrack Rwanda',
    lead:
      'Tubwire icyo ukeneye gukurikirana, tukugire inama ku buryo bukwiye. Ku kintu cyihutirwa, PrimeCARE iboneka kuri WhatsApp isaha iyo ari yo yose.',
    formTitle: 'Twoherereze ubutumwa',
    formLead: 'Dusubiza ubutumwa bwose. Niba bikwihutira, WhatsApp na yo ikora neza.',
    officeTitle: 'Ibiro byo mu Rwanda',
    hoursNote: 'Ubufasha bwa PrimeCARE buboneka amasaha 24 ku munsi.',
    nigeriaTitle: 'Urashaka PrimeTrack Nigeria?',
    nigeriaBody: 'Ibikorwa byacu muri Nigeriya bifite urubuga rwabyo n’aho kubariza hihariye.',
    nigeriaCta: 'Sura primetracknigeria.com',
    directTitle: 'Tuvugishe mu buryo butaziguye',
    mapLabel: 'Ikarita igaragaza ibiro bya PrimeTrack Rwanda i Kigali',
  },

  tools: {
    eyebrow: 'PrimeTOOLS',
    title: 'Amabwiriza n’inyandiko z’ubufasha',
    lead: 'Amabwiriza y’ibikoresho, ibisobanuro byo kubishyiraho n’inyandiko z’urubuga ku bakiriya ba PrimeTrack.',
    pendingTitle: 'Inyandiko zizashyirwa kuri uru rupapuro',
    pendingBody:
      'Uru rupapuro rwatangajwe ariko isomero ryarwo ry’inyandiko ntirirashyirwaho. Hagati aho, PrimeCARE ishobora kukoherereza amabwiriza y’igikoresho icyo ari cyo cyose cya PrimeTrack.',
    pendingCta: 'Saba amabwiriza kuri PrimeCARE',
  },

  terms: {
    eyebrow: 'Amategeko',
    title: 'Amabwiriza y’imikoreshereze',
    intro:
      'Murakaza neza muri PrimeTrack Telematics Limited. Aya Mabwiriza y’Imikoreshereze agenga uko ukoresha serivisi zacu zo gukurikirana hakoreshejwe GPS na telematiki. Iyo ugeze kuri serivisi zacu cyangwa uzikoresha, uba wemeye kubahiriza no kugengwa n’aya mabwiriza. Turagusaba kuyasoma witonze.',
    sections: [
      {
        title: 'Ibisobanuro bya serivisi',
        body: 'PrimeTrack Rwanda itanga serivisi zo gukurikirana hakoreshejwe GPS na telematiki zituma abazikoresha bakurikirana kandi bakagenzura ibinyabiziga, imitungo cyangwa abantu binyuze ku rubuga rwacu n’izindi porogaramu zifitanye isano narwo.',
      },
      {
        title: 'Inshingano z’ukoresha serivisi',
        body: 'Iyo ukoresha serivisi zacu, uba wemeza kandi wiyemeza ko ufite ubushobozi mu rwego rw’amategeko n’ububasha bwo kugirana aya masezerano. Wemeye gukoresha serivisi wubahiriza amategeko n’amabwiriza akurikizwa mu Rwanda, kandi ntuzakoresha serivisi mu bikorwa bitemewe n’amategeko, bitemewe cyangwa by’uburiganya.',
      },
      {
        title: 'Konti y’ukoresha',
        body: 'Kugira ngo ugere kuri serivisi zacu kandi uzikoreshe, tuguha konti zikwiye zifite uburenganzira bujyanye n’uburyo waguze. Ufite inshingano yo kubika ibanga ry’amakuru ya konti yawe, kandi wemera kuryozwa ibikorwa byose bikorerwa kuri konti yawe.',
      },
      {
        title: 'Ubuzima bwite n’umutekano w’amakuru',
        body: 'Muri PrimeTrack Rwanda dushyira imbere ubuzima bwite n’umutekano w’amakuru yawe. Politiki yacu yo kurinda amakuru bwite isobanura uko dukusanya, dukoresha kandi turinda amakuru yawe bwite. Iyo ukoresha serivisi zacu, uba wemeye ko amakuru yawe akusanywa, akoreshwa kandi agatangazwa nk’uko bisobanurwa muri iyo politiki.',
      },
      {
        title: 'Umutungo bwite mu by’ubwenge',
        body: 'Serivisi zacu n’izindi porogaramu, ikoranabuhanga n’ibikubiyemo byose bifitanye isano nazo birinzwe n’amategeko arengera umutungo bwite mu by’ubwenge. Wemeye kutigana, kudahindura, kudakwirakwiza cyangwa kudakora ibindi bikomoka kuri serivisi zacu utabanje kubona uruhushya rwacu rwanditse.',
      },
      {
        title: 'Guhagarika',
        body: 'Dushobora guhagarika by’agateganyo cyangwa burundu uburenganzira bwawe bwo kugera kuri serivisi zacu igihe icyo ari cyo cyose no ku mpamvu iyo ari yo yose, harimo n’igihe urenze kuri aya mabwiriza. Nawe ushobora guhagarika konti yawe utumenyesheje mu nyandiko.',
      },
      {
        title: 'Amategeko agenga n’inkiko zibifitiye ububasha',
        body: 'Aya mabwiriza agengwa n’amategeko y’u Rwanda. Amakimbirane ayo ari yo yose akomoka kuri aya mabwiriza cyangwa ajyanye na yo aburanishwa gusa n’inkiko zo mu Rwanda.',
      },
      {
        title: 'Imbibi z’inshingano',
        body: 'Serivisi zacu zitangwa uko ziri kandi uko ziboneka. Nubwo duharanira ubusobanuro n’ubwizigirwe, ntitwemeza ko serivisi z’abandi serivisi zacu zishingiyeho, nk’imiyoboro ya GSM n’ibyogajuru bya GPS, zizahora ziboneka nta guhagarara. Kuri urwo rugero, wemera ko tutaryozwa ibyangiritse ibyo ari byo byose, bitaziguye cyangwa biziguye, by’impanuka, bikomoka ku bindi cyangwa by’igihano, bikomoka cyangwa bifitanye isano no gukoresha serivisi zacu igihe izo serivisi z’abandi zahagaze cyangwa zagizweho ingaruka n’ibintu byo hanze, cyangwa igihe ibikorwa byo kwangiza nkana bigize ingaruka kuri serivisi yacu.',
      },
      {
        title: 'Ukoresha abanze yitonde (caveat emptor)',
        body: 'Ibikoresho byo gukurikirana ni ubufasha bw’agaciro mu kugenzura imitungo, kurinda umutekano w’ibinyabiziga no gukusanya amakuru ya telematiki. Imikorere yabyo ishingiye ku bintu byinshi byo hanze igikoresho ubwacyo kidashobora kugenzura: kuboneka no kwizerwa kw’ibimenyetso by’imiyoboro ya GSM, kuboneka kw’ibyogajuru bya GPS muri ako karere, imiterere y’ubutaka, n’ihindagurika ry’ikirere. Abakoresha bagirwa inama yo kutishingikiriza gusa ku bikoresho byo gukurikirana mu bihe byihutirwa cyangwa mu isuzuma ry’amakuru akomeye. Nubwo ibikoresho byo gukurikirana bigira uruhare runini mu kongera umutekano no gukusanya amakuru ya telematiki, abakoresha bakwiye gutekereza no kugira ubundi buryo bwo guhangana n’ibihe byihutirwa hamwe n’ibikoresho byabo byo gukurikirana. Uku kwitondera ni ukwemera kuzwi muri uru rwego hose ku isi ko ikoranabuhanga ryo gukurikirana rishingiye ku bindi bintu.',
      },
      {
        title: 'Amasezerano yose',
        body: 'Aya mabwiriza ni yo masezerano yose hagati yawe na PrimeTrack Rwanda ku bijyanye no gukoresha serivisi zacu, kandi asimbura amasezerano cyangwa ubwumvikane ubwo ari bwo bwose bwabanje.',
      },
    ],
    contactNote: 'Niba ufite ibibazo cyangwa impungenge kuri aya mabwiriza, twandikire kuri {email}.',
    legalEmail: 'info@primetrack.rw',
    privacyLink: 'Soma politiki yacu yo kurinda amakuru bwite',
  },

  privacy: {
    eyebrow: 'Amategeko',
    title: 'Politiki yo kurinda amakuru bwite',
    intro:
      'Iyi Politiki yo kurinda amakuru bwite isobanura uko PrimeTrack Telematics Rwanda Limited ("twe" cyangwa "ibyacu") ikusanya, ikoresha kandi ikarinda amakuru bwite y’abasura n’abakoresha ("wowe" cyangwa "ibyawe") urubuga rwacu, www.primetrack.rw. Iyo ugeze ku rubuga rwacu cyangwa urukoresha, uba wemeye ko amakuru yawe bwite akusanywa, akoreshwa kandi agatangazwa nk’uko bisobanurwa hano.',
    sections: [
      {
        title: 'Amakuru dukusanya',
        body: 'Dukusanya amakuru bwite uduha ku bushake bwawe iyo ukoresha urubuga rwacu. Ashobora kuba arimo amazina yawe, aderesi ya imeyili, nomero ya telefoni, n’andi makuru uduha igihe ubaza cyangwa ukoresha serivisi zacu.',
      },
      {
        title: 'Uko amakuru akoreshwa',
        body: 'Amakuru bwite dukusanya tuyakoresha mu kuguha serivisi usaba, gusubiza ibibazo byawe, kuvugana nawe, no kunoza serivisi zacu. Ubitwemereye, dushobora no kukoherereza amakuru mashya cyangwa ibyamamaza ku bicuruzwa na serivisi byacu.',
      },
      {
        title: 'Gutangaza amakuru',
        body: 'Dushobora gusangiza amakuru yawe bwite abatanga serivisi twizera badufasha gukoresha urubuga rwacu no gutanga serivisi zacu. Abo batanga serivisi basabwa kurinda amakuru yawe kandi bashobora kuyakoresha gusa ku mpamvu tubagaragarije. Dushobora kandi gutangaza amakuru yawe bwite igihe amategeko abisaba, cyangwa kugira ngo turinde uburenganzira bwacu cyangwa umutekano w’abandi.',
      },
      {
        title: 'Umutekano w’amakuru',
        body: 'Dukoresha ingamba z’umutekano zikwiye kugira ngo turinde amakuru yawe bwite kugerwaho, gutangazwa cyangwa guhindurwa n’abatabyemerewe. Uzirikane ko nta buryo bwo kohereza amakuru kuri interineti, cyangwa bwo kuyabika mu buryo bw’ikoranabuhanga, bufite umutekano wuzuye.',
      },
      {
        title: 'Cookies',
        body: 'Urubuga rwacu rushobora gukoresha cookies n’ubundi buryo busa nazo kugira ngo runoze uko urusura, rusesengure uko rukoreshwa kandi ruguhe ibikubereye. Ushobora guhagarika cookies mu igenamiterere rya mushakisha yawe, nubwo ibyo bishobora kugira ingaruka ku bimwe mu biranga urubuga.',
      },
      {
        title: 'Impinduka kuri iyi politiki',
        body: 'Dushobora kuvugurura iyi Politiki yo kurinda amakuru bwite buri gihe. Impinduka zose zizashyirwa hano hamwe n’itariki nshya itangira gukurikizwa. Turagushishikariza kuyisubiramo rimwe na rimwe kugira ngo umenye uko dufata amakuru yawe bwite.',
      },
      {
        title: 'Twandikire',
        body: 'Niba ufite ibibazo, impungenge cyangwa ubusabe bijyanye n’iyi Politiki yo kurinda amakuru bwite cyangwa uko turinda amakuru bwite, twandikire kuri {email}.',
      },
    ],
    closing: 'Iyo ukoresha urubuga rwacu, uba wemeje ko wasomye kandi wumvise iyi Politiki yo kurinda amakuru bwite kandi wemera ibiyikubiyemo.',
  },

  analyzeFleet: {
    eyebrow: 'Isuzuma ry’ibinyabiziga',
    title: 'Menya ibibazo by’ingenzi mu micungire y’ibinyabiziga byawe',
    lead:
      'Hitamo ibibazo bireba ibikorwa byawe. Buri kimwe kikujyana ku gice cya sisitemu ya PrimeTrack cyubakiwe kugikemura, ku buryo ubona icyo igisubizo cyasaba mbere yo kugira uwo uvugisha.',
    selectedTitle: 'Ibyo wahisemo',
    emptyState: 'Hitamo nibura ikibazo kimwe hejuru kugira ngo ubone igice cya sisitemu kijyanye nacyo.',
    ctaTitle: 'Twoherereze ibyo wahisemo',
    ctaBody: 'Twandikire uvuge ibice wahisemo. Tuzakugarukira n’inama yihariye.',
  },

  blog: {
    eyebrow: 'Inyandiko',
    title: 'Gukurikirana ibinyabiziga no kubicunga mu Rwanda',
    lead:
      'Inyandiko z’itsinda ryacu ku gukurikirana ibinyabiziga, imicungire yabyo n’umutekano wabyo, zandikiwe isoko ry’u Rwanda.',
    readArticle: 'Soma: {title}',
    backToIndex: 'Inyandiko zose',
    relatedTitle: 'Izindi wasoma',
    author: 'primeTEAM',
  },
};
