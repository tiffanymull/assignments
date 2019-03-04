
import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

import Home from './Home';
import Contact from './Contact';
import About from './About'
import Services from './Services'
import "./styles.css"


const App = () => {
    return (
        <div>
            Hi.
            <Navbar />
            <Switch>
              {/* Do EXACT path on home so component links didn't get lost on their way.*/}
                <Route exact path="/" component={Home}/>   
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Services path ="/services" component={Services}/>
            </Switch>
            <Footer />
        </div>
    )
}
// There also needs to be links somewhere
export default App
