class Blacksmith {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        // add the blacksmith
        let path = new Phaser.Curves
                .Path(32 * 4 + 16, 32 * 3 + 16)
                .lineTo(32 * 5 + 16, 32 * 3 + 16)
                .lineTo(32 * 6 + 16, 32 * 4 + 16)
                .lineTo(32 * 6 + 16, 32 * 5 + 16)
                .lineTo(32 * 5 + 16, 32 * 6 + 16)
                .lineTo(32 * 4 + 16, 32 * 6 + 16)
                .lineTo(32 * 3 + 16, 32 * 5 + 16)
                .lineTo(32 * 3 + 16, 32 * 4 + 16)
                .lineTo(32 * 4 + 16, 32 * 3 + 16)
        let smith = new Pnj(scene, path, 0, 0, 'dwarf-smith', 6);
            smith.startFollow({
                positionOnPath: true,
                duration: 3000,
                repeat: -1,
            });
    
        this.collider = scene.physics.add.overlap(player, smith, this.onMeetBlacksmith, false, this);
        scene.physics.world.enable(smith);

        scene.addDecoration(1, 6, "pickaxe")
        scene.addDecoration(8, 5, "hammer")
        scene.addDecoration(8, 7, "pickaxe")
        scene.addDecoration(4, 8, "pickaxe")
        scene.addDecoration(6, 8, "hammer")
        scene.addDecoration(3, 8, "hammer")
    }
    onMeetBlacksmith(player, soldat) {
        this.collider.active = false;

        setTimeout(
            function () {
                this.collider.active = true;
            }.bind(this), 1000);
    }
}