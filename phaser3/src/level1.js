class level1 extends Phaser.Scene {
    constructor() {
        super({key:"level1"});
        //super("menu");
    }

    preload() {
        this.load.image('trans', 'rsrc/box.png');
    }

    create() {
        var graphics = this.add.graphics(0,0);

        grid_size = 4;
        box_size = this.width / 8;
        main_x = (this.width / 2) - (box_size * grid_size / 2);
        main_y = this.height / 3;

        console.log(grid_size + " " + box_size + " " + main_x + " " + main_y);

        var wheel = new Whool(graphics);
        var grid = new Grid(wheel);
        for(let i = 0; i < grid_size; i++)
        {
            row = []
            for(let j = 0; j < grid_size; j ++)
            {
                row.push(new Tile(i, j, color_lib[Math.floor(Math.random() * 3)], graphics, grid));
            }

            grid.tiles.push(row);
        }

    }

    // this.stage.add("test", test);
    // this.stage.start("test");
}
