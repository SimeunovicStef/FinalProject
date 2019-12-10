import React from 'react'
import Button from '../components/button/Button'
import Input from '../components/input/Input'
import Checkbox from '../components/checkbox/Checkbox'
import Icon from '../components/icon/Icon'
import Title from '../components/title/Title'
import { Row } from '../components/Row/Row'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: null

        }
    }
    render() {


        return (
            <>

                <div className='wraper'>
                    <Icon className='lockLogo' />
                    <Title title='Sign Up' className='title' />

                    <Row>
                        <Input name='firstName' type='text' placeholder='First Name *' className='col s6' />
                        <Input name='lastName' type='text' placeholder='Last Name *' className='col s6' />
                    </Row>

                    <Row>
                        <Input name='lastName' type='text' placeholder='Last Name *' />
                        <Input name='password' type='password' placeholder='Password *' />

                        <Checkbox onChange={(d) => console.log(d)} label="I want to receive inspiration, marketing promotions and update via email." />
                        <Button title='Sign Up' />
                        <span className=''>Already have an account? Sign in</span>
                    </Row>
                </div>
            </>
        )
    }
}
export default RegisterForm         
