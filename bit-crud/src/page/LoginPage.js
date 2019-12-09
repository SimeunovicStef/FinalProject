import React from 'react'
import Input from '../components/input/Input'
import Button from '../components/button/Button'
import Checkbox from '../components/checkbox/Checkbox'
import Title from '../components/title/Title'
import Icon from '../components/icon/Icon'
import { Row } from '../components/Row/Row'
import { Link } from 'react-router-dom'


class LoginPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='wraper'>
                    <Icon className='lockLogo' />
                    <Title title="Sign In" className="title" />
                    <Row >
                        <Input name="emailAddress" type="text" placeholder="Email Address*" />
                        <Input name="password" type="text" placeholder="Password*" />
                    </Row>
                    <Checkbox onChange={(d) => console.log(d)} label="Remember me" />

                    <Button title='Sign In' />
                    <Row >
                        <a className="col 4">Forgot password?</a>
                        <span className="col 4 offset-md-4"><Link to='/sign-up'>Don't have an account? Sign Up'</Link></span>
                    </Row>

                </div>

            </div>
        )
    }
}

export default LoginPage