var WorldScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function WorldScene() {
            Phaser.Scene.call(this, { key: 'WorldScene' });
        },

    preload: function () {
        this.load.plugin('rexvirtualjoystickplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true);
    },

    create: function (input) {

        this.game.level = input.level;
        // create the map
        var map = this.make.tilemap({ key: 'map' });
        // get the engine scene contain all the logic of the world map
        var engine = this.scene.get('EngineScene');

        engine.generateMap(input.level);
        // bad hack for show the item
        engine.events.emit('addItem')


        var plan = engine.getMapAsArray();

        map = this.make.tilemap({ data: plan, tileWidth: 32, tileHeight: 32 });
        // first parameter is the name of the tilemap in tiled
        var tiles = map.addTilesetImage('tiles');

        // creating the layers
        var obstacles = map.createDynamicLayer(0, tiles, 0, 0);

        // make all tiles in obstacles collidable
        obstacles.setCollisionByExclusion(engine.getCollisionMap());

        // animation of the player
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { frames: [9, 10, 11, 9] }),
            frameRate: 10
        });

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
        if (input.x == -1) {
            var [x, y] = engine.getFreePosition();
        } else {
            var [x, y] = [input.x, input.y]
        }
        this.player = this.physics.add.sprite(32 * x + 16, 32 * y + 16, 'player', 6);

        // add doors 
        this.doors = this.physics.add.group({ classType: Door });
        doors = engine.getDoors()
        for (let i = 0; i < doors.length; i++) {
            if (doors[i].position == 'random') {
                let [x, y] = engine.getFreePosition();
                var door = new Door(this, x, y, doors[i].level);
            } else {
                var door = new Door(
                    this,
                    32 * doors[i].x + 16,
                    32 * doors[i].y + 16,
                    doors[i].level,
                    doors[i].doorX,
                    doors[i].doorY,
                );
            }
            this.doors.add(door);
        }

        this.physics.add.overlap(this.player, this.doors, this.onMeetDoor, false, this);

        // don't go out of the map
        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.player.setCollideWorldBounds(true);

        this.map = map;

        // don't walk on trees
        this.physics.add.collider(this.player, obstacles);

        // limit camera to map
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.setSize(32 * 16, 32 * 10);
        this.cameras.main.setPosition(64,45);
        //this.cameras.main.setPosition();
        this.cameras.main.startFollow(this.player);
        this.cameras.main.roundPixels = true; // avoid tile bleed

        // user input
        this.cursors = this.input.keyboard.createCursorKeys();

        // where the enemies will be
        this.spawns = this.physics.add.group({ classType: Monster });
        let monsters = engine.getMonsters();
        for (var i = 0; i < monsters.length; i++) {
            let monster = monsters[i];
            let [xmin, xmax] = monster.rangeX;
            let [ymin, ymax] = monster.rangeY;
            for (let x = xmin; x < xmax; x++) {
                for (let y = ymin; y < ymax; y++) {
                    if (engine.isPositionFree(x, y) && Math.random() < monster.probability) {
                        // choose a random sprite
                        let nbMonster = monster.type.length;
                        let quizz = monster.vocabulary;
                        //Pick a random number between the amount of words and 0
                        let randomMonster = Math.floor((Math.random() * nbMonster));
                        let tile = engine.translateTile(monster.type[randomMonster]);
                        let sprite = new Monster(this, 32 * x + 16, 32 * y + 16, 'angband', tile, quizz);
                        this.spawns.add(sprite, true);
                    }
                }
            }
        }
        // add collider
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
        // mode debug 
        var keyObj = this.input.keyboard.addKey('ONE');  // Get key object
        keyObj.on('down', function (event) {
            this.spawns.clear(true, true);
        }.bind(this));
        let levelScene = engine.getLevelClass();
        levelScene.addScene(this, this.player, engine);

        this.joystick = this.plugins.get('rexvirtualjoystickplugin').add(this, {x:100, y:100});
        this.cursorKeys = this.joystick.createCursorKeys();
    },
    onMeetEnemy: function (player, zone) {
        this.cameras.main.shake(300);
        zone.destroy();
        this.cursors.left.reset();
        this.cursors.right.reset();
        this.cursors.up.reset();
        this.cursors.down.reset();
        this.cursorKeys.left.reset();
        this.cursorKeys.right.reset();
        this.cursorKeys.up.reset();
        this.cursorKeys.down.reset()
        // start battle 
        // switch to BattleScene
        this.registry.set('monsterType', zone.quizz)
        this.registry.set('tiles', zone.frame.name);
        // we can't pass value in the scene switch , so we use the registry
        this.scene.switch('BattleScene');

    },
    onMeetDoor: function (player, door) {
        this.scene.restart({ level: door.level, x: door.doorX, y: door.doorY });
    },
    addDecoration: function (x, y, tiles) {
        let engine = this.scene.get('EngineScene');
        this.physics.add.sprite(32 * x + 16, 32 * y + 16, 'angband', engine.translateTile(tiles));
    },
    update: function (time, delta) {
        this.player.body.setVelocity(0);
        let velocity = 300;
        // Horizontal movement
        if (this.cursors.left.isDown||this.cursorKeys.left.isDown) {
            this.player.body.setVelocityX(-velocity);
        }
        else if (this.cursors.right.isDown||this.cursorKeys.right.isDown) {
            this.player.body.setVelocityX(velocity);
        }
        // Vertical movement
        if (this.cursors.up.isDown||this.cursorKeys.up.isDown) {
            this.player.body.setVelocityY(-velocity);
        }
        else if (this.cursors.down.isDown||this.cursorKeys.down.isDown) {
            this.player.body.setVelocityY(velocity);
        }
        // Update the animation last and give left/right animations precedence over up/down animations
        if (this.cursors.left.isDown||this.cursorKeys.left.isDown) {
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown||this.cursorKeys.right.isDown) {
            this.player.anims.play('right', true);
        }
        else if (this.cursors.up.isDown||this.cursorKeys.up.isDown) {
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown||this.cursorKeys.down.isDown) {
            this.player.anims.play('down', true);
        }
        else {
            this.player.anims.stop();
        }
    }
});
