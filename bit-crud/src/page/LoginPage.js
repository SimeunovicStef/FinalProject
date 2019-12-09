import React from 'react'
import Input from '../components/input/Input'
import Button from '../components/button/Button'
import Checkbox from '../components/checkbox/Checkbox'
import Title from '../components/title/Title'





class LoginPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='wraper'>
                    <Title title="Sign In" className="title" />
                    <div className='row'>
                        <Input name="emailAddress" type="text" placeholder="Email Address*" />
                        <Input name="password" type="text" placeholder="Password*" />
                        <Checkbox />
                        <label>Remember me</label>
                        <Button title='Sign In' />
                        <div className='row'>
                            <a className="col 4">Forgot password?</a>
                            <a className="col 4 offset-md-4">Don't have an account? Sign Up'</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage