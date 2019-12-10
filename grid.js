var Grid = function(wheel)
{
    this.tiles = [];

    // this.click = function(x)
    
    // Grid.floodfill = function(x, colorb, colort)
    function floodFill(x, y, colorb, colort, grid)
    {
        // console.log(grid.tiles[x][y].x + " " + grid.tiles[x][y].y);
        if (x < 0 || x >= grid_size || y < 0 || y >= grid_size)
		{
            return;
		}
        
		if(grid.tiles[x][y].getColor() != colorb)
		{
            return;
		}
		
        grid.tiles[x][y].setColor(colort);
        grid.tiles[x][y].drawRect();

		floodFill(x+1, y, colorb, colort, grid);
        floodFill(x-1, y, colorb, colort, grid);
        floodFill(x, y+1, colorb, colort, grid);
		floodFill(x, y-1, colorb, colort, grid);
    }

    this.click = function(x, y)
    {
        if(x == undefined)
        {
            console.log("undefined");
        }
        let target_col = this.wheel.click();
                
        if(this.tiles[x][y].getColor() != target_col)floodFill(x, y, this.tiles[x][y].getColor(), target_col, this);
    }  

    this.wheel = wheel;
}
