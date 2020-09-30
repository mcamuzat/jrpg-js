class IcyMountains {
    addScene(scene, player, engine) {
        this.scene = scene;
        this.engine = engine;
        
        scene.addDecoration(2,2,"magical symbol R")
        scene.addDecoration(4,2,"magical symbol G")
        scene.addDecoration(1,3,"magical symbol Y")
        scene.addDecoration(5,3,"magical symbol R")
        scene.addDecoration(2,4,"magical symbol G")
        scene.addDecoration(4,4,"magical symbol Y")
        scene.addDecoration(3,3,"magical symbol Y")
    }
}