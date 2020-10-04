var EngineScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function BootScene() {
            Phaser.Scene.call(this, { key: 'EngineScene' });
            this.log = [];
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
                    plan[y][x] = (v) ? tiled[level[input].rogueWall]:tiled[level[input].rogueGround]  ;
                });

                break;
            case 'Plan':
               var plan = level[input].plan
               break;
            case 'Jrpg':
                var plan = level[input].plan;
                plan = plan.map((x) => (x.split("").map((z) => tiled[z])));
                break;
            case 'Forest':
                var _map = new ROT.Map.Rogue(
                    level[input].width,
                    level[input].height,
                ); 
                var plan = []
                _map.create(function (x, y, v) {
                    if (!plan[y]) {
                        plan[y] = [];
                    }
                    plan[y][x] = (v) ? tiled[level[input].trees[Math.floor((Math.random() * 2))]] : tiled[level[input].rogueGround];
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
            "levelxp"  : this.levelxp,
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
    getLevelXp: function(){
        return this.levelxp;
    },
    gainXp: function(xp){
        this.xp += xp;
        let new_level = this.levelxp + 1;
        let next_level_xp_req = new_level * (95 + new_level * 5);
        while (this.xp >= next_level_xp_req) {
            this.levelxp = this.levelxp + 1;
            this.hpmax = this.hpmax + 1;
            this.hp    = this.hp + 1;
            new_level  = this.level + 1;
            next_level_xp_req = new_level * (95 + new_level * 5);
        }
        this.events.emit('changeStat');
    },
    addText: function(text){
        this.log.push(text);
        this.events.emit('changeText', this.log.slice(-4))
    },
    changeText: function(text){
        this.events.emit('changeText',text);
    },
    isHit: function(damage){
        this.hp -= damage;
        this.events.emit('changeStat')

    },
    receiveMoney: function(amount) {
        this.money += amount;
        this.events.emit('changeStat');
    },
    hasMoney: function(amount) {
        return this.money >= amount;
    },
    takeMoney: function(amount) {
        this.money -= amount;
        this.events.emit('changeStat');
    },
    getHp: function(){
        return this.hp;
    },
    getHpMax: function(){
        return this.hpmax;
    },
    restoreHp: function(){
        this.hp = this.hpmax;
        this.events.emit('changeStat')
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
            case 'dungeonLevel1':
                return new dungeonLevel1();
            case 'dungeonLevel2':
                return new dungeonLevel2();
            case 'dungeonLevel3':
                return new dungeonLevel3();
            case 'forest':
                return new Forest();
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
                return [[demonClass, x], w];
            }.bind(this)
        );
    },
    choiceKanji: function(demonClass, func) {
        let unbeaten = [];
        let [demonClasse, demonsLimit] = demonClass;
        let demonsUndefeated =  0;
        let demons = Dictionnary[demonClasse];
        let demonsLength = demons.length;
        let weightedDemonList = [];
        for(let i = 0; i < demonsLength; i++) {
            let demon = demons[i];
            let [xpcode, sub] = func(demon);
            if (this.maxed(xpcode)){
                if (sub != -1) {   
                    let [xpsub, ] = func(demons[sub]);
                    if(this.beaten(xpsub)) {
                        continue;
                    }
                }
                weightedDemonList.push([[demonClasse,demon], 1])
            } else if (this.beaten(xpcode)){
                weightedDemonList.push([[demonClasse,demon], 2])
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
            weightedDemonList.push([[demonClasse,demon], w])
        }

        return weightedDemonList;
    },
    extractKanji: function(demon) {
        let [xpcode, , , , sub, ] = demon;
        return [xpcode, sub];
    },
    extractMeaning: function(demon) {
        let [xpcode,] = demon
        return ['meaning'+xpcode, -1]
    },
    choices: function(sampleSize,demonClasses) {
        let weightedDemonList = [];
        for(let i = 0; i < demonClasses.length; i++) {
            let demonClass = demonClasses[i];
            if (Array.isArray(demonClass)) {
                let [demonClasse, demonsLimit] = demonClass;
                if (demonClasse === 'kanji') {
                    weightedDemonList = 
                    weightedDemonList.concat(this.choiceKanji(demonClass, this.extractKanji));
                } else {
                    weightedDemonList = weightedDemonList.concat(this.choiceKanji(demonClass, this.extractMeaning))
                }
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
        let ballLength = balls.length;

        let sample = [];
        while (true) {
            for (let i = 0; i < sampleSize; i++) {
                let random = Math.floor((Math.random() * ballLength));
                sample.push(balls[random]);
            }
            let unique = [...new Set(sample)];
            if (unique.length === sample.length) {
                break;
            }
            sample = [];
        }
        return sample;
    },
    randomClearTiles:function(probability, xmin, xmax, ymin, ymax) {
        let result = [];
        for (let x = xmin; x < xmax; x++) {
            for (let y = ymin; y < ymax; y++) {
                if (this.isPositionFree(x, y) && Math.random() < probability) {
                    result.push([x,y]);
                }
            }
        }
        return result;
    },
    getKanjiKnowledge:function() {
        let kanjiStats = {};
        for (let i=0, len = Dictionnary.kanji.length; i < len; i++) {
            let demon = Dictionnary['kanji'][i];
            let [xpcode, kanji,,,, ] = demon;
            let xp = this.xpfor[xpcode]||0;
            if (xp == 1 || xp ==2) {
                xp +=1;
            }
            if (kanjiStats[kanji] == undefined) {
                kanjiStats[kanji] = [xp,3];
            } else {
                kanjiStats[kanji][0] += xp;
                kanjiStats[kanji][1] += 3;
            }
        }
        let kanjiStatsFinal = [0, 0, 0, 0, 0]
        for (const value in kanjiStats) {
            let [a,b] = kanjiStats[value];
            if (a == 0) {
                kanjiStatsFinal[0]++;
            } else if (a == b) {
                kanjiStatsFinal[4]++;
            } else if (4*a%b == 0) {
                kanjiStatsFinal[1]++;
            } else if (4*a%b == 1) {
                kanjiStatsFinal[2]++;
            } else {
                kanjiStatsFinal[3]++;
            }
        }
        return kanjiStatsFinal;
    },
});
