

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

        // our two characters
        this.load.spritesheet('player', 'assets/female-blue.png', { frameWidth: 24, frameHeight: 32 });
        this.load.spritesheet('door', 'assets/map/tiles.png', { frameWidth: 32, frameHeight: 32 });

    },

    create: function () {
        // start the WorldScene
        this.scene.start('WorldScene',{level: 'hiraganawords'});
    }
});

var WorldScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function WorldScene() {
            Phaser.Scene.call(this, { key: 'WorldScene' });
        },

    preload: function () {
    },

    create: function (input) {
        this.game.level = input.level
        // create the map
        var map = this.make.tilemap({ key: 'map' });
        var _map = new ROT.Map.Rogue(40, 40, { connected: true });
        for (var i=0; i<4; i++) _map.create();

        var plan = []
        _map.create(function (x, y, v) {
            if (!plan[y]) {
                plan[y] = [];
            }
            plan[y][x] = v;
        });
        var map = this.make.tilemap({ data: plan, tileWidth: 32, tileHeight: 32 });

        // first parameter is the name of the tilemap in tiled
        var tiles = map.addTilesetImage('tiles');

        // creating the layers
        //var grass = map.createStaticLayer('Grass', tiles, 0, 0);
        var obstacles = map.createStaticLayer(0, tiles, 0, 0);

        // make all tiles in obstacles collidable
        obstacles.setCollisionByExclusion([0]);

        //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { frames: [9, 10, 11, 9] }),
            frameRate: 10
        });

        // animation with key 'right'
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { frames: [3, 4, 5, 3] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { frames: [0, 1, 2, 0] }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { frames: [6, 7, 8, 6] }),
            frameRate: 10,
            repeat: -1
        });

        // our player sprite created through the phycis system
        this.player = this.physics.add.sprite(50, 100, 'player', 6);

        this.door = this.physics.add.sprite(16, 16, 'door', 5);

        // don't go out of the map
        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.player.setCollideWorldBounds(true);

        // don't walk on trees
        this.physics.add.collider(this.player, obstacles);

        // limit camera to map
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.roundPixels = true; // avoid tile bleed

        // user input
        this.cursors = this.input.keyboard.createCursorKeys();

        // where the enemies will be
        this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        for (var i = 0; i < 30; i++) {
            var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
            var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
            // parameters are x, y, width, height
            this.spawns.create(x, y, 20, 20);
        }
        // add collider
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
        this.physics.add.overlap(this.player, this.door, this.onMeetDoor, false, this);        
    },
    onMeetEnemy: function (player, zone) {
        //this.scene.restart();
        // we move the zone to some other location
        zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
        this.cameras.main.shake(300);
        this.cursors.left.reset();
        this.cursors.right.reset();
        this.cursors.up.reset();
        this.cursors.down.reset();

        // start battle 
        // switch to BattleScene
        this.scene.switch('BattleScene');

    },
    onMeetDoor: function (player, zone) {
        this.scene.restart({level: 'katakanawords'});
        // we move the zone to some other location
    },
    update: function (time, delta) {
        //    this.controls.update(delta);

        this.player.body.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-80);
        }
        else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(80);
        }

        // Vertical movement
        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-80);
        }
        else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(80);
        }

        // Update the animation last and give left/right animations precedence over up/down animations
        if (this.cursors.left.isDown) {
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.player.anims.play('right', true);
        }
        else if (this.cursors.up.isDown) {
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown) {
            this.player.anims.play('down', true);
        }
        else {
            this.player.anims.stop();
        }
    }

});

var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 320,
    height: 240,
    zoom: 2,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true // set to true to view zones
        }
    },
    dom: {
        createContainer: true
    },
    scene: [
        BootScene,
        WorldScene,
        BattleScene,
    ]
};
var game = new Phaser.Game(config);
