import React, { Component } from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {

    }
    this.cities = this.cities.bind(this)
    this.houseTypes = this.houseTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }

  componentWillMount () {
    this.props.populateAction()
  };

  // Function to filter cities
  cities () {
    if (this.props.globalState.populateFormsData.cities !== undefined) {
      let { cities } = this.props.globalState.populateFormsData

      return cities.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  // Function by house type
  houseTypes () {
    if (this.props.globalState.populateFormsData.houseTypes !== undefined) {
      let { houseTypes } = this.props.globalState.populateFormsData
      return houseTypes.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  // Function by number of bedrooms
  bedrooms () {
    if (this.props.globalState.populateFormsData.bedrooms !== undefined) {
      let { bedrooms } = this.props.globalState.populateFormsData

      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>{item}+ BR</option>
        )
      })
    }
  }

  render () {
    return (
      <section id='filter' className='col-sm-12 col-md-3 col-lg-3 col-xl-2'>
        <div className='inside'>

          <h4>Filter</h4>
          <label htmlFor='city'>City</label>
          <select name='city' className='filters city' onChange={this.props.change}>
            <option value='All'>All</option>
            {this.cities()}
          </select>

          <label htmlFor='houseType'>House Type</label>
          <select name='houseType' className='filters houseType' onChange={this.props.change}>
            <option value='All'>All Homes</option>
            {this.houseTypes()}

          </select>
          <label htmlFor='bedrooms'>Bedrooms</label>
          <select name='bedrooms' className='filters bedrooms' onChange={this.props.change}>
            {this.bedrooms()}
          </select>

          <div className='filters price'>
            <span className='title'>Price</span>
            <input type='text' name='min_price' className='min-price' onChange={this.props.change} value={this.props.globalState.min_price} />
            <input type='text' name='max_price' className='max-price' onChange={this.props.change} value={this.props.globalState.max_price} />
          </div>

          <div className='filters floor-space'>
            <span className='title'>Floor Space</span>
            <input type='text' name='min_floor_space' className='min-floor-space' onChange={this.props.change} value={this.props.globalState.min_floor_space} />
            <input type='text' name='max_floor_space' className='max-floor-space' onChange={this.props.change} value={this.props.globalState.max_floor_space} />
          </div>

          <div className='filters extras'>
            <span className='title'>Extras</span>
            <label htmlFor='extras'>
              <span>Elevator</span>
              <input name='elevator' value='elevator' type='checkbox' onChange={this.props.change} />
            </label>
            <label htmlFor='extras'>
              <span>Swimming Pool</span>
              <input name='swimming_pool' value='swimming_pool' type='checkbox' onChange={this.props.change} />
            </label>
            <label htmlFor='extras'>
              <span>Finished Basement</span>
              <input name='finished_basement' value='finished_basement' type='checkbox' onChange={this.props.change} />
            </label>
            <label htmlFor='extras'>
              <span>Gym</span>
              <input name='gym' value='gym' type='checkbox' onChange={this.props.change} />
            </label>
          </div>

        </div>
      </section>
    )
  }
}
