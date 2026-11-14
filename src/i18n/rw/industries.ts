import type { Dictionary, Translation } from '../index';

/** The eight industry verticals in Kinyarwanda. Mirrors src/i18n/en/industries.ts. */
export const industries: Translation<Dictionary['industries']> = {
  index: {
    eyebrow: 'Inzego dukorera',
    title: 'Byubakiwe uko u Rwanda rugenda koko',
    lead:
      'Ikamyo itwara sima, imbangukiragutabara n’imodoka ikonjesha ibicuruzwa nta kintu bihuriyeho uretse ko hari umuntu ukeneye kumenya aho biri. Ibi ni byo bikorwa dukorera.',
    cta: 'Reba inzego zose',
    pageTitle: 'Ibikorwa PrimeTrack yubakiwe',
    pageLead:
      'Buri kigo gifite ibinyabiziga gifite ikintu kidashobora kwihanganira gutakaza. Hitamo ikijya gusa n’icyawe, urebe igice cya sisitemu kigikemura.',
    solutionsTitle: 'Ibyo ibi bikorwa bishingiyeho',
    productsTitle: 'Ibikoresho bibishyigikiye',
    challengesTitle: 'Ibikunze kugenda nabi',
  },

  items: {
    construction: {
      name: 'Ubwubatsi',
      summary:
        'Menya aho buri kinyabiziga kiri, ugabanye igihe bimara bidakora, kandi ibinyabiziga byawe bihore bikora neza.',
      lead:
        'Imashini n’amakamyo bimara umunsi wose kure y’ibiro, akenshi ahantu hatagira aderesi ihoraho. Ikibazo ntikiba ari ukumenya niba imashini ikora. Ni ukumenya niba ikorera aho yoherejwe, n’igihe yamaze ihagaze mbere yo gutangira.',
      challenges: [
        'Ibinyabiziga n’imashini bitatanye ahantu henshi hatabonwa uri ku cyicaro',
        'Amasaha imashini zimara zidakora ataboneka ku rupapuro rw’amasaha y’akazi',
        'Lisansi yafashwe ku mashini imwe igakoreshwa ahandi',
        'Ibikoresho bikurwa ahakorerwa imirimo hanze y’amasaha y’akazi',
      ],
    },

    foodAndBeverage: {
      name: 'Ibiribwa n’ibinyobwa',
      summary:
        'Kurikirana ibicuruzwa bigezwa ku bakiriya kuva bigiye kugeza bigeze, urinde imizigo, kandi ibicuruzwa bikenera ubukonje bigume ku rugero rukwiye.',
      lead:
        'Gukwirakwiza ibicuruzwa bikurikiza igihe n’ubushyuhe. Byombi ntibiba bikigaragara imodoka imaze kuva mu bubiko, kandi umuzigo ugera ushyushye ni umuzigo nta wishyura.',
      challenges: [
        'Nta buryo bwo kubona ibicuruzwa hagati yo koherezwa no kugera',
        'Imizigo ikonjeshwa nta nyandiko y’ubushyuhe yagenzemo',
        'Urutonde rw’aho kugeza ibicuruzwa ruhindurwa uwo munsi, nta buryo bwo kubyemeza',
        'Impaka ku isaha ibicuruzwa byagejejwe koko',
      ],
    },

    emergencyServices: {
      name: 'Serivisi z’ubutabazi',
      summary:
        'Kurikirana ako kanya ibinyabiziga by’ubutabazi, umenye inzira zihuta kurushaho, kandi ugumane ubugenzuzi igihe buri segonda ari ingenzi.',
      lead:
        'Ibyemezo byo kohereza ubutabazi bifatwa hashingiwe ku kinyabiziga kiri hafi koko, si icyitabye radiyo mbere. Ibyo bisaba kumenya aho kiri ubu, si aho cyaherukaga kuba.',
      challenges: [
        'Kohereza ubutabazi hashingiwe ku hantu hakekwa aho kuba aho ibinyabiziga biri koko',
        'Nta nyandiko y’igihe ubutabazi bwafashe yo gusuzuma nyuma',
        'Amatsinda adashobora kuvugana iyo amaze kuva ku cyicaro',
        'Ibinyabiziga bikeneye gusanwa bikiri ku rutonde rw’ibikora',
      ],
    },

    logistics: {
      name: 'Ubwikorezi n’uruhererekane rw’ibicuruzwa',
      summary:
        'Reba ibinyabiziga byawe byose bigenda, unoze ihuzabikorwa ryo kugeza ibicuruzwa, kandi ibikorwa bikomeze kugenda neza.',
      lead:
        'Guhuza ibikorwa ni akazi kose. Iyo ibinyabiziga byose bigaragara ahantu hamwe, ibibazo byuzura igitondo cy’ushinzwe kohereza imodoka ntibikeneye guhamagara ngo bisubizwe.',
      challenges: [
        'Abakiriya bahamagara babaza aho ibicuruzwa byabo bigeze',
        'Kubahiriza inzira bishobora kugenzurwa gusa nyuma y’uko byarangiye',
        'Imizigo inyura mu turere nta wemeje',
        'Igihe cy’ingendo kibarwa hifashishijwe kwibuka aho kuba inyandiko',
      ],
    },

    fuelDistribution: {
      name: 'Gukwirakwiza lisansi n’ubwikorezi bwayo',
      summary:
        'Komeza kubona neza ibinyabiziga n’imizigo yose, ukurikirane ingendo, aho biri n’imiterere y’imikorere ako kanya.',
      lead:
        'Iyo umuzigo ari cyo kintu gitwara ikinyabiziga ubwacyo, itandukaniro riri hagati y’ibyagejejwe n’ibyabuze riba rito, kandi ripimirwa muri litiro.',
      challenges: [
        'Lisansi ivomwa hagati y’ububiko n’aho ijya',
        'Guhagarara kutateganyijwe kutagaragara ku nyandiko y’umuzigo',
        'Ingendo za kontineri za lisansi nta nyandiko yemejwe y’inzira zanyuzemo',
        'Imizigo idashobora guhuzwa n’inyandiko iyo igeze iyo ijya',
      ],
    },

    transportation: {
      name: 'Ubwikorezi',
      summary:
        'Ibinyabiziga byawe bikomeze kugenda neza ubibona ako kanya, utegura inzira mu buryo bunoze, kandi ucunga ingendo neza kurushaho.',
      lead:
        'Ikinyabiziga gihagaze nta cyo kinjiza. Byinshi mu bigihagarika bigaragara mu makuru kare mbere y’uko biba gupfa mu nzira cyangwa urugendo rutakozwe.',
      challenges: [
        'Ingendo zitegurwa ku nzira zitakiri izihuta',
        'Gusana bikurikiranwa ku mpapuro, cyangwa ntibikurikiranwe na gato',
        'Amafaranga ya lisansi ahinduka nta busobanuro',
        'Imitwarire itera kwangirika kw’ibinyabiziga kurusha uko itwara lisansi',
      ],
    },

    passengerTransit: {
      name: 'Gutwara abagenzi',
      summary:
        'Genzura buri kinyabiziga, unoze imikoreshereze y’inzira, kandi ukoreshe amakuru y’ako kanya y’ibinyabiziga mu gufata ibyemezo byiza by’imikorere.',
      lead:
        'Gutwara abantu byongera uburemere bwa byose: ingengabihe, umuvuduko, n’uko ikinyabiziga gitwarwa koko cyuzuye abagenzi.',
      challenges: [
        'Kubahiriza ingengabihe nta wabasha kubigenzura ako kanya',
        'Kurenza umuvuduko bimenyekana gusa nyuma y’ikirego',
        'Ibibera mu kinyabiziga nta nyandiko y’ibyabaye',
        'Imikorere y’inzira isuzumwa hashingiwe ku byo umuntu yibwira aho kuba amakuru',
      ],
    },

    pharmaceutical: {
      name: 'Imiti',
      summary:
        'Kurikirana ibicuruzwa byoroshye kwangirika mu rugendo rwabyo rwose, ugenzura ibinyabiziga, abashoferi n’ubushyuhe ako kanya.',
      lead:
        'Uruhererekane rw’ubukonje rugira agaciro kangana n’isaha yarwo mbi kurusha izindi, kandi isaha udashobora gusobanura ni yo ituma igenzura ritagenda neza.',
      challenges: [
        'Ubushyuhe burenze urugero bumenyekana ibicuruzwa bigeze, si biri mu nzira',
        'Uruhererekane rw’ababifite mu nshingano rudashobora kugaragarizwa ibimenyetso',
        'Imizigo y’agaciro kanini idafite uburyo bwigenga bwo kuyikurikirana',
        'Inyandiko zigaragaza kubahiriza amabwiriza zikusanywa nyuma y’uko byarangiye',
      ],
    },
  },
};
