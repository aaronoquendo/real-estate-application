import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  menuItemClicked (divId) {
    const listingsMenuPane = document.querySelector('.listings-menu-pane')
    const pricingPane = document.querySelector('.pricing-pane')
    const bedsPane = document.querySelector('.beds-pane')
    const houseTypePane = document.querySelector('.housetype-pane')
    const moreMenuPane = document.querySelector('.more-pane')

    if (divId === 'listings-menu-label') {
      listingsMenuPane.classList.toggle('isActive')
      pricingPane.classList.remove('isActive')
      bedsPane.classList.remove('isActive')
      houseTypePane.classList.remove('isActive')
      moreMenuPane.classList.remove('isActive')

    } else if (divId === 'price-menu-label') {
      pricingPane.classList.toggle('isActive')
      listingsMenuPane.classList.remove('isActive')
      bedsPane.classList.remove('isActive')
      houseTypePane.classList.remove('isActive')
      moreMenuPane.classList.remove('isActive')

    } else if (divId === 'beds-menu-label') {
      bedsPane.classList.toggle('isActive')
      pricingPane.classList.remove('isActive')
      listingsMenuPane.classList.remove('isActive')
      houseTypePane.classList.remove('isActive')
      moreMenuPane.classList.remove('isActive')

    } else if (divId === 'housetype-menu-label') {
      houseTypePane.classList.toggle('isActive')
      pricingPane.classList.remove('isActive')
      listingsMenuPane.classList.remove('isActive')
      bedsPane.classList.remove('isActive')
      moreMenuPane.classList.remove('isActive')

    } else if (divId === 'more-menu-label') {
      moreMenuPane.classList.toggle('isActive')
      houseTypePane.classList.remove('isActive')
      pricingPane.classList.remove('isActive')
      listingsMenuPane.classList.remove('isActive')
      bedsPane.classList.remove('isActive')
      
    }

 
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
                      <div id='listings-menu-label' onClick={() => this.menuItemClicked('listings-menu-label')}>
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
                    <a id='menu-label' className='menu-label' tabIndex='0' >
                      <div id='price-menu-label' onClick={() => this.menuItemClicked('price-menu-label')}> Any Price <span className='zsg-icon-arrow-menu-down' />
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>

                  <div className='filter-pane pricing-pane'>
                    <div id='price-entries' className='price-entries search-entry'>
                      <div className='dualboxes' id=''>
                        <div className='box1' id=''>
                          <input className='text' maxLength='11' size='10' name='price-min' id='price-min' type='text'
                            autoComplete='off' placeholder='Min' />
                        </div>
                        <div className='dash'>&nbsp;</div>
                        <div className='box2'>
                          <input className='text commaFormat' maxLength='11' size='11' name='price-max' id='price-max'
                            type='text' autoComplete='off' placeholder='Max' />
                        </div>
                      </div>
                    </div>

                    <div className='filter-price'>
                      <div id='price-min-options' className='price-options min-price-options custom-dropdown'
                        data-dropdown-id='price-min'>
                        <ul className='dropdown-options search-entry menu-linklist'>
                          <li data-value=''><a className='option' tabIndex='0'>0</a></li>
                          <li data-value='50,000'><a className='option' tabIndex='0'>$50,000+</a></li>
                          <li data-value='75,000'><a className='option' tabIndex='0'>$75,000+</a></li>
                          <li data-value='100,000'><a className='option' tabIndex='0'>$100,000+</a></li>
                          <li data-value='150,000'><a className='option' tabIndex='0'>$150,000+</a></li>
                          <li data-value='200,000'><a className='option' tabIndex='0'>$200,000+</a></li>
                          <li data-value='250,000'><a className='option' tabIndex='0'>$250,000+</a></li>
                          <li data-value='300,000'><a className='option' tabIndex='0'>$300,000+</a></li>
                          <li data-value='400,000'><a className='option' tabIndex='0'>$400,000+</a></li>
                          <li data-value='500,000'><a className='option' tabIndex='0'>$500,000+</a></li>
                        </ul>
                      </div>
                      <div id='price-max-options' className='price-options max-price-options custom-dropdown hide'
                        data-dropdown-id='price-max'>
                        <ul className='dropdown-options search-entry menu-linklist'>
                          <li data-value='100,000'><a className='option' tabIndex='0'>$100,000</a></li>
                          <li data-value='200,000'><a className='option' tabIndex='0'>$200,000</a></li>
                          <li data-value='300,000'><a className='option' tabIndex='0'>$300,000</a></li>
                          <li data-value='400,000'><a className='option' tabIndex='0'>$400,000</a></li>
                          <li data-value='500,000'><a className='option' tabIndex='0'>$500,000</a></li>
                          <li data-value='600,000'><a className='option' tabIndex='0'>$600,000</a></li>
                          <li data-value='700,000'><a className='option' tabIndex='0'>$700,000</a></li>
                          <li data-value='800,000'><a className='option' tabIndex='0'>$800,000</a></li>
                          <li data-value='900,000'><a className='option' tabIndex='0'>$900,000</a></li>
                          <li data-value=''><a className='option' tabIndex='0'>Any Price</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </fieldset>

                <fieldset data-dropdown-id='beds-select' className='filter-menu beds-menu custom-dropdown' id=''>
                  <legend data-za-label='Beds'>
                    <a id='' className='menu-label' tabIndex='0'>
                      <div id='beds-menu-label' onClick={() => this.menuItemClicked('beds-menu-label')}>
                        <span className='options-display' data-za-action='Beds'>0+</span> Beds
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>

                  <div className='filter-pane beds-pane' >
                    <div id='beds-entries' className='search-entry'>
                      <ul id='bed-options' className='bed-options dropdown-options menu-linklist'>
                        <li data-value='0,' id='' className=''><a className='option' tabIndex='0'>0+</a></li>
                        <li data-value='1,' id='' className=''><a className='option' tabIndex='0'>1+</a></li>
                        <li data-value='2,' id='' className=''><a className='option' tabIndex='0'>2+</a></li>
                        <li data-value='3,' id='' className=''><a className='option' tabIndex='0'>3+</a></li>
                        <li data-value='4,' id='' className=''><a className='option' tabIndex='0'>4+</a></li>
                        <li data-value='5,' id='' className=''><a className='option' tabIndex='0'>5+</a></li>
                        <li data-value='6,' id='' className=''><a className='option' tabIndex='0'>6+</a></li>
                      </ul>
                      <select id='beds-select' className='hide'>
                        <option value='0,'>0+</option>
                        <option value='1,'>1+</option>
                        <option value='2,'>2+</option>
                        <option value='3,'>3+</option>
                        <option value='4,'>4+</option>
                        <option value='5,'>5+</option>
                        <option value='6,'>6+</option>
                      </select>
                    </div>
                  </div>

                </fieldset>
                <fieldset className='filter-menu home-type-menu hometype-standalone custom-dropdown home-type-dropdown'>
                  <legend data-za-label='Home Type'>
                    <a id='' className='menu-label' tabIndex='0'>
                      <div id='housetype-menu-label' onClick={() => this.menuItemClicked('housetype-menu-label')}> Home Type <span id='hometype-count' />
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>

                  <div className='filter-pane housetype-pane' id=''>
                    <ul className='combobox-options multicheck-dropdown-options hometype-options' id=''>
                      <li id='hometype-houses-filters' className='hometype-houses selected'>
                        <input name='hometype-houses-input' tabIndex='-1' id='hometype-houses-filters-input'
                          type='checkbox' className='hometype-houses-input checkbox' data-za-label='SFH' />
                        <label htmlFor='hometype-houses-filters-input'>
                          <span id='hometype-houses-filters-label'
                            className='hometype-houses-label option'>Houses</span>
                        </label>
                      </li>
                      <li id='hometype-apart-filters' className='hometype-apart selected'>
                        <input name='hometype-apart-input' tabIndex='-1' id='hometype-apart-filters-input'
                          type='checkbox' className='hometype-apart-input checkbox' data-za-label='MFH' />
                        <label htmlFor='hometype-apart-filters-input'><span id='hometype-apart-filters-label'
                          className='hometype-apart-label option'>Apartments</span>
                        </label>
                      </li>
                      <li id='hometype-condo-filters' className='hometype-condo selected'>
                        <input name='hometype-condo-input' tabIndex='-1' id='hometype-condo-filters-input'
                          type='checkbox' className='hometype-condo-input checkbox' data-za-label='Condo' />
                        <label htmlFor='hometype-condo-filters-input'>
                          <span id='hometype-condo-filters-label'
                            className='hometype-condo-label option'>Condos/co-ops</span>
                        </label>
                      </li>
                      <li id='hometype-townhome-filters' className='hometype-townhome selected'>
                        <input name='hometype-townhome-input' tabIndex='-1' id='hometype-townhome-filters-input'
                          type='checkbox' className='hometype-townhome-input checkbox' data-za-label='Townhomes' />
                        <label htmlFor='hometype-townhome-filters-input'>
                          <span id='hometype-townhome-filters-label'
                            className='hometype-townhome-label option'>Townhomes</span>
                        </label>
                      </li>
                      <li id='hometype-manufactured-filters' className='hometype-manufactured selected'>
                        <input name='hometype-manufactured-input' tabIndex='-1'
                          id='hometype-manufactured-top-filters-input' type='checkbox'
                          className='hometype-manufactured-input checkbox' data-za-label='Manu' />
                        <label htmlFor='hometype-manufactured-filters-input'>
                          <span id='hometype-manufactured-filters-label'
                            className='hometype-manufactured-label option'>Manufactured</span>
                        </label>
                      </li>
                      <li id='hometype-land-filters' className='hometype-land selected'>
                        <input name='hometype-land-input' tabIndex='-1' id='hometype-land-filters-input' type='checkbox' className='hometype-land-input checkbox' data-za-label='Lot' />
                        <label htmlFor='hometype-land-filters-input'>
                          <span id='hometype-land-filters-label'
                            className='hometype-land-label option'>Lots/Land</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                </fieldset>

                <fieldset className='filter-menu more-menu'>
                  <legend data-za-label='More'>
                    <a className='menu-label' tabIndex='0'>
                      <div id="more-menu-label" onClick={() => this.menuItemClicked('more-menu-label')}> More 
                      <span id='applied-filter-count' />
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>

                  
                  <div class="filter-pane more-pane" id="">
                    <div id="baths-entries" class="search-entry">
                      <div class="title">Baths</div>
                      <div id="baths-dropdown" class="combobox custom-dropdown" tabindex="0">
                        <span id="baths-readout" class="options-display" data-za-action="Baths">1.5+</span>
                        <span class="icon-arrow-menu-down"></span>
                        <ul id="bath-options" class="dropdown-options">
                          <li data-value="0," id=""><a class="option" tabindex="-1">0+</a></li>
                          <li data-value="1.0," id=""><a class="option" tabindex="-1">1+</a></li>
                          <li data-value="1.5," id="" class="selected"><a class="option" tabindex="-1">1.5+</a></li>
                          <li data-value="2.0,"><a class="option" tabindex="-1">2+</a></li>
                          <li data-value="3.0,"><a class="option" tabindex="-1">3+</a></li>
                          <li data-value="4.0,"><a class="option" tabindex="-1">4+</a></li>
                          <li data-value="5.0,"><a class="option" tabindex="-1">5+</a></li>
                          <li data-value="6.0,"><a class="option" tabindex="-1">6+</a></li>
                        </ul>
                      </div>
                      <select id="baths-select" class="hide">
                        <option value="0,">0+</option>
                        <option value="1.0,">1+</option>
                        <option value="1.5,">1.5+</option>
                        <option value="2.0,">2+</option>
                        <option value="3.0,">3+</option>
                        <option value="4.0,">4+</option>
                        <option value="5.0,">5+</option>
                        <option value="6.0,">6+</option>
                      </select>
                    </div>
                    <div id="sqft-entries" class="search-entry" data-za-label="Square Feet">
                      <div class="title">Square Feet</div>
                      <div class="dualboxes">
                        <div class="box1"><input class="text commaFormat" maxlength="11" size="10" name="sqft-min" id="sqft-min" type="text" placeholder="Min" /></div>
                        <div class="dash">&nbsp;</div>
                        <div class="box2"><input class="text commaFormat" maxlength="11" size="11" name="sqft-max" id="sqft-max" type="text" placeholder="Max" /></div>
                      </div>
                    </div>
                    <div id="lot-size-entries" class="search-entry">
                      <div class="title">Lot Size</div>
                      <div id="lot-min-dropdown" class="combobox custom-dropdown" data-dropdown-id="lot-size-select" tabindex="0">
                        <span id="lot-size-select-readout" class="options-display" data-za-action="Change - Lot Size">Any</span><span class="icon-arrow-menu-down"></span>
                        <ul id="lot-size-select-options" class="">
                          <li data-value="0," id="" class="selected"><a class="option" tabindex="-1">Any</a></li>
                          <li data-value="2000,"><a class="option" tabindex="-1">2,000+ sqft</a></li>
                          <li data-value="3000,"><a class="option" tabindex="-1">3,000+ sqft</a></li>
                          <li data-value="4000,"><a class="option" tabindex="-1">4,000+ sqft</a></li>
                          <li data-value="5000,"><a class="option" tabindex="-1">5,000+ sqft</a></li>
                          <li data-value="7500,"><a class="option" tabindex="-1">7,500+ sqft</a></li>
                          <li data-value="10890,"><a class="option" tabindex="-1">.25+ acre / 10,890+ sqft</a></li>
                          <li data-value="21780,"><a class="option" tabindex="-1">.5+ acre / 21,780+ sqft</a></li>
                          <li data-value="43560,"><a class="option" tabindex="-1">1+ acre</a></li>
                          <li data-value="87120,"><a class="option" tabindex="-1">2+ acres</a></li>
                          <li data-value="217800,"><a class="option" tabindex="-1">5+ acres</a></li>
                          <li data-value="435600,"><a class="option" tabindex="-1">10+ acres</a></li>
                          <li data-value="custom"><a class="option" tabindex="-1">Custom size</a></li>
                        </ul>
                      </div>
                      <select id="lot-size-select" class="hide">
                        <option value="0,">Any</option>
                        <option value="2000,">2,000+ sqft</option>
                        <option value="3000,">3,000+ sqft</option>
                        <option value="4000,">4,000+ sqft</option>
                        <option value="5000,">5,000+ sqft</option>
                        <option value="7500,">7,500+ sqft</option>
                        <option value="10890,">.25+ acre / 10,890+ sqft</option>
                        <option value="21780,">.5+ acre / 21,780+ sqft</option>
                        <option value="43560,">1+ acre</option>
                        <option value="87120,">2+ acres</option>
                        <option value="217800,">5+ acres</option>
                        <option value="435600,">10+ acres</option>
                      </select>
                      <div id="custom-lot-size-entries" class="hide">
                        <div class="title">
                          <ul class="form-group radio-buttons">
                            <li><input type="radio" id="custom-lot-sqft" name="lot_custom" class="radio custom-lot" value="sqft" checked="true" />
                              <label for="custom-lot-sqft">Sqft</label>
                            </li>
                            <li>
                              <input type="radio" id="custom-lot-acre" name="lot_custom" class="radio custom-lot" value="acre" /><label for="custom-lot-acre">Acre</label>
                            </li>
                          </ul>
                        </div>
                        <div class="dualboxes">
                          <div class="box1">
                            <input class="text custom-lot" maxlength="11" size="10" name="custom-lot-min" id="custom-lot-min" type="text" placeholder="Min" />
                          </div>
                          <div class="dash">&nbsp;</div>
                          <div class="box2">
                            <input class="text custom-lot" maxlength="11" size="11" name="custom-lot-max" id="custom-lot-max" type="text" placeholder="Max" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="yearbuilt-entries" class="search-entry" data-za-label="Year Built">
                      <div class="title">Year Built</div>
                      <div class="dualboxes">
                        <div class="box1"><input class="text" maxlength="4" size="10" name="year-built-min" id="year-built-min" type="text" placeholder="Min" /></div>
                        <div class="dash">&nbsp;</div>
                        <div class="box2"><input class="text" maxlength="4" size="11" name="year-built-max" id="year-built-max" type="text" placeholder="Max" /></div>
                      </div>
                    </div>
                    <div id="days-entries" class="search-entry">
                      <div id="days-on-title" class="title">Days on Zillow</div>
                      <div id="days-dropdown" class="combobox custom-dropdown" data-dropdown-id="days-on-select" tabindex="0">
                        <span id="days-readout" class="options-display" data-za-action="Days on Zillow">14 days</span>
                        <div class="dropdown-handle">
                          <span class="icon-arrow-menu-down"></span>
                        </div>
                        <ul id="days-options" class="dropdown-options combobox-options zsg-menu-linklist">
                          <li data-value="any" id=""><a class="option" tabindex="-1">Any</a></li>
                          <li data-value="1" id=""><a class="option" tabindex="-1">1 day</a></li>
                          <li data-value="7" id=""><a class="option" tabindex="-1">7 days</a></li>
                          <li data-value="14" id="" class="selected"><a class="option" tabindex="-1">14 days</a></li>
                          <li data-value="30"><a class="option" tabindex="-1">30 days</a></li>
                          <li data-value="90"><a class="option" tabindex="-1">90 days</a></li>
                          <li data-value="6m"><a class="option" tabindex="-1">6 months</a></li>
                          <li data-value="12m"><a class="option" tabindex="-1">12 months</a></li>
                          <li data-value="24m"><a class="option" tabindex="-1">24 months</a></li>
                          <li data-value="36m"><a class="option" tabindex="-1">36 months</a></li>
                        </ul>
                      </div>
                      <select id="days-on-select" class="hide">
                        <option value="any">Any</option>
                        <option value="1">1 day</option>
                        <option value="7">7 days</option>
                        <option value="14">14 days</option>
                        <option value="30">30 days</option>
                        <option value="90">90 days</option>
                        <option value="6m">6 months</option>
                        <option value="12m">12 months</option>
                        <option value="24m">24 months</option>
                        <option value="36m">36 months</option>
                      </select>
                    </div>
                    <div id="attribute-entry" class="search-entry">
                      <div class="title">Keywords</div>
                      <textarea id="attribute-terms" placeholder="Garage, pool, waterfront, etc."></textarea>
                    </div>
                    <a class="button_primary" rel="nofollow" id="filterSearchButton" onClick="return false;" title="Search"><span> Apply </span></a>
                  </div>
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
                  href='/property' className='lightbox-show zsg-link_primary' data-za-label='Save search'>
                  Save Search
                </a>
              </legend>
            </fieldset>
          </li>
          <li id='fav-control-myhome' className='search-nav-button'>
            <a data-za-category='Search'
              data-za-action='Saved Homes Click' rel='nofollow'
              data-after-auth-action-type='Link'
              id='register_opener' href='/property'
              title='Saved Homes'
              className='toolbar-button zsg-button_primary track-ga-event show-lightbox'
              data-za-label='SavedHomes Map'> Saved Homes
            (<span data-count='0' id='saved-homes-count'>0</span>) </a></li>
        </ul>
      </div>
    )
  }
}