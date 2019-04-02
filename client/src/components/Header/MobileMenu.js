import React, { Component } from 'react'

export default class MobileMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isNavDropdownOpen: false
    }
    this.caretClicked = this.caretClicked.bind(this)
  }
  caretClicked () {
    let hamburgerIcon = document.querySelector('.nav-dropdown')

    this.setState((state) => {
      hamburgerIcon.classList.toggle('isActive')
      return { isNavDropdownOpen: !state.isNavDropdownOpen }
    })
  }
  render () {
    return (
      <React.Fragment>
        <div className='mobile-menu'>
          <div className='mobile-menu-header'>
            <div className='home-link'>
              <a href='/'>Homepage</a>
            </div>
            <div className='sign-join'>
              <a href='/'>Sign in</a>
              <span>&nbsp;or&nbsp;</span>
              <a href='/'>Join</a>
            </div>
          </div>
          <ul className='nav-links-main'>
            <li className=''>
              <a href='/homes/' className='nav-section-title'><span>Buy</span></a>
              <span className='icon-expando-down' onClick={this.caretClicked} />
              <div>
                <div className='nav-dropdown'>
                  <div className='nav-dropdown-content'>
                    <ul className='nav-dropdown-sections'>
                      <li className='nav-dropdown-section'>
                        <h6 className='nav-dropdown-header'>New York homes for sale</h6>
                        <ul className='nav-dropdown-columns'>
                          <li className='nav-dropdown-column'>
                            <ul className='nav-dropdown-links'>
                              <li><a href='/property' className='nav-link-text'><span>Homes For sale</span></a></li>
                              <li><a href='/property' className='nav-link-text'><span>Foreclosures</span></a></li>
                              <li><a href='/property' className='nav-link-text'><span>For sale by owner</span></a>
                              </li>
                              <li><a href='/property' className='nav-link-text'><span>Open houses</span></a></li>
                              <li><a href='/property' className='nav-link-text'><span>New construction</span></a></li>
                              <li><a href='/property' className='nav-link-text'><span>Coming soon</span></a></li>
                              <li><a href='/property' className='nav-link-text'><span>Recent home sales</span></a>
                              </li>
                              <li><a href='/property' className='nav-link-text'><span>All homes</span></a></li>
                            </ul>
                          </li>

                        </ul>
                      </li>
                      <li className='nav-dropdown-section'>
                        <h6 className='nav-dropdown-header'>Resources</h6>
                        <ul className='nav-dropdown-columns'>
                          <li className='nav-dropdown-column'>
                            <ul className='nav-dropdown-links'>
                              <li><a href='/property' className='nav-link-text'><span>Buyers Guide</span></a></li>
                              <li><a href='/property' className='nav-link-text'><span>Foreclosure center</span></a>
                              </li>
                              <li><a href='/property' className='nav-link-text'><span>Real estate app</span></a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}
