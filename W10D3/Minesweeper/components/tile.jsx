import React from 'react';

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    console.log(this.props.tile)
    
    this.props.updateGame(this.props.tile, e.altKey)
    
  }
  
  render(){
    
  console.log(this.props.tile);
  let subclass = ''  
  let tile = 'tile'  
  let klass = '';
  let number = '';
  
  this.props.tile.explored ? subclass = 'explored' : subclass = 'unexplored'
   if (this.props.tile.flagged) {
    klass = 'flag'
  } else if (this.props.tile.bombed){
    klass = 'bomb' + ' ' + subclass
  }
    else if (this.props.tile.adjacentBombCount() > 0) {
      number = this.props.tile.adjacentBombCount();
      klass = 'number' + ' ' + subclass;
  } else {
    klass = 'empty' + ' ' + subclass;
  }

  return(
    <div className={`${tile}-${klass}`} onClick={this.handleClick}>
      {number}
    </div>
  )
  }
}

export default Tile;