const MovingObject = require('./moving_object')
const Game = require('./game')
const Gameview = require('./game_view')

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d");
    const game = new Game();
    const gameview= new Gameview(ctx, game).start();
  
});

