class Hospital {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine
        var path2 = new Phaser.Curves.Path(32 * 1 + 16 , 32 * 5 + 16)
        .lineTo(32 * 8 + 16, 5 * 32 + 16).lineTo(32 * 1 + 16 , 32 * 5 + 16);
        let nurse = new Pnj(scene, path2, 0, 0, 'nurse',6);
        nurse.startFollow({
            positionOnPath: true,
            duration: 5000,
            repeat: -1,
        });
        scene.physics.world.enable(nurse);
        this.collider = scene.physics.add.overlap(player, nurse, this.onMeetNurse, false, this);
    }
    onMeetNurse(player, soldat){
        this.collider.active = false;
        setTimeout(
            function(){
                this.collider.active = true;
            }.bind(this), 10000);
    } 
}