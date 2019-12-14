class level01 extends Phaser.Scene {
    constructor() {
        super("Level01");
    }

    preload() {
        this.load.image('trans', 'rsrc/box.png');
    }

    create() {
        var graphics = this.add.graphics(0,0);

        this.add.text(50, 50, "Level 1");

    }

    // this.stage.add("test", test);
    // this.stage.start("test");
}
