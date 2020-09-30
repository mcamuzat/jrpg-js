class Npc extends Phaser.GameObjects.PathFollower {
    constructor(scene, path, x, y, texture, frame) {
        super(scene, path, x, y, texture, frame);
        this.oldx = 0;
        this.oldy = 0;
        scene.add.existing(this);

        scene.anims.create({
            key: 'left-' + texture,
            frames: scene.anims.generateFrameNumbers(texture, { frames: [9, 10, 11, 9] }),
            frameRate: 10,
            repeat: -1
        });

        // animation with key 'right'
        scene.anims.create({
            key: 'right-' + texture,
            frames: scene.anims.generateFrameNumbers(texture, { frames: [3, 4, 5, 3] }),
            frameRate: 10,
            repeat: -1
        });
        scene.anims.create({
            key: 'up-' + texture,
            frames: scene.anims.generateFrameNumbers(texture, { frames: [0, 1, 2, 0] }),
            frameRate: 10,
            repeat: -1
        });
        scene.anims.create({
            key: 'down-' + texture,
            frames: scene.anims.generateFrameNumbers(texture, { frames: [6, 7, 8, 6] }),
            frameRate: 10,
            repeat: -1
        });
        this.textureName = texture;
    }
    preUpdate() {
        super.preUpdate()
        let dx = this.x - this.oldx;
        let dy = this.y - this.oldy;
        if (dx > 0) {
            this.anims.play('right-' + this.textureName, true)
        }
        if (dx < 0) {
            this.anims.play('left-' + this.textureName, true);
        }
        if (dy > 0) {
            this.anims.play('down-' + this.textureName, true)
        }
        if (dy < 0) {
            this.anims.play('up-' + this.textureName, true);
        }
        this.oldx = this.x;
        this.oldy = this.y;
    }
};