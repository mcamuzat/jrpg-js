class WizardShop {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;
        
        let path1 = new Phaser.Curves
            .Path(32 * 3 + 16, 32 * 4 + 16)
            .lineTo(32 * 6 + 16, 32 * 4 + 16)
            .lineTo(32 * 3 + 16, 32 * 4 + 16);
        let wizard = new Npc(scene, path1, 0, 0, 'wizard-gray', 6);
        wizard.startFollow({
            positionOnPath: true,
            duration: 3000,
            repeat: -1,
        });

        scene.physics.add.overlap(player, wizard, this.onMeetWizard, false, this);
        scene.physics.world.enable(wizard);
    }
}