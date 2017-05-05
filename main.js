//create 'main' state that will contain the game
var mainState = {
    preload: function () {
        //this function will be executed at the beginning
        //that's where we will load the images and sounds
        //load the bird sprite
        game.load.image('bird', 'assets/bird.png');
    },
    
    create: function () {
        //this function is called after the preload function
        //here we setup the game, display sprites, etc.
        //change teh background colour of the game to blue
        game.state.backgroundColor = '#71c5cf';
        
        //set the physics system
        game.physics.startSystem(Phaser.physics.ARCADE);
        
        //Display the bird at the position x=100 and y=245
        this.bird = game.add.sprite(100, 245, 'bird');
        
        //add physics to the bird
        //needed for: movement, gravity, collisions, etc.
        game.physics.arcade.enable(this.bird);
        
        //add gravity to the bird
        this.bird.body.gravity.y = 1000;
        
        //call the 'jump' function when the space is pressed
        var spaceBar = game.input.keyboard.addkey(
                        Phaser.keyboard.SPACEBAR);
        spaceBar.onDown.add(this.jump, this);
    },
    
    update: function () {
        // This function is called 60 times per second
        ///if the 'bird' is out of screen (too high or low)
        //call the 'restartGame' function
        if (this.bird.y < 0 || this.bird.y > 490)
        this.restartGame();
        //It contains the game's logic
    },
    //make the bird jump
    jump: function () {
      //add a vertial velocity to the bird
        this.bird.body.velocity.y = -350;
    },
    //restart the game
    restartGame: function () {
      //start the 'main' state, which restarts the game
        game.state.start('main');
    }
};

//Initialize Phaser and create a 400px by 490px game
var game = new Phaser.Game(400, 490);

//Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

//start teh state to actually start the game
game.state.start('main');