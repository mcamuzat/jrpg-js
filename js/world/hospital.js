class Hospital {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        this.healedToday = false;

        let emergency_healing = (engine.getHp() <= 0);

        if (emergency_healing) {
            this.onMeetNurse();
        }

        var path2 = new Phaser.Curves.Path(32 * 1 + 16 , 32 * 5 + 16)
        .lineTo(32 * 8 + 16, 5 * 32 + 16).lineTo(32 * 1 + 16 , 32 * 5 + 16);
        let nurse = new Npc(scene, path2, 0, 0, 'nurse',6);
        nurse.startFollow({
            positionOnPath: true,
            duration: 5000,
            repeat: -1,
        });
        scene.physics.world.enable(nurse);
        this.collider = scene.physics.add.overlap(player, nurse, this.onMeetNurse, false, this);
    }
    onMeetNurse(){
        if (this.engine.getHp() != this.engine.getHpMax()) {
            this.engine.restoreHp();
            this.engine.changeText("You're healed now.\n Take care of yourself the next time.");
            this.healedToday = true
        } 
            if (!this.healedToday) {
                this.engine.changeText("Come here if you're hurt.\n he hospital can cure your wounds.");
            }
        
     
    } 
}