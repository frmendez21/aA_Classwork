const Util = require('./utils')
const Asteroid = require('./asteroid')



const CONSTANTS = {
     DIM_X = 500,
     DIM_Y = 400,
     NUM_ASTEROIDS = 5 
} 

function Game(ctx) { 
this.asteroids = [];
this.addAsteroids();
}

Game.prototype.addAsteroids = function addAsteroids() {
    for ( let i =0 ; i<CONSTANTS.NUM_ASTEROIDS ; i++){
        this.asteroids.push(new Asteroid({position: this.randomPosition()}))
    }
}

Game.prototype.randomPosition = function randomPosition(){
    
    [
        CONSTANTS.DIM_X * Math.random(),CONSTANTS.DIM_Y * Math.random()
    ];
}

Game.prototype.draw = function(ctx){
   ctx.clearRect(0, 0, 400, 500);
    // tx.fillStyle = "red";
    // ctx.fillRect(0, 0, 300, 150);
    for (let i =0; i< this.asteroids.length; i++){
        this.asteroids[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function moveObjects(){
    for (let i =0; i< this.asteroids.length; i++){
        this.asteroids[i].move();
    }
}


