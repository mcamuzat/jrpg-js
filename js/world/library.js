class Library {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        let path1 = new Phaser.Curves
            .Path(32 * 1 + 16, 32 * 1 + 16)
            .lineTo(32 * 1 + 16, 32 * 3 + 16)
            .lineTo(32 * 4 + 16, 32 * 3 + 16)
            .lineTo(32 * 4 + 16, 32 * 1 + 16)
            .lineTo(32 * 1 + 16, 32 * 1 + 16);
        let elf1 = new Pnj(scene, path1, 0, 0, 'elf-monk', 6);
        elf1.startFollow({
            positionOnPath: true,
            duration: 3000,
            repeat: -1,
        });

        scene.physics.add.overlap(player, elf1, this.onMeetElf1, false, this);
        scene.physics.world.enable(elf1);
        
        let path2 = new Phaser.Curves
            .Path(32 * 5 + 16, 32 * 1 + 16)
            .lineTo(32 * 5 + 16, 32 * 3 + 16)
            .lineTo(32 * 8 + 16, 32 * 3 + 16)
            .lineTo(32 * 8 + 16, 32 * 1 + 16)
            .lineTo(32 * 5 + 16, 32 * 1 + 16);
        let elf2 = new Pnj(scene, path2, 0, 0, 'elf-monk', 6);
        elf2.startFollow({
            positionOnPath: true,
            duration: 3000,
            repeat: -1,
        });
        scene.physics.add.overlap(player, elf2, this.onMeetElf2, false, this);
        //scene.physics.world.enable(elf2);
        let path3 = new Phaser.Curves
            .Path(32 * 1 + 16, 32 * 4 + 16)
            .lineTo(32 * 8 + 16, 32 * 4 + 16)
            .lineTo(32 * 8 + 16, 32 * 6 + 16)
            .lineTo(32 * 1 + 16, 32 * 6 + 16)
            .lineTo(32 * 1 + 16, 32 * 4 + 16);
        let elf3 = new Pnj(scene, path3, 0, 0, 'elf-monk', 6);
        elf3.startFollow({
            positionOnPath: true,
            duration: 6000,
            repeat: -1,
        });
        scene.physics.add.overlap(player, elf3, this.onMeetElf3, false, this);
        scene.physics.world.enable(elf3);
    }
    
}