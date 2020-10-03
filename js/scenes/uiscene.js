var UIScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function UIScene() {
            Phaser.Scene.call(this, { key: 'UIScene', active: true });
        },

    create: function () {
        var engine = this.scene.get('EngineScene');
        engine.loadGame();
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 0.5);        
        this.graphics.strokeRect(5, 5, 630, 32);
        this.graphics.fillRect(5, 5, 630, 32);
        this.graphics.strokeRect(5, 321 + 50 , 630, 90);
        this.graphics.fillRect(5, 321+50, 630 , 90);
        //  Our Text object to display the Score
        var Level = this.add.text(10, 10, 'Level: ' + engine.getLevelXp(), { font: '12px Arial', fill: '#ffffff' });
        var xp = this.add.text(80, 10, 'Xp: ' + engine.getXp(), { font: '12px Arial', fill: '#ffffff' });
        var life = this.add.text(160, 10, "Life : " + engine.getHp() + "/" + engine.getHpMax(), { font: '12px Arial', fill: '#ffffff' });
        var money = this.add.text(240, 10, 'money: 0', { font: '12px Arial', fill: '#ffffff' });
        
        this.add.text(320, 10, 'items', { font: '12px Arial', fill: '#ffffff' });
        
        var text = this.add.text(10, 330 + 50, "Welcome to the 日本語RPG", { font: '14px Arial', fill: '#ffffff', wordWrap: { width: 480 } });
        this.inventory = this.physics.add.group({ classType: Phaser.GameObjects.Sprite });
        //  Listen for events from it
        //  Listen for events from it
        engine.events.on('changeText', function (data) {
            text.setText(data);
        }, this);
        engine.events.on('addItem', function () {
            this.inventory.clear(true, true);
            let items = engine.getItems();
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                let sprite = new Phaser.GameObjects.Sprite(this, 350 + 32 * i + 16, 21, 'angband', engine.translateTile(item));
                this.inventory.add(sprite, true);
            }
        }, this);
        engine.events.on('changeHp', function () {
            life.setText("Life : " + engine.getHp())
        }, this);
        engine.events.on('changeStat', function () {
            Level.setText('Level: ' + engine.getLevelXp());
            xp.setText('Xp: ' + engine.getXp());
            money.setText('Money: ' + engine.money);
            life.setText("Life : " + engine.getHp() + "/" + engine.getHpMax())
        }, this);
    }
});