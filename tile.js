var Tile = function(x,y, color, graphic, grid)
{
    // METHODS
    this.setColor = function(colort)
    {
        this.color = colort;
    }

    this.click = function()
    {
        console.log('you clicked the sprite');
        this.grid.click(x, y);
        // this.setColor(0XFFFF00);
        // this.drawRect();
    }

    this.getColor = function()
    {
        return this.color;
    }

    this.drawRect = function()
    {
        graphic.beginFill(this.color);
        graphic.drawRect(this.x_pos, this.y_pos, box_size, box_size);
    }
    
    this.color = color;
    this.x = x;
    this.y = y;
    this.grid = grid;
    // this.x_pos = main_x + (x * 32);
    // this.y_pos = main_y + (y * 32);
    this.x_pos = main_x + (x * (box_size + 2));
    this.y_pos = main_y + (y * (box_size + 2));

    this.drawRect();
    var sprite = game.add.sprite(this.x_pos, this.y_pos, 'trans');
    sprite.width = box_size;
    sprite.height = box_size;

    sprite.inputEnabled = true;
	sprite.input.useHandCursor = true;
    sprite.events.onInputDown.add(this.click, this);
    // this.graphic = graphic;

}