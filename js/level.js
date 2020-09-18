var level = {
   'level1': {
       'width':40, 
       'height':40, 
       'type':'hiraganawords',
       'map': 'Rogue',
       'collusion': [0,5],
       'doors': [
           {position: 'random', level:'level3'},
           {position: 'random', level:'level2'}
       ]
    },
    'level2': {
        'width':40, 
        'height':40, 
        'type':'katakanawords',
        'map': 'Cellular',
        'collusion': [0],
        'doors': [
           {position: 'random', level:'level1'},
           {position: 'random', level:'level3'}
       ]
    },
    'level3': {
        'width':10, 
        'height':9, 
        'type':'katakanawords',
        'map': 'Plan',
        'collusion': [0,5],
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
       ]
    }
}