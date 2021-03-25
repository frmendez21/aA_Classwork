import React from 'react';
import * as MS from './minesweeper';
import Board from "./board"

 class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: new MS.Board (6, 5)
        }
        this.updateGame = this.updateGame.bind(this)
    }
    updateGame(tile, flagging){   
          
        if(flagging){
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({board: this.state.board})       
    }
    
    
    render () {
      
        // console.log(this.state.board)
        return(
            <div className="space">
                <Board gameBoard={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }
};

export default Game;