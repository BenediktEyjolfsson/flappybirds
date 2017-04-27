//create 'main' state that will contain the game
var mainstage = {
    preload: function(){
        /*/this function will be executed at the beginning
        that's where we will load/*/
    },
    
    create: function() {
        /*/this function is called after the preload function
        here we setup the game, display sprites, etc./*/
    },
    create function() {
    /*/This functiobn is called 60 times per second
    It contains the games logic/*/
    },
    
};

//initialise phaser and create a 400px by 490px game
var game = new phaser.game(400, 490);

//add the main state and call it main
game.state.add('main', mainstate);

//start the state to actually start the game
game.state.start('main');

