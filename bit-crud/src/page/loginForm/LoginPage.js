import React from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Checkbox from '../../components/checkbox/Checkbox'
import Title from '../../components/title/Title'
import Icon from '../../components/icon/Icon'
import { Row } from '../../components/Row/Row'
import { Link } from 'react-router-dom'
import './login.scss'


class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      loginPassword: "",
      errorMsg: "",
      checkbox: false

    }
  }

  // onEmailChange = (event) =this.setState({email:event.target.value, error:''})
  // onPassChange = (event) =this.setState({password:event.target.value, error:''})



  // onFormSubmitHandler = e => {
  //     e.preventDefault();
  // }
  // onChangeInputHandler = e => {
  //     this.setState({ [e.target.name]: e.target.value })
  // }


  loginHandler = event => {
    const { email, loginPassword } = this.state;
    const content = {
      email: email,
      password: loginPassword
    };

    event.preventDefault();
    this.sendLoginForm(content);
  };

  resetLoginForm = () => {
    this.setState({
      email: "",
      loginPassword: "",
      errorMsg: ""
    });
  };

  goToHomepage = () => this.props.history.push("/");

  sendLoginForm = data => {
    const { sendLoginData } = this.props;

    sendLoginData(data).then(({ error }) => {
      if (error) {
        return this.setState({ errorMsg: error.message });
      }

      this.resetLoginForm();
      this.goToHomepage();
    });
  };

  onChangeHandler = event => {
    const elementId = event.target.email;
    const elementValue = event.target.value;

    this.setState({
      [elementId]: elementValue
    });
  };


  render() {
    const { errorMsg } = this.state;
    return (
      <div className='container'>

        <form className='col s12'>
          <div className='wraper RegistrationForm'>
            <Icon className='lockLogo' />
            <Title title="Sign In" className="title" />
            <Row >
              <Input name="email" type="text" placeholder="Email Address*" className='input' required onChange={this.onChangeHandler} />
              <Input name="password" type="password" placeholder="Password*" className='input last' required onChange={this.onChangeHandler} />
            </Row>
            <Checkbox onChange={(d) => console.log(d)} label="Remember me" />

            <Button title='Sign In' type="submit" onClick={this.loginHandler} name="action" />
            <Row >
              <a className="col 4">Forgot password?</a>
              <span className="col 4 offset-md-4"><Link to='/sign-up'>Don't have an account? Sign Up'</Link></span>
              <p className="red-text">{errorMsg} </p>
            </Row>

          </div>
        </form>
      </div>
    )
  }
}

export default LoginPage