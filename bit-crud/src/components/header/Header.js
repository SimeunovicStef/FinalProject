import React from 'react'
import './Header.css'

import {
    Link
}

    from 'react-router-dom'

const Header = (props) => {
    return (<nav> <div className="nav-wrapper"> <a href="#" className="brand-logo">CRUD</a> <ul id="nav-mobile" className="right hide-on-med-and-down"> <li><Link to='/'>Posts</Link></li> <li><Link to='/about'>About</Link></li> </ul> </div> </nav>)
}

export default Header