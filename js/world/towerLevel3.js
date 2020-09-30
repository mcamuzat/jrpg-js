class TowerLevel3 {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine; 
        scene.addDecoration(3,4,"magical symbol R")
        scene.addDecoration(5,4,"magical symbol G")
        scene.addDecoration(2,5,"magical symbol Y")
        scene.addDecoration(6,5,"magical symbol R")
        scene.addDecoration(3,6,"magical symbol G")
        scene.addDecoration(5,6,"magical symbol Y")
        scene.addDecoration(4,5,"magical symbol Y")

    }
}