var Whool = function(graphics)
{
    this.colors = [];

    this.click = function()
    {
        let color = this.colors[0]
        this.colors.shift();
        this.colors.push(color_lib[Math.floor(Math.random() * 3)]);

        this.drawWhool();
        return color;
    }

    this.drawWhool = function()
    {
        let wheel_x = main_x;
        let wheel_y = main_y + (box_size * (grid_size + 2));
        let x_pos = 0;
        for(let i = 0; i < this.colors.length; i++)
        {
            let size;
            if(i == 0)
                size = box_size + 10;
            else
                size = box_size;

            this.graphics.fillStyle(this.colors[i])
            this.graphics.drawRect(x_pos + wheel_x, wheel_y, size, size);
            x_pos += (size+2);
        }
    }
    this.graphics = graphics;

    for(let i = 0; i < 5; i++)
    {
        this.colors.push(color_lib[Math.floor(Math.random() * 3)]);
    }

    this.drawWhool();
}