import React from 'react';
import GreetingContainer from './greeting_container'
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'
const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <Route exact path="/" component={GreetingContainer} />
        </header>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;