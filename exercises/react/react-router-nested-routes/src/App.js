import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

import Home from './Home'
import About from './About'
import ProductList from './ProductList'

const App = () => {
  return (
    <div>
      Hi.
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/products" component={ProductList}/>
        </Switch>
        <Footer />
    </div>
  )
}

//This is the link for the assignment https://coursework.vschool.io/react-router-nested-views/

export default App