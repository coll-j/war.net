var gameState = {

    //this preload shouldnt be here, should be in bootState instead
    //tapi kalo ga di sini gambarnya gamau ke load cih
     preload: function preload() {
    //     //   this.load.baseURL = 'https://cdn.jsdelivr.net/gh/samme/phaser-examples-assets@v1.0.0/';
    //     //   this.load.crossOrigin = 'anonymous';
    //     //   this.load.image('carrot', 'sprites/carrot.png');
    //     //   this.load.image('chrome', 'skies/chrome.png');
    //     //   this.load.image('sky2', 'skies/sky2.png');
    //     //   this.load.image('underwater2', 'skies/underwater2.png');
    //     //   this.load.spritesheet('duck', 'sprites/chick.png', 16, 18);
    //     //   this.load.setPreloadSprite(this.loadingBar);
             this.load.image('trans', 'rsrc/box.png');
    
         },

    create: function create() {
        console.log('gamestate');
        this.stage.backgroundColor = 0x1E1E1E;
     //   this.add.text(this.world.centerX, this.world.centerY, 'Game Play', { fill: 'white', font: '96px serif', strokeThickness: 3 });
        var graphics = this.add.graphics(0,0);

     //   grid_size = 4;
        
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

        this.nextLevel();

        console.log(test);

    },

    nextLevel: function nextLevel() {
        console.log('nextlevel');
        level_counter++;

        if(level_counter == 2){
            game.state.add('level_01', gameState);
            grid_size = 4;
            color_lib = [0xe79f2d, 0xe23626, 0xab4787];
            this.state.start('level_01');
        }
        
        else if(level_counter == 4){
            this.state.add('level_02', gameState);
            grid_size = 5;
            color_lib = [0xe79f2d, 0xe23626, 0xab4787, 0x4c9c69];
            this.state.start('level_02');
        }
        

    },
  
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
  
  };