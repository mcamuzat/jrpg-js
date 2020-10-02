class Outside {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        if (this.engine.isQuestComplete('castle_gate_open')) {
             this.scene.map.putTileAt(32 + 128 * 26, 6, 16);
        } else {
            this.zone = scene.physics.add.group({ classType: Phaser.GameObjects.Zone });
            let zone = new Phaser.GameObjects.Zone(scene, 32 * 6 +16, 32 * 17 + 16, 20,20);
            this.zone.add(zone);            
            scene.physics.add.overlap(player, this.zone, this.onMeetCastleGate, false, this);
        }
       
        // elven tax
        if (this.engine.isQuestComplete('elven_gate_tax')) {
            this.scene.map.putTileAt(32 + 128 * 26, 23, 36);
        }
        // add the money
        let coin1 = scene.physics.add.sprite(32 * 1 + 16, 32 * 41 + 16, 'angband', engine.translateTile('copper coins'));
        let coin2 = scene.physics.add.sprite(32 * 1 + 16, 32 * 45 + 16, 'angband', engine.translateTile('copper coins'));
        scene.physics.add.overlap(player, coin1, this.onMeetCoin, false, this);
        scene.physics.add.overlap(player, coin2, this.onMeetCoin, false, this);

        // add the gard
        let pathelf = new Phaser.Curves
            .Path(22 * 32 + 16, 35 * 32 + 16)
            .lineTo(22 * 32 + 16, 38 * 32 + 16)
            .lineTo(22 * 32 + 16, 35 * 32 + 16)
        let soldat = new Npc(scene, pathelf, 0, 0, 'soldier-elf', 6);
        soldat.startFollow({
            positionOnPath: true,
            duration: 3000,
            repeat: -1,
        });

        this.collider = scene.physics.add.overlap(player, soldat, this.onMeetSoldat, false, this);
        scene.physics.world.enable(soldat);

        //Elven Bridge
        let pathelf2 = new Phaser.Curves
            .Path(45 * 32 + 16, 32 * 32 + 16)
            .lineTo(47 * 32 + 16, 32 * 32 + 16)
            .lineTo(45 * 32 + 16, 32 * 32 + 16)
        let soldatBridge = new Npc(scene, pathelf2, 0, 0, 'soldier-elf', 6);
        soldatBridge.startFollow({
            positionOnPath: true,
            duration: 3000,
            repeat: -1,
        });

        this.colliderBridge = scene.physics.add.overlap(player, soldatBridge, this.onMeetSoldatBridge, false, this);
        scene.physics.world.enable(soldatBridge);

        // elven trader
        let pathElfTrader = new Phaser.Curves
            .Path(3 * 32 + 16, 32 * 23 + 16)
            .lineTo(3 * 32 + 16, 32 * 24 + 16)
            .lineTo(3 * 32 + 16, 32 * 23 + 16)
        let elfTrader = new Npc(scene, pathElfTrader, 0, 0, 'elf-trader', 6);
        elfTrader.startFollow({
            positionOnPath: true,
            duration: 2000,
            repeat: -1,
        });
        scene.physics.add.overlap(player, elfTrader, this.onMeetElfTrader, false, this);
        scene.physics.world.enable(elfTrader);

        // Meadow
        if (!engine.isQuestComplete('broken_sword_complete')) {
            let brokenSword = scene.physics.add.sprite(32 * 21 + 16, 32 * 56 + 16, 'angband', engine.translateTile('broken sword'));
            scene.physics.add.overlap(player, brokenSword, this.onMeetBrokenSword, false, this);
        }
        // Oasis
        let pathArabTrader = new Phaser.Curves
            .Path(32 * 44 + 16, 32 * 13 + 16)
            .lineTo(32 * 46 + 16, 32 * 13 + 16)
            .lineTo(32 * 44 + 16, 32 * 13 + 16)
        let arabTrader = new Npc(scene, pathArabTrader, 0, 0, 'arab-trader', 6);
        arabTrader.startFollow({
            positionOnPath: true,
            duration: 2000,
            repeat: -1,
        });
        scene.physics.add.overlap(player, arabTrader, this.onMeetArabTrader, false, this);
        scene.physics.world.enable(arabTrader);

        // desert decoration
        scene.addDecoration(57, 23, "skeleton 3");
        scene.addDecoration(55, 11, "bones");
        scene.addDecoration(51, 17, "skull");
        scene.addDecoration(63, 16, "skull");
        scene.addDecoration(65, 14, "skeleton 5");
        scene.addDecoration(61, 24, "skeleton 1");
    
        // desert heat
        if (!engine.isQuestComplete('antiheat_potion_complete')) {
            this.heat = scene.physics.add.group({ classType: Phaser.GameObjects.Zone });
            // parameters are x, y, width, height
            for (let x = 50; x < 70; x++) {
                for (let y = 10; y < 30; y++) {
                    let zone = new Phaser.GameObjects.Zone(scene, 32 * x +16, 32 * y + 16, 20,20);
                    this.heat.add(zone);            
                }
            }
            scene.physics.add.overlap(player, this.heat, this.onMeetHeat, false, this);
        }
        let mushroomDecoration = [
            "black mushroom",
            "white mushroom",
            "gray mushroom",
            "orange mushroom",
            "red mushroom",
            "green mushroom",
            "blue mushroom",
            "Dbrown mushroom",
            "black mushroom 2",
            "gray mushroom 2",
            "violet mushroom",
            "yellow mushroom",
            "red mushroom 2",
            "green mushroom 2",
            "cyan mushroom",
            "Lbrown mushroom",
        ]
        // mushrooms
        let positions = engine.randomClearTiles(0.1, 20 ,40, 10,30);
        for (let i = 0; i < positions.length; i++) {
            let [x,y] = positions[i];
            let mushroom = this.choices(mushroomDecoration);
            if (engine.isQuestComplete('antiheat_potion_recipe')) {
                if ((mushroom == "yellow mushroom") && !engine.isQuestComplete('antiheat_potion_yellow')) {
                    let yellowMushroom = scene.physics.add.sprite(32 * x + 16, 32 * y + 16, 'angband', engine.translateTile(mushroom));
                    scene.physics.add.overlap(player, yellowMushroom, this.onMeetYellowMushroom, false, this);
                }
                if ((mushroom == "green mushroom 2") && !engine.isQuestComplete('antiheat_potion_bgreen')) {
                    console.log('hahioioio');
                    let greenMushroom = scene.physics.add.sprite(32 * x + 16, 32 * y + 16, 'angband', engine.translateTile(mushroom));
                    scene.physics.add.overlap(player, greenMushroom, this.onMeetGreenMushroom, false, this);
                } else {
                    scene.addDecoration(x, y, mushroom);
                }
            } else {
                scene.addDecoration(x, y, mushroom);
            }
        }
        
       //  desert quest
        if (!engine.isQuestComplete("desert artifact")) {
            let book = scene.physics.add.sprite(32 * 61 + 16, 32 * 11 + 16, 'angband', engine.translateTile('spellbook blue 9'));
            scene.physics.add.overlap(player, book, this.onMeetBook, false, this);
        }

    }
    choices(array) {
        let rand = Math.floor((Math.random() * array.length));
        return array[rand];
   }
   
    onMeetSoldat(player, soldat) {
        this.collider.active = false;

        if (this.engine.isQuestComplete('elven_gate_tax')) {
            this.engine.changeText('Welcome to the Elven town.');
        } else {
            if (this.engine.hasMoney(2)) {
                this.engine.takeMoney(2);
                this.engine.completeQuest('elven_gate_tax');
                this.scene.map.putTileAt(32 + 128 * 26, 23, 36)
                this.engine.changeText('OK, you may come in now.');
            } else {
                this.engine.changeText("You must pay a one-time 2 coins tax to pass.\n" +
                    "There's certainly some cash in the forest southwards.\n" +
                    "Just watch for the monsters."
                );
            }
        }
        setTimeout(
            function () {
                this.collider.active = true;
            }.bind(this), 1000);
    }
    onMeetSoldatBridge(player, soldat) {
        this.colliderBridge.active = false;
        if (this.engine.isQuestComplete('elven_bridge_ok')) {
            this.engine.changeText("If the demons on the other side are too hard,\n" +
                "you may want to try with the easy ones on the Dwarven hills.\n" +
                "The hills are located south from here.");
        } else {
            this.engine.completeQuest('elven_bridge_ok');
            this.engine.changeText("The inexperienced should not cross the bridge, it's too dangerous.\n" +
                "If you know how to beat the kana demons, you may go ahead.\n" +
                "Otherwise, train some on the Dwarven hills.\n" +
                "The hills are located south from here.")
        }
        setTimeout(
            function () {
                this.colliderBridge.active = true;
            }.bind(this), 1000);
    }
    
    onMeetCoin(player, coin) {
        this.engine.receiveMoney(1);
        coin.destroy()
    }
    onMeetBrokenSword(player, sword) {
        this.engine.changeText("You've found the magic sword but it's broken.");
        this.engine.gainItem("broken sword");
        this.engine.completeQuest("broken_sword_complete");
        sword.destroy();
    }

    onMeetElfTrader(player, sword) {
        this.engine.changeText("Many animals and people have been possessed by kanji demons.\n" +
            "You may kill the demons by shouting their names.\n" +
            "I would do that myself, but there are too many names to remember.\n" +
            "Maybe you should visit the Elven town, it's south east from here.");

    }
    onMeetArabTrader(player, trader) {
        if (this.engine.isQuestComplete('antiheat potion complete')) {
            this.engine.changeText("So you've drunk the potion.\n You may go to the desert now.");
        } else {
            if (!this.engine.isQuestComplete('antiheat_potion_idea')) {
                this.engine.completeQuest('antiheat_potion_idea')
            }
            this.engine.changeText(
                "The desert east of here is so hot.\n" +
                "You will quickly collapse unless you've drunk a mushroom potion.\n" +
                "Unfortunately I have no idea what kinds of mushrooms are needed.\n" +
                "Ask around in the Elven town maybe.\n"
            );
        }
    }
    onMeetHeat(player, zone) {
        zone.destroy();
        if (Math.random() < 0.25) {
            this.engine.changeText("The heat is too strong.\n You lost 1 HP.");
            this.engine.isHit(1);
        } else {
            this.engine.changeText("The heat is too strong.\n Maybe you should return already..");

        }
    }
    onMeetYellowMushroom(player, mushroom) {
        if (!this.engine.isQuestComplete("antiheat_potion_yellow")) {
            this.engine.gainItem("yellow mushroom");
            this.engine.completeQuest("antiheat_potion_yellow");
            this.engine.changeText("You've got yellow mushrooms.\n"+
                "You need yellow and bright green mushrooms for the potion.");

            mushroom.destroy();
        }
    }
    onMeetGreenMushroom(player, mushroom) {
        if (!this.engine.isQuestComplete("antiheat_potion_bgreen")) {
            this.engine.gainItem("green mushroom 2");
            this.engine.completeQuest("antiheat_potion_bgreen");
            this.engine.changeText("You've got yellow mushrooms.\n"+
                "You need yellow and bright green mushrooms for the potion.");
            mushroom.destroy();
        };
    }

    onMeetBook(player, book) {
        this.engine.changeText("You've got a spellbook.");
        this.engine.gainItem("spellbook blue 9");
        this.engine.completeQuest("desert_artifact");
        book.destroy();

    }
    
    onMeetCastleGate(player, zone) {
        if (this.engine.isQuestComplete("castle_gate_open")) {
            return;
        }
        if (this.engine.isQuestComplete("desert_artifact") && this.engine.isQuestComplete("magic_sword_complete")) {
            this.engine.changeText("Oh, you're a hero. Please come in.");
            this.scene.map.putTileAt(32 + 128 * 26, 6, 16);
            this.engine.completeQuest("castle_gate_open");

        } else {
            this.engine.changeText(
                    "We're looking for a hero to face kanji monsters.\n"+
                    "But too many brave souls failed already.\n"+
                    "Come back once you get a magic sword and  spellbook\n"
            );
        }
    }
}

