import React, { Component } from 'react'
// import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from '../../assets/data/listingsData.js'
import { filterProperties } from '../../redux/actions'
import { connect } from 'react-redux'
class MasterSearchContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listingsData,
      city: 'All',
      houseType: 'All',
      bedrooms: '1',
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount () {
    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }

  // The change function
  change (event) {
    
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
 
  
    this.setState({
      [name]: value
    })

    const filter = () => {
      const filterCriteria = this.state
      this.props.filterProperties(listingsData, filterCriteria)
    }
    filter()
  }

  // Function to change the view of the listings
  changeView (viewName) {
    this.setState({
      view: viewName
    })
  }

  // Function which filters the data based on user input
  filteredData () {
    let newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
    })

    if (this.state.city !== 'All') {
      newData = newData.filter((item) => {
        return item.city !== this.state.city
      })
    }

    if (this.state.houseType !== 'All') {
      newData = newData.filter((item) => {
        return item.houseType !== this.state.houseType
      })
    }

    if (this.state.sortby === 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if (this.state.sortby === 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if (this.state.search !== '') {
      newData = newData.filter((item) => {
        let city = item.city.toLowerCase()
        let searchText = this.state.search.toLowerCase()
        let n = city.match(searchText)

        if (n !== null) {
          return true
        }
        return false;
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms () {
    // city
    let cities = this.state.listingsData.map((item) => {
      return item.city
    })

    cities = new Set(cities)
    cities = [...cities]
    cities = cities.sort()

    // houseType
    let houseTypes = this.state.listingsData.map((item) => {
      return item.houseType
    })
    houseTypes = new Set(houseTypes)
    houseTypes = [...houseTypes]
    houseTypes = houseTypes.sort()

    // bedrooms
    let bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })

    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()

    this.setState({
      populateFormsData: {
        houseTypes,
        bedrooms,
        cities
      }
    })
  }

  render () {
    return (
      <section id='content-area' >
        <div id='main-container' className='container'>
          <div className='row'>

            {/* <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} /> */}
            <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  properties: state.properties,
})

export default connect(mapStateToProps, {filterProperties})(MasterSearchContainer)
