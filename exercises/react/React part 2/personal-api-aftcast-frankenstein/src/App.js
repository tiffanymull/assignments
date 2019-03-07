import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './styles.css'

import Navbar from './Navbar'
import Footer from './Footer'

import Home from './Home'
import Tips from './Tips'
import Aftcast from './Aftcast'

import Denver from './Denver'
import LosAngeles from './LosAngeles'
import NewYork from './NewYork'
import Chicago from './Chicago'
import Phoenix from './Phoenix'

const App = () => {
  return (
    <div className="table">
      Slap.
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/tips" component={Tips}/>
            <Route path="/aftcast" component={Aftcast}/>
            <Route path="/denver" component={Denver}></Route>
            <Route path="/losangeles" component={LosAngeles}></Route>
            <Route path="/newyork" component={NewYork}></Route>
            <Route path="/chicago" component={Chicago}></Route>
            <Route path="/phoenix" component={Phoenix}></Route>
        </Switch>
        <Footer />
    </div>
  )
}

export default App
