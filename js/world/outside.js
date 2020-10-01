class Outside {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;

        // debug castle open 
        this.scene.map.putTileAt(32 + 128 * 26, 6, 16);
        //this.engine.quests = ['elven_gate_tax']

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
            if (!this.engine.isQuestComplete('antiheat potion idea')) {
                this.engine.completeQuest('antiheat potion idea')
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
    
}

