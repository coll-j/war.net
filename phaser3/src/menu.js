class menu extends Phaser.Scene {
    constructor(){
        super("menu");
        //super("menu");
    }

    preload(){
        this.load.image('box', 'rsrc/box.png');
    }

    create(){
        this.add.text(20, 20, "Loading game...");
        this.image = this.add.image(400, 300, 'box');
    }
}