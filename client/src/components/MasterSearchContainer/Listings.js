import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { loadProperties, filterProperties } from "../../redux/actions";
class Header extends Component {
  constructor () {
    super()
    this.state = {

    }
    this.loopListings = this.loopListings.bind(this)
  }
  changeAscDesc (event, properties) {
    const { value } = event.target

    this.props.filterProperties(properties, value)
   

  }
    // Function which filters the data based on user input
    filterData (event , properties) {
   
      const { value } = event.target
  
      let newData = properties;
      // newData = this.state.listingsData.filter((item) => {
      //   return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
      // })
  
      // if (this.state.city !== 'All') {
      //   newData = newData.filter((item) => {
      //     return item.city !== this.state.city
      //   })
      // }
  
      // if (this.state.houseType !== 'All') {
      //   newData = newData.filter((item) => {
      //     return item.houseType !== this.state.houseType
      //   })
      // }
  
      if (value === 'price-dsc') {
        newData = newData.sort((a, b) => {
          return a.price - b.price
        })
      }
  
      if (value === 'price-asc') {
        newData = newData.sort((a, b) => {
          return b.price - a.price
        })
      }
  
      // if (this.state.search !== '') {
      //   newData = newData.filter((item) => {
      //     let city = item.city.toLowerCase()
      //     let searchText = this.state.search.toLowerCase()
      //     let n = city.match(searchText)
  
      //     if (n !== null) {
      //       return true
      //     }
      //     return false;
      //   })
      // }
      this.props.loadProperties(newData)
    }

  loopListings (properties) {
    if (properties === undefined || properties.length === 0) { return 'Sorry your filter did not match any listing' }

    return properties.map((property, index) => {
      
      // This is the long box view
      if (this.props.globalState.view === 'box') {
        
        return (
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3' key={index}>
            <div className='listing'>
              <div className='listing-img' style={{ background: `url("${property.image}") no-repeat center center` }}>
                <span className='address'>{property.address}</span>
                <div className='details'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-3'>
                        <div className='user-img' />
                      </div>
                      <div className='col-md-9'>
                        <div className='user-details'>
                          <span className='user-name'>Jeffery Johnson </span>
                          <span className='post-date'>05/05/2017</span>
                        </div>
                      </div>
                    </div>
                    <div className='listing-details'>
                      <div className='floor-space'><i className='fa fa-square-o' aria-hidden='true' /> <span>{property.floorSpace} ft&sup2;</span></div>
                      <div className='bedrooms'>
                        <i className='fa fa-bed' aria-hidden='true' />
                        <span>{property.rooms} bedrooms</span>
                      </div>
                      <div className='view-btn'>
                            View Listing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bottom-info'>
                <span className='price'>${property.price}</span>
                <span className='location'><i className='fa fa-map-marker' aria-hidden='true' /> {property.city}, {property.state}</span>
              </div>
            </div>
          </div>
        )
      } else {
        // This is the long view
        return (
          <div className='col-md-12 col-lg-6' key={index}>
            <div className='listing'>
              <div className='listing-img' style={{ background: `url("${property.image}") no-repeat center center` }}>
                <span className='address'>{property.address}</span>
                <div className='details'>

                  <div className='col-md-3'>
                    <div className='user-img' />
                  </div>

                  <div className='col-md-9'>
                    <div className='user-details'>
                      <span className='user-name'>Jack Smith </span>
                      <span className='post-date'>05/05/2017</span>
                    </div>

                    <div className='listing-details'>
                      <div className='floor-space'><i className='fa fa-square-o' aria-hidden='true' /> <span>{property.floorSpace} ft&sup2;</span></div>
                      <div className='bedrooms'>
                        <i className='fa fa-bed' aria-hidden='true' />
                        <span>{property.rooms} bedrooms</span>
                      </div>

                      <div className='view-btn'>
                          View Listing
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className='bottom-info'>
                <span className='price'>${property.price}</span>
                <span className='location'><i className='fa fa-map-marker' aria-hidden='true' /> {property.city}, {property.state}</span>
              </div>
            </div>
          </div>
        )
      }
    })
  }

  render () {
    const properties = this.props.allProperties
    return (
      <section id='listings' className='col-sm-12 col-md-12 col-lg-12'>
        {/* <section className='search-area'>
          <input type='text' name='search' placeholder='Search here...' onChange={() => this.changeAscDesc} />
        </section> */}

        <section className='sortby-area'>
          <div className='results'>{this.props.globalState.filteredData.length} result found</div>
          <div className='sort-options'>
            <select name='sortby' className='sortby' onChange={(event) => this.changeAscDesc(event, properties)}>
              <option value='price-dsc'>Lowest Price</option>
              <option value='price-asc'>Highest Price</option>
            </select>

            <div className='view'>
              <i className='fa fa-th-list' aria-hidden='true' onClick={this.props.changeView.bind(null, 'long')} />
              <i className='fa fa-th' aria-hidden='true' onClick={this.props.changeView.bind(null, 'box')} />
            </div>

          </div>
        </section>

        <section className='listings-results'>
          <div className='container'>
            <div className='row'>
              {this.loopListings(properties)}
            </div>
          </div>
        </section>

        <section id='pagination'>
          <div className='row'>
            <ul className='pages'>
              <li>Prev</li>
              <li className='active'>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>Next</li>
            </ul>
          </div>
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  allProperties: state.properties.allProperties,
})

export default connect(mapStateToProps, { loadProperties, filterProperties })(Header);