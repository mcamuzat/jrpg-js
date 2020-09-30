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
                plan = plan.map((x) => (x.split("").map((z) => tiled[z])));
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
            "xpfor"    : this.xpfor,
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
                "xpfor"    : {},
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
        this.hpmax = jrpg.hpmax;
        this.xpfor = jrpg.xpfor
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
                    "meaning"+Dictionnary['kanjiReading'][randomKanji], 
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
                let [xpcode, kanji, reading, furigana, sub] = Dictionnary['readings'][randomWord2];
                return [xpcode, kanji, reading, reading, furigana];
            default:
                //Checking how many words ther are in the array
                let nbwords = Dictionnary[vocabulary].length;

                //Pick a random number between the amount of words and 0
                let randomWord = Math.floor((Math.random() * nbwords));

                //Select a random word from the array
                let [hiragana, english] =  Dictionnary[vocabulary][randomWord];

                return [hiragana, hiragana, english, english, []];
                
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
        this.events.emit('changeHp')

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
    getHpMax: function(){
        return this.hpmax;
    },
    restoreHp: function(){
        this.hp = this.hpmax;
        this.events.emit('changeHp')
        this.saveGame();
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
            case 'towerLevel3':
                return new TowerLevel3();
            case 'towerLevel':
                return new TowerLevel();
            case 'icyMountains':
                return new IcyMountains();
            case 'sanctuary':
                return new AngelSanctuary();
            default:
                console.log(level[this.level].class)
        }
    },
    translateTile: function (string) {
        return tiled[string];
    },
    getMonsters: function() {
        return level[this.level].monsters;
    },
    isPositionFree: function(x,y) {
        return (this.getCollisionMap().indexOf(this.plan[y][x]) !== -1) 
    },
    choiceKana: function(demonClass) {
        return Dictionnary[demonClass].map(
            function(x) {
                let [code, ] = x;
                let w = (this.maxed(code)) ? 1:2;
                return [x, w];
            }.bind(this)
        );
    },
    choiceKanji: function(demonClass) {
        let unbeaten = [];
        let [demonClasse, demonsLimit] = demonClass;
        let demonsUndefeated =  0;
        let demons = Dictionnary[demonClasse];
        let demonsLength = demons.length;
        let weightedDemonList = [];
        for(let i = 0; i < demonsLength; i++) {
            let demon = demons[i];
            let [xpcode, , , , sub] = demon;
            if (this.maxed(xpcode)){
                if (sub != -1) {    
                    let [xpsub, , , , ] = demons[sub];
                    if(this.beaten(xpsub)) {
                        continue;
                    }
                }
                weightedDemonList.push([demon, 1])
            } else if (this.beaten(xpcode)){
                weightedDemonList.push([demon, 2])
            } else {
                unbeaten.push(demon);
                demonsUndefeated++;
                if (demonsUndefeated > demonsLimit) {
                    break;
                }
            }
        }
        for(let i = 0, len = unbeaten.length ; i < len; i++ ) {
            let demon = unbeaten[i];
            w = Math.floor(8 - (8-1)*i / unbeaten.length);
            weightedDemonList.push([demon, w])
        }
        console.log(weightedDemonList);

        return weightedDemonList;
    },
    choices: function(sampleSize,demonClasses) {
        let weightedDemonList = [];
        for(let i = 0; i < demonClasses.length; i++) {
            let demonClass = demonClasses[i];
            if (Array.isArray(demonClass)) {
                weightedDemonList = weightedDemonList.concat(this.choiceKanji(demonClass));
            } else {
                weightedDemonList = weightedDemonList.concat(this.choiceKana(demonClass));
            }
        }
        return this.weightedSample(weightedDemonList, sampleSize)
    },
    maxed: function(key) {
        return this.xpfor[key]||0 == 3;
    },
    beat: function(key) {
        const current = this.xpfor[key]||0;
        const newXp = Math.min(current + 1, 3)
        this.xpfor[key] = newXp
    },
    beaten: function(key) {
        return this.xpfor[key]||0 >= 1;
    },
    weightedSample: function(population, sampleSize) {
        let balls = [];
        let populationLength = population.length;
        for (let i = 0; i < populationLength;i++) {
            let [k,weight]= population[i]
            for (let z = 0; z< weight; z++) {
                balls.push(k);
            }
        }
        let sample = [];
        let ballLength = balls.length;
        for (let i = 0; i < sampleSize;i++ ) {
            let random = Math.floor((Math.random() * ballLength));
            sample.push(balls[random]);
        }
        return sample;
    }
});
