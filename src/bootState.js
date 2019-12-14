var bootState = {

    init: function init() {    
    //   this.whitePixel = this.add.bitmapData(1, 1);
    //   this.whitePixel.fill(255, 255, 255);
    //   this.loadingBar = this.whitePixel.addToWorld();
    //   this.loadingBar.width = 100;
    //   this.loadingBar.height = 10;
    //   this.loadingBar.alignIn(this.world.bounds, Phaser.CENTER);
    },
  
    preload: function preload() {
    //   this.load.baseURL = 'https://cdn.jsdelivr.net/gh/samme/phaser-examples-assets@v1.0.0/';
    //   this.load.crossOrigin = 'anonymous';
    //   this.load.image('carrot', 'sprites/carrot.png');
    //   this.load.image('chrome', 'skies/chrome.png');
    //   this.load.image('sky2', 'skies/sky2.png');
    //   this.load.image('underwater2', 'skies/underwater2.png');
    //   this.load.spritesheet('duck', 'sprites/chick.png', 16, 18);
    //   this.load.setPreloadSprite(this.loadingBar);
        this.load.image('trans', 'rsrc/box.png');

    },
  
    create: function create() {
      this.state.start('menu');
    },
  
    shutdown: function shutdown() {
      this.whitePixel.destroy();
      this.whitePixel = null;
    }
  
  };