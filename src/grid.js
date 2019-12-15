var Grid = function(wheel)
{
    this.tiles = [];

    // this.click = function(x)
    
    // Grid.floodfill = function(x, colorb, colort)
    function floodFill(x, y, colorb, colort, grid)
    {
        if (x < 0 || x >= grid_size || y < 0 || y >= grid_size)
		{
            return;
		}
        
		if(grid.tiles[x][y].getColor() != colorb)
		{
            return;
		}
		
        // var animatedBox = game.add.sprite(x, y, 'box_animation', 13);
        // animatedBox.bringToTop(animatedBox);
        // animatedBox.width = grid_size * box_size;
        // animatedBox.height = grid_size* box_size;
        // anim = animatedBox.animations.add('effect');

        // anim.onStart.add(this);
        // anim.onComplete.add(this);

        grid.tiles[x][y].setColor(colort);
        grid.tiles[x][y].drawRoundedRect();
        //anim.play(20);

		floodFill(x+1, y, colorb, colort, grid);
        floodFill(x-1, y, colorb, colort, grid);
        floodFill(x, y+1, colorb, colort, grid);
        floodFill(x, y-1, colorb, colort, grid);


        
       // console.log('floodfill grid');
    }

    function winCheck(grid){
        var before = grid.tiles[0][0].getColor();
        for(let i = 0; i < grid_size; i++){
            for(let j = 0; j < grid_size; j ++)
            {
                if (before != grid.tiles[i][j].getColor()){
                    return;
                }
                before = grid.tiles[i][j].getColor();
            }
        }
        console.log("score : " + score);
        score = 0; 
        gameState.nextLevel();   
    }

    this.click = function(x, y)
    {
        fx.play('click_sfx');
        score++;
        gameState.movement.setText("Movement : " + score);
        console.log(score);

        if(x == undefined)
        {
            console.log("undefined");
        }
        let target_col = this.wheel.click();
                
        if(this.tiles[x][y].getColor() != target_col)floodFill(x, y, this.tiles[x][y].getColor(), target_col, this);
        
        winCheck(this);

        // if(test%4 == 0){
        //     console.log("test 4");
        //    // this.input.onTap.add(this.startGame, this);
        //     gameState.nextLevel();
        //    //levelState.nextLevel();
        // }
            //this.state.start('menu');
    }  

    this.wheel = wheel;
}
