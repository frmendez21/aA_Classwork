const Game = require('./game')

function Gameview(ctx){
    this.game = new Game(ctx);
    this.ctx = ctx;
}

Gameview.prototype.start = function start(){
    this.game.draw(this.ctx);
    this.game.moveObjects();
}