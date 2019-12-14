var game = new Phaser.Game(window.innerWidth,window.innerHeight, Phaser.AUTO, this);

  game.state.add('boot', bootState);
  game.state.add('menu', menuState);
  game.state.add('game', gameState);
  //game.state.add('level', levelState(2, [0xe79f2d, 0xe23626]));

  
  game.state.start('menu');