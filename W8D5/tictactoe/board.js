class Board {
    constructor() {
        // this.grid = Array.from(new Array(8), x => newArray(8))
        this.grid = Array.from(Array(3), () => new Array(3));
    };

    

    winner(mark) {
        return this._checkColRows(mark) || this._checkDiags(mark) ? true : false;
    };

    empty(pos) {
        return this.grid[pos[0]][pos[1]] === undefined ? true : false;
    };

    placeMark(pos, mark) {
        if (!this._validMark(pos)) {
            throw new Error('invalid position')
        } else {
            this.grid[pos[0]][pos[1]] = mark;
        }
    };

    _checkColRows(mark) {
        for (let i = 0; i <  this.grid.length; i++) {
            let row = [];
            let col = [];
            for (let j = 0; j < this.grid.length; j++) {
                let rowPos = this.grid[i][j]
                let colPos = this.grid[j][i]
                if (rowPos === mark && colPos === mark) {
                    row.push(rowPos);
                    col.push(colPos);
                } else if (rowPos === mark) {
                    row.push(mark)
                } else if (colPos === mark) {
                    col.push(mark)
                }
            }
            if (row.length === this.grid.length || col.length === this.grid.length) {
                row = [];
                col = [];
                return true
            }
        }
        return false;
    };

    _checkDiags(mark) {
        let diag = [];
        let diag2 = [];
        let j = this.grid.length - 1;
        for (let i = 0; i < this.grid.length; i++) {
            diag.push(this.grid[i][i]);
            diag2.push(this.grid[i][j]);
            j -= 1;
        }
        return diag.length === this.grid.length || diag2.length === this.grid.length ? true : false;
    }

    _validMark(pos) {
        if ((pos[0] >= 0 && pos[0] < this.grid.length) && (pos[1] >= 0 && pos[1] < this.grid.length)) {
            if (this.grid[pos[0]][pos[1]] === undefined) {
                return true
            }
        } else {
            return false
        }
    }
};
// let board = new Board();
// board.placeMark([0,2], 'X')
// board.placeMark([1,1], 'X')
// board.placeMark([0,0], 'X')
// board.placeMark([2,2], 'X')
// board.placeMark([2,0], 'X')
// console.log(board.grid);
// console.log(board.winner('X'))

module.exports = Board;