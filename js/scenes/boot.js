var BootScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function BootScene() {
            Phaser.Scene.call(this, { key: 'BootScene' });
        },

    preload: function () {
        // map tiles
        this.load.image('tiles', 'assets/map/angband.png');

        // the html
        this.load.html('nameform', 'assets/nameform.html');

        //
        this.load.spritesheet('player', 'assets/female-blue.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('dwarf-smith', 'assets/dwarf-smith.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('soldat', 'assets/soldier-axe.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('soldier-elf', 'assets/soldier-elf.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('elf-trader', 'assets/elf-trader.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('elf-monk', 'assets/elf-monk.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('arab-trader', 'assets/arab-trader.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('nurse', 'assets/nurse.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('wizard-gray', 'assets/wizard-gray.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('angel-blue', 'assets/angel-blue.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('king', 'assets/king.png', { frameWidth: 24, frameHeight: 32 });
        
        //
        this.load.spritesheet('angband', 'assets/map/angband.png', { frameWidth: 32, frameHeight: 32 });
    },

    create: function () {
        // start the WorldScene
        this.scene.start('WorldScene',{level: 'outside', x:14, y:25});
    }
});