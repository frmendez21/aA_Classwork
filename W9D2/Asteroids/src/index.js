const MovingObject = require('./moving_object')
const Game = require('./game')
const GameView = require('./game_view')

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d");
    const gameview= new GameView(ctx).start();
});

