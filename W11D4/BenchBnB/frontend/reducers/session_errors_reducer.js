import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { [action.error]: action.error })
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.error]: [] });
    default:
      return state;
  }
};