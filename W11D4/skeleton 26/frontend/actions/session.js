import * as SessionUtil from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receieveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER, 
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const createNewUser = formUser => dispatch => SessionUtil.postUser(formUser).then(user => dispatch(receieveCurrentUser(user)));

export const login = formUser => dispatch => SessionUtil.postSession(formUser).then(user => dispatch(receieveCurrentUser(user)));

export const logout = () => dispatch => SessionUtil.deleteSession().then(() => dispatch(logoutCurrentUser()));