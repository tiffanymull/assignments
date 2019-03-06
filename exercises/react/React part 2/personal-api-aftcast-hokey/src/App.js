import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

import Home from './Home'
import Tips from './Tips'
import Aftcast from './Aftcast'

const App = () => {
  return (
    <div>
      Slap.
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/tips" component={Tips}/>
            <Route path="/aftcast" component={Aftcast}/>
        </Switch>
        <Footer />
    </div>
  )
}

export default App
