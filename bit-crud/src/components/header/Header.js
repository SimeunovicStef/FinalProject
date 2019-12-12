import React, { Component } from 'react'
import './Header.css'
import { Link, withRouter } from 'react-router-dom'

class Header extends Component {
  // constructor(props) {
  //     super(props);}

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">CRUD</a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Posts</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default withRouter(Header)