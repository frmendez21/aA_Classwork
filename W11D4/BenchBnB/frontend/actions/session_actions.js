import * as sessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = (errorsArray) => {
  return {
    type: RECEIVE_ERRORS,
    errorsArray
  }
}

export const signup = formUser => dispatch => (
  sessionUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => (dispatch(receiveErrors(err.responseJSON)))
));

export const login = formUser => dispatch => (
  sessionUtil.login(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(err => (dispatch(receiveErrors(err.responseJSON)))
));

export const logout = () => dispatch => sessionUtil.logout().then(() => dispatch(logoutCurrentUser()));