import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer class="page-footer">
      <div class="footer-copyright">
        <div class="container">
          © 2019 BIT
          <a class="grey-text text-lighten-4 right" href="#!"><Link to='/sing-in'>Sign In</Link></a>
        </div>
      </div>
    </footer>
  )
}
export default Footer