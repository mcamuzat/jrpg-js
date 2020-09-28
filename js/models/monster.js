class Monster extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, quizz) {
        super(scene, x, y, texture, frame);
        this.quizz = quizz
    }
};