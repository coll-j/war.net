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
             this.load.image('background', 'rsrc/bg-01.png');
             this.load.image('trans', 'rsrc/box.png');
             this.load.audio('click_sfx', 'sound/pickup-mgc.ogg');
             this.load.spritesheet('box_animation', 'rsrc/click_anim720x720.png', 720, 720, 13);
         },

    create: function create() {
        console.log('gamestate');
        //this.stage.backgroundColor = 0x1E1E1E;
        bg = game.add.image(0,0, 'background');

     //   this.add.text(this.world.centerX, this.world.centerY, 'Game Play', { fill: 'white', font: '96px serif', strokeThickness: 3 });
        var graphics = this.add.graphics(0,0);

        fx = this.add.audio('click_sfx');
        fx.allowMultiple = true;
        fx.addMarker('click_sfx', 0, 10);
        
        box_size = this.world.width / 8;
        main_x = (this.world.width / 2) - (box_size * grid_size / 2);
        main_y = this.world.height / 3;

        console.log(grid_size + " " + box_size + " " + main_x + " " + main_y);

        color_lib = color_array[level_counter];
        var wheel = new Wheel(graphics);
        var grid = new Grid(wheel);
        
        for(let i = 0; i < grid_size; i++)
        {
            row = []
            for(let j = 0; j < grid_size; j ++)
            {
                row.push(new Tile(i, j, color_lib[Math.floor(Math.random() * colorCount[level_counter])], graphics, grid));
            }

            grid.tiles.push(row);
        }

       // this.input.onTap.add(this.nextLevel, this);

        //this.add(this.nextLevel, this);

        console.log(test);

    },

    nextLevel: function nextLevel() {
        console.log('nextlevel');
        level_counter++;
        var level_name = "level " + level_counter;
        console.log(level_name);
        game.state.add(level_name, gameState);
        grid_size = gsarray[level_counter];
        console.log("grid sizenya" + grid_size);
        color_lib = color_array[level_counter];
        this.state.start(level_name);
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