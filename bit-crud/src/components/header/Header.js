import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">CRUD</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Posts</a></li>
                    <li><a href="badges.html">About</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header