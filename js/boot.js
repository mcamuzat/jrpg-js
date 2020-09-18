var BootScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function BootScene() {
            Phaser.Scene.call(this, { key: 'BootScene' });
        },

    preload: function () {
        // map tiles
        this.load.image('tiles', 'assets/map/tiles.png');

        this.load.html('nameform', 'assets/nameform.html');
        // enemies
        this.load.image("dragonblue", "assets/dragonblue.png");
        this.load.image("dragonorrange", "assets/dragonorrange.png");
        // our two characters
        this.load.spritesheet('player', 'assets/female-blue.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('door', 'assets/map/tiles.png', { frameWidth: 32, frameHeight: 32 });

    },

    create: function () {
        // start the WorldScene
        this.scene.start('WorldScene',{level: 'level3'});
    }
});