import React, { Component} from 'react';

export default class Header extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <header>
        <div className="logo">
          <span>EstateDiscovery.com</span>
        </div>
        <nav className="right-nav">
          <a href="#">Create posting</a>
          <a href="#">About Us</a>
          <a href="#">Log In</a>
          <a href="#" className="register-btn">Register</a>
        </nav>
      </header>
    )
  }
}
