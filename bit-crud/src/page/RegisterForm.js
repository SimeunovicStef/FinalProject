import React from 'react'
import Button from '../components/button/Button'
import Input from '../components/input/Input'
import Checkbox from '../components/checkbox/Checkbox'
import Image from '../components/image/Image'
import Title from '../components/title/title'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: null

        }
    }
    render() {


        return (
            <main>
                <h5>Register</h5>
                <div className='wraper'>
                    <Image />
                    <Title title='Sign Up' />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Checkbox onChange={(d) => console.log(d)} label="aasldkfj sdf" />
                    <Button title='Sign Up' />
                    <span className=''>Already have an account? Sign in</span>
                </div>
            </main>
        )
    }
}
export default RegisterForm         
