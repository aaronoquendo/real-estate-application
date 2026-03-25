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
    console.log("ascdec value when clicked", value)
    console.log(properties.allProperties);

    this.props.filterProperties(properties.allProperties, value)
  }

  renderOverlay (property) {
    return (
      <div className='details'>
        <div className='listing-type-badge'>
          {property.isForSale && <span className='badge'>For Sale</span>}
          {property.isForRent && <span className='badge'>For Rent</span>}
          {property.wasSold && <span className='badge sold'>Sold</span>}
        </div>
        <div className='listing-stats'>
          <div className='stat-pill'>
            <i className='fa fa-expand' aria-hidden='true' />
            <span>{property.floorSpace} ft&sup2;</span>
          </div>
          <div className='stat-pill'>
            <i className='fa fa-bed' aria-hidden='true' />
            <span>{property.rooms} beds</span>
          </div>
          <div className='stat-pill'>
            <i className='fa fa-bath' aria-hidden='true' />
            <span>{property.baths} baths</span>
          </div>
          <div className='stat-pill'>
            <i className='fa fa-home' aria-hidden='true' />
            <span>{property.homeType}</span>
          </div>
        </div>
        {property.extras && property.extras.length > 0 && (
          <div className='listing-extras'>
            {property.extras.map((extra, i) => (
              <span className='extra-tag' key={i}>{extra}</span>
            ))}
          </div>
        )}
        <div className='view-btn'>View Listing</div>
      </div>
    )
  }

  loopListings (properties) {
    const data = (typeof properties.filteredProperties !== 'undefined' && properties.filteredProperties.length > 0)
      ? properties.filteredProperties
      : properties.allProperties

    return data.map((property, index) => {
      const colClass = this.props.globalState.view === 'box'
        ? 'col-sm-12 col-md-6 col-lg-4 col-xl-3'
        : 'col-md-12 col-lg-6'

      return (
        <div className={colClass} key={index}>
          <div className='listing'>
            <div className='listing-img' style={{ background: `url("${property.image}") no-repeat center center` }}>
              <span className='address'>{property.address}</span>
              {this.renderOverlay(property)}
            </div>
            <div className='bottom-info'>
              <span className='price'>${property.price}</span>
              <span className='location'><i className='fa fa-map-marker' aria-hidden='true' /> {property.city}, {property.state}</span>
            </div>
          </div>
        </div>
      )
    })



  }

  render () {
    const properties  = this.props.properties
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
  properties: state.properties,
})

export default connect(mapStateToProps, { loadProperties, filterProperties })(Header);