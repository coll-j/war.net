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
		
        grid.tiles[x][y].setColor(colort);
        grid.tiles[x][y].drawRoundedRect();

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
                    console.log("not yet");
                    return;
                }
                before = grid.tiles[i][j].getColor();
            }
        }
        console.log("lmao u won"); 
        gameState.nextLevel();   
    }

    this.click = function(x, y)
    {
        clickCount++;
        console.log(clickCount);

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

    this.allSame = function(x, y) {
        for(x = 0; x < 10; x++)
		{
			for(y = 0; y < 10; y++)
			{
				if(!(this.tiles[x][y].equals(this.tiles[0][0])))
				{
					return false;
				}
			}
		}
		return true;
    }

    this.wheel = wheel;
}
