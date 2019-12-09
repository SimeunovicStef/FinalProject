import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import RegisterForm from '../../page/RegisterForm';

const Main = (props) => {
    return (
        <main className="container">
            <Switch>
                <Route path="/sign-up" component={RegisterForm} />
                <Redirect to="/sign-up" />
            </Switch>
        </main>
    )
}
export default Main