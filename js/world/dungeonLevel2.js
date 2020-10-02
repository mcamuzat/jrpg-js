class dungeonLevel2 {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;
        this.scene.map.putTileAt(engine.translateTile('<'), 7, 24); 
    }
}