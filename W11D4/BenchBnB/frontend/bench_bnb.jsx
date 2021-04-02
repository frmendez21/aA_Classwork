import React from "react";
import ReactDOM from "react-dom";
// import * as sessionAPI from "./util/session_api_util";
import { login } from "./actions/session_actions"
import configureStore from "./store/store"
// import { receiveCurrentUser } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  const store = configureStore();
  window.login = login;
  // window.logout = logout;
  // window.receiveCurrentUser = receiveCurrentUser
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
