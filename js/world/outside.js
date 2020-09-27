class Outside {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        // debug castle open 
        this.scene.map.putTileAt(32 + 128 * 26,6, 16);
        //this.engine.quests = ['elven_gate_tax']
        
        // elven tax
        if(this.engine.isQuestComplete('elven_gate_tax')) {
            this.scene.map.putTileAt(32 + 128 * 26,23,36);
        }
        // add the money
        let coin1 = scene.physics.add.sprite(32 * 1 + 16 , 32 * 41 +16, 'angband',engine.translateTile('copper coins'));
        let coin2 = scene.physics.add.sprite(32 * 1 + 16 , 32 * 45 +16, 'angband',engine.translateTile('copper coins'));
        scene.physics.add.overlap(player, coin1, this.onMeetCoin, false, this);
        scene.physics.add.overlap(player, coin2, this.onMeetCoin, false, this);

        // add the gard
        let pathelf = new Phaser.Curves
            .Path(22 * 32 + 16, 35 * 32 +16)
            .lineTo(22 * 32 + 16, 38 * 32 + 16)
            .lineTo(22 * 32 + 16, 35 * 32 +16)
        let soldat = new Pnj(scene, pathelf, 0, 0, 'soldier-elf',6);
        soldat.startFollow({
            positionOnPath: true,
            duration: 3000,
            repeat: -1,
        });

        this.collider = scene.physics.add.overlap(player, soldat, this.onMeetSoldat, false, this);
        scene.physics.world.enable(soldat);

        //Elven Bridge
        // add the gard
        let pathelf2 = new Phaser.Curves
            .Path(45 * 32 + 16, 32 * 32 + 16)
            .lineTo(47 * 32 + 16, 32 * 32 + 16)
            .lineTo(45 * 32 + 16, 32 * 32 + 16)
        let soldatBridge = new Pnj(scene, pathelf2, 0, 0, 'soldier-elf', 6);
        soldatBridge.startFollow({
            positionOnPath: true,
            duration: 3000,
            repeat: -1,
        });

        this.colliderBridge =  scene.physics.add.overlap(player, soldatBridge, this.onMeetSoldatBridge, false, this);
        scene.physics.world.enable(soldatBridge);

        // elven trader
        let pathElfTrader = new Phaser.Curves
            .Path(3 * 32 + 16, 32 * 23 + 16)
            .lineTo(3 * 32 + 16, 32 * 24 + 16)
            .lineTo(3 * 32 + 16, 32 * 23 + 16)
        let elfTrader = new Pnj(scene, pathElfTrader, 0, 0, 'elf-trader', 6);
        elfTrader.startFollow({
            positionOnPath: true,
            duration: 2000,
            repeat: -1,
        });
        scene.physics.add.overlap(player, elfTrader, this.onMeetElfTrader, false, this);
        scene.physics.world.enable(elfTrader);



        // desert decoration
        scene.addDecoration(57,23,"skeleton 3");
        scene.addDecoration(55,11,"bones");
        scene.addDecoration(51,17,"skull");
        scene.addDecoration(63,16,"skull");
        scene.addDecoration(65,14,"skeleton 5");
        scene.addDecoration(61,24,"skeleton 1");

       
    }
    
    onMeetSoldat(player, soldat){
        this.collider.active = false;
        
        if (this.engine.isQuestComplete('elven_gate_tax')) {
            this.engine.changeText('Welcome to the Elven town.');
        } else {
            if (this.engine.hasMoney(2)) {
                this.engine.takeMoney(2);
                this.engine.completeQuest('elven_gate_tax');
                this.scene.map.putTileAt(32 + 128 * 26,23,36)
                this.engine.changeText('OK, you may come in now.');
            } else {
                this.engine.changeText("You must pay a one-time 2 coins tax to pass.\n"+
                "There's certainly some cash in the forest southwards.\n"+
                "Just watch for the monsters."             
                );
            }
        }
        setTimeout(
            function () {
                this.collider.active = true;
            }.bind(this), 1000);
    }
    onMeetSoldatBridge(player, soldat){
        this.colliderBridge.active = false;
        if (this.engine.isQuestComplete('elven_bridge_ok')) {
            this.engine.changeText("If the demons on the other side are too hard,\n"+
                                "you may want to try with the easy ones on the Dwarven hills.\n"+
                                "The hills are located south from here.");
        } else {
            this.engine.completeQuest('elven_bridge_ok');
            this.engine.changeText("The inexperienced should not cross the bridge, it's too dangerous.\n"+
                    "If you know how to beat the kana demons, you may go ahead.\n"+
                    "Otherwise, train some on the Dwarven hills.\n"+
                    "The hills are located south from here.")
        }
        setTimeout(
            function () {
                this.colliderBridge.active = true;
            }.bind(this), 1000);
    }
    onMeetCoin(player, coin){
        this.engine.receiveMoney(1);
        coin.destroy()
    }
    onMeetElfTrader(player, soldat){
            this.engine.changeText("Many animals and people have been possessed by kanji demons.\n"+
                "You may kill the demons by shouting their names.\n"+
                "I would do that myself, but there are too many names to remember.\n"+
                "Maybe you should visit the Elven town, it's south east from here.");    
       
    }
}
