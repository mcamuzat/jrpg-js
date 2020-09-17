var EngineScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
        function BootScene() {
            Phaser.Scene.call(this, { key: 'EngineScene' });
        },
    generateMap: function(input) {
        this.level = input
        switch (level[input].map) {
            case 'Rogue':
                var _map = new ROT.Map.Rogue(
                    level[input].width,
                    level[input].height
                );
                var plan = []
                _map.create(function (x, y, v) {
                    if (!plan[y]) {
                        plan[y] = [];
                    }
                    plan[y][x] = v;
                });

                break;
            case 'Plan':
               var plan = level[input].plan
               break;
            case 'Cellular':
                var _map = new ROT.Map.Cellular(
                    level[input].width,
                    level[input].height
                ); 
                _map.randomize(0.5);
                for (var i=0; i<4; i++) _map.create();
                var plan = []
                _map.create(function (x, y, v) {
                    if (!plan[y]) {
                        plan[y] = [];
                    }
                    plan[y][x] = v;
                });
                break;
            default:
                console.log(`Sorry, we are out of ${expr}.`);
        }

        this.plan = plan;
    },

    getMapAsArray: function() {
        return this.plan;
    },
    getFreePosition: function() {
        var found = false;
        while (found == false) {
            var x = Phaser.Math.RND.between(0, level[this.level].width-1);
            var y = Phaser.Math.RND.between(0, level[this.level].height-1);
            if(this.plan[y][x] == 0) {
                found = true;
            }
        }
        return [x*32 + 16,y * 32 + 16]
    },
    getCollisionMap() {
        return level[this.level]['collusion']
    }

});