const Asteroid = require('./asteroid')

const CONSTANTS = {
     DIM_X : 500,
     DIM_Y : 400,
     NUM_ASTEROIDS : 5 
} 

function Game() { 
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function addAsteroids() {
    for ( let i =0 ; i<CONSTANTS.NUM_ASTEROIDS ; i++){
        this.asteroids.push(new Asteroid({position: this.randomPosition()}, this))
    }
}

Game.prototype.randomPosition = function randomPosition(){
    
    return [
        CONSTANTS.DIM_X * Math.random(),CONSTANTS.DIM_Y * Math.random()
    ];
}

Game.prototype.draw = function(ctx){

   ctx.clearRect(0, 0, CONSTANTS.DIM_Y, CONSTANTS.DIM_X);
   ctx.fillStyle = 'black';
   ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y)
    for (let i =0; i< this.asteroids.length; i++){
        this.asteroids[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function moveObjects(){
    for (let i =0; i< this.asteroids.length; i++){
        this.asteroids[i].move();
    }
}

Game.prototype.wrap = function wrap (pos) {
    let wrappedPos = [0, 0];
    let x = pos[0];
    let y = pos[1]
    if (x < 0) {
        wrappedPos = [500, 0];
    } else if (x > 500) {
        wrappedPos = [0, y];
    } else if (y < 0) {
        wrappedPos = [x, 400];
    } else if (y > 400) {
        wrappedPos = [x, 0];
    }
    return wrappedPos[0] === 0 && wrappedPos[1] === 0 ? pos : wrappedPos;
}

Game.prototype.checkCollisions = function(){
    for (let i =0; i< this.asteroids.length; i++){
        for(let j=i+1; j< this.asteroids.length; j++){
            if (this.asteroid[i].isCollidedWith(this.asteroids[j])){ 
                alert("COLLISION")
            }
        }
    }
}

Game.prototype.step = function (){
    this.moveObjects();
    this.checkCollisions();
}

module.exports = Game;
