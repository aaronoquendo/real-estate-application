import React, { Component } from 'react'

export default class HeroSearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {

    this.setState({ query: event.target.value })
  }
  render () {

    return (
      <React.Fragment>
        <form className='search-form' action='/property'>
          <div className='input-wrapper'>
            <input type='text' autoComplete='off' className='search-input' placeholder='Enter an address, neighborhood, city, or ZIP code'
              value={this.state.query} onChange={this.handleChange} />
            <div className='searchBtnContainer'>
              <button className='search-button'>
                <span className='searchBtnText'>Search</span>
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
