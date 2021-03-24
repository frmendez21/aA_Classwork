import React from 'react';
import * as MS from './minesweeper';
import Board from "./board"

 class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: new MS.Board (4, 5)
        }
        this.updateGame = this.updateGame.bind(this)
    }
    updateGame(){      
    
    }

    render () {
        // console.log(this.state.board)
        return(
            <div>
                <Board gameBoard={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }
};

export default Game;