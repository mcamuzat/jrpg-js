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
                "money"    : 10,
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
    getQuestion:function() {
        return this.pickWord(this.getQuizz());
    },
    gainItem: function(item) {
        this.inventory.push(item);

    },
    removeItem:function(item) {

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

    },
    restoreHp: function(){
        this.hp = this.hpmax;
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
        }
        //return new Level1();
    }
});
