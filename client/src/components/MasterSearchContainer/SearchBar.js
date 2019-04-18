import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { loadProperties, filterProperties } from "../../redux/actions";
import listingsData from '../../assets/data/listingsData.js'
class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      properties: [],
      search: '',
      city: 'All',
      listingType: 'All',
      houseType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,
      isForSale: false,
      isForRent: false,
      wasSold: false,
      listingType: 'all',
      homeType: '',
      isHouse: false,
      isApartment: false,
      isTownHouse: false,
      isLot: false,
    }
  }

  componentWillMount () {
    this.props.loadProperties(listingsData)
    this.setState({properties: this.props.properties})
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

  handleInputChange(event, allProperties, listingType, numOfBeds, homeType) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
   
    console.log("event name: ",name);
    console.log("event value: ",value);
    console.log("listing type",listingType);

    if (numOfBeds >= 0)
      this.setState({bedrooms: numOfBeds})

      if (this.state.homeType )
      this.setState({bedrooms: numOfBeds})

    this.setState({
      [name]: value,
      listingType,
      homeType
    }, () => {
      const filterCriteria = this.state
      this.props.filterProperties(allProperties, filterCriteria)
    });


    

  }

  priceChange(event, allProperties, listingType) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    
    });

  }


  render () {
    const {allProperties} = this.props.properties
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
                    <a href="#/" className='menu-label' tabIndex='0'>
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
                        <form>
                          <li id='fs-listings' className='listing-type'>
                            <div className='listing-category'>
                              <input 
                              id='fs-listings-input'  
                              className='checkbox' 
                              name='listingType' 
                              type='radio' 
                              
                              onClick={(event) => this.handleInputChange(event, allProperties, 'isForSale')}/>
                              <label htmlFor='fs-listings-input'>
                                <span className='icon-for-sale'>&nbsp;</span><span className='listing-type-text'>For Sale </span>
                                <span id='fs-listings-resultCountWrapper'>(44)</span>
                              </label>
                            </div>
                          </li>
                          <li id='fr-listings' className='listing-type'>
                            <div className='listing-category'>
                              <input 
                              id='fr-listings-input' 
                              type='radio' 
                              className='checkbox' 
                              name='listingType' 
                              
                              onClick={(event) => this.handleInputChange(event, allProperties, 'isForRent')}
                              />
                              <label htmlFor='fr-listings-input'>
                                <span className='icon-for-rent'>&nbsp;</span><span className='listing-type-text' >For Rent </span>
                                <span id='fr-listings-resultCountWrapper'>(11)</span>
                              </label>
                            </div>
                          </li>
                          <li id='rs-listings' className='listing-type'>
                            <div className='listing-category'>
                              <input 
                              id='rs-listings-input' 
                              className='checkbox' 
                              name='listingType' 
                              type='radio' 
                              
                              onClick={(event) => this.handleInputChange(event, allProperties, 'wasSold')}
                              />
                              <label htmlFor='rs-listings-input'>
                                <span className='icon-recently-sold'>&nbsp;</span>
                                <span className='listing-type-text'>Recently Sold </span>
                                <span id='rs-listings-resultCountWrapper'>(288)</span>
                              </label>
                            </div>
                          </li>
                          <li id='rs-listings' className='listing-type'>
                            <div className='listing-category'>
                              <input 
                              id='rs-listings-input' 
                              className='checkbox' 
                              name='listingType' 
                              type='radio' 
                              
                              onClick={(event) => this.handleInputChange(event, allProperties, 'all')}
                              />
                              <label htmlFor='rs-listings-input'>
                                <span className='icon-recently-sold'>&nbsp;</span>
                                <span className='listing-type-text'>All Listings</span>
                                <span id='rs-listings-resultCountWrapper'>(288)</span>
                              </label>
                            </div>
                          </li>
                        </form>
                      </ul>
                    </div>
                  </div>

                </fieldset>
                <fieldset className='filter-menu affordability-menu price-menu'>
                  <legend data-za-label='Price'>
                    <a href="#/" id='menu-label' className='menu-label' tabIndex='0' >
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
                          <input className='text' maxLength='11' size='10' id='price-min' type='text'
                            autoComplete='off' placeholder='Min' 
                            name='min_price' 
                            onChange={(event) => this.priceChange(event)}
                            onBlur={(event) => this.handleInputChange(event,allProperties, null)} 
                            value={this.state.min_price}
                            
                            />
                        </div>
                        <div className='dash'>&nbsp;</div>
                        <div className='box2'>
                          <input className='text commaFormat' maxLength='11' size='11' id='price-max'
                            type='text' autoComplete='off' placeholder='Max' 
                            name='max_price' 
                            onChange={(event) => this.priceChange(event)}
                            onBlur={(event) => this.handleInputChange(event,allProperties, null)} 
                            value={this.state.max_price}
                            />
                        </div>
                      </div>
                    </div>

                    <div className='filter-price'>
                      <div id='price-min-options' className='price-options min-price-options custom-dropdown'
                        data-dropdown-id='price-min'>
                        <ul className='dropdown-options search-entry menu-linklist'>
                          <li data-value=''><a href="#/" className='option' tabIndex='0'>0</a></li>
                          <li data-value='50,000'><a href="#/" className='option' tabIndex='0'>$50,000+</a></li>
                          <li data-value='75,000'><a href="#/" className='option' tabIndex='0'>$75,000+</a></li>
                          <li data-value='100,000'><a href="#/" className='option' tabIndex='0'>$100,000+</a></li>
                          <li data-value='150,000'><a href="#/" className='option' tabIndex='0'>$150,000+</a></li>
                          <li data-value='200,000'><a href="#/" className='option' tabIndex='0'>$200,000+</a></li>
                          <li data-value='250,000'><a href="#/" className='option' tabIndex='0'>$250,000+</a></li>
                          <li data-value='300,000'><a href="#/" className='option' tabIndex='0'>$300,000+</a></li>
                          <li data-value='400,000'><a href="#/" className='option' tabIndex='0'>$400,000+</a></li>
                          <li data-value='500,000'><a href="#/" className='option' tabIndex='0'>$500,000+</a></li>
                        </ul>
                      </div>
                      <div id='price-max-options' className='price-options max-price-options custom-dropdown hide'
                        data-dropdown-id='price-max'>
                        <ul className='dropdown-options search-entry menu-linklist'>
                          <li data-value='100,000'><a href="#/"  className='option' tabIndex='0'>$100,000</a></li>
                          <li data-value='200,000'><a href="#/"  className='option' tabIndex='0'>$200,000</a></li>
                          <li data-value='300,000'><a href="#/"  className='option' tabIndex='0'>$300,000</a></li>
                          <li data-value='400,000'><a href="#/"  className='option' tabIndex='0'>$400,000</a></li>
                          <li data-value='500,000'><a href="#/"  className='option' tabIndex='0'>$500,000</a></li>
                          <li data-value='600,000'><a href="#/"  className='option' tabIndex='0'>$600,000</a></li>
                          <li data-value='700,000'><a href="#/" className='option' tabIndex='0'>$700,000</a></li>
                          <li data-value='800,000'><a href="#/"  className='option' tabIndex='0'>$800,000</a></li>
                          <li data-value='900,000'><a href="#/"  className='option' tabIndex='0'>$900,000</a></li>
                          <li data-value=''><a href="#/"  className='option' tabIndex='0'>Any Price</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </fieldset>

                <fieldset data-dropdown-id='beds-select' className='filter-menu beds-menu custom-dropdown' id=''>
                  <legend data-za-label='Beds'>
                    <a href="#/"  id='' className='menu-label' tabIndex='0'>
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
                        <li onClick={ (event) => this.handleInputChange(event,allProperties, null, 0) } data-value='0,' id='' className='' ><a href="#/"  className='option' tabIndex='0'>0+</a></li>
                        <li data-value='1,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 1) } ><a href="#/"  className='option' tabIndex='0'>1+</a></li>
                        <li data-value='2,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 2) }><a href="#/"  className='option' tabIndex='0'>2+</a></li>
                        <li data-value='3,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 3) }><a href="#/"  className='option' tabIndex='0'>3+</a></li>
                        <li data-value='4,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 4) }><a href="#/"  className='option' tabIndex='0'>4+</a></li>
                        <li data-value='5,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 5) }><a href="#/"  className='option' tabIndex='0'>5+</a></li>
                        <li data-value='6,' id='' className='' onClick={ (event) => this.handleInputChange(event,allProperties, null, 6) }><a href="#/"  className='option' tabIndex='0'>6+</a></li>
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
                    <a href="#/"  id='' className='menu-label' tabIndex='0'>
                      <div id='housetype-menu-label' onClick={() => this.menuItemClicked('housetype-menu-label')}> Home Type <span id='hometype-count' />
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>

                  <div className='filter-pane housetype-pane' id=''>
                    <ul className='combobox-options multicheck-dropdown-options hometype-options' id=''>
                      <li id='hometype-houses-filters' className='hometype-houses selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-houses-filters-input'
                          type='radio' className='hometype-houses-input checkbox' data-za-label='SFH' 
                          onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'house') } 
                          />
                        <label htmlFor='hometype-houses-filters-input'>
                          <span id='hometype-houses-filters-label'
                            className='hometype-houses-label option'>Houses</span>
                        </label>
                      </li>
                      <li id='hometype-apart-filters' className='hometype-apart selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-apart-filters-input'
                          type='radio' className='hometype-apart-input checkbox' data-za-label='MFH' 
                          onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'apartment') }
                          />
                        <label htmlFor='hometype-apart-filters-input'><span id='hometype-apart-filters-label'
                          className='hometype-apart-label option'>Apartments</span>
                        </label>
                      </li>
                      <li id='hometype-condo-filters' className='hometype-condo selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-condo-filters-input'
                          type='radio' className='hometype-condo-input checkbox' data-za-label='Condo' 
                          onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'condo') }
                          />
                        <label htmlFor='hometype-condo-filters-input'>
                          <span id='hometype-condo-filters-label'
                            className='hometype-condo-label option'>Condos/co-ops</span>
                        </label>
                      </li>
                      <li id='hometype-townhome-filters' className='hometype-townhome selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-townhome-filters-input'
                          type='radio' className='hometype-townhome-input checkbox' data-za-label='Townhomes' 
                          onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'townhome') }
                          />
                        <label htmlFor='hometype-townhome-filters-input'>
                          <span id='hometype-townhome-filters-label'
                            className='hometype-townhome-label option'>Townhomes</span>
                        </label>
                      </li>
                      <li id='hometype-land-filters' className='hometype-land selected'>
                        <input name='houseType' tabIndex='-1' id='hometype-land-filters-input' type='radio' className='hometype-land-input checkbox' data-za-label='Lot' 
                        onClick={ (event) => this.handleInputChange(event,allProperties, null, null, 'lot') }
                        />
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
                    <a href="#/" className='menu-label' tabIndex='0'>
                      <div id="more-menu-label" onClick={() => this.menuItemClicked('more-menu-label')}> More 
                      <span id='applied-filter-count' />
                        <i className='fas fa-sort-down' />
                        <i className='fas fa-sort-up' />
                      </div>
                    </a>
                  </legend>

                  
                  <div className="filter-pane more-pane" id="">
                    <div id="baths-entries" className="search-entry">
                      <div className="title">Baths</div>
                      <div id="baths-dropdown" className="combobox custom-dropdown" tabIndex="0">
                        <span id="baths-readout" className="options-display" data-za-action="Baths">1.5+</span>
                        <span className="icon-arrow-menu-down"></span>
                        <ul id="bath-options" className="dropdown-options">
                          <li data-value="0," id=""><a href="#/"  className="option" tabIndex="-1">0+</a></li>
                          <li data-value="1.0," id=""><a href="#/"  className="option" tabIndex="-1">1+</a></li>
                          <li data-value="1.5," id="" className="selected"><a href="#/" className="option" tabIndex="-1">1.5+</a></li>
                          <li data-value="2.0,"><a href="#/"  className="option" tabIndex="-1">2+</a></li>
                          <li data-value="3.0,"><a href="#/" className="option" tabIndex="-1">3+</a></li>
                          <li data-value="4.0,"><a href="#/" className="option" tabIndex="-1">4+</a></li>
                          <li data-value="5.0,"><a href="#/" className="option" tabIndex="-1">5+</a></li>
                          <li data-value="6.0,"><a href="#/" className="option" tabIndex="-1">6+</a></li>
                        </ul>
                      </div>
                      <select id="baths-select" className="hide">
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
                    <div id="sqft-entries" className="search-entry" data-za-label="Square Feet">
                      <div className="title">Square Feet</div>
                      <div className="dualboxes">
                        <div className="box1"><input className="text commaFormat" maxLength="11" size="10" name="sqft-min" id="sqft-min" type="text" placeholder="Min" /></div>
                        <div className="dash">&nbsp;</div>
                        <div className="box2"><input className="text commaFormat" maxLength="11" size="11" name="sqft-max" id="sqft-max" type="text" placeholder="Max" /></div>
                      </div>
                    </div>
                    <div id="lot-size-entries" className="search-entry">
                      <div className="title">Lot Size</div>
                      <div id="lot-min-dropdown" className="combobox custom-dropdown" data-dropdown-id="lot-size-select" tabIndex="0">
                        <span id="lot-size-select-readout" className="options-display" data-za-action="Change - Lot Size">Any</span><span className="icon-arrow-menu-down"></span>
                        <ul id="lot-size-select-options" className="">
                          <li data-value="0," id="" className="selected"><a href="#/" className="option" tabIndex="-1">Any</a></li>
                          <li data-value="2000,"><a href="#/" className="option" tabIndex="-1">2,000+ sqft</a></li>
                          <li data-value="3000,"><a href="#/" className="option" tabIndex="-1">3,000+ sqft</a></li>
                          <li data-value="4000,"><a href="#/" className="option" tabIndex="-1">4,000+ sqft</a></li>
                          <li data-value="5000,"><a href="#/" className="option" tabIndex="-1">5,000+ sqft</a></li>
                          <li data-value="7500,"><a href="#/" className="option" tabIndex="-1">7,500+ sqft</a></li>
                          <li data-value="10890,"><a href="#/" className="option" tabIndex="-1">.25+ acre / 10,890+ sqft</a></li>
                          <li data-value="21780,"><a href="#/" className="option" tabIndex="-1">.5+ acre / 21,780+ sqft</a></li>
                          <li data-value="43560,"><a href="#/" className="option" tabIndex="-1">1+ acre</a></li>
                          <li data-value="87120,"><a href="#/" className="option" tabIndex="-1">2+ acres</a></li>
                          <li data-value="217800,"><a href="#/" className="option" tabIndex="-1">5+ acres</a></li>
                          <li data-value="435600,"><a href="#/" className="option" tabIndex="-1">10+ acres</a></li>
                          <li data-value="custom"><a href="#/" className="option" tabIndex="-1">Custom size</a></li>
                        </ul>
                      </div>
                      <select id="lot-size-select" className="hide">
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
                      <div id="custom-lot-size-entries" className="hide">
                        <div className="title">
                          <ul className="form-group radio-buttons">
                            <li><input type="radio" id="custom-lot-sqft" name="lot_custom" className="radio custom-lot" value="sqft"  />
                              <label htmlFor="custom-lot-sqft">Sqft</label>
                            </li>
                            <li>
                              <input type="radio" id="custom-lot-acre" name="lot_custom" className="radio custom-lot" value="acre" /><label htmlFor="custom-lot-acre">Acre</label>
                            </li>
                          </ul>
                        </div>
                        <div className="dualboxes">
                          <div className="box1">
                            <input className="text custom-lot" maxLength="11" size="10" name="custom-lot-min" id="custom-lot-min" type="text" placeholder="Min" />
                          </div>
                          <div className="dash">&nbsp;</div>
                          <div className="box2">
                            <input className="text custom-lot" maxLength="11" size="11" name="custom-lot-max" id="custom-lot-max" type="text" placeholder="Max" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="yearbuilt-entries" className="search-entry" data-za-label="Year Built">
                      <div className="title">Year Built</div>
                      <div className="dualboxes">
                        <div className="box1"><input className="text" maxLength="4" size="10" name="year-built-min" id="year-built-min" type="text" placeholder="Min" /></div>
                        <div className="dash">&nbsp;</div>
                        <div className="box2"><input className="text" maxLength="4" size="11" name="year-built-max" id="year-built-max" type="text" placeholder="Max" /></div>
                      </div>
                    </div>
                    <div id="days-entries" className="search-entry">
                      <div id="days-on-title" className="title">Days on Trillo</div>
                      <div id="days-dropdown" className="combobox custom-dropdown" data-dropdown-id="days-on-select" tabIndex="0">
                        <span id="days-readout" className="options-display" data-za-action="Days on Trillo">14 days</span>
                        <div className="dropdown-handle">
                          <span className="icon-arrow-menu-down"></span>
                        </div>
                        <ul id="days-options" className="dropdown-options combobox-options zsg-menu-linklist">
                          <li data-value="any" id=""><a href="#/" className="option" tabIndex="-1">Any</a></li>
                          <li data-value="1" id=""><a href="#/" className="option" tabIndex="-1">1 day</a></li>
                          <li data-value="7" id=""><a href="#/" className="option" tabIndex="-1">7 days</a></li>
                          <li data-value="14" id="" className="selected"><a href="#/" className="option" tabIndex="-1">14 days</a></li>
                          <li data-value="30"><a href="#/" className="option" tabIndex="-1">30 days</a></li>
                          <li data-value="90"><a href="#/" className="option" tabIndex="-1">90 days</a></li>
                          <li data-value="6m"><a href="#/" className="option" tabIndex="-1">6 months</a></li>
                          <li data-value="12m"><a href="#/" className="option" tabIndex="-1">12 months</a></li>
                          <li data-value="24m"><a href="#/" className="option" tabIndex="-1">24 months</a></li>
                          <li data-value="36m"><a href="#/" className="option" tabIndex="-1">36 months</a></li>
                        </ul>
                      </div>
                      <select id="days-on-select" className="hide">
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
                    <div id="attribute-entry" className="search-entry">
                      <div className="title">Keywords</div>
                      <textarea id="attribute-terms" placeholder="Garage, pool, waterfront, etc."></textarea>
                    </div>
                    <a href="#/" className="button_primary" rel="nofollow" id="filterSearchButton"  title="Search"><span> Apply </span></a>
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
                <a href="#/" data-za-label-submit='Save Search Toolbox submit'
                   className='lightbox-show zsg-link_primary' data-za-label='Save search'>
                  Save Search
                </a>
              </legend>
            </fieldset>
          </li>
          <li id='fav-control-myhome' className='search-nav-button'>
            <a href="#/" data-za-category='Search'
              data-za-action='Saved Homes Click' rel='nofollow'
              data-after-auth-action-type='Link'
              id='register_opener'
              title='Saved Homes'
              className='toolbar-button zsg-button_primary track-ga-event show-lightbox'
              data-za-label='SavedHomes Map'> Saved Homes
            (<span data-count='0' id='saved-homes-count'>0</span>) </a></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  properties: state.properties,
})


export default connect(mapStateToProps,{ loadProperties, filterProperties })(SearchBar);