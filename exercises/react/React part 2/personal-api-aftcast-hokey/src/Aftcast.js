import React from 'react'
import {Switch, Route} from 'react-router-dom'

import AftNav from './AftNav'

import Denver from './Denver'
import LosAngeles from './LosAngeles'
// import {Link, Switch, Route} from 'react-router-dom'; 
//may not need this? Maybe I imitate what's happening on the App in order 
//to switch link to specific timezone pages rather than buttons

const Aftcast = () =>{

  

    return(
        <div>
            <h1>Aftcast</h1>
            <p>Click on the region to see its aftcast.</p>
            <AftNav />
            <Switch>
                <Route exact path="/denver" component={Denver}></Route>
                <Route exact path="/losangeles" component={LosAngeles}></Route>
            </Switch>
            
        </div>
    )
}

export default Aftcast

