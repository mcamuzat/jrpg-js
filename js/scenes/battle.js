var BattleScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function BattleScene ()
    {
        Phaser.Scene.call(this, { key: "BattleScene" });
    },
    create: function ()
    {    
        // change the background to green
        this.cameras.main.setBackgroundColor("rgba(0, 200, 0, 0.5)");
        // on wake event we call startBattle too
        this.startBattle();
        this.sys.events.on('wake', this.startBattle, this);  

    },
    startBattle: function() {
        var engine = this.scene.get('EngineScene');
        var positions = [{x:50, y:70},{x:50, y:150},{x:50, y:230}];
        var pointerPositions = [{x:15, y:70},{x:15, y:150},{x:15, y:230}];
        var questions = engine.choices(3, this.registry.get('monsterType'));
        this.enemies = []; 
        this.pointers = [];
        var paths = [
            new Phaser.Curves.Path(50, 70).circleTo(Math.random()*10),
            new Phaser.Curves.Path(50, 150).circleTo(Math.random()*10),
            new Phaser.Curves.Path(50, 230).circleTo(Math.random()*10),
        ];
        for (let i = 0; i < positions.length; i++) {
            let monster = new AnimatedBadGuy(
                this, 
                paths[i],
                positions[i].x, 
                positions[i].y, 
                'angband',
                this.registry.get('tiles'),
                questions[i],
                engine
            );
            monster.startFollow({
                positionOnPath: true,
                duration: Phaser.Math.Between(2000, 3000),
                repeat: -1,
                verticalAdjust: true
            });
            this.enemies.push(monster);
        }
        for (let i = 0; i < pointerPositions.length; i++) {
            let pointer = this.physics.add.sprite(pointerPositions[i].x, pointerPositions[i].y, 'angband', 169);
            if (i !=0) {
                pointer.visible = false;
            }
            this.pointers.push(pointer);
        }
        let player = this.physics.add.sprite(400, 200, 'player', 9);
        player.setScale(2);
        this.indexMonster = 0;
        this.message = new Message(this, this.events);
        this.add.existing(this.message);
        this.nextTurn();        
    },
    nextTurn: function() {
        var engine = this.scene.get('EngineScene');
        if(this.checkEndBattle()) {  
            this.endBattle();
            engine.saveGame();
        }
        var element = this.add.dom(450, 300).createFromCache('nameform');
        element.setPerspective(800);
        element.addListener('keydown').getChildByName('nameField').focus();
        element.on('keydown', function (event) {
            // why the spacebar is not captured by the textfield
            if (event.key === ' ') {
                var inputText = element.getChildByName('nameField');
                inputText.value += " ";
            };
            if (event.key === 'Enter' || event.keyCode === 13) {
                var inputText = element.getChildByName('nameField');
                if(this.enemies[this.indexMonster].type == 'kanji') {
                    inputText.value = wanakana.toHiragana(inputText.value);
                }
                if(this.enemies[this.indexMonster].answer.indexOf(inputText.value.toLowerCase()) !== -1) {
                    this.enemies[this.indexMonster].living = false;
                    this.enemies[this.indexMonster].destroy();
                    engine.beat(this.enemies[this.indexMonster].xpcode);
                    engine.addText("You slayed demon "+
                        this.enemies[this.indexMonster].question+
                        " ("+ this.enemies[this.indexMonster].answer.join(", ")+ ")");
                    this.pointers[this.indexMonster].visible = false;    
                    this.indexMonster++;
                    if (this.pointers[this.indexMonster] !== undefined) {
                        this.pointers[this.indexMonster].visible = true;
                    }
                    engine.gainXp(1);
                    this.nextTurn();
                } else {
                    this.events.emit("Message", {text: this.enemies[this.indexMonster].help, delay:"3000"});
                    engine.addText("demon "+
                        this.enemies[this.indexMonster].question+
                        " ("+ this.enemies[this.indexMonster].answer.join(", ")+ ") hit you !");
                    inputText.value = "";
                    this.cameras.main.shake(300);
                    engine.isHit(1);
                    this.nextTurn();
                }
            };
        },this);
    },     
    // check for game over or victory
    checkEndBattle: function() {
        var engine = this.scene.get('EngineScene');        
        var victory = true;
        // if all enemies are dead we have victory
        for(var i = 0; i < this.enemies.length; i++) {
            if(this.enemies[i].living) {
                victory = false;
            }
        }
        if (engine.getHp() <= 0) {
            victory = true;
        }
        return victory;
    },
    endBattle: function() {
        var engine = this.scene.get('EngineScene');
        
        if (engine.getHp() <= 0) {
            this.enemies.map((x) => x.destroy())
            this.scene.get('WorldScene').scene.restart({level: 'hospital', x:2, y:2});
        } 
        this.scene.switch('WorldScene');
        
    }
});

// the message class extends containter 
var Message = new Phaser.Class({

    Extends: Phaser.GameObjects.Container,

    initialize:
    function Message(scene, events) {
        Phaser.GameObjects.Container.call(this, scene, 160, 30);
        var graphics = this.scene.add.graphics();
        this.add(graphics);
        graphics.lineStyle(1, 0xffffff, 0.8);
        graphics.fillStyle(0x031f4c, 0.3);        
        graphics.strokeRect(-90, -15, 180, 30);
        graphics.fillRect(-90, -15, 180, 30);
        this.text = new Phaser.GameObjects.Text(scene, 0, 0, "", { color: "#ffffff", align: "center", fontSize: 13, wordWrap: { width: 170, useAdvancedWrap: true }});
        this.add(this.text);
        this.text.setOrigin(0.5);        
        events.on("Message", this.showMessage, this);
        this.visible = false;
        this.setSize(160,30);
        this.setInteractive();
   
           
    },
    showMessage: function(text) {
        this.text.setText(text.text);
        this.visible = true;
        if(this.hideEvent)
            this.hideEvent.remove(false);
        this.hideEvent = this.scene.time.addEvent({ delay: text.delay, callback: this.hideMessage, callbackScope: this });
    },
    hideMessage: function() {
        this.hideEvent = null;
        this.visible = false;
    }
});
