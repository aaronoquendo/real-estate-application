import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Header from './components/Header/Header.js'
import FrontPage from './components/FrontPage/FrontPage.js'
import Filter from './components/Filter.js'
import Listings from './components/Listings.js'
import Finder from './components/Finder/Finder'
import listingsData from './data/listingsData.js'
import './styles/css/bootstrap.min.css'
import './styles/sass/main.scss'
class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* LandingPage Routes */}
        <Route path='/' component={props => <Header {...props} />} />
        <Route exact path='/' component={props => <FrontPage {...props} />} />

        {/* Property Search Routes */}
        <Route exact path='/property' component={props => <Finder {...props} />} />
      </div>
    )
  }
}

export default App
