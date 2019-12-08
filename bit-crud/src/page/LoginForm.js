import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h5>Login</h5>
                <img src=''></img>
                <h1 className='title'>Sign in</h1>
                <form>
                    <fieldset>
                        <legend>Email Address *</legend>
                        <input type='email' name='email' placeholder='Email Address'></input>
                    </fieldset>
                    <fieldset>
                        <legend>Password *</legend>
                        <input type='password' name='password' placeholder='Password' ></input>
                    </fieldset>
                    <input type='checkbox' name='remember' /><label>Remember me</label><br />
                    <button className='sign'>SIGN IN</button><br />
                    <a>Forgot password?</a>
                    <a>Don't have an account? Sign Up</a>
                    {/* vodi ka registerform stranici */}
                </form >
            </div >
        )
    }
}
export default LoginForm