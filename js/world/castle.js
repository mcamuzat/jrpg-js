class Castle {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        this.scene.map.putTileAt(engine.translateTile('k'), 13, 0);
        
        let path1 = new Phaser.Curves
              .Path(32 * 2 + 16, 32 * 2 + 16)
            .lineTo(32 * 7 + 16, 32 * 2 + 16)
            .lineTo(32 * 7 + 16, 32 * 5 + 16)
            .lineTo(32 * 2 + 16, 32 * 5 + 16)
            .lineTo(32 * 2 + 16, 32 * 2 + 16);
        let king = new Npc(scene, path1, 0, 0, 'king', 6);
        king.startFollow({
            positionOnPath: true,
            duration: 9000,
            repeat: -1,
        });
        
        
        let crystallBall = scene.physics.add.sprite(32 * 15 + 16, 32 * 7 + 16, 'angband', engine.translateTile('crystal ball'));
        scene.physics.add.overlap(player, crystallBall, this.onMeetBrokenSword, false, this);
    }
}