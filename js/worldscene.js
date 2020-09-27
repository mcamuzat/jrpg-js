var UIScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function UIScene ()
    {
        Phaser.Scene.call(this, { key: 'UIScene', active: true });
    },

    create: function ()
    { 
        var engine = this.scene.get('EngineScene');
        engine.loadGame();
        //  Our Text object to display the Score
        var xp = this.add.text(330, 10, 'Xp: '+ engine.getXp(), { font: '12px Arial', fill: '#ffffff' });
        var life = this.add.text(330, 20, 'life: '+ engine.getHp(), { font: '12px Arial', fill: '#ffffff' });
        var money = this.add.text(330, 30, 'money: 0', { font: '12px Arial', fill: '#ffffff' });
        var text = this.add.text(10, 330, "Welcome to the 日本語RPG", { font: '12px Arial', fill: '#ffffff', wordWrap:{width:480 } });
        //  Grab a reference to the Game Scene
        

        //  Listen for events from it
        engine.events.on('addXp', function () {
            xp.setText('Xp: ' + engine.getXp());
        }, this);
        //  Listen for events from it
        engine.events.on('changeText', function (data) {
             text.setText(data);
        }, this);
        engine.events.on('addMoney', function (data) {
            money.setText('Money: '+ engine.money);
       }, this);
    }
});

// Base class for door 
var Door = new Phaser.Class({
    Extends: Phaser.GameObjects.Zone,
    initialize:
    function Door(scene, x, y, level, doorX = -1, doorY = -1) {
        Phaser.GameObjects.Zone.call(this, scene, x, y, 16,16)
        this.level = level;
        this.doorX = doorX;
        this.doorY = doorY;
    }
});

class Monster extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, quizz) {
        super(scene,  x, y, texture , frame);
        this.quizz = quizz
    }
};

class Pnj extends Phaser.GameObjects.PathFollower {
    constructor(scene, path, x, y, texture, frame) {
        super(scene, path, x, y, texture , frame);
        this.oldx = 0;
        this.oldy = 0;
        scene.add.existing(this);
         //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
        scene.anims.create({
            key: 'left-'+texture,
            frames: scene.anims.generateFrameNumbers(texture, { frames: [9, 10, 11, 9] }),
            frameRate: 10,
            repeat: -1
        });

        // animation with key 'right'
        scene.anims.create({
            key: 'right-'+texture,
            frames: scene.anims.generateFrameNumbers(texture, { frames: [3, 4, 5, 3] }),
            frameRate: 10,
            repeat: -1
        });
        scene.anims.create({
            key: 'up-'+texture,
            frames: scene.anims.generateFrameNumbers(texture, { frames: [0, 1, 2, 0] }),
            frameRate: 10,
            repeat: -1
        });
        scene.anims.create({
            key: 'down-'+texture,
            frames: scene.anims.generateFrameNumbers(texture, { frames: [6, 7, 8, 6] }),
            frameRate: 10,
            repeat: -1
        });
        this.textureName = texture;
    }
    preUpdate() 
    {
        super.preUpdate()
        let dx = this.x - this.oldx;
        let dy = this.y - this.oldy;
        if (dx > 0) {
            this.anims.play('right-'+ this.textureName, true)
        }
        if (dx < 0){
            this.anims.play('left-'+ this.textureName, true);
        }
        if (dy > 0) {
            this.anims.play('down-'+ this.textureName, true)
        }
        if (dy < 0){
            this.anims.play('up-'+ this.textureName, true);
        }
        this.oldx = this.x;
        this.oldy = this.y;
    }
};
var WorldScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function WorldScene() {
            Phaser.Scene.call(this, { key: 'WorldScene' });
        },

    preload: function () {
    },

    create: function (input) {
        this.game.level = input.level;
        // create the map
        var map = this.make.tilemap({ key: 'map' });
        var engine = this.scene.get('EngineScene');
        engine.loadGame();
        engine.generateMap(input.level);
        var plan = engine.getMapAsArray();
        map = this.make.tilemap({ data: plan, tileWidth: 32, tileHeight: 32 });
        // first parameter is the name of the tilemap in tiled
        var tiles = map.addTilesetImage('tiles');

        // creating the layers
        var obstacles = map.createDynamicLayer(0, tiles, 0, 0);

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
        if (input.x == -1) {
            var [x,y] = engine.getFreePosition();
        } else{
            var [x,y] = [input.x, input.y]
        }
        this.player = this.physics.add.sprite(32 * x + 16 , 32 * y +16, 'player', 6);

        // add doors
        this.doors = this.physics.add.group({ classType: Door });
        doors = engine.getDoors()
        for (let i = 0; i < doors.length; i++) {
            if (doors[i].position == 'random') {
                let [x,y] = engine.getFreePosition();
                var door = new Door(this, x, y,doors[i].level);
            } else {
                var door = new Door(
                    this, 
                    32 * doors[i].x + 16 ,
                    32 * doors[i].y + 16 ,
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
        this.cameras.main.setSize(32*10,32*10);
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
                    if (engine.isPositionFree(x,y) && Math.random() < monster.probability) {
                        // choose a random sprite
                        let nbMonster = monster.type.length;
                        let quizz = monster.vocabulary;
                        //Pick a random number between the amount of words and 0
                        let randomMonster = Math.floor((Math.random() * nbMonster));
                        let tile = engine.translateTile(monster.type[randomMonster]);
                        let sprite = new Monster(this,32 * x + 16, 32 * y + 16,'angband', tile, quizz);
                        this.spawns.add(sprite,true);
                    }
                } 
            } 
        }
        // add collider
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
        // mode debug 
        var keyObj = this.input.keyboard.addKey('ONE');  // Get key object
        keyObj.on('down', function(event) {
            this.spawns.clear(true,true);
        }.bind(this));
        let levelScene = engine.getLevelClass();
        levelScene.addScene(this, this.player, engine);

    },
    onMeetEnemy: function (player, zone) {
        //this.scene.restart();
        // we move the zone to some other location
        this.cameras.main.shake(300);
        zone.destroy();
        this.cursors.left.reset();
        this.cursors.right.reset();
        this.cursors.up.reset();
        this.cursors.down.reset();

        // start battle 
        // switch to BattleScene
        this.registry.set('monsterType', zone.quizz)
        this.registry.set('tiles', zone.frame.name);
        this.scene.switch('BattleScene');
    },
    onMeetDoor: function (player, door) {
        this.scene.restart({level: door.level, x:door.doorX, y:door.doorY});
        // we move the zone to some other location
    },
    addDecoration: function(x,y, tiles) {
        let engine = this.scene.get('EngineScene');
        this.physics.add.sprite(32 * x + 16 , 32 * y +16, 'angband',engine.translateTile(tiles));
    },
    update: function (time, delta) {
        this.player.body.setVelocity(0);
        let velocity = 80;
        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-velocity);
        }
        else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(velocity);
        }
        // Vertical movement
        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-velocity);
        }
        else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(velocity);
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
