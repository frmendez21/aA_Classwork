import { RECEIVE_POKEMON } from '../actions/pokemon_actions'

const movesReducer = (state = {}, action) => {
  // console.log(action)
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_POKEMON:
      // const items = {items: action.pokemon.items}
      return Object.assign({}, state, action.payload.moves)
    default:
      return state
  }

}

export default movesReducer