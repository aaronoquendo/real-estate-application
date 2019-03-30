import React, { Component } from 'react'
import HeroDisplay from './HeroDisplay/HeroDisplay'
import RegionInfoFooter from './RegionInfoFooter/RegionInfoFooter'
import BrandsFooter from './BrandsFooter/BrandsFooter'
import Footer from './Footer/Footer'

export default class FrontPage extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className='front-page-wrapper'>
        <HeroDisplay />
        <RegionInfoFooter />
        <BrandsFooter />
        <Footer />
      </div>
    )
  }
}
