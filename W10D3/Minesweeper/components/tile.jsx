import React from 'react';

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    // e.preventDefault()
  console.log('hi')
  }

  render(){
    
  // console.log(this.props);
  let subclass = ''
  this.props.tile.explored ? subclass = 'explored' : subclass = 'unexplored'
  let tile = 'tile'
  let imgSym = ''
  let klass = '';
  if (this.props.tile.bombed){
    klass = 'bomb'+' '+subclass
    imgSym = ''
  } else if (this.props.tile.flagged) {
    klass = 'flag'+' '+subclass
    imgSym = ''
  } else {

    klass = 'empty'+' '+subclass;
  }


  return(
    <div className={`${tile}-${klass}`} onClick={this.handleClick}>
    </div>
  )
  }
}

// const Tile = (props) =>{
 
//   console.log(props);
//   let subclass = ''
//   props.tile.explored ? subclass = 'explored' : subclass = 'unexplored'
//   let tile = 'tile'
//   let imgSym = ''
//   let klass = '';
//   if (props.tile.bombed){
//     klass = 'bomb'+' '+subclass
//     imgSym = ''
//   } else if (props.tile.flagged) {
//     klass = 'flag'+' '+subclass
//     imgSym = ''
//   } else {
//     klass = subclass;
//   }


//   return(
//     <div className={`${tile}-${klass}`}>
//      {imgSym}
//     </div>
//   )
// }

export default Tile;