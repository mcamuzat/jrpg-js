var level = {
    'level1': {
        'width': 40,
        'height': 40,
        'map': 'Rogue',
        'rogueWall': 'B',
        'rogueGround': '.',
        'doors': [
            { position: 'random', level: 'level2' }
        ],
        'monsters': [
               {
                probability: 0.1,
                rangeX: [0, 40],
                rangeY: [0, 40],
                type: [
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "green turtle",
                    "red turtle",
                    "black turtle",
                    "brown turtle",
                    "blue turtle",
                    "yellow turtle",
                ],
                vocabulary: [['kanji', 100]]
            },
        ]
           
        ,
        class: 'level1'
    },
    'forest': {
        'width': 40,
        'height': 40,
        'map': 'Forest',
        'trees': ['T','t'],
        'rogueGround': ' ',
        'doors': [
            { position: 'random', level: 'outside', doorX:14, doorY:33 },
        ],
        'monsters': [
            {
                probability: 0.1,
                rangeX: [0, 40],
                rangeY: [0, 40],
                type: [
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "green turtle",
                    "red turtle",
                    "black turtle",
                    "brown turtle",
                    "blue turtle",
                    "yellow turtle",
                ],
                vocabulary: [['meaning', 100]]
            },
        ],
        class: 'forest'
    },
    'outside': {
        'map': 'Jrpg',
        'plan': [
            "SSSS~~~~~~~~~~~~SSSS                                                  ",
            "S..SSSSSSSSSSSSSS..S                                                  ",
            "S..................S                                                  ",
            "SS.SSSSSSSSSSSSSS.SS                                                  ",
            "~S.S            S.S~                                                  ",
            "~S.S UUUUUUUSSS S.S~                                                  ",
            "~S.S uuuuuuuS.S S.S~                                                  ",
            "~S.S yyyyyyySSS S.S~                                                  ",
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
            " TT  ..hhh  tt   t Tt~    .    t Tt rttT   r   . rjjssssssjjssjjsCsssj",
            "t hh . t h tt TT  T  ~T t . T   t  t  T    hr  . rissssssssjjCssssssjj",
            "t th..  t         t ~t  r .       tt     tt th. TssCsissjjjsjsCsssjjsj",
            " t  .   r  T  r   t ~  T   .   r       r   hhh.  tisissssjsssissssssjj",
            "t  ...........   Tt ~ T  t  ...................hhrissssssCssssisCssssj",
            " T .r           t  t ~  Ttt t   tt T        Tt. tssisssCissssssjssssjs",
            "t ..  ~~    r    tT t~     t         tt  Tt   .  tsCsjjsssssssjjsissjs",
            "~~.~~~~T~~~~  t    t  ~~  tt   t  TT  rt   tt . t Cjsssssissssssisssjj",
            "~~.~~~      ~~~  ~~~~ t ~~~~~    ~~~t    t  T .  TjjCsjsssjsssjsssCssj",
            "T .   t r t  T ~~  r ~~~ T T ~~~~ t ~~~~ r    .  tsjjj jjjjjjjsjjjsjjs",
            "t . TT  t       Tt  tT tr r tTtUUUU UUUU~ ~~  . r       jjmm r        ",
            "Tt..   tt  T tt   t  Tt  T tT  uuuutuuuu ~  ~~:~~~~~ r  mmmmmm        ",
            " t .  tt     t<t     T        Tyyyy yyyy    t .  T ~~~~~ mm mm        ",
            "t  ..hhTh tt   t  ttt tbbb     BBBB BBBB T    . T      r~~~~~~        ",
            "tUUU. hhh TT   t   Tt Tb b     BBdB BBdB      .  r  Tr   mmmm         ",
            " yyy.. hh     t        z         .  r .       . t  hh    mm m         ",
            "tBdB .         ........K................................... mm        ",
            "t .. ...........       z b         .     .  r .  t      mm...<        ",
            " r ...tt T TT   tt T T bbb   t  UUUUUU UUUUU  . t   T TT     m        ",
            "T TttT  tTT tttt tTT   t  Ttt tTyyyyyytyyyyy  .  T hT   m m mm        ",
            " TT T r TTttT TT ttT   ttT  T trBBBBBBhBBBBB ..  TTh       mm         ",
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
            { position: 'not-random', level: 'sanctuary', x: 35, y: 37, doorX: 5, doorY: 1 },
            { position: 'not-random', level: 'forest', x: 14, y: 32, doorX: -1, doorY: -1 },
        ],
        'monsters': [
            {
                probability: 0.1,
                rangeX: [0, 10],
                rangeY: [40, 50],
                type: [
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "green turtle",
                    "red turtle",
                    "black turtle",
                    "brown turtle",
                    "blue turtle",
                    "yellow turtle",
                ],
                vocabulary: ['hiraganawords']
            },
            {
                probability: 0.05,
                rangeX: [10, 30],
                rangeY: [40, 50],
                type: [
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "green turtle",
                    "red turtle",
                    "black turtle",
                    "brown turtle",
                    "blue turtle",
                    "yellow turtle",
                ],
                vocabulary: ["hiraganawords"]
            },
            {
                probability: 0.1,
                rangeX: [30, 50],
                rangeY: [40, 60],
                type: [
                    "spotty lizard",
                    "red lizard",
                    "brown lizard",
                    "black lizard",
                    "green lizard",
                    "red scoprion",
                    "yellow scoprion",
                    "gray scoprion",
                    "blue scoprion",
                    "brown scoprion",
                    "black scoprion",
                ],
                vocabulary: ['hiraganawords','katakanawords']
            },
            {
                probability: 0.1,
                rangeX: [50, 60],
                rangeY: [10, 20],
                type: [
                    "red scoprion",
                    "yellow scoprion",
                    "gray scoprion",
                    "blue scoprion",
                    "brown scoprion",
                    "black scoprion",
                    "vulture 1",
                    "vulture 2",
                    "vulture 3",
                ],
                vocabulary: ['kanawords', ['kanji', 100]]
            },
            {
                probability: 0.2,
                rangeX: [50, 70],
                rangeY: [20, 30],
                type: [
                    "red scoprion",
                    "yellow scoprion",
                    "gray scoprion",
                    "blue scoprion",
                    "brown scoprion",
                    "black scoprion",
                    "vulture 1",
                    "vulture 2",
                    "vulture 3",
                ],
                vocabulary: ['kanawords', ['kanji', 100]]
            },
            {
                probability: 0.2,
                rangeX: [60, 70],
                rangeY: [10, 20],
                type: [
                    "red scoprion",
                    "yellow scoprion",
                    "gray scoprion",
                    "blue scoprion",
                    "brown scoprion",
                    "black scoprion",
                    "vulture 1",
                    "vulture 2",
                    "vulture 3",
                ],
                vocabulary: ['kanawords', ['kanji', 100]]
            },
            {
                probability: 0.1,
                rangeX: [20, 40],
                rangeY: [10, 30],
                type: [
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "white rat",
                    "black rat",
                    "brown rat",
                    "red rat",
                    "green turtle",
                    "red turtle",
                    "black turtle",
                    "brown turtle",
                    "blue turtle",
                    "yellow turtle",
                ],
                vocabulary: ['hiraganawords','katakanawords', 'kanawords']
            },
        ],
        class: 'outside'
    },
    'hospital': {
        'map': 'Jrpg',
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
        'monsters': [],
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
            { position: 'not-random', level: 'dungeonLevel1', x: 13, y: 0, doorX: 14, doorY: 1 },
        ],
        'monsters': [],
        class: 'castle'
    },
    'sanctuary': {
        'map': 'Jrpg',
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
            { position: 'not-random', level: 'outside', x: 3, y: 0, doorX: 35, doorY: 36 },
        ],
        'monsters': []
        ,
        class: 'sanctuary'
    },
    'library': {
        'map': 'Jrpg',
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
            type: []
        },
        class: 'library'
    },
        'cave': {
        'map': 'Jrpg',
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
            { position: 'not-random', level: 'outside', x: 0, y: 7, doorX: 60, doorY: 37 },
        ],
        'monsters': [
            {
                probability: 0.2,
                rangeX: [2, 29],
                rangeY: [2, 14],
                type: [
                    "bat 1",
                    "bat 2",
                    "bat 3",
                    "bat 4",
                    "bat 5",
                    "skeleton 1",
                    "skeleton 2",
                    "skeleton 3",
                    "skeleton 4",
                    "skeleton 5",
                    "skeleton 6",
                    "skeleton 7",
                ],
                vocabulary: ['kanawords', ['kanji',100]]
            },
        ],
        class: 'cave'
    },
    'wizardshop': {
        'map': 'Jrpg',
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
            type: []
        },
        class: 'wizardshop'
    },
    'blacksmith': {
        'map': 'Jrpg',
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
            { position: 'not-random', level: 'outside', x: 3, y: 0, doorX: 41, doorY: 36 },
        ],
        'monsters': {
            number: 0,
            type: []
        },
        class: 'blacksmith'
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
        'monsters': [
            {
                probability: 0.2,
                rangeX: [1, 9],
                rangeY: [2, 9],
                type: [
                    "spider 1",
                    "spider 2",
                    "spider 3",
                    "spider 4",
                    "spider 5",
                    "spider 6",
                    "spider 7",
                    "bat 1",
                    "bat 2",
                    "bat 3",
                    "bat 4",
                    "bat 5",
                    "snake 1",
                    "snake 2",
                    "snake 3",
                    "snake 4",
                    "snake 5",
                    "snake 6",
                    "snake 7",
                    "snake 8",
                    "snake 9",
                    "snake 10",
                    "snake 11",
                    "snake 12",
                    "snake 13",
                    "snake 14",
                    "snake 15",
                    "snake 16",
                    "snake 17",
                    "snake 18",
                    "snake 19",
                    "snake 20",
                ],
                vocabulary: [['kanji', 100]]
            }
        ],
        class: 'default'
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
        'monsters': [
            {
                probability: 0.2,
                rangeX: [1, 9],
                rangeY: [2, 9],
                type: [
                    "spider 1",
                    "spider 2",
                    "spider 3",
                    "spider 4",
                    "spider 5",
                    "spider 6",
                    "spider 7",
                    "bat 1",
                    "bat 2",
                    "bat 3",
                    "bat 4",
                    "bat 5",
                    "snake 1",
                    "snake 2",
                    "snake 3",
                    "snake 4",
                    "snake 5",
                    "snake 6",
                    "snake 7",
                    "snake 8",
                    "snake 9",
                    "snake 10",
                    "snake 11",
                    "snake 12",
                    "snake 13",
                    "snake 14",
                    "snake 15",
                    "snake 16",
                    "snake 17",
                    "snake 18",
                    "snake 19",
                    "snake 20",
                ],
                vocabulary: [['kanji', 100]]
            }
        ]
        ,
        class: 'default'
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
            { position: 'not-random', level: 'icy_mountains', x: 4, y: 5, doorX: 3, doorY: 4 },
        ],
        'monsters': [],
        class: 'towerLevel3'
    },
    'icy_mountains': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "_QQQQ__Q___QQQQ_MMHHHMMMMHHHMMHMMMHHMMM_HHMMHHMHHM",
            "QQ_Q_QQ_QQQ__Q_QHMMMMHHHHMMMMHMMHHMMMHMMMMHHMMHMHH",
            "QQ_________Q_Q_HHHHHHHHHHHHHHHHHHMHHHHHMHHHHHHHHMM",
            "Q______Q_____QHHHHHHHHHHHHHHH__HHQHQHHMH_HQHHHHHHM",
            "QQ__HHH___H_HQHHHHHHHHHQHHHQ_H___QHHQHHH___QQHHHMH",
            "_QQHHHH_HH__HHMMHHHHHHQHHQQHHH_H_QQ_HQHH____QQHHQH",
            "QQ___HHHHH___HHMMHHHHHHH__________Q__QH_____Q_Q__Q",
            "QQ_HH__HHHH__HHMHHHHHHH___QQQ___Q__QQ_______QHQ_HQ",
            "_Q____Q__QQHQ_HMHQHHMMHHQQ__QQ____QHQ___QQ__Q___HM",
            "__QQQQ_QQ_Q_HHMHHHHHHMMMHQQQQ_QQ___QQQ___QQ_Q__QQQ",
            "_QQ_______Q_HHMHHHHMHMHHHHH_______QQ_______HHQQ__M",
            "Q____Q_QHH__HHHMHHHMMMHHH__HH____QQ____QHHHHHH__HM",
            "QQ__Q______Q__QMHHMMMHHHQHHHH_HH_Q_Q_Q_Q__HHMHHHHM",
            "Q_____Q__Q__QQHMHHHMHHHHHMHHHHHMQ_QQ_QQ___HMMMHHMH",
            "_Q_QQQQQQ_QQ_HHMHHHMHQHHHHMMMHHMHH____HHHHMMHMHHMM",
            "_Q__Q_____QQ__QMHQHMHHHHHHHHHMMHHH_Q___HHHHHHMMMHM",
            "Q___H__HHH_QHHMHHHMHMHMMHHHHHHMHHHQH___QHHMMMMMQHM",
            "Q_____HHHHHHHHHHHHHQMMQHHQHHHHHMMHH_QHHHHMMHHHHHHM",
            "_QQ__Q_QQQ_QH_Q_HHQMMMHHMMMMHHHHHHMHMMMHMMHMMMHQMH",
            "_Q_QQ_QQ_HQQQQ_QQQ__MMMMHQHMMMMMMMMMMHHMMMQHHMMHMH",
        ],
        'doors': [
            { position: 'not-random', level: 'tower_level_3', x: 3, y: 3, doorX: 4, doorY: 4 },
        ],
        'monsters': [
            {
                probability: 0.2,
                rangeX: [10, 20],
                rangeY: [0, 10],
                type: [
                    "eagle 1",
                    "eagle 1",
                    "eagle 2",
                    "eagle 2",
                    "eagle 3",
                    "eagle 3",
                    "eagle 4",
                    "eagle 4",
                    "bear 1",
                    "bear 1",
                    "bear 2",
                    "bear 2",
                    "dog 3",
                    "dog 3",
                    "dog 4",
                    "dog 4",
                    "dog 5",
                    "dog 5",
                    "dragon tiny 3",
                    "dragon tiny 3",
                    "dragon small 3",
                    "dragon small 3",
                    "dragon normal 3",
                    "dragon big 3",
                ],
                vocabulary: [['kanji', 300]]
            },
                        {
                probability: 0.2,
                rangeX: [0, 20],
                rangeY: [10, 20],
                type: [
                    "eagle 1",
                    "eagle 1",
                    "eagle 2",
                    "eagle 2",
                    "eagle 3",
                    "eagle 3",
                    "eagle 4",
                    "eagle 4",
                    "bear 1",
                    "bear 1",
                    "bear 2",
                    "bear 2",
                    "dog 3",
                    "dog 3",
                    "dog 4",
                    "dog 4",
                    "dog 5",
                    "dog 5",
                    "dragon tiny 3",
                    "dragon tiny 3",
                    "dragon small 3",
                    "dragon small 3",
                    "dragon normal 3",
                    "dragon big 3", 
                ],
                vocabulary: [['kanji', 300]]
            },
                        {
                probability: 0.2,
                rangeX: [20, 50],
                rangeY: [0, 20],
                type: [
                       "eagle 1",
                    "eagle 1",
                    "eagle 2",
                    "eagle 2",
                    "eagle 3",
                    "eagle 3",
                    "eagle 4",
                    "eagle 4",
                    "bear 1",
                    "bear 1",
                    "bear 2",
                    "bear 2",
                    "dog 3",
                    "dog 3",
                    "dog 4",
                    "dog 4",
                    "dog 5",
                    "dog 5",
                    "dragon tiny 3",
                    "dragon tiny 3",
                    "dragon small 3",
                    "dragon small 3",
                    "dragon normal 3",
                    "dragon big 3",
                ],
                vocabulary: [['kanji', 300]]
            } 
        ],
        class: 'icyMountains'
    },
    'dungeonLevel1': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "SSSSSSSSSSSSSSS>SSSSSSSSSSSSSSSSSSSSSSSS",
            "SS,,,SSSSSSSSS,,SSSSSSSSSSSSSSSSSS,,,,SS",
            "S,,S,SSSSSSSSS,SSSSSSSSSSSSSSSSSS,,SS,,S",
            "S,SS,,,,,,SSSS,,,,SSSSSSS,,,SSSSS,SSSS,S",
            "S,,SSSSSS,,SSSSSS,SSSSSSS,S,,SSSS,SS,,,S",
            "SS,,,SSSSS,,,SSSS,,SSSSSS,SS,,SS,,SS,SSS",
            "SSSS,SSSSSSS,SSSSS,,,,SSS,SSS,,,,SSS,SSS",
            "SSSS,,SSSSSS,,,SSSSSS,SS,,,SSSSSSS,,,SSS",
            "SSSSS,SSSSSSSS,,SSSSS,,,,SSSSSSSSS,SSSSS",
            "SSSSS,SSSSSSSSS,,,,SSSSSSSSSSSSSSS,SSSSS",
            "SSSSS,,SSSSSSSSSSS,SSSSSSSSSSSSSSS,SSSSS",
            "SSSSSS,SSSSSSSSSSS,,,,,,SSSS,,,,SS,SSSSS",
            "SS,,,S,,SSS,,,SSSSSSSSS,SSSS,SS,,,,,SSSS",
            "S,,S,SS,SSS,S,,SSSSSSS,,SSS,,SSSSSSKSS,S",
            "S,SS,SS,SSS,SS,SS,,,,,,S,,,,SSSSSSSSSS,S",
            "S,S,,SS,SSSSSS,SS,SSSSS,,SSSS,,,SSS,S,,S",
            "S,S,SS,,SSSSS,,SS,,,,,,,S,,S,,S,,,,,,,SS",
            "S,S,,,,SSSSSS,SSSSSSSS,,SS,,,SS,SSS,,SSS",
            "S,,SS,SSSSSS,,SSSS,,,S,,,,,S,SS,S,,,SSSS",
            "SS,SS,,SSSSS,SSSSS,S,SS,SSSSSSS,S,SSSSSS",
            "SS,,,S,SSSSS,,,SSS,S,,S,,,SSSSS,S,,,,SSS",
            "S,,SS,,,,SS,SS,,SS,SS,,SS,SS,,,,,SSS,,SS",
            "S,S,,,S,SSS,,,S,,,,SSS,S,,SS,SSS,,S,S,,S",
            "SS,,SSS,,,,,S,,SSSSSSS,S,S,,,SSSS,,,,S,S",
            "S,,S,,,SS,S,,S,S,,,SS,,,,S,S,SSS,,SS,S,S",
            "SS,,,S,S,,S,SS,S,S,SSS,S,,,,,SSS,S,,,,,S",
            "S,,,S,,,,S,,SS,,,,,S,,,,,SS,SSSS,,S,SS,S",
            "S,S,,,S,S,,SSSS,S,SS,SSS,SS,,SSSS,S,,S,S",
            "S,SSSSS,,,S,,,,,SS,,,S,,,,,,,,,,S,,,,,,S",
            "S,SSSSSSSSS,SSSSS,,SS,,SSS,SSSS,,SSS,SSS",
            "S,,SSSSSSSS,SSSS,,SSS,SSSS,SSSSS,,SS,,,S",
            "SS,SSSSSSSS,SSSS,SSSS,,,SS,,SSS,S,,,SS,S",
            "S,,,SSSSSSS,,SSS,,,,,SS,,SS,,SS,,SS,,,,S",
            "S,S,,SSSSSSS,SSSSSSS,,SS,SSS,SSS,SS,S,SS",
            "S,,S,,SSSSSS,,,,,SSSS,,,S,SS,SSS,,,,,,,S",
            "S,SSS,SSSSSSSSSS,,SSSSS,,,,S,SSS,S,S,S,S",
            "S,,,S,,SS,,,,,SSS,,,,,,SSSSS,SS,,,,S,S,S",
            "S,S,SS,SS,,SS,,,,SSSSS,,,,,,SSS,SS,,SS,S",
            "S,,,,S,,,,SSSSSS,,,,,,,S,SS,,,,,SSS,,,,S",
            "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",
        ],
        'doors': [
            { position: 'not-random', level: 'castle', x: 15, y: 0, doorX: 12, doorY: 1 },
            { position: 'not-random', level: 'dungeonLevel2', x: 35, y: 13, doorX: 15, doorY: 1 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'dungeonLevel1'
    },
    'dungeonLevel2': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "EEEEEEEEEEEEEEE>EEEEEEEEEEEEEEEEEEEEEEEE",
            "EEEEE.......EEE.EE...........EEEEE.....E",
            "EEEE..EEEEE...E.EE.EEEEEEEEE.EEEEE.EEE.E",
            "EEEE.EEE...EE.E.EEEEEEEEEEEE.EEEE...EE.E",
            "EEEE.E...E.EE.E.E............EEE..E..E.E",
            "EEEE.E.EEE..E.E...EEEE.EEEEEEE...EEE.E.E",
            "EEEE.E...EE.E.EEEE.....EEEE....EEEEE.E.E",
            "EEE...EE.EE...EE...EEEEEEEE.EEEEEEEE.E.E",
            "EEE.E.E..EEE.EE..EEEEEEEEEE.....EEE..E.E",
            "EEE.EE..EEE..EE.EEEEEEEEEEEEEEE.EEE.E..E",
            "EEE..E.EEEE.EE..EEEEEEEEEEEEEEE.EEE.E.EE",
            "EE..E..E....E..EE.......EEEEEEE..EE.E.EE",
            "EE.E..E..EEE..EEE.EEEEE..EEEEEEE..E.E.EE",
            "E..E.EE.EEE..EEEE..EEEEE..EEEEEEE.E.E.EE",
            "E.E..E..EE..EEEEEE.EEEEEE...EEEE..E.E.EE",
            "E.E.E..E...EEEEE...EE.EEEEE.EEEE.EE.E.EE",
            "E.E.E.E..EE....E.EEEE.......EEEE.E..E..E",
            "E.E.E.E.EEE.EE.E.EEEE.EEEEEEEEE..E.EEE.E",
            "E.E..EE..EE.E..E.EEEE...........EE.E...E",
            "E.EE.EEE.EE.E.EE.EEEEEEEEEEEEEEEEE.EEEEE",
            "E..E.EEE.EE.E.EE.EEEEEEEEEEEEEEEEE.EEEEE",
            "EE.E.EE.....E.EE.EEEE......EEEE....E...E",
            "EE.E..E.EEEE..EE.EEEE.EEEE.EEEE.EEEE.E.E",
            "E...E.E.EEEE.EEE......E....EEEE....E.E.E",
            "E.E.E.EKEEEE.E.EEEEEEEE.EEEEEEEEEE.E.E.E",
            "E.EE..EEEEEE.E.E...EEEE....EEEE....E..EE",
            "E.EE.EEEE....E...E.EE...EE.EEEE.EEEEE.EE",
            "E.E..EEE..EEEEEEEE.EE.EEEE..EEE.......EE",
            "E.E.EEE..EEE.......EE.EEEEE..EEEEEE.EEEE",
            "E.E.EEE.EEEE.EEEEEEEE.EEEEEE.EEEEEE.EEEE",
            "E.E.EEE..EEE.EEEEEEEE.EEEEE..EEEEEE.EEEE",
            "E.E.EEEE.EEE....EEEEE..EEE..EEEEEE..EEEE",
            "E.E.EEEE.EEEEEE.EEEEEE.E...EEEEEE..EEEEE",
            "E.E.EEE..EEEEE...EEEEEE..EEEEEEE..EEEEEE",
            "E.E..EE.E...E..E..EEEE..EEEEE....EE...EE",
            "E.EE..E...E...E.E......EEEEE..EE.E..E.EE",
            "E...E..EEEEEEE..EEEEEEE......EEE.E.E..EE",
            "EEE.EE.....EEEE.........EE.EEEEE.E.E.E.E",
            "E.....EEEE......EEEEEEEEEE..EEEE...E...E",
            "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
        ],
        'doors': [
            { position: 'not-random', level: 'dungeonLevel1', x: 15, y: 0, doorX: 35, doorY: 12 },
            { position: 'not-random', level: 'dungeonLevel3', x: 7, y: 24, doorX: 15, doorY: 1 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'dungeonLevel2'
    },
    'dungeonLevel3': {
        'width': 20,
        'height': 12,
        'type': 'katakanawords',
        'map': 'Jrpg',
        'collision': [0, 5],
        'plan': [
            "SSSSSSSSSSSSSSS,SSSSSSSSSSSSSSSSSSSSSSSS",
            "S,,,S,,,,,,SS,S,SSSSS,,,,,,,,,,,,,SS,,,S",
            "S,S,,,SSSS,,,,S,SSSSS,SS,SSSSSSSS,SS,S,S",
            "SS,,SS,,,SS,SS,,SSSS,,,SSS,,,SS,,,S,SS,S",
            "S,,S,,,S,,SS,,,SSSSS,S,,,,,S,SS,SSS,,,,S",
            "SS,S,SSSS,,,,SSSSSSS,SSSSSSS,SS,,,,,S,SS",
            "S,,S,,,,,SSSSSS,,,,,,SS,,,,,,SSSSSSSS,SS",
            "SS,,SSSS,,,,SSS,SSSSSSS,SSSSSSSSSS,,,,,S",
            "S,,,,,,,SSS,S,,,S,,,,,S,,,,,SSSSSSSSSSSS",
            "S,S,SSSSSSS,S,SSS,SSS,SSSSS,SSSSSSSSSSSS",
            "S,S,SSSSSSS,S,,,,,SSS,SSSSS,SSSSSSSSSSSS",
            "S,S,SSSS,,,,S,SSSSSSS,S,,,S,SSSSSSSSSSSS",
            "S,S,,SSS,SSS,,S,,,SSS,S,S,S,SSSSSSSSSSSS",
            "S,SS,,,S,,,,S,S,S,SSS,S,S,S,SSSSSSSSSSSS",
            "S,,,SS,SSSS,S,S,S,S,,,S,S,S,SSS,,,,,SSSS",
            "SSS,SS,S,,,,S,S,S,,,SSS,S,S,,,,,SSS,SSSS",
            "S,S,SS,,,SSS,,S,SSSSS,,,S,SS,SSS,,,,SSSS",
            "S,S,,,SSSSSSSS,,SSSSS,SSS,SSSSS,,SSSSSSS",
            "S,,SS,,SSSS,,,,SSSSSS,S,,,SSSSS,SSSSSSSS",
            "SS,,,S,SSSS,SSSSSSSSS,S,SSSSSSS,SSSSSSSS",
            "SS,SS,,SSSS,,SSSSSSSS,S,SSSSSSS,SSSSSSSS",
            "S,,S,,SSSSSS,,SSSSSSS,S,,,,,S,,,SSSSSSSS",
            "SS,S,SSSSSSSS,SSSSSSS,,SSSS,,,SSSSSSSSSS",
            "SS,S,SSSSSSS,,SSSSSSSS,,,SSSSSS,,,SSSSSS",
            "SS,S,S,,,S,,,SSSSSSSSSSS,SSSSSS,S,,SSSSS",
            "SS,S,S,S,,,SSSSSSSSSSSSS,,SSSSS,,S,SSSSS",
            "SS,S,,,SSSSSSSSSSSSSSSSSS,,SSSSS,S,SSSSS",
            "SS,,SSS,,,,,SSSSSSSSSSSSSS,SSSS,,S,,SSSS",
            "SSS,,,,,SSS,,,SSSSSSSSSSSS,,,SS,SSS,SSSS",
            "SSSSSSSSSSSSS,SSSSSSSSSSSSSS,SS,SSS,SSSS",
            "SSSSSSSSSSSSS,SSSSSSSSSSSSS,,SS,SSS,SSSS",
            "SSS,,,,,,,,,,,S,,,,SSSSSSS,,SSS,SSS,SSSS",
            "S,,,SSSSSSSSSSS,SS,,,,SSS,,SS,,,SSS,,SSS",
            "S,SS,,,,,,,SS,,,,,SSS,,,,,S,S,SSSSSS,SSS",
            "S,S,,SSSSS,,SSSSS,,,,SSSSS,,,,S,,SS,,SSS",
            "S,S,S,S,,,S,,S,,,SSS,,,,,,SSSSS,SS,,SSSS",
            "S,S,,,,,S,,S,,,S,,,SSSSSS,,,,,,,S,,SSSSS",
            "S,,SS,S,,S,,SSS,SS,SSSSSSSSSSSS,,,SSSSSS",
            "SS,,,,SS,,,,,,,,,S,,,,,,,,,,,,,,SSSSSSSS",
            "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",
        ],
        'doors': [
            { position: 'not-random', level: 'dungeonLevel2', x: 15, y: 0, doorX: 7, doorY: 23 },
        ],
        'monsters': {
            number: 0,
            type: [1688, 1699]
        },
        class: 'dungeonLevel3'
    },
}