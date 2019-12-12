import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isUserLoggedIn } from '../../services/authServices'
import { logOut } from '../../services/authServices'

class Footer extends React.Component {


  onLogout = event => {
    event.preventDefault();
    logOut();
    this.props.history.push("/");
  };

  render() {
    const text = isUserLoggedIn() ? (
      <a className="grey-text text-lighten-4 right" >
        <Link to='/' onClick={this.onLogout}>
          SignOut
        </Link>
      </a>
    ) : (
        <a className="grey-text text-lighten-4 right" >
          <Link to='/sing-in'>Sign In</Link>
        </a>
      )
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            © 2019 BIT
          {text}
          </div>
        </div>
      </footer>
    )
  }
}
export default withRouter(Footer)