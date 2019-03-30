import React, { Component } from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div className='header-wrapper'>
        <header>
          <nav className='left-nav'>
            <a href='/property'>Buy</a>
            <a href='/property'>Rent</a>
            <a href='/property'>Mortgages</a>
            <a href='/property' className=''>Agent Finder</a>
          </nav>
          <div className='logo'>
            <a href='/'><img src={require('../../images/trillio-logo.png')} style={{ width: '120px', height: '30px' }} /></a>
          </div>
          <nav className='right-nav'>
            <a href='/property'>List your rental</a>
            <a href='/property'>Advertise</a>
            <a href='/property'>Sign or Join</a>
            <a href='/property' className='register-btn'>Help</a>
          </nav>
        </header>
      </div>
    )
  }
}
