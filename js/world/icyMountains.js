class IcyMountains {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        scene.addDecoration(2, 2, "magical symbol R")
        scene.addDecoration(4, 2, "magical symbol G")
        scene.addDecoration(1, 3, "magical symbol Y")
        scene.addDecoration(5, 3, "magical symbol R")
        scene.addDecoration(2, 4, "magical symbol G")
        scene.addDecoration(4, 4, "magical symbol Y")
        scene.addDecoration(3, 3, "magical symbol Y")

        if (!engine.isQuestComplete('ice_artifact')) {
            let redbook = scene.physics.add.sprite(32 * 45 + 16, 32 * 6 + 16, 'angband', engine.translateTile('spellbook red 9'));
            scene.physics.add.overlap(player, redbook, this.onMeetRedSpellBook, false, this);
        }
    }
    onMeetRedSpellBook(player, book) {
        this.engine.changeText("You've got a red spellbook.");
        this.engine.gainItem("spellbook red 9");
        this.engine.completeQuest("ice_artifact");
        book.destroy();

    }
}