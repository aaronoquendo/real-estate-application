import React, { Component } from 'react'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMobileMenuOpen: false
    }
    this.openMobileMenu = this.openMobileMenu.bind(this)
  }
  openMobileMenu () {
    let hamburgerIcon = document.querySelector('.hamburger.hamburger--slider')
    let mobileMenu = document.querySelector('.mobile-menu')
    this.setState((state) => {
      hamburgerIcon.classList.toggle('is-active')
      mobileMenu.classList.toggle('isActive')
      return { isMobileMenuOpen: !state.isMobileMenuOpen }
    })
  }
  render () {
    const { pathname } = this.props.location
    return (
      <div className='header-wrapper' style={pathname !== '/property' ? null : { boxShadow: 'none' }} >
        <div className='nav-mask' />
        <header style={pathname !== '/property' ? null : { maxWidth: 'none' }}>
          <button id='header-hamburger-icon' className='hamburger hamburger--slider' type='button' onClick={this.openMobileMenu}>
            <span className='hamburger-box'>
              <span className='hamburger-inner' />
            </span>
          </button>
          <nav className='left-nav'>
            <a href='/property'>Buy</a>
            <a href='/property'>Rent</a>
            <a href='/property'>Mortgages</a>
            <a href='/property' className=''>Agent Finder</a>
          </nav>
          <div className='logo'>
            <a href='/'><img src={require('../../assets/images/trillio-house.png')} style={{ width: '50px', height: '40px' }} alt='' /><span>Trillio</span></a>
          </div>
          <nav className='right-nav'>
            <a href='/property' className='nav-item-removed'>List your rental</a>
            <a href='/property'>Advertise</a>
            <a href='/property'>Sign or Join</a>
            <a href='/property' className='nav-item-removed'>Help</a>
          </nav>
        </header>
      </div>
    )
  }
}
