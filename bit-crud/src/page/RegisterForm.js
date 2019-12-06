import React from 'react'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: null

        }
    }
    render() {


        return (
            <div>
                <h5>Register</h5>
                <img src=''></img>
                <h1>Sign up</h1>
                <input type='text' name='firstName' placeholder='First Name *'></input>
                <input type='text' name='lastName' placeholder='Last Name *'></input><br />
                <input type='email' name='email' placeholder='Email Address *'></input><br />
                <input type='password' name='password' placeholder='Password *'></input><br />
                <input type='checkbox' name='email updates'></input>
                <label>I want to receive inspiration, marketing promotions and updates via email.</label><br />
                <button>SING UP</button>
            </div>
        )
    }
}
export default RegisterForm         
