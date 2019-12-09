import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Checkbox from '../../components/checkbox/Checkbox'
import Icon from '../../components/icon/Icon'
import Title from '../../components/title/Title'
import { Row } from '../../components/Row/Row'

import "./RegistrationForm.scss";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: null

        }
    }

    render() {
        return (
            <>
                <div className='wraper RegistrationForm'>
                    <Icon className='lockLogo' />
                    <Title title='Sign Up' className='title' />

                    <Row>
                        <Input name='firstName' type='text' placeholder='First Name *' className='col s6 RegistrationForm__splitter input' />
                        <Input name='lastName' type='text' placeholder='Last Name *' className='col s6 input' />
                    </Row>

                    <Row>
                        <Input name='lastName' type='text' placeholder='Last Name *' className='input' />
                        <Input name='password' type='password' placeholder='Password *' className='input last' />

                        <Checkbox onChange={(d) => console.log(d)} label="I want to receive inspiration, marketing promotions and update via email." />
                        <Button title='Sign Up' />
                        <span className='span'><Link to='/sign-in'>Already have an account? Sign in</Link></span>
                    </Row>
                </div>
            </>
        )
    }
}
export default RegistrationForm         
