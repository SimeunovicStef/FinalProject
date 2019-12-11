import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from '../../page/loginForm/LoginPage'

import RegistrationForm from '../../page/RegistrationForm/RegistrationForm';
import DashboardLanding from '../../page/Dashboard/DashboardLanding'

const Main = (props) => {
    return (
        <main className="container">
            <Switch>
            <Route path="/sign-in" component={LoginPage} />
                <Route path="/sign-up" component={RegistrationForm} />
                <Route path="/dashboard" component={DashboardLanding}/>
                <Redirect to="/sign-in" />

            </Switch>
        </main>
    )
}
export default Main