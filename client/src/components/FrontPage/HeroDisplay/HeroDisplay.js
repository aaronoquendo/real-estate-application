import React, { Component } from 'react'

export default class FrontPage extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className='hero-display'>
        <div className='hero-wrapper'>
          <div className='video-wrapper'>
            <video autoPlay muted loop poster='https://videos.zillowstatic.com/homepage/video_zest_20170503_1800b_q.jpg'>
              <source src='https://videos.zillowstatic.com/homepage/video_zest_20170503_1800b.mp4' type='video/mp4' />
            </video>
          </div>

          <div className='search-container'>
            <header className='home-page-header'>
              <h1 className='heading'>Find your next rental</h1>
            </header>
            <div className='home-page-tabs'>
              <ul>
                <li className=''><a role='navigation' href='/buy/'>Buy</a></li>
                <li className='active'><a role='navigation' href='/rent/'>Rent</a></li>
                <li className=''><a role='navigation' href='/sell/'>Sell</a></li>
                <li className=''><a role='navigation' href='/find-your-home/'>Estimate</a></li>
              </ul>
            </div>
            <form className='react-autosuggest__container num-rows-5'>
              <div  aria-haspopup='listbox' aria-owns='react-autowhatever-1' aria-expanded='false'
                className='react-autosuggest__container'>
                <input type='text' autoComplete='off' aria-autocomplete='list' aria-controls='react-autowhatever-1'
                  className='react-autosuggest__input'
                  placeholder='Enter an address, neighborhood, city, or ZIP code' value='' />
                <div id='react-autowhatever-1' role='listbox'
                  className='react-autosuggest__suggestions-container' />
              </div>
              <div className='searchBtnContainer zsg-searchbox-content-container'>
                <button className='searchBtn zsg-search-button_text zsg-search-button_primary'><span
                  className='searchBtnText'>Search</span><span className='searchBtnIcon zsg-icon-searchglass' />
                </button>
              </div>
            </form>
          </div>

          <div className='home-page-upsell-ribbon find-an-agent'>
            <div className='zsg-layout-width upsell-contraint'>
              <a className='upsell-main' href='/pre-approval/#/landing'>
                <img alt='Be ready to buy' className='icon' src='https://s.zillowstatic.com/homepage/static/upsell_agent_icon.svg' />
                <strong>Be ready to buy</strong>
                <span>Get pre-qualified by a local lender on Trillio.</span>
              </a>
              <a href='/pre-approval/#/landing' className='upsell-button zsg-button_primary'>Get started</a></div>
          </div>
        </div>
      </div>
    )
  }
}
