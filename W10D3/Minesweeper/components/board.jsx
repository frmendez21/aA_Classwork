import React from 'react';
import Tile from './tile';

const Board = (props) =>{
  // console.log(props)
 const viewBoard = props.gameBoard.grid.map((row, idx1) => {
 return  row.map( (tile,idx2) => {
      return(
            <div key={idx2} >
              <Tile key={idx2} tile={tile} updateGame={props.updateGame}/>
            </div>
    )}
 )})
return(viewBoard)
}

export default Board;
