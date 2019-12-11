import React, {Component} from 'react'
import './Header.css'
import { logOut } from '../../services/authServices'
// import { createHashHistory } from 'history';
import { Link } from 'react-router-dom'




class Header extends Component {
    // constructor(props) {
    //     super(props);}



      onLogout = event => {
        event.preventDefault();
        logOut();
        this.props.history.push("/");
      };

   
      render () {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">CRUD</a>
               
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link onClick={this.onLogout}>
                    <i className="material-icons">Logout</i>
                  </Link>
                </li>
                    <li><Link to="/">Posts</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}
}
export default Header