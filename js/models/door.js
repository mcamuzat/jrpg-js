// Base class for door 
var Door = new Phaser.Class({
    Extends: Phaser.GameObjects.Zone,
    initialize:
        function Door(scene, x, y, level, doorX = -1, doorY = -1) {
            Phaser.GameObjects.Zone.call(this, scene, x, y, 16, 16)
            this.level = level;
            this.doorX = doorX;
            this.doorY = doorY;
        }
});