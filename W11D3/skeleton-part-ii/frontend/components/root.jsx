import React from 'react';
import { Provider } from 'react-redux';
import App from './app'
import { HashRouter, Route} from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
        {/* <Route exact path="/" component={App}/> */}
        <App />
      </HashRouter>
  </Provider>
);

export default Root;