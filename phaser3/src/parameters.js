var parameters = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1e1e1e,
    //width: 800,
    //heiht: 600,
    // grid_size: 0,
    // box_size: 30,
    scene: [ menu ]
};

var main_x = 0;
var main_y = 0;
var grid_size = 0;
var box_size = 30;
var color_lib = [0xFF0000, 0xFFFF00, 0x0000FF];


var game = new Phaser.Game(parameters);



