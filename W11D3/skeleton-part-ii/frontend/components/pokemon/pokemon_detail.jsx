import React from 'react';

class PokemonDetail extends React.Component{
  constructor(props){
  super(props)
  }

  componentDidMount(){
    console.log(this.props)
    // this.props.requestPokemon(this.props.match.params.pokemon)
  }
  
  render(){
    return(
      <div>this is a div</div>
    )
  }
}
  
  
  
export default PokemonDetail;