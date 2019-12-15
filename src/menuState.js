var menuState = {

    create: function create() {
      //this.add.image(0, 0, 'sky2');

      var style = {
        font:"96px Neou Thin",
        fill:'white',
        strokeThickness: 3
      };

      var style2 = {
        font:"32px Neou Thin",
        fill:'white'
      };
  
      this.title = this.add.text(this.world.centerX, this.world.centerY, 'war.net', style);
      this.title.anchor.set(0.5);
  
      this.subtitle = this.add.text(this.world.centerX, 420, 'Press anywhere to start', style2);
      this.subtitle.anchor.set(0.5);
  
      this.input.onTap.add(this.startGame, this);
    },
  
    startGame: function startGame() {
      console.log('Start');
      this.state.start('game');
      // this.state.start('level');
    }
  
  };