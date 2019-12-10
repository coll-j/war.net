var game = new Phaser.Game(window.innerWidth,window.innerHeight, Phaser.AUTO, 'container', {preload: preload, create: create});

function preload()
{
    game.load.image('trans', 'box.png');
}

function create()
{
    game.stage.backgroundColor = 0xFFFFCC;
    var graphics = game.add.graphics(0,0);

    grid_size = 4;
    box_size = game.world.width / 8;
    main_x = (game.world.width / 2) - (box_size * grid_size / 2);
    main_y = game.world.height / 3;

    console.log(grid_size + " " + box_size + " " + main_x + " " + main_y);

    var wheel = new Wheel(graphics);
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

// game.stage.add("test", test);
// game.stage.start("test");