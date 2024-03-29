// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  const grid = Array.from(Array(8), () => new Array(8));
  grid[3][4] = new Piece('black');
  grid[4][3] = new Piece('black');

  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if ((pos[0] >= 0 && pos[0] < 8) && (pos[1] >= 0 && pos[1] < 8)) {
    return true;
  } 
  return false;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos)) {
    return this.grid[pos[0]][pos[1]];
  }
  throw new Error('Not valid pos!')
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  const otherPiece = this.getPiece(pos);
  if (otherPiece === undefined) {
    return false;
  }
  return otherPiece.color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  const piece = this.getPiece(pos);
  return !(piece === undefined)
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip = []){
  const newPos = [pos[0] + dir[0], pos[1] + dir[1]]
  if (!(this.isValidPos(newPos)) || !(this.isOccupied(newPos))) {
    return [];
  } else if (this.isMine(newPos, color)) {
    return piecesToFlip
  } else if (!(this.isMine(newPos, color))) {
      piecesToFlip.push(newPos);
  }
  return this._positionsToFlip(newPos, color, dir, piecesToFlip)
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */

Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  }
  let positions = [];
  Board.DIRS.forEach((dir) => {
    let positionFlip = this._positionsToFlip(pos, color, dir);
    if (positionFlip.length > 0) {
      positions.push(positionFlip);
    }
  });
 return positions.length === 0 ? false : true;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if( !this.validMove(pos, color) ){
    throw new Error("Invalid move!");
  }
  const positions = [];
  
  this.grid[pos[0]][pos[1]] = new Piece(color);

  Board.DIRS.forEach((dir) => {
    let positionFlip = this._positionsToFlip(pos, color, dir);
    if (positionFlip.length > 0) {
      positions.push(...positionFlip); 
    }
  });

  positions.forEach(p => {
    let flippedPiece = this.getPiece(p);
    flippedPiece.flip();
  })
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */

Board.prototype.validMoves = function (color) {
  let validPositions = [];
  for(let i = 0; i < this.grid.length; i++){
      for (let j = 0; j < this.grid.length; j++) {
        if (this.validMove([i, j], color)){
          validPositions.push([i, j]);
        } 
      }
  }
  return validPositions;
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length > 0
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return !(this.hasMove('white') && this.hasMove('black'));
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function (color) {
  process.stdout.write(` |0||1||2||3||4||5||6||7|\n`)
  for(let i = 0; i < this.grid.length; i++){
     process.stdout.write(`${i}`);
    for (let j = 0; j < this.grid.length; j++) {
      let valid = this.validMoves(color);
      let validStr = valid.map(pos => pos.toString())
      let pos = [i,j]

      if (validStr.includes(pos.toString())){
         process.stdout.write("|O|");
      }else if (this.grid[i][j] === undefined ){
        process.stdout.write("|_|");
      }  
       else {
        process.stdout.write(`|${this.grid[i][j]}|`);
      }
      
    }
    console.log('')
  }
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE