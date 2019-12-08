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
                <div className='wraper'>
                <img src=''></img>
                <h1 className='title'>Sign up</h1>
                <input type='text' name='firstName' placeholder='First Name *' className='halfInput'></input>
                <input type='text' name='lastName' placeholder='Last Name *' className='halfInput'></input><br />
                <input type='email' name='email' placeholder='Email Address *' className='wholeInput'></input><br />
                <input type='password' name='password' placeholder='Password *' className='wholeInput'></input><br />
                <input type='checkbox' name='email updates' className='checkbox'></input>
                <label>I want to receive inspiration, marketing promotions and updates via email.</label><br />
                <button className='sign'>SING UP</button><br />
                <span className=''>Already have an account? Sign in</span>
                </div>
            </div>
        )
    }
}
export default RegisterForm         
