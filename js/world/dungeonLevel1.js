class dungeonLevel1 {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine; 
        this.scene.map.putTileAt(engine.translateTile('<'), 35, 13);
    }
}