import React from 'react'

const Footer = () => (
  <footer id='footer'>
    <div className='footer-nav'>
      <nav className='footer-row'>
        <ul className='footer-link-list'>
          <li><a href='/property' title='About' className=''>About</a></li>
          <li><a href='/property' title='Zestimates' className=''>Estimates</a></li>
          <li><a href='/property' title='Research' className='' >Research</a></li>
          <li><a href='/property' title='Careers' className='' >Careers</a></li>
          <li><a href='/property' title='Help' className=''>Help</a></li>
          <li><a href='/property' title='Advertise' className=''>Advertise</a></li>
          <li><a href='/property' title='Terms of use &amp; Privacy' className=''>Terms of use &amp; Privacy</a></li>
          <li><a href='/property' title='Ad Choice' className=''>Ad Choice</a></li>
          <li><a href='/property'>Cookie Preferences</a></li>
          <li><a href='/property' title='Blog' className=''>Blog</a></li>
          <li><a href='/property' title='AI' className='' data-za-category='!inherit' data-za-action='!inherit'
            data-za-label='AI'>AI</a></li>
          <li><a href='/property' title='Mobile Apps' className=''>Mobile Apps</a></li>
        </ul>
      </nav>
    </div>
    <div className='footer-copyright'>
      <ul className='footer-copyright-list'>
        <li>
          <a href='/' className='zfoot-footer-logo'>
            <img className='logo' src={require('../../../assets/images/trillio-house.png')} alt='' />
          </a>
        </li>
        <li>
          <div className='footer-follow'>
            <span>Follow us: </span>
            <a href='http://www.facebook.com/'>
              <img className='social-icon' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png' alt='' />
            </a>
            <a href='http://twitter.com/' className=''><img className='social-icon'
              src='http://www.stickpng.com/assets/images/58e9196deb97430e819064f6.png' alt='' />
            </a>
          </div>
        </li>
        <li>© 2006-2019 Trillio</li>
        <li><span className='zsg-icon-eho' /></li>
      </ul>
    </div>
  </footer>
)
export default Footer
