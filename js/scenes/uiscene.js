var UIScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function UIScene() {
            Phaser.Scene.call(this, { key: 'UIScene', active: true });
        },

    create: function () {
        var engine = this.scene.get('EngineScene');
        engine.loadGame();
        //  Our Text object to display the Score
        var xp = this.add.text(330, 10, 'Xp: ' + engine.getXp(), { font: '12px Arial', fill: '#ffffff' });
        var life = this.add.text(330, 20, 'Life: ' + engine.getHp(), { font: '12px Arial', fill: '#ffffff' });
        var money = this.add.text(330, 30, 'money: 0', { font: '12px Arial', fill: '#ffffff' });
        var text = this.add.text(10, 330, "Welcome to the 日本語RPG", { font: '12px Arial', fill: '#ffffff', wordWrap: { width: 480 } });
        this.inventory = this.physics.add.group({ classType: Phaser.GameObjects.Sprite });
        //  Listen for events from it
        engine.events.on('addXp', function () {
            xp.setText('Xp: ' + engine.getXp());
        }, this);
        //  Listen for events from it
        engine.events.on('changeText', function (data) {
            text.setText(data);
        }, this);
        engine.events.on('addMoney', function () {
            money.setText('Money: ' + engine.money);
        }, this);
        engine.events.on('addItem', function () {
            this.inventory.clear(true, true);
            let items = engine.getItems();
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                let sprite = new Phaser.GameObjects.Sprite(this, 350 + 32 * i + 16, 100 + 16, 'angband', engine.translateTile(item));
                this.inventory.add(sprite, true);
            }
        }, this);
        engine.events.on('changeHp', function () {
            life.setText("Life : " + engine.getHp())
        }, this);
    }
});