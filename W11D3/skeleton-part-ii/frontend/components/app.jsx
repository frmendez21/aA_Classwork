import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import PokemonDetail from './../components/pokemon/pokemon_detail';
const App = () => {

    return(
        <div>
            <Route path="/" component={PokemonIndexContainer}/>
            <Route path="/pokemon/:id" component={PokemonDetail}/>
        </div>
        
    )

}



export default App;