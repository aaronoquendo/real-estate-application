import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MobileMenu from './components/Header/MobileMenu'
import FrontPage from './components/FrontPage/FrontPage'
import MasterSearchContainer from './components/MasterSearchContainer/MasterSearchContainer'
import SearchBar from './components/MasterSearchContainer/SearchBar'
import './assets/styles/css/bootstrap.min.css'
import './assets/styles/css/fontawesome.min.css'
import './assets/styles/css/hamburgers.min.css'
import './assets/styles/sass/main.scss'

class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* LandingPage Routes */}
        <Route path='/' component={props => <Header {...props} />} />
        <Route path='/' component={props => <MobileMenu {...props} />} />
        <Route exact path={['/', '/buy', '/sell', '/rent', '/estimate']} component={props => <FrontPage {...props} />} />

        {/* Property Search Routes */}
        <Route exact path='/property' component={props => <SearchBar {...props} />} />
        <Route exact path='/property' component={props => <MasterSearchContainer {...props} />} />
      </div>
    )
  }
}

export default App
