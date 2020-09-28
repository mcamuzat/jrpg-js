class Cave {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;
        
        // Meadow
        if (engine.isQuestComplete('sword_complete') && !engine.isQuestComplete('blue_crystals_complete')) {
            let bluecrystal = scene.physics.add.sprite(32 * 27 + 16, 32 * 2 + 16, 'angband', engine.translateTile('blue crystals'));
            scene.physics.add.overlap(player, bluecrystal, this.onMeetBluecrystal, false, this);
        }



    }
    onMeetBluecrystal(player, crystal) {
        this.engine.changeText("Now take the blue crystal back to the smith.");
        this.engine.gainItem("blue crystals");
        this.engine.completeQuest("blue_crystals_complete");
        crystal.destroy();

    }
}