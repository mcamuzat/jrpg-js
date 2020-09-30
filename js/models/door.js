class Door extends Phaser.GameObjects.Zone {
    constructor(scene, x, y, level, doorX = -1, doorY = -1) {
        super(scene, x, y, 16, 16);
        this.level = level;
        this.doorX = doorX;
        this.doorY = doorY;
    }
}