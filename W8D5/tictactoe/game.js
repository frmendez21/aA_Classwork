const Board = require('./board.js');
const HumanPlayer = require('./humanplayer.js');

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
    constructor() {
       this.board = new Board();
       this.humanPlayer = new HumanPlayer();
       this.run = this.run.bind(this)
    };

    run() {
        let position = this.getUserInput(this.position);
        return position
    };

    symbol() {
        let callback = this.run;
        this.humanPlayer.getSymbol(reader, callback);
    }

    position(input) {
        return input;
    }

    getUserInput(callback) {
        reader.question('Enter a position e.g: 2 1 ', input => {
            const inputArr = input.split(' ').map(x => parseInt(x));
            callback(inputArr)
            reader.close();
        });
    }

};
module.exports = Game;