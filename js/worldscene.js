
// Base class for door 
var Door = new Phaser.Class({
    Extends: Phaser.GameObjects.Zone,
    initialize:
    function Door(scene, x, y, level) {
        Phaser.GameObjects.Zone.call(this, scene, x, y, 16,16)
        this.level = level;
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
        this.game.level = input
        // create the map
        var map = this.make.tilemap({ key: 'map' });
        var engine = this.scene.get('EngineScene')
        engine.generateMap(input.level);
        var plan = engine.getMapAsArray();
        var map = this.make.tilemap({ data: plan, tileWidth: 32, tileHeight: 32 });
        // first parameter is the name of the tilemap in tiled
        var tiles = map.addTilesetImage('tiles');

        // creating the layers
        //var grass = map.createStaticLayer('Grass', tiles, 0, 0);
        var obstacles = map.createStaticLayer(0, tiles, 0, 0);

        // make all tiles in obstacles collidable
        obstacles.setCollisionByExclusion(engine.getCollisionMap());

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
        // place the player
        [x,y] = engine.getFreePosition();
        this.player = this.physics.add.sprite(x, y, 'player', 6);
        
        // add doors
        this.doors = this.physics.add.group({ classType: Door });
        doors = engine.getDoors()
        for (let i = 0; i < doors.length; i++) {
            if (doors[i].position == 'random') {
                [x,y] = engine.getFreePosition();
                var door = new Door(this, x, y,doors[i].level);
            } else {
                var door = new Door(this, 32 * doors[i].x + 16 , 32 * doors[i].y + 16 ,doors[i].level);   
            }
            this.doors.add(door);
        }
       
        this.physics.add.overlap(this.player, this.doors, this.onMeetDoor, false, this);  

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
        for (var i = 0; i < 10; i++) {
            [x, y] = engine.getFreePosition();
            // parameters are x, y, width, height
            this.spawns.create(x, y, 32, 32);
        }
        // add collider
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
    
    },
    onMeetEnemy: function (player, zone) {
        //this.scene.restart();
        // we move the zone to some other location
        this.cursors.left.reset();
        this.cursors.right.reset();
        this.cursors.up.reset();
        this.cursors.down.reset();
        zone.destroy();
        this.cameras.main.shake(300);
        this.cursors.left.reset();
        this.cursors.right.reset();
        this.cursors.up.reset();
        this.cursors.down.reset();

        // start battle 
        // switch to BattleScene
        this.scene.switch('BattleScene');

    },
    onMeetDoor: function (player, door) {
        console.log(door.level);
        this.scene.restart({level: door.level});
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