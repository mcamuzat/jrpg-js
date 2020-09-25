var UIScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function UIScene ()
    {
        Phaser.Scene.call(this, { key: 'UIScene', active: true });
    },

    create: function ()
    { 
        
        //  Our Text object to display the Score
        var xp = this.add.text(330, 10, 'xp: 0', { font: '12px Arial', fill: '#ffffff' });
        var life = this.add.text(330, 20, 'life: 0', { font: '12px Arial', fill: '#ffffff' });
        var text = this.add.text(10, 330, "Lorem ipsum dolor sit amet\n, consectetur adipiscing elit. Aliquam rutrum non mi sed aliquet. Sed dapibus, diam sagittis sagittis blandit, felis magna lobortis magna, ac venenatis urna neque quis diam. In hendrerit a leo suscipit porta. Duis in interdum ante. Mauris eget leo ut elit consequat facilisis. Etiam nibh nisl, suscipit vel lacus in, commodo volutpat nunc. Vivamus sed ex facilisis, convallis urna nec, feugiat nunc. Donec sed urna nisl. Cras iaculis commodo lacus, sed placerat justo tincidunt vel. "
        , { font: '12px Arial', fill: '#ffffff', wordWrap:{width:480 } });
        var kanji = new Kanji(this, 320,200,[["十","とお",true],["日","か",false]]);
        //  Grab a reference to the Game Scene
        var ourGame = this.scene.get('EngineScene');

        //  Listen for events from it
        ourGame.events.on('addXp', function () {
            console.log(ourGame.getXp());
            xp.setText('Score: ' + ourGame.getXp());
        }, this);
        //  Listen for events from it
        ourGame.events.on('changeText', function (data) {
             text.setText(data);
        }, this);

    }
});
class Kanji extends Phaser.GameObjects.Container {
    constructor(scene, x, y, furigana) {
        super(scene, x, y);
        var graphics = scene.add.graphics();
        this.add(graphics);
        graphics.lineStyle(1, 0xffffff, 0.8);
        graphics.fillStyle(0x031f4c, 0.3);        
        graphics.strokeRect(0, 0, 180, 30);
        graphics.fillRect(0, 0, 180, 30);
        furigana.map((x, index) => {
            let text = new Phaser.GameObjects.Text(scene, 50 + index * 45 ,15 , x[0], { color: "#ffffff", align: "center", fontSize: 45, wordWrap: { width: 170, useAdvancedWrap: true }});
            let furigana = new Phaser.GameObjects.Text(scene, 50 + index * 45 + 15, 0 , x[1], { color: "#ffffff", align: "center", fontSize: 10, wordWrap: { width: 170, useAdvancedWrap: true }});
            this.add(text);
            this.add(furigana);
        })
        
        scene.add.existing(this);
    }
    // ...

    // preUpdate(time, delta) {}
}

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



class Pnj extends Phaser.GameObjects.PathFollower {
    constructor(scene, path, x, y, texture, frame) {
        super(scene, path, x, y, texture , frame);
        this.oldx = 0;
        this.oldy = 0;
        scene.add.existing(this);
         //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
        scene.anims.create({
            key: 'left-soldat',
            frames: scene.anims.generateFrameNumbers('soldat', { frames: [9, 10, 11, 9] }),
            frameRate: 10,
            repeat: -1
        });

        // animation with key 'right'
        scene.anims.create({
            key: 'right-soldat',
            frames: scene.anims.generateFrameNumbers('soldat', { frames: [3, 4, 5, 3] }),
            frameRate: 10,
            repeat: -1
        });
        scene.anims.create({
            key: 'up-soldat',
            frames: scene.anims.generateFrameNumbers('soldat', { frames: [0, 1, 2, 0] }),
            frameRate: 10,
            repeat: -1
        });
        scene.anims.create({
            key: 'down-soldat',
            frames: scene.anims.generateFrameNumbers('soldat', { frames: [6, 7, 8, 6] }),
            frameRate: 10,
            repeat: -1
        });
    }
    preUpdate() 
    {
        super.preUpdate()
        let dx = this.x - this.oldx;
        let dy = this.y - this.oldy;
        if (dx > 0) {
            this.anims.play('right-soldat', true)
        }
        if (dx < 0){
            this.anims.play('left-soldat', true);
        }
        if (dy > 0) {
            this.anims.play('down-soldat', true)
        }
        if (dy < 0){
            this.anims.play('up-soldat', true);
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
        this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
        for (var i = 0; i < engine.getNumbersOfMonster(); i++) {
            let [x, y] = engine.getFreePosition();
            // parameters are x, y, width, height
            this.spawns.create(x, y, 32, 32);
        }
        // add collider
        this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);

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
        this.scene.switch('BattleScene');

    },
    onMeetDoor: function (player, door) {
        this.scene.restart({level: door.level, x:door.doorX, y:door.doorY});
        // we move the zone to some other location
    },
    update: function (time, delta) {
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
