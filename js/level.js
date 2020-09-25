var level = {
    'level1': {
        'width': 40,
        'height': 40,
        'type': 'kanji',
        'map': 'Rogue',
        'collision': [0, 5],
        'doors': [
            { position: 'random', level: 'level3' },
            { position: 'random', level: 'level2' }
        ],
        'monsters': {
            number: 50,
            type: [1688, 1699]
        },
        start_position: { position: 'random' },
        class: 'level1'
    },
    'level2': {
        'width': 40,
        'height': 40,
        'type': 'katakanawords',
        'map': 'Cellular',
        'collision': [0],
        'doors': [
            { position: 'random', level: 'level1' },
            { position: 'random', level: 'level3' }
        ],
        'monsters': {
            number: 5,
            type: [1688, 1699]
        },
        start_position: { position: 'random' },
        class: 'level2'
    },
    'level3': {
        'width': 10,
        'height': 9,
        'type': 'katakanawords',
        'map': 'Plan',
        'collision': [0, 5],
        'plan': [
            [1, 1, 1, 5, 1, 1, 5, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        'doors': [
            { position: 'not-random', level: 'level1', x: 3, y: 0 },
            { position: 'not-random', level: 'level2', x: 6, y: 0 }
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        start_position: { position: 'not-random', x: 3, y: 1 },
        class: 'level3'
    },
    'outside': {
        'width': 70,
        'height': 60,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "SSSS~~~~~~~~~~~~SSSS                                                  ",
            "S..SSSSSSSSSSSSSS..S                                                  ",
            "S..................S                                                  ",
            "SS.SSSSSSSSSSSSSS.SS                                                  ",
            "~S.S            S.S~                                                  ",
            "~S.S BBBBBBBBBB S.S~                                                  ",
            "~S.S BWWWWWWSSB S.S~                                                  ",
            "~S.S BWWWWWWSSB S.S~                                                  ",
            "~S.S BBdBBBBBBB S.S~                                                  ",
            "~S.S            S.S~                                                  ",
            "~S.S            S.S~ TrttT tt  TT ttTrr rsPsPPssCjjsjjjjsjjssjjsjjjjjs",
            "~S.S            S.S~t  TT tTttT  t t hhr PsP~~~PsssjssssCjjjjssjjsssjs",
            "~S.S            S.S~Tr       T      hhh ssss~~~Pssssssssssjjsjssssjssj",
            "~S.S            S.S~~t     rTt    T hr rsCsPs.sssssCssssCsisjsjjCjsssj",
            "SS.SSSkSSSSSSSSSS.SS~ t             hhr sCsss.sssssssssssjsjjsssssssjj",
            "S..................S~t   tt  t T   r hr Cssss.ssCsssssssjjsjsjsisCsjsi",
            "S..SSSKSZSSZSSZSS..S~           T   h   jsCsss.ssissssCsjssjjsjsssisjs",
            "SSZS~~.~~~~~~~~~SZSS~T  .   tt  T tt  rrssssss.sCsssssjjjsjjjsCssCssjj",
            "~~~~~~.~~  r   ~~~~~~   . r  T       r   sCssCs.sjsisssssssjjssissssjs",
            " t    .  h       t r~~   .              r sssss.s jsssssjjjjsjsssssssj",
            " TT   .hhh  tt   t Tt~    .    t Tt rttT   r   . rjjssssssjjssjjsCsssj",
            "t hh . t h tt TT  T  ~T t . T   t  t  T    hr  . rissssssssjjCssssssjj",
            "t th .  t         t ~t  r .       tt     tt th. TssCsissjjjsjsCsssjjsj",
            " t  .   r  T  r   t ~  T   .   r       r   hhh.  tisissssjsssissssssjj",
            "t   ..........   Tt ~ T  t  ...................hhrissssssCssssisCssssj",
            " T .r           t  t ~  Ttt t   tt T        Tt. tssisssCissssssjssssjs",
            "t .   ~~    r    tT t~     t         tt  Tt   .  tsCsjjsssssssjjsissjs",
            "~~.~~~~T~~~~  t    t  ~~  tt   t  TT  rt   tt . t Cjsssssissssssisssjj",
            "~~.~~~      ~~~  ~~~~ t ~~~~~    ~~~t    t  T .  TjjCsjsssjsssjsssCssj",
            "T .   t r t  T ~~  r ~~~ T T ~~~~ t ~~~~ r    .  tsjjj jjjjjjjsjjjsjjs",
            "t . TT  t       Tt  tT tr r tTtBBBB BBBB~ ~~  . r       jjmm r        ",
            "Tt.    tt  T tt   t  Tt  T tT  BWWBtBWWB ~  ~~:~~~~~ r  mmmmmm        ",
            " t .  tt     t t     T        TBWWB BWWB    t .  T ~~~~~ mm mm        ",
            "t  . hhTh tt   t  ttt tbbb     BWWB BWWB T    . T      r~~~~~~        ",
            "tBBB. hhh TT   t   Tt Tb b     BBdB BBdB      .  r  Tr   mmmm         ",
            " BWB.  hh     t        z         .  r .       . t  hh    mm m         ",
            "tBdB .          .......K................................... mm        ",
            "t .   ..........       z b      BBBdBB BBdBBr .  t      mm ..<        ",
            " r ...tt T TT   tt T T bbb   t  BWWWWB BWWWB  . t   T TT     m        ",
            "T TttT  tTT tttt tTT   t  Ttt tTBBBBBBtBBBBB  .  T hT   m m mm        ",
            " TT T r TTttT TT ttT   ttT  T trt t hhh   t   .  TTh       mm         ",
            "t httt T     t Ttht t     T  trhhrhhhh  T hhh. h r  hh m rm mm        ",
            " thh  h       T hhh  T    TtTThmhhhhh hh hhh .rrT mmhmmmm hmm         ",
            "t t hh    TT T tt     T t   t hm hh  hhh hhhh.hh Thhmhhh  hmmm        ",
            " t   t t   t   tT    tt      tmrT hhh hhhhTrr.hhhrhhmmh hhmmmm        ",
            "T          tt r             tTThhhhhhTh rhhhTrhhhmhmh hhhmmhmh        ",
            " tt   T                   t t rhhhhmmhrhrhhrhhhhmhhhhhhmmhhhmh        ",
            "t  T       t     t       TT  tmrrhmmhhhrhhhhhhhmmhmhmmrhhhmmmm        ",
            "tTT  ttT T  TtT  T     TT  tTthmmhhhmhmhhhmmmhmmmhmmmhhhmmmmhh        ",
            " rtTt T ttTt  tTT tTTtt  tt tThhmmmhhhmmmmmhmmmhhmhhhhhmmhhhmh        ",
            "                     t t hh r hh r      hm  r hh rhh Th  hT hm        ",
            "                 T   t     hhhh hrT  hh mhh r hhTT  hTrhhhh hm        ",
            "                T T t t  r  mhh r  hmm  m   hhhh hThrrhhThThhm        ",
            "                  T  t     rmrhhhmhT mmhhh hhhh mrhhhh h hhhh         ",
            "                 T tt   tm  m mh rm hhhTThmhhhhhhmhhhThrhh r m        ",
            "               T Tt    ~ mmmmmmh h hhhhhhr  r h hmhTThT rThhhm        ",
            "                  T r ~  h mmmhhrhhm   hhh hhh  mhhhrhThhhThmm        ",
            "                TTTtT ~~thT m hh r m mrThmhh hmmhmhhhhTrhThrmh        ",
            "               T  TttT TT T mm hr   mm   m rhhhhmmhmhhhhhhhhmh        ",
            "                      T Tt   mmmmmmmmmmmmhmhmmmmmrmmmmmmmmmmmh        "
        ],
        'doors': [
            { position: 'not-random', level: 'hospital', x: 2, y: 36, doorX: 5, doorY: 8 },
            { position: 'not-random', level: 'castle', x: 7, y: 8, doorX: 5, doorY: 8 },
            { position: 'not-random', level: 'library', x: 33, y: 34, doorX: 5, doorY: 8 },
            { position: 'not-random', level: 'wizardshop', x: 38, y: 34, doorX: 5, doorY: 8 },
            { position: 'not-random', level: 'blacksmith', x: 41, y: 37, doorX: 5, doorY: 1 },
            { position: 'not-random', level: 'cave', x: 61, y: 37, doorX: 1, doorY: 7 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        start_position: { position: 'not-random', x: 3, y: 1 },
        class: 'outside'
    },
    'hospital': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "BBBBBBBBBB",
            "B...W....B",
            "B...W....B",
            "B...W....B",
            "BWVWWWWVWB",
            "B........B",
            "BWVWW....B",
            "B...W....B",
            "B...W....B",
            "BBBBBdBBBB",
        ],
        'doors': [
            { position: 'not-random', level: 'outside', x: 5, y: 9, doorX: 2, doorY: 37 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'hospital'
    },
    'castle': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "BBBBBBBBBBBBBKBB>BBB",
            "B..................B",
            "B..................B",
            "B..................B",
            "B..................B",
            "B..................B",
            "B..................B",
            "B..................B",
            "B..................B",
            "BBBBdBBBBBBBBBBBBBBB"
        ],
        'doors': [
            { position: 'not-random', level: 'outside', x: 4, y: 9, doorX: 7, doorY: 9 },
            { position: 'not-random', level: 'tower_level_1', x: 16, y: 0, doorX: 2, doorY: 1 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'castle'
    },
    'cave': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",
            "SS,SSS,S,,,,,,,,,SS,,,,S,,,,SS",
            "S,,S,,SSS,,,,,S,,,S,,,,S,,,,,S",
            "S,SS,,,,S,,,,SS,,,SS,,,S,,,,SS",
            "S,,S,SS,SSSSSS,,,,,S,,,,,SS,SS",
            "S,,SS,S,,,,SS,,,,,,,,SSS,,S,SS",
            "S,,,SSS,,,,,SS,,,SSSS,,SSSSSSS",
            ">,,,,SS,,,,,,SS,,S,,,,,,,,,,SS",
            "S,,,,S,,,S,S,,SS,,,,SSS,,,,,SS",
            "SS,,,S,,,SSS,,,SSS,,,,SSS,,,SS",
            "SS,,,,,,,,,SSS,,,S,,,,S,SS,,SS",
            "SS,,,S,,,,,S,,,,,SSS,,,,,S,,,S",
            "S,,,,S,,,,,S,,,,,,,,,,,,,SS,,S",
            "SS,,,S,,,,SS,,,,SSS,,,,,SSSSSS",
            "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",
        ],
        'doors': [
            { position: 'not-random', level: 'outside', x: 4, y: 9, doorX: 2, doorY: 37 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'castle'
    },
    'library': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "BBBBBBBBBB",
            "B........B",
            "B.WW..WW.B",
            "B........B",
            "B........B",
            "B.WWWWWW.B",
            "B........B",
            "B.WW..WW.B",
            "B.W....W.B",
            "BBBBBdBBBB",
        ],
        'doors': [
            { position: 'not-random', level: 'outside', x: 5, y: 9, doorX: 33, doorY: 35 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'castle'
    },
    'wizardshop': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "BBBBBBBBBB",
            "B........B",
            "B........B",
            "B.WWWWWW.B",
            "B.W....W.B",
            "B.W....W.B",
            "B.W....W.B",
            "B.W....W.B",
            "B.W....W.B",
            "BBBBBdBBBB"
        ],
        'doors': [
            { position: 'not-random', level: 'outside', x: 5, y: 9, doorX: 38, doorY: 35 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'castle'
    },
    'blacksmith': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "BBB<BBBBBB",
            "B........B",
            "B........B",
            "B........B",
            "BWW....WWB",
            "B.W....W.B",
            "B.W....W.B",
            "B.WW..WW.B",
            "B........B",
            "BBBBBBBBBB",

        ],
        'doors': [
            { position: 'not-random', level: 'outside', x: 5, y: 9, doorX: 38, doorY: 35 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'castle'
    },
    'tower_level_1': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "BBB<BB>BBB",
            "B...B....B",
            "B.BBBBBB.B",
            "B.B....B.B",
            "B.B.BB.B.B",
            "B.B..B.B.B",
            "B.B..B.B.B",
            "B.B.B..B.B",
            "B...B....B",
            "BBBBBBBBBB",
        ],
        'doors': [
            { position: 'not-random', level: 'castle', x: 3, y: 0, doorX: 17, doorY: 1 },
            { position: 'not-random', level: 'tower_level_2', x: 6, y: 0, doorX: 2, doorY: 1 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'castle'
    },
    'tower_level_2': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "BBB<BB>BBB",
            "B....B...B",
            "B.BBBBBB.B",
            "B.B....B.B",
            "B.B.B....B",
            "B.B.BBBBBB",
            "B.B......B",
            "B.BBBBB..B",
            "B........B",
            "BBBBBBBBBB",
        ],
        'doors': [
            { position: 'not-random', level: 'tower_level_1', x: 3, y: 0, doorX: 7, doorY: 1 },
            { position: 'not-random', level: 'tower_level_3', x: 6, y: 0, doorX: 2, doorY: 1 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'castle'
    },
    'tower_level_3': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "BBB<BBBBBB",
            "B........B",
            "B........B",
            "B........B",
            "B........B",
            "B........B",
            "B........B",
            "B........B",
            "B........B",
            "BBBBBBBBBB",
        ],
        'doors': [
            { position: 'not-random', level: 'tower_level_2', x: 3, y: 0, doorX: 7, doorY: 1 },
            { position: 'not-random', level: 'outside', x: 4, y: 5, doorX: 38, doorY: 35 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'castle'
    },

}