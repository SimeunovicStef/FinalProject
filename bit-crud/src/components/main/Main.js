import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'


import RegistrationForm from '../../page/RegistrationForm/RegistrationForm';


const Main = (props) => {
    return (
        <main className="container">
            <Switch>

                <Route path="/sign-up" component={RegistrationForm} />
                <Redirect to="/sign-up" />

            </Switch>
        </main>
    )
}
export default Main