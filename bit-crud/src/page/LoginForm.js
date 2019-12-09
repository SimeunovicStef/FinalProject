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
                <img src='data:image/png;base64,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'></img>
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