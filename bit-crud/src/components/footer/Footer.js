import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © 2019 BIT
          <a className="grey-text text-lighten-4 right" href="#!"><Link to='/sing-in'>Sign In</Link></a>
        </div>
      </div>
    </footer>
  )
}
export default Footer