var levelState = function(grid_size, color_lib)
{

    //this preload shouldnt be here, should be in bootState instead
    //tapi kalo ga di sini gambarnya gamau ke load cih
    this.preload = function preload() {
             this.load.image('trans', 'rsrc/box.png');
    
         }

    this.create = function create() {
        console.log('gamestate');
        this.stage.backgroundColor = 0x1E1E1E;
     //   this.add.text(this.world.centerX, this.world.centerY, 'Game Play', { fill: 'white', font: '96px serif', strokeThickness: 3 });
        var graphics = this.add.graphics(0,0);

        grid_size = 4;
        
        box_size = this.world.width / 8;
        main_x = (this.world.width / 2) - (box_size * grid_size / 2);
        main_y = this.world.height / 3;

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

       // this.input.onTap.add(this.nextLevel, this);

        //this.add(this.nextLevel, this);

        //nextLevel();

        console.log(test);

    }

    function nextLevel() {
        console.log('nextlevel');
        level++;

        if(level == 1)
        this.state.start('menu');
        
        else if(level == 2)
        this.state.add('level2', gameState);

    }
  
    // update: function update() {
    //     console.log('update');
    //   //this.score += 1;
    //   //this.scoreText.text = 'Score: ' + this.score;
    // },
  
    // restart: function restart() {
    //   console.log('Restart');
    //   this.state.restart();
    // },
  
    // quit: function quit() {
    //   console.log('Quit');
    //   this.state.start('menu');
    // }
  
  }