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
                console.log(`Sorry, we are out of ${expr}.`);
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
            if(this.plan[y][x] == 0) {
                found = true;
            }
        }
        return [x*32 + 16,y * 32 + 16]
    },
    getCollisionMap: function() {
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
        this.quests = jrpg.quest;
    },
    pickWord:function(vocabulary = 'hiraganawords') {
        switch (vocabulary) {
            case 'kanji':
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
                    Dictionnary['descriptions'][randomKanji]
                ];
            default:
                //Checking how many words ther are in the array
                let nbwords = Dictionnary[vocabulary].length;

                //Pick a random number between the amount of words and 0
                let randomWord = Math.floor((Math.random() * nbwords));

                //Select a random word from the array
                let [hiragana, english] =  Dictionnary[vocabulary][randomWord];

                return [hiragana, english, english];
                
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
        this.quests.push(nameOfTheQuest);
    },
    isQuestComplete: function(nameOfTheQuest) {
        return (this.quests.indexOf(nameOfTheQuest) != -1); 
    },
    getXp: function(){
        return this.level.xp;
    },
    gainXp: function(xp){

    },
    isHit: function(damage){

    },
    restoreHp: function(){
        this.hp = this.hpmax;
    },

});