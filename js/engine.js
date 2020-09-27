var EngineScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function BootScene() {
            Phaser.Scene.call(this, { key: 'EngineScene' });
        },
    generateMap: function(input) {
        this.level = input
        switch (level[input].map) {
            case 'Rogue':
                var _map = new ROT.Map.Rogue(
                    level[input].width,
                    level[input].height
                );
                var plan = []
                _map.create(function (x, y, v) {
                    if (!plan[y]) {
                        plan[y] = [];
                    }
                    plan[y][x] = v;
                });

                break;
            case 'Plan':
               var plan = level[input].plan
               break;
            case 'Jrpg':
                var plan = level[input].plan;
                let trad = {
                    ' ' :   9 + 128 * 23,
                    's' :  12 + 128 * 23,
                    'h' :  93 + 128 * 23,
                    '.' :  30 + 128 * 23,
                    ',' :  27 + 128 * 23,
                    'D' :  67 + 128 * 25,
                    'd' :  81 + 128 * 25,
                    'V' :  96 + 128 * 24,
                    'k' :  32 + 128 * 26,
                    '_' :  84 + 128 * 23,
                    'H' :  96 + 128 * 23,
                    '>' :  28 + 128 * 26,
                    '<' :  29 + 128 * 26,
                    ':' :  30 + 128 * 23, 
                    't' :  54 + 128 * 23, 
                    'T' :  60 + 128 * 23, 
                    'm' : 117 + 128 * 23, 
                    'r' :  96 + 128 * 21, 
                    '~' :  18 + 128 * 23, 
                    'P' :  69 + 128 * 23, 
                    'C' :  99 + 128 * 22, 
                    'i' : 105 + 128 * 22, 
                    'j' : 123 + 128 * 23, 
                    'b' :  99 + 128 * 24, 
                    'S' : 105 + 128 * 24, 
                    'W' : 111 + 128 * 24, 
                    'B' :  78 + 128 * 25, 
                    'K' :  30 + 128 * 26, 
                    'z' :  72 + 128 * 24, 
                    'Z' :  75 + 128 * 24, 
                    'M' :  87 + 128 * 23, 
                    'Q' :  90 + 128 * 23, 
                    'E' : 120 + 128 * 24, 
                };

                plan = plan.map((x) => (x.split("").map((z) => trad[z])));
                break;
            case 'Cellular':
                var _map = new ROT.Map.Cellular(
                    level[input].width,
                    level[input].height
                ); 
                _map.randomize(0.5);
                for (var i=0; i<4; i++) _map.create();
                var plan = []
                _map.create(function (x, y, v) {
                    if (!plan[y]) {
                        plan[y] = [];
                    }
                    plan[y][x] = v;
                });
                break;
            default:
                console.log(`Sorry.`);
        }

        this.plan = plan;
    },

    getMapAsArray: function() {
        return this.plan;
    },
    getFreePosition: function() {
      var found = false;
      while (found == false) {
            var x = Phaser.Math.RND.between(0, level[this.level].width-1);
            var y = Phaser.Math.RND.between(0, level[this.level].height-1);
            if(this.getCollisionMap().indexOf(this.plan[y][x]) !== -1) {
                found = true;
            }
        }
        return [x*32 + 16,y * 32 + 16]
    },
    getCollisionMap: function() {
        if (level[this.level].map == 'Jrpg') {
            return [  9+ 128 * 23, 
                12+ 128 * 23, 
                93+ 128 * 23, 
                30+ 128 * 23, 
                27+ 128 * 23, 
                67+ 128 * 25, 
                81+ 128 * 25, 
                96+ 128 * 24, 
                32+ 128 * 26, 
                84+ 128 * 23, 
                96+ 128 * 23, 
                28+ 128 * 26, 
                29+ 128 * 26]; 
        }
        return level[this.level]['collision']
    },
    getDoors: function() {
        return level[this.level].doors;
    },
    getQuizz: function() {
        return level[this.level].type;
    },
    getNumbersOfMonster: function() {
        return level[this.level].monsters.number;
    },
    getTypeOfMonster:function(){
        return level[this.level].monsters.type;
    },
    saveGame: function() {
        localStorage.setItem('jrpg', JSON.stringify({
            "hpmax"    : this.hpmax,
            "hp"       : this.hp,
            "xp"       : this.xp,
            "xpfor"    : [],
            "money"    : this.money,
            "quests"   : this.quests,
            "inventory": this.inventory
       }));

    },
    loadGame: function() {
        let jrpg = JSON.parse(localStorage.getItem('jrpg'));
        if (!jrpg) {
            localStorage.setItem('jrpg', JSON.stringify({
                "hpmax"    : 10,
                "hp"       : 10,
                "xp"       : 0,
                "levelxp"  : 0,
                "xpfor"    : [],
                "money"    : 0,
                "quests"   : [],
                "inventory": []
           }));
           jrpg = JSON.parse(localStorage.getItem('jrpg'));
        }
        this.xp = jrpg.xp;
        this.levelxp = jrpg.levelxp;
        this.inventory = jrpg.inventory;
        this.money = jrpg.money;
        this.hp = jrpg.hp;
        this.quests = jrpg.quests;
    },
    pickWord:function(vocabulary = 'hiraganawords') {
        switch (vocabulary) {
            case 'meaning':
                var dic = '';
                for (let i = 0; i < 10; i++) {
                    dic = dic + Dictionnary.chapter[i];
                }

                //Checking how many words ther are in the array
                let lengthdic = dic.length;

                //Pick a random number between the amount of words and 0
                let randomKanji = Math.floor((Math.random() * lengthdic));

                //Select a random word from the array
                return [
                    Dictionnary['kanji'][randomKanji], 
                    Dictionnary['english'][randomKanji],
                    Dictionnary['descriptions'][randomKanji],
                    []
                ];
            case 'kanji':
                //Checking how many words ther are in the array
                let nbword = Dictionnary['readings'].length;
                //Pick a random number between the amount of words and 0
                let randomWord2 = Math.floor((Math.random() * nbword));
                let [kanji, reading, furigana] = Dictionnary['readings'][randomWord2];
                return [kanji, reading, reading, furigana];
            default:
                //Checking how many words ther are in the array
                let nbwords = Dictionnary[vocabulary].length;

                //Pick a random number between the amount of words and 0
                let randomWord = Math.floor((Math.random() * nbwords));

                //Select a random word from the array
                let [hiragana, english] =  Dictionnary[vocabulary][randomWord];

                return [hiragana, english, english, []];
                
        }
       
    },
    getQuestion:function(choices) {
        let nbword = choices.length;
        //Pick a random number between the amount of words and 0
        let randomWord = Math.floor((Math.random() * nbword));
        
        return this.pickWord(choices[randomWord]);
    },
    gainItem: function(item) {
        this.inventory.push(item);
        this.events.emit('addItem', item);
    },
    removeItem:function(item) {
        const index = this.inventory.indexOf(item);
        if (index > -1) {
            this.inventory.splice(index, 1)
            this.events.emit('addItem', item);
        }
    },
    getItems: function() {
        return this.inventory;
    },
    hasItem: function(item) {
        return (this.inventory.indexOf(item) != -1);
    },
    completeQuest: function(nameOfTheQuest) {
        if (!this.isQuestComplete(nameOfTheQuest)) {
            this.quests.push(nameOfTheQuest);
            this.saveGame();
        }
    },
    isQuestComplete: function(nameOfTheQuest) {
        return (this.quests.indexOf(nameOfTheQuest) != -1); 
    },
    getXp: function(){
        return this.xp;
    },
    gainXp: function(xp){
        this.xp += xp;
        this.events.emit('addXp',xp);
    },
    changeText: function(text){
        this.events.emit('changeText',text);
    },
    isHit: function(damage){
        this.hp -= damage;
        this.events.emits('changeHp')

    },
    receiveMoney: function(amount) {
        this.money += amount;
        this.events.emit('addMoney', this.money)
    },
    hasMoney: function(amount) {
        return this.money >= amount;
    },
    takeMoney: function(amount) {
        this.money -= amount;
        this.events.emit('addMoney', this.money);
    },
    getHp: function(){
        return this.hp;
    },
    restoreHp: function(){
        this.hp = this.hpmax;
        this.events.emits('changeHp')
    },
    getLevelClass: function()
    {
        switch (level[this.level].class) {
            case 'level1':
                return new Level1();
            case 'outside':
               return new Outside();
            case 'hospital':
                return new Hospital();
            case 'castle':
                return new Castle();
            case 'cave':
                return new Cave();
            case 'blacksmith':
                return new Blacksmith();
            case 'library':
                return new Library();
            case 'wizardshop':
                return new WizardShop();
            default:
                console.log(level[this.level].class)
        }
        //return new Level1();
    },
    translateTile: function (string) {
        var trad = {
            "white rat": (24 + 128 * 13),
            "black rat": (25 + 128 * 13),
            "brown rat": (26 + 128 * 13),
            "red rat": (27 + 128 * 13),
            "green frog": (8 + 128 * 19),
            "red frog": (9 + 128 * 19),
            "spotty lizard": (12 + 128 * 19),
            "red lizard": (13 + 128 * 19),
            "brown lizard": (14 + 128 * 19),
            "black lizard": (15 + 128 * 19),
            "green lizard": (16 + 128 * 19),
            "eagle 1": (12 + 128 * 17),
            "eagle 2": (13 + 128 * 17),
            "eagle 3": (14 + 128 * 17),
            "eagle 4": (15 + 128 * 17),
            "basilisk 1": (8 + 128 * 17),
            "basilisk 2": (9 + 128 * 17),
            "basilisk 3": (10 + 128 * 17),
            "basilisk 4": (11 + 128 * 17),
            "vulture 1": (35 + 128 * 19),
            "vulture 2": (36 + 128 * 19),
            "vulture 3": (37 + 128 * 19),
            "green turtle": (66 + 128 * 18),
            "red turtle": (67 + 128 * 18),
            "black turtle": (68 + 128 * 18),
            "brown turtle": (69 + 128 * 18),
            "blue turtle": (70 + 128 * 18),
            "yellow turtle": (71 + 128 * 18),
            "red scoprion": (72 + 128 * 18),
            "yellow scoprion": (73 + 128 * 18),
            "gray scoprion": (74 + 128 * 18),
            "blue scoprion": (75 + 128 * 18),
            "brown scoprion": (76 + 128 * 18),
            "black scoprion": (77 + 128 * 18),
            "dog 1": (72 + 128 * 15),
            "dog 2": (73 + 128 * 15),
            "dog 3": (74 + 128 * 15),
            "dog 4": (75 + 128 * 15),
            "dog 5": (76 + 128 * 15),
            "dog 6": (77 + 128 * 15),
            "spider 1": (50 + 128 * 15),
            "spider 2": (51 + 128 * 15),
            "spider 3": (52 + 128 * 15),
            "spider 4": (53 + 128 * 15),
            "spider 5": (54 + 128 * 15),
            "spider 6": (55 + 128 * 15),
            "spider 7": (56 + 128 * 15),
            "bat 1": (0 + 128 * 16),
            "bat 2": (1 + 128 * 16),
            "bat 3": (2 + 128 * 16),
            "bat 4": (3 + 128 * 16),
            "bat 5": (4 + 128 * 16),
            "snake 1": (13 + 128 * 16),
            "snake 2": (14 + 128 * 16),
            "snake 3": (15 + 128 * 16),
            "snake 4": (16 + 128 * 16),
            "snake 5": (17 + 128 * 16),
            "snake 6": (18 + 128 * 16),
            "snake 7": (19 + 128 * 16),
            "snake 8": (20 + 128 * 16),
            "snake 9": (21 + 128 * 16),
            "snake 10": (22 + 128 * 16),
            "snake 11": (23 + 128 * 16),
            "snake 12": (24 + 128 * 16),
            "snake 13": (25 + 128 * 16),
            "snake 14": (26 + 128 * 16),
            "snake 15": (27 + 128 * 16),
            "snake 16": (28 + 128 * 16),
            "snake 17": (29 + 128 * 16),
            "snake 18": (30 + 128 * 16),
            "snake 19": (31 + 128 * 16),
            "snake 20": (32 + 128 * 16),
            "skeleton 1": (28 + 128 * 20),
            "skeleton 2": (29 + 128 * 20),
            "skeleton 3": (30 + 128 * 20),
            "skeleton 4": (31 + 128 * 20),
            "skeleton 5": (32 + 128 * 20),
            "skeleton 6": (33 + 128 * 20),
            "skeleton 7": (34 + 128 * 20),
            "skeleton sw 1": (35 + 128 * 20),
            "skeleton sw 2": (36 + 128 * 20),
            "skeleton sb 1": (37 + 128 * 20),
            "skeleton sb 2": (38 + 128 * 20),
            "skeleton 2sw": (39 + 128 * 20),
            "skeleton 2sb": (40 + 128 * 20),
            "skeleton sw sh": (41 + 128 * 20),
            "skeleton sb sh": (42 + 128 * 20),
            "skeleton cloak 1": (43 + 128 * 20),
            "skeleton cloak 2": (44 + 128 * 20),
            "skeleton cloak 3": (45 + 128 * 20),
            "skeleton cloak 4": (46 + 128 * 20),
            "skeleton wiz 1": (47 + 128 * 20),
            "skeleton wiz 2": (48 + 128 * 20),
            "skeleton wiz 3": (49 + 128 * 20),
            "skeleton orc 1": (54 + 128 * 20),
            "skeleton orc 2": (55 + 128 * 20),
            "skeleton orc 3": (56 + 128 * 20),
            "skeleton orc 4": (57 + 128 * 20),
            "skeleton orc 5": (58 + 128 * 20),
            "skeleton dwf 1": (59 + 128 * 20),
            "skeleton dwf 2": (60 + 128 * 20),
            "skeleton 3glav": (61 + 128 * 20),
            "skeleton small": (62 + 128 * 20),
            "bear 1": (32 + 128 * 19),
            "bear 2": (33 + 128 * 19),
            "dragon tiny 1": (0 + 128 * 12),
            "dragon tiny 2": (1 + 128 * 12),
            "dragon tiny 3": (2 + 128 * 12),
            "dragon tiny 4": (3 + 128 * 12),
            "dragon tiny 5": (4 + 128 * 12),
            "dragon tiny 6": (5 + 128 * 12),
            "dragon tiny 7": (6 + 128 * 12),
            "dragon tiny 8": (7 + 128 * 12),
            "dragon small 1": (8 + 128 * 12),
            "dragon small 2": (9 + 128 * 12),
            "dragon small 3": (10 + 128 * 12),
            "dragon small 4": (11 + 128 * 12),
            "dragon small 5": (12 + 128 * 12),
            "dragon small 6": (13 + 128 * 12),
            "dragon small 7": (14 + 128 * 12),
            "dragon small 8": (15 + 128 * 12),
            "dragon normal 1": (16 + 128 * 12),
            "dragon normal 2": (17 + 128 * 12),
            "dragon normal 3": (18 + 128 * 12),
            "dragon normal 4": (19 + 128 * 12),
            "dragon normal 5": (20 + 128 * 12),
            "dragon normal 6": (21 + 128 * 12),
            "dragon normal 7": (22 + 128 * 12),
            "dragon normal 8": (23 + 128 * 12),
            "dragon big 1": (24 + 128 * 12),
            "dragon big 2": (25 + 128 * 12),
            "dragon big 3": (26 + 128 * 12),
            "dragon big 4": (27 + 128 * 12),
            "dragon big 5": (28 + 128 * 12),
            "dragon big 6": (29 + 128 * 12),
            "dragon big 7": (30 + 128 * 12),
            "dragon big 8": (31 + 128 * 12),
            "orc 1": (11 + 128 * 13),
            "orc 2": (12 + 128 * 13),
            "orc 3": (13 + 128 * 13),
            "copper coins": (7 + 128 * 7),
            "silver coins": (8 + 128 * 7),
            "golden coins": (9 + 128 * 7),
            "blue crystals": (14 + 128 * 7),
            "pickaxe": (27 + 128 * 7),
            "skull": (43 + 128 * 7),
            "bones": (44 + 128 * 7),
            "skeleton 1": (45 + 128 * 7),
            "skeleton 2": (46 + 128 * 7),
            "skeleton 3": (47 + 128 * 7),
            "skeleton 4": (48 + 128 * 7),
            "skeleton 5": (49 + 128 * 7),
            "skeleton 6": (50 + 128 * 7),
            "black mushroom": (7 + 128 * 2),
            "white mushroom": (8 + 128 * 2),
            "gray mushroom": (9 + 128 * 2),
            "orange mushroom": (10 + 128 * 2),
            "red mushroom": (11 + 128 * 2),
            "green mushroom": (12 + 128 * 2),
            "blue mushroom": (13 + 128 * 2),
            "Dbrown mushroom": (14 + 128 * 2),
            "black mushroom 2": (15 + 128 * 2),
            "gray mushroom 2": (16 + 128 * 2),
            "violet mushroom": (17 + 128 * 2),
            "yellow mushroom": (18 + 128 * 2),
            "red mushroom 2": (20 + 128 * 2),
            "green mushroom 2": (21 + 128 * 2),
            "cyan mushroom": (22 + 128 * 2),
            "Lbrown mushroom": (23 + 128 * 2),
            "spellbook gray 1": (9 + 128 * 6),
            "spellbook gray 2": (10 + 128 * 6),
            "spellbook gray 3": (11 + 128 * 6),
            "spellbook gray 4": (12 + 128 * 6),
            "spellbook gray 5": (13 + 128 * 6),
            "spellbook gray 6": (14 + 128 * 6),
            "spellbook gray 7": (15 + 128 * 6),
            "spellbook gray 8": (16 + 128 * 6),
            "spellbook gray 9": (17 + 128 * 6),
            "spellbook blue 1": (18 + 128 * 6),
            "spellbook blue 2": (19 + 128 * 6),
            "spellbook blue 3": (20 + 128 * 6),
            "spellbook blue 4": (21 + 128 * 6),
            "spellbook blue 5": (22 + 128 * 6),
            "spellbook blue 6": (23 + 128 * 6),
            "spellbook blue 7": (24 + 128 * 6),
            "spellbook blue 8": (25 + 128 * 6),
            "spellbook blue 9": (26 + 128 * 6),
            "spellbook green 1": (27 + 128 * 6),
            "spellbook green 2": (28 + 128 * 6),
            "spellbook green 3": (29 + 128 * 6),
            "spellbook green 4": (30 + 128 * 6),
            "spellbook green 5": (31 + 128 * 6),
            "spellbook green 6": (32 + 128 * 6),
            "spellbook green 7": (33 + 128 * 6),
            "spellbook green 8": (34 + 128 * 6),
            "spellbook green 9": (35 + 128 * 6),
            "spellbook red 1": (36 + 128 * 6),
            "spellbook red 2": (37 + 128 * 6),
            "spellbook red 3": (38 + 128 * 6),
            "spellbook red 4": (39 + 128 * 6),
            "spellbook red 5": (40 + 128 * 6),
            "spellbook red 6": (41 + 128 * 6),
            "spellbook red 7": (42 + 128 * 6),
            "spellbook red 8": (43 + 128 * 6),
            "spellbook red 9": (44 + 128 * 6),
            "spellbook cyan 1": (45 + 128 * 6),
            "spellbook cyan 2": (46 + 128 * 6),
            "spellbook cyan 3": (47 + 128 * 6),
            "spellbook cyan 4": (48 + 128 * 6),
            "spellbook cyan 5": (49 + 128 * 6),
            "spellbook cyan 6": (50 + 128 * 6),
            "spellbook cyan 7": (51 + 128 * 6),
            "spellbook cyan 8": (52 + 128 * 6),
            "spellbook cyan 9": (53 + 128 * 6),
            "spellbook pink 1": (54 + 128 * 6),
            "spellbook pink 2": (55 + 128 * 6),
            "spellbook pink 3": (56 + 128 * 6),
            "spellbook pink 4": (57 + 128 * 6),
            "spellbook pink 5": (58 + 128 * 6),
            "spellbook pink 6": (59 + 128 * 6),
            "spellbook pink 7": (60 + 128 * 6),
            "spellbook pink 8": (61 + 128 * 6),
            "spellbook pink 9": (62 + 128 * 6),
            "potion 1": (0 + 128 * 8),
            "potion 2": (1 + 128 * 8),
            "potion 3": (2 + 128 * 8),
            "potion 4": (3 + 128 * 8),
            "potion 5": (4 + 128 * 8),
            "potion 6": (5 + 128 * 8),
            "potion 7": (6 + 128 * 8),
            "potion 8": (7 + 128 * 8),
            "potion 9": (8 + 128 * 8),
            "potion 10": (9 + 128 * 8),
            "potion 11": (10 + 128 * 8),
            "potion 12": (11 + 128 * 8),
            "potion 13": (12 + 128 * 8),
            "potion 14": (13 + 128 * 8),
            "potion 15": (14 + 128 * 8),
            "potion 16": (15 + 128 * 8),
            "potion 17": (16 + 128 * 8),
            "potion 18": (17 + 128 * 8),
            "potion 19": (18 + 128 * 8),
            "potion 20": (19 + 128 * 8),
            "potion 21": (20 + 128 * 8),
            "potion 22": (21 + 128 * 8),
            "potion 23": (22 + 128 * 8),
            "potion 24": (23 + 128 * 8),
            "potion 25": (24 + 128 * 8),
            "potion 26": (25 + 128 * 8),
            "magical symbol R": (39 + 128 * 7),
            "magical symbol Y": (40 + 128 * 7),
            "magical symbol G": (41 + 128 * 7),
            "star 1": (48 + 128 * 1),
            "star 2": (49 + 128 * 1),
            "star 3": (50 + 128 * 1),
            "star 4": (51 + 128 * 1),
            "star 5": (52 + 128 * 1),
            "star 6": (53 + 128 * 1),
            "star 7": (54 + 128 * 1),
            "star 8": (55 + 128 * 1),
            "star 9": (56 + 128 * 1),
            "star 10": (57 + 128 * 1),
            "star 11": (58 + 128 * 1),
            "star 12": (59 + 128 * 1),
            "chest 1": (0 + 128 * 7),
            "chest 2": (1 + 128 * 7),
            "chest 3": (2 + 128 * 7),
            "chest 4": (3 + 128 * 7),
            "chest 5": (4 + 128 * 7),
            "chest 6": (5 + 128 * 7),
            "crystal ball": (42 + 128 * 5),
            "broken sword": (2 + 128 * 10),
            "sword": (16 + 128 * 10),
            "magic sword": (17 + 128 * 10),
            "hammer": (19 + 128 * 10),
        };

        return trad[string];
    },
    getMonsters: function() {
        return level[this.level].monsters;
    },
    isPositionFree: function(x,y) {
        return (this.getCollisionMap().indexOf(this.plan[y][x]) !== -1) 
    },
});
