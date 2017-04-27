//create 'main' state that will contain the game
var mainState = {
    preload: function () {
        //this function will be executed at the beginning
        //that's where we will load
        //load the bird sprite
        game.load.image('bird', 'assets/bird.png');
        // load pipe sprtie
        game.load.image('pipe', 'assets/pipe.png');
    },
    create: function () {
        //this function is called after the preload function
        //here we setup the game, display sprites, etc.
        //change the background color of the game to blue -for now?
        game.stage.backgroundColor = '#71c5cf';
        //set the physics for game
        game.physics.startsystem(phaser.physics.ARCADE);
        //Display the bird at the position of x = 100 and y = 245
        this.bird = game.add.sprite(100, 245, 'bird');
        //add physics to the bird, need for movement, gravity and collisions
        game.physics.arcade.enable(this.bird);
        //add gravity to bird
        this.bird.body.gravity.y = 1000;
        //call 'jump' function when spacebar is pressed
        var spaceBar = game.input.keyboard.addKey(phaser.keyboard.SPACEBAR);
        spaceBar.ondown.add(this.jump, this);
        //create an empty gruop
        this.pipes = game.add.group();
        
        //timer for pipes
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
    },
    update: function () {
        //This functiobn is called 60 times per second
        //It contains the games logic
        
        //call the restartgame function
        if (this.bird.y < 0 || this.bird.y > 490) 
            this.restaertgame();
    },
    
    jump: function () {
      //add a vertical velocity to the bird
        this.bird.body.velocity.y = 350;
    },
   //restart game 
    restartgame: function () {
        //start the 'main' sate which resarts game
        game.state.start('main');
    },
    //add a pipe
    addOnePipe: function(x, y) {
        //creat a pipe at the position x and y
        var pipe = game.add.sprite(x, y, 'pipe');
        
        //add pipe to group
        this.pipes.add(pipe);
        //enable pipe physics
        game.physics.arcade.enable(pipe);
        //add velocty to the pipe to make it move left
        pipe.body.velocity.x = -200;
        //automatically kill pipe when it is no longer visalbe 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    
    //many pipe
    addRowofpipes: function() {
        //randomly pick a number between 1 and 5
        // this will be the hole position in the pipe
        
        var hole = Math.floor(Math.random() * 5) + 1;
        //add 6 pipes
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole +1)
                this.addonepipe(400, i * 60 + 10);
    },
};
//initialise phaser and create a 400px by 490px game
var game = new phaser.game(400, 490);
//add the main state and call it main
game.state.add('main', mainstate);
//start the state to actually start the game
game.state.start('main');