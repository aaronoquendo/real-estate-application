import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  menuItemClicked (event) {
    console.log('menu item clicked event object', event.target)
    const menuPane = document.querySelector('.listings-menu-pane')
    menuPane.classList.toggle('isActive')
  }
  render () {
    return (
      <div id='search-bar-container' className=''>
        <ul className='toolbar-left'>
          <li className='search-box-content'>
            <form className='searchbox' id=''>
              <label className='hide-visually' htmlFor='citystatezip'>Search</label>
              <input autoCorrect='off' name='citystatezip' id='citystatezip' placeholder='Address, Neighborhood, or ZIP'
                type='text' className='aclist-input' autoComplete='off' />
              <div className='button-container'>
                <button type='submit' aria-label='Submit' className='search-button'>
                  <i className='fas fa-search' />
                </button>
              </div>
            </form>
          </li>
          <li id='search-sort-bar' className='zsg-nav-item'>
            <div id='search-filters' className='zsg-nav-item search-filters'>
              <form id='searchfilters' className='zsg-form'>
                <fieldset className='filter-menu listings-menu'>
                  <legend>
                    <a className='menu-label' tabIndex='0'>
                      <div id='listings-menu-label' onClick={this.menuItemClicked}>
                        <span className='zsg-icon-for-sale'>&nbsp;</span>
                        <span className='zsg-icon-pre-market'>&nbsp;</span>Listing Type
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>



                  <div className='filter-pane listings-menu-pane'>
                    <div id='category-entries' className='search-entry'>
                      <ul className='home-icons'>
                        <li id='fs-listings' className='listing-type'>
                          <div className='listing-category'>
                            <input id='fs-listings-input' type='checkbox' className='checkbox' />
                            <label htmlFor='fs-listings-input'>
                              <span className='icon-for-sale'>&nbsp;</span><span className='listing-type-text'>For Sale </span>
                              <span id='fs-listings-resultCountWrapper'>(44)</span>
                            </label>
                          </div>
                        </li>
                        <li id='fr-listings' className='listing-type'>
                          <div className='listing-category'>
                            <input id='fr-listings-input' type='checkbox' className='checkbox' />
                            <label htmlFor='fr-listings-input'>
                              <span className='icon-for-rent'>&nbsp;</span><span className='listing-type-text'>For Rent </span>
                              <span id='fr-listings-resultCountWrapper'>(11)</span>
                            </label>
                          </div>
                        </li>
                        <li id='rs-listings' className='listing-type'>
                          <div className='listing-category'>
                            <input id='rs-listings-input' className='checkbox' type='checkbox' />
                            <label htmlFor='rs-listings-input'>
                              <span className='icon-recently-sold'>&nbsp;</span>
                              <span className='listing-type-text'>Recently Sold </span>
                              <span id='rs-listings-resultCountWrapper'>(288)</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div id='only-entries' className='search-entry'>
                      <ul className='only-entries-ul'>
                        <li className='only-entries-li' id='open-houses'>
                          <input id='open-houses-input' className='checkbox' type='checkbox' />
                          <label htmlFor='open-houses-input'>
                            <span className='icon-recently-sold'>&nbsp;</span>
                            <span className='open-houses'>Open Houses only</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>



                </fieldset>
                <fieldset className='filter-menu affordability-menu price-menu'>
                  <legend data-za-label='Price'>
                    <a id='price-menu-label' className='menu-label' tabIndex='0'>
                      <div> Any Price <span className='zsg-icon-arrow-menu-down' />
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>
                </fieldset>
                <fieldset data-dropdown-id='beds-select' className='filter-menu beds-menu custom-dropdown'
                  id='yui_3_18_1_1_1554173810311_1767'>
                  <legend data-za-label='Beds'>
                    <a id='beds-menu-label' className='menu-label' tabIndex='0'>
                      <div>
                        <span className='options-display' data-za-action='Beds'>0+</span> Beds
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>
                </fieldset>
                <fieldset className='filter-menu type-menu hometype-standalone custom-dropdown home-type-dropdown'>
                  <legend data-za-label='Home Type'>
                    <a id='type-menu-label' className='menu-label' tabIndex='0'>
                      <div> Home Type <span id='hometype-count' />
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>
                </fieldset>
                <fieldset className='filter-menu more-menu'>
                  <legend data-za-label='More'>
                    <a className='menu-label' tabIndex='0'>
                      <div> more <span id='applied-filter-count' />
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>
                </fieldset>
              </form>
            </div>
          </li>
        </ul>
        <ul className='toolbar-right'>
          <li id='save-search-button'>
            <fieldset className='filter-menu save-search'>
              <legend data-za-label='Save search'>
                <a data-za-href='!ignore' data-za-label-submit='Save Search Toolbox submit'
                  href='#saved-search-lightbox' className='lightbox-show zsg-link_primary' data-za-label='Save search'>
                  Save Search
                </a>
              </legend>
            </fieldset>
          </li>
          <li id='fav-control-myhome' className='search-nav-button'>
            <a data-za-category='Search'
              data-za-action='Saved Homes Click' rel='nofollow'
              data-after-auth-action-type='Link'
              id='register_opener' href='/savedhomes/'
              title='Saved Homes'
              className='toolbar-button zsg-button_primary track-ga-event show-lightbox'
              data-za-label='SavedHomes Map'> Saved Homes
            (<span data-count='0' id='saved-homes-count'>0</span>) </a></li>
        </ul>
      </div>
    )
  }
}
