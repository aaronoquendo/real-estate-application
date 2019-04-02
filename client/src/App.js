import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MobileMenu from './components/Header/MobileMenu'
import FrontPage from './components/FrontPage/FrontPage'
import Finder from './components/Finder/Finder'

import './assets/styles/css/bootstrap.min.css'
import './assets/styles/css/hamburgers.min.css'
import './assets/styles/sass/main.scss'
class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* LandingPage Routes */}
        <Route path='/' component={props => <Header {...props} />} />
        <Route path='/' component={props => <MobileMenu {...props} />} />
        <Route exact path={['/', '/buy', '/sell', '/rent', '/estimate']} component={props =>        <FrontPage {...props} />} />

        {/* Property Search Routes */}
        <Route exact path='/property' component={props => <Finder {...props} />} />
      </div>
    )
  }
}

export default App
