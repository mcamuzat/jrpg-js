class Blacksmith {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        // add the blacksmith
        let path = new Phaser.Curves
                .Path(32 * 4 + 16, 32 * 3 + 16)
                .lineTo(32 * 5 + 16, 32 * 3 + 16)
                .lineTo(32 * 6 + 16, 32 * 4 + 16)
                .lineTo(32 * 6 + 16, 32 * 5 + 16)
                .lineTo(32 * 5 + 16, 32 * 6 + 16)
                .lineTo(32 * 4 + 16, 32 * 6 + 16)
                .lineTo(32 * 3 + 16, 32 * 5 + 16)
                .lineTo(32 * 3 + 16, 32 * 4 + 16)
                .lineTo(32 * 4 + 16, 32 * 3 + 16)
        let smith = new Pnj(scene, path, 0, 0, 'dwarf-smith', 6);
            smith.startFollow({
                positionOnPath: true,
                duration: 3000,
                repeat: -1,
            });
    
        this.collider = scene.physics.add.overlap(player, smith, this.onMeetBlacksmith, false, this);
        scene.physics.world.enable(smith);

        scene.addDecoration(1, 6, "pickaxe")
        scene.addDecoration(8, 5, "hammer")
        scene.addDecoration(8, 7, "pickaxe")
        scene.addDecoration(4, 8, "pickaxe")
        scene.addDecoration(6, 8, "hammer")
        scene.addDecoration(3, 8, "hammer")
    }
    onMeetBlacksmith() {
        this.collider.active = false;
        if (this.engine.isQuestComplete('magic_sword_complete')) {
            this.engine.changeText(
                "Good monster hunting with your awesome magic sword"
        );
        } 
        else if(this.engine.isQuestComplete('blue_crystals_complete')) {
            this.engine.removeItem("sword");
            this.engine.removeItem("blue crystals");
            this.engine.gainItem("magic sword");
            this.engine.completeQuest('magic_sword_complete');
            
        }
        else if (this.engine.isQuestComplete('sword_complete')) {
            this.engine.changeText(
                "This was once a legendary sword, but its enchantments wore off\n"+
                "Find some magic blue crystals in a cave to the East\n"+
                "And I'll reenchant it"
            );
        } 
        else if (this.engine.isQuestComplete('broken_sword_complete')) {
            this.engine.removeItem("broken sword");
            this.engine.gainItem("sword");
            this.engine.completeQuest('sword_complete');
              this.engine.changeText(
                    "Here, I fixed your sword!\n"+
                    "This was once a legendary sword, but its enchantments wore off\n"+
                    "Find some magic blue crystals in a cave to the East\n"+
                    "And I'll reenchant it"
            );

        } else {
            this.engine.changeText(
            "You look like a hero, but you have no sword\n"+
            "There's one on a meadow to the south.\n"+
            "It's broken but if you bring it here I'll fix it for you"
            );
        }


        setTimeout(
            function () {
                this.collider.active = true;
            }.bind(this), 1000);
    }
}