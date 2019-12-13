import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from '../../page/loginForm/LoginPage'

import RegistrationForm from '../../page/RegistrationForm/RegistrationForm';
import Posts from '../../page/Posts/Posts';
import About from '../../page/About/About'
import DashboardLanding from '../../page/Dashboard/DashboardLanding'
import MyPostLanding from '../../page/MyPosts/MyPostLanding'

const Main = (props) => {
    return (
        <main className="container">
            <Switch>
                <Route path='/myposts' component={MyPostLanding} />
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Posts} />
                <Route path="/sign-in" component={LoginPage} />
                <Route path="/sign-up" component={RegistrationForm} />
                <Route path="/dashboard" component={DashboardLanding} />
                <Redirect to="/sign-in" />

            </Switch>
        </main>
    )
}
export default Main