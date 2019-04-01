import React from 'react'

const Footer = () => (
  <footer id='footer'>
    <div className='footer-nav'>
      <nav className='footer-row'>
        <ul className='footer-link-list' data-za-category='Navigation' data-za-action='Footer'>
          <li><a href='/' title='About' className='' >About</a></li>
          <li><a href='/' title='Zestimates' className=''>Estimates</a></li>
          <li><a href='/' title='Research' className='' >Research</a></li>
          <li><a href='/' title='Careers' className='' >Careers</a></li>
          <li><a href='/' title='Help' className=''>Help</a></li>
          <li><a href='/' title='Advertise' className=''>Advertise</a></li>
          <li><a href='/' title='Terms of use &amp; Privacy' className=''>Terms of use &amp; Privacy</a></li>
          <li><a href='/' title='Ad Choice' className=''>Ad Choice</a></li>
          <li>
            <a id='teconsent' className='' data-za-category='!inherit' data-za-action='!inherit' consent='undefined'>
              <script async='async' type='text/javascript' crossOrigin=''
                src='https://consent.trustarc.com/asset/notice.js/v/v1.7-152' />
              <a id='icon-id0236767090008015' tabIndex='0' role='button' lang='en'>Cookie
                Preferences</a></a>
          </li>
          <li><a href='/blog/' title='Blog' className='' data-za-category='!inherit' data-za-action='!inherit'
            data-za-label='Blog'>Blog</a></li>
          <li><a href='/data-science/' title='AI' className='' data-za-category='!inherit' data-za-action='!inherit'
            data-za-label='AI'>AI</a></li>
          <li><a href='/mobile/' title='Mobile Apps' className='' data-za-category='!inherit' data-za-action='!inherit'
            data-za-label='Mobile Apps'>Mobile Apps</a></li>
        </ul>
      </nav>
    </div>
    <div className='footer-copyright'>
      <ul className='footer-copyright-list'>
        <li>
          <a href='/' className='zfoot-footer-logo' accessKey='1' data-za-action='Zillow logo click'
            data-za-category='!inherit'>
            <img className='logo' src={require('../../../assets/images/trillio-house.png')} />
          </a>
        </li>
        <li>
          <div className='footer-follow'>
            <span>Follow us: </span>
            <a href='http://www.facebook.com/Zillow'>
              <img className='social-icon' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png' />
            </a>
            <a href='http://twitter.com/zillow' rel='nofollow' target='_blank' className='' data-za-category='!inherit' data-za-action='!inherit' data-za-label='Twitter'><img className='social-icon'
              src='http://www.stickpng.com/assets/images/58e9196deb97430e819064f6.png' />
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
