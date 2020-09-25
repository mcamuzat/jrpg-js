class Outside {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        //this.engine.quests = ['elven_gate_tax']
        
        // elven tax
        if(this.engine.isQuestComplete('elven_gate_tax')) {
            this.scene.map.putTileAt(2847,6,16);
            this.scene.map.putTileAt(2847,46,31);
            this.scene.map.putTileAt(2847,23,36);
        }
        // add the money
        
        // add the gard

        //door 
        //this.scene.map.putTileAt(2900,6,16);
        //this.scene.map.putTileAt(2900,46,31);
        //this.scene.map.putTileAt(2900,23,36);
        var path2 = new Phaser.Curves.Path(16, 16).lineTo(16, 64).lineTo(64,64).lineTo(64,16).lineTo(16,16);
        let soldat = new Pnj(scene, path2, 0, 0, 'soldat',6);
        soldat.startFollow({
            positionOnPath: true,
            duration: 3000,
            repeat: -1,
        });
        this.collider = scene.physics.add.overlap(player, soldat, this.onMeetSoldat, false, this);
        scene.physics.world.enable(soldat);
       
    }
    
    onMeetSoldat(player, soldat){
        this.engine.gainXp(10);
        this.collider.active = false;
        
        this.engine.completeQuest('elven_gate_tax');
        this.engine.changeText('elven_gate_tax');

        if (this.engine.isQuestComplete('elven_gate_tax')) {
            this.scene.map.putTileAt(2900,6,16);
            this.scene.map.putTileAt(2900,46,31);
            this.scene.map.putTileAt(2900,23,36);
        }

        this.scene.map.putTileAt(2900,6,16);
         setTimeout(
            function(){
                this.collider.active = true;
            }.bind(this), 10000);
    } 
}