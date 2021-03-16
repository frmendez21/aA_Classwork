const Game = require('./game')

function Gameview(ctx, game){
    this.game = game;
    this.ctx = ctx;
}

Gameview.prototype.start = function start(){
    setInterval( () => {
        this.game.draw(this.ctx);
        this.game.step();
    }, 20);
}

module.exports = Gameview;