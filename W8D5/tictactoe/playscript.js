let Game = require('./game.js');

// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

let g = new Game();
g.symbol();
g.run(completion);


function completion() {
//   reader.question("Play again? y or n: ", restartGame => {
//     if (restartGame === "y") {
//       g = new Game();
//       g.run(reader, completion);
//     } else {
//       reader.close();
//     }
//   });
};


