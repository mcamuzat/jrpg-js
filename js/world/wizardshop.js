class WizardShop {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;
        this.givenPotion = false;
        
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

        let wizardDecoration = [
            "spellbook blue 1",
            "spellbook blue 2",
            "spellbook blue 3",
            "spellbook blue 4",
            "spellbook blue 5",
            "spellbook blue 6",
            "spellbook blue 7",
            "spellbook blue 8",
            "spellbook blue 9",
            "spellbook green 1",
            "spellbook green 2",
            "spellbook green 5",
            "spellbook green 4",
            "spellbook green 5",
            "spellbook green 6",
            "spellbook green 7",
            "spellbook green 8",
            "spellbook green 9",
            "spellbook red 1",
            "spellbook red 2",
            "spellbook red 3",
            "spellbook red 4",
            "spellbook red 5",
            "spellbook red 6",
            "spellbook red 7",
            "spellbook red 8",
            "spellbook red 9",
            "potion 1",
            "potion 2",
            "potion 3",
            "potion 4",
            "potion 5",
            "potion 6",
            "potion 7",
            "potion 8",
            "potion 9",
            "potion 10",
            "potion 11",
            "potion 12",
            "potion 13",
            "potion 14",
            "potion 15",
            "potion 16",
            "potion 17",
            "potion 18",
            "potion 19",
            "potion 20",
            "potion 21",
            "potion 22",
            "potion 23",
            "potion 24",
            "potion 25",
            "potion 26",
        ];
        for (let y = 1; y < 3; y++)  {
            for (let x = 1; x < 9; x++)  {
                if (Math.random() < 0.6) {
                    scene.addDecoration(x,y,this.choices(wizardDecoration));
                }
            } 
        }
        for (let y = 1; y < 9; y++)  {
                if (Math.random() < 0.9) {
                    scene.addDecoration(1,y,this.choices(wizardDecoration));
                    scene.addDecoration(8,y,this.choices(wizardDecoration));
                }
    
        }
    }
    choices(array) {
         let rand = Math.floor((Math.random() * array.length));
         return array[rand];
    }
    onMeetWizard () {
        if (!this.engine.isQuestComplete("antiheat_potion_idea")) {
            this.engine.changeText("I'm making potions from mushrooms.\n But you don't seem to need any.");
        } else if (!(this.engine.isQuestComplete("antiheat_potion_yellow") && this.engine.isQuestComplete("antiheat_potion_bgreen")))
        {
            this.engine.completeQuest("antiheat_potion_recipe");
            this.engine.changeText(
                "Oh, you need an anti-heat potion\n"+
                "Bring me some yellow and bright green mushrooms."
            );

        } else if (!this.engine.isQuestComplete("antiheat_potion_complete")) {
            this.engine.removeItem("yellow mushroom");
            this.engine.removeItem("green mushroom2");
            this.engine.gainItem("potion 5");
            this.engine.completeQuest('antiheat_potion_complete');
            this.engine.changeText(
                "Here's your potion.\nEnjoy the desert."
            );
            this.givenPotion = true;
        } else if (!this.givenPotion) {
            this.engine.changeText(
                   "I'm making potions from mushrooms.\n"+
                   "But you don't seem to need any more potions for now."
            );
        }

    }
    
}