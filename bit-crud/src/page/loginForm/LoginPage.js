import React from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Checkbox from '../../components/checkbox/Checkbox'
import Title from '../../components/title/Title'
import Icon from '../../components/icon/Icon'
import { Row } from '../../components/Row/Row'
import { Link } from 'react-router-dom'


class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: "",
            checkbox: false

        }
    }
    onFormSubmitHandler = e => {
        e.preventDefault();
    }
    onChangeInputHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        return (
            <div className='container'>

                <form className='col s12' onSubmit={this.onFormSubmitHandler}>
                    <div className='wraper'>
                        <Icon className='lockLogo' />
                        <Title title="Sign In" className="title" />
                        <Row >
                            <Input name="email" type="text" placeholder="Email Address*" value={this.state.email} onChange={this.onChangeInputHandler} />
                            <Input name="password" type="password" placeholder="Password*" value={this.state.password} onChange={this.onChangeInputHandler} />
                        </Row>
                        <Checkbox onChange={(d) => console.log(d)} label="Remember me" />

                        <Button title='Sign In' />
                        <Row >
                            <a className="col 4">Forgot password?</a>
                            <span className="col 4 offset-md-4"><Link to='/sign-up'>Don't have an account? Sign Up'</Link></span>
                        </Row>

                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage