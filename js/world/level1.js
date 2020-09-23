class Level1 {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine
        var path2 = new Phaser.Curves.Path(16, 16).lineTo(16, 64).lineTo(64,64).lineTo(64,16).lineTo(16,16);
        let soldat = new Pnj(scene, path2, 0, 0, 'soldat',6);
        soldat.startFollow({
            positionOnPath: true,
            duration: 3000,
            repeat: -1,
        });
        scene.physics.world.enable(soldat);
        this.collider = scene.physics.add.overlap(player, soldat, this.onMeetSoldat, false, this);
    }
    onMeetSoldat(player, soldat){
        this.engine.gainXp(10);
        this.collider.active = false;
        setTimeout(
            function(){
                this.collider.active = true;
            }.bind(this), 10000);
    } 
}