import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Navbar from './Navbar'

import Home from './Home'

const App = () => {
  return (
    <div>
      Slap.
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </div>
  )
}

export default App
