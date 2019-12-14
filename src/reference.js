console.clear();

var bootState = {

  init: function init() {    
    this.whitePixel = this.add.bitmapData(1, 1);
    this.whitePixel.fill(255, 255, 255);
    this.loadingBar = this.whitePixel.addToWorld();
    this.loadingBar.width = 100;
    this.loadingBar.height = 10;
    this.loadingBar.alignIn(this.world.bounds, Phaser.CENTER);
  },

  preload: function preload() {
    this.load.baseURL = 'https://cdn.jsdelivr.net/gh/samme/phaser-examples-assets@v1.0.0/';
    this.load.crossOrigin = 'anonymous';
    this.load.image('carrot', 'sprites/carrot.png');
    this.load.image('chrome', 'skies/chrome.png');
    this.load.image('sky2', 'skies/sky2.png');
    this.load.image('underwater2', 'skies/underwater2.png');
    this.load.spritesheet('duck', 'sprites/chick.png', 16, 18);
    this.load.setPreloadSprite(this.loadingBar);
  },

  create: function create() {
    this.state.start('menu');
  },

  shutdown: function shutdown() {
    this.whitePixel.destroy();
    this.whitePixel = null;
  }

};

var menuState = {

  create: function create() {
    this.add.image(0, 0, 'sky2');

    this.title = this.add.text(this.world.centerX, this.world.centerY, 'Carrot Quest 2', { fill: 'white', font: '96px serif', strokeThickness: 3 });
    this.title.anchor.set(0.5);

    this.subtitle = this.add.text(this.world.centerX, 420, 'Start', { fill: 'lime', font: '32px sans-serif' });
    this.subtitle.anchor.set(0.5);

    this.input.onTap.add(this.startGame, this);
  },

  startGame: function startGame() {
    console.log('Start');
    this.state.start('game');
  }

};

var gameState = {

  create: function create() {
    this.add.image(0, 0, 'underwater2');

    this.carrot = this.add.image(600, 320, 'carrot');
    this.carrot.anchor.set(0.5);

    this.duck = this.add.sprite(400, 320, 'duck');
    this.duck.anchor.set(0.5);
    this.duck.scale.set(2);
    this.duck.animations.add('walk', null, 6, true);
    this.duck.animations.play('walk');

    this.score = 0;

    this.scoreText = this.add.text(0, 0, '', { fill: 'white', font: '24px sans-serif' });
    this.scoreText.alignIn(this.world.bounds, Phaser.BOTTOM_LEFT, -10, 0);

    this.restartButton = this.add.text(0, 0, '(R) Restart', { fill: 'yellow', font: '24px sans-serif' });
    this.restartButton.alignIn(this.world.bounds, Phaser.BOTTOM_CENTER);
    this.restartButton.inputEnabled = true;
    this.restartButton.events.onInputUp.add(this.restart, this);

    this.quitButton = this.add.text(0, 0, '(Q) Quit', {fill: 'yellow', font: '24px sans-serif'});
    this.quitButton.alignIn(this.world.bounds, Phaser.BOTTOM_RIGHT, -10);
    this.quitButton.inputEnabled = true;
    this.quitButton.events.onInputUp.add(this.quit, this);

    this.pausedIndicator = this.add.text(0, 0, 'paused', {fill: 'white', font: '48px sans-serif'});
    this.pausedIndicator.alignIn(this.world.bounds, Phaser.CENTER);
    this.pausedIndicator.exists = false;

    this.input.keyboard.addKey(Phaser.KeyCode.R).onUp.add(this.restart, this);
    this.input.keyboard.addKey(Phaser.KeyCode.Q).onUp.add(this.quit, this);
  },

  update: function update() {
    this.score += 1;
    this.scoreText.text = 'Score: ' + this.score;
  },

  restart: function restart() {
    console.log('Restart');
    this.state.restart();
  },

  quit: function quit() {
    console.log('Quit');
    this.state.start('menu');
  }

};

var game = window.game = new Phaser.Game({
  antialias: false,
  // height:      600,
  renderer: Phaser.CANVAS
  // resolution:  1,
  // scaleMode:   Phaser.ScaleManager.NO_SCALE,
  // transparent: false,
  // width:       800,
});

game.state.add('boot', bootState);
game.state.add('menu', menuState);
game.state.add('game', gameState);

game.state.start('boot');