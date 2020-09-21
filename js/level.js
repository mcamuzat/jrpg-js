var level = {
   'level1': {
       'width':40, 
       'height':40, 
       'type':'kanji',
       'map': 'Rogue',
       'collision': [0,5],
       'doors': [
           {position: 'random', level:'level3'},
           {position: 'random', level:'level2'}
       ],
       'monsters': {
           number:0,
           type: [1688,1699]
       },
       start_position: {position: 'random'}
    },
    'level2': {
        'width':40, 
        'height':40, 
        'type':'katakanawords',
        'map': 'Cellular',
        'collision': [0],
        'doors': [
           {position: 'random', level:'level1'},
           {position: 'random', level:'level3'}
       ],
       'monsters': {
           number:5,
           type: [1688,1699]
       },
       start_position: {position: 'random'}
    },
    'level3': {
        'width':10, 
        'height':9, 
        'type':'katakanawords',
        'map': 'Plan',
        'collision': [0,5],
        'plan':  [
                [1,1,1,5,1,1,5,1,1,1],
                [1,0,0,0,1,0,0,0,0,1],
                [1,0,1,1,1,1,1,1,0,1],
                [1,0,1,0,0,0,0,1,0,1],
                [1,0,1,0,1,1,0,1,0,1],
                [1,0,1,0,0,1,0,1,0,1],
                [1,0,1,0,0,1,0,1,0,1],
                [1,0,1,0,1,0,0,1,0,1],
                [1,0,0,0,1,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1],
        ],
        'doors': [
           {position: 'not-random', level:'level1', x:3, y:0},
           {position: 'not-random', level:'level2', x:6, y:0}
       ],
       'monsters': {
           number:5,
           type: [1688,1699]
       },
       start_position: {position: 'not-random', x:3, y:1}
    },
    'level4': {
        'width':10, 
        'height':9, 
        'type':'katakanawords',
        'map': 'Plan',
        'collision': [0,5],
        'plan':  [
                [1,1,1,5,1,1,5,1,1,1],
                [1,0,0,0,1,0,0,0,0,1],
                [1,0,1,1,1,1,1,1,0,1],
                [1,0,1,0,0,0,0,1,0,1],
                [1,0,1,0,1,1,0,1,0,1],
                [1,0,1,0,0,1,0,1,0,1],
                [1,0,1,0,0,1,0,1,0,1],
                [1,0,1,0,1,0,0,1,0,1],
                [1,0,0,0,1,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1],
        ],
        'doors': [
           {position: 'not-random', level:'level1', x:3, y:0},
           {position: 'not-random', level:'level2', x:6, y:0}
       ],
       'monsters': {
           number:5,
           type: [1688,1699]
       },
       start_position: {position: 'not-random', x:3, y:1}
    }
    
}