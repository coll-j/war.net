var menuState = {

    create: function create() {
      //this.add.image(0, 0, 'sky2');
  
      this.title = this.add.text(this.world.centerX, this.world.centerY, 'war.net', { fill: 'white', font: '96px serif', strokeThickness: 3 });
      this.title.anchor.set(0.5);
  
      this.subtitle = this.add.text(this.world.centerX, 420, 'Start', { fill: 'white', font: '32px sans-serif' });
      this.subtitle.anchor.set(0.5);
  
      this.input.onTap.add(this.startGame, this);
    },
  
    startGame: function startGame() {
      console.log('Start');
      this.state.start('game');
      // this.state.start('level');
    }
  
  };