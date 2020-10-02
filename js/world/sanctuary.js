class AngelSanctuary {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;
        
        let path1 = new Phaser.Curves
              .Path(32 * 3 + 16, 32 * 2 + 16)
            .lineTo(32 * 6 + 16, 32 * 2 + 16)
            .lineTo(32 * 7 + 16, 32 * 3 + 16)
            .lineTo(32 * 7 + 16, 32 * 6 + 16)
            .lineTo(32 * 6 + 16, 32 * 7 + 16)
            .lineTo(32 * 3 + 16, 32 * 7 + 16)
            .lineTo(32 * 2 + 16, 32 * 6 + 16)
            .lineTo(32 * 2 + 16, 32 * 3 + 16)
            .lineTo(32 * 3 + 16, 32 * 2 + 16);
        let angel = new Npc(scene, path1, 0, 0, 'angel-blue', 6);
        angel.startFollow({
            positionOnPath: true,
            duration: 9000,
            repeat: -1,
        });

        scene.physics.add.overlap(player, angel, this.onMeetWizard, false, this);
        scene.physics.world.enable(angel);
        
    }
    
}