import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import RegisterForm from '../../page/RegisterForm';
import LoginPage from '../../page/loginForm/LoginPage'

const Main = (props) => {
    return (
        <main className="container">
            <Switch>
                <Route path='/sign-in' component={LoginPage} />
                <Route path="/sign-up" component={RegisterForm} />
                <Redirect to="/sign-in" />
            </Switch>
        </main>
    )
}
export default Main