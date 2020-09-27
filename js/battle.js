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
        var positions = [{x:50, y:50},{x:50, y:130},{x:50, y:200}];
        this.enemies = []; 
        for (let i = 0; i < positions.length; i++) {
            let [question, answer, help, furigana] = engine.getQuestion(this.registry.get('monsterType'));
            this.enemies.push(new BadGuy(
                this, 
                positions[i].x, 
                positions[i].y, 
                "angband",
                this.registry.get('tiles'),
                question, 
                answer,
                help,
                furigana
                )
                );
        }
        this.indexMonster = 0;
        this.message = new Message(this, this.events);
        this.add.existing(this.message);
        this.nextTurn();        
    },
    nextTurn: function() {
        var engine = this.scene.get('EngineScene');
        if(this.checkEndBattle()) {           
            this.endBattle();
            engine.gainXp(1);
            engine.saveGame();
        }
        var element = this.add.dom(200, 200).createFromCache('nameform');
        element.setPerspective(800);
        element.addListener('keydown').getChildByName('nameField').focus();
        element.on('keydown', function (event) {
            if (event.key === 'Enter' || event.keyCode === 13) {
                var inputText = element.getChildByName('nameField');
                console.log(this.enemies[this.indexMonster].furigana);
                if(this.enemies[this.indexMonster].furigana.length > 0) {
                    inputText.value = wanakana.toHiragana(inputText.value);
                }
                if(this.enemies[this.indexMonster].answer.indexOf(inputText.value) !== -1) {
                    this.enemies[this.indexMonster].living = false;
                    this.enemies[this.indexMonster].destroy();
                    this.indexMonster++;
                    this.nextTurn();
                } else {
                    this.events.emit("Message", {text: this.enemies[this.indexMonster].help, delay:"3000"});
                    engine.changeText(this.enemies[this.indexMonster].help);
                    inputText.value = "";
                }
            };
        },this);
    },     
    // check for game over or victory
    checkEndBattle: function() {        
        var victory = true;
        // if all enemies are dead we have victory
        for(var i = 0; i < this.enemies.length; i++) {
            if(this.enemies[i].living)
                victory = false;
        }
       
        return victory;
    },
    endBattle: function() {
        this.scene.switch('WorldScene');
    }
});

class BadGuy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, question, answer, help, furigana = []) {
        super(scene, x, y, texture, frame);
        this.answer = answer;
        this.question = question;
        this.help = help;
        this.words = [];
        if (furigana.length === 0) {
            let text = scene.add.text(x , y - 50, question, { color: 'white', fontSize: '20px '});
            this.words.push(text);
        } else {
            furigana.map((value, index) => {
                let text = scene.add.text(x + index * 45 ,y + 15 , value[0], { color: "#ffffff", align: "center", fontSize: 45, wordWrap: { width: 170, useAdvancedWrap: true }});
                let furigana = scene.add.text(x + index * 45 + 15, y , value[1], { color: "#ffffff", align: "center", fontSize: 10, wordWrap: { width: 170, useAdvancedWrap: true }});
                this.words.push(text);
                this.words.push(furigana);
            })
        }
        this.living = true;
        this.furigana = furigana;
        scene.add.existing(this);
    }
    destroy()
    {
        this.words.map(x => x.destroy());
        super.destroy();
    }
};

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