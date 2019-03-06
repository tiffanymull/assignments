import React from 'react'
// import {Switch, Route} from 'react-router-dom'

import AftNav from './AftNav'


// import {Link, Switch, Route} from 'react-router-dom'; 
//may not need this? Maybe I imitate what's happening on the App in order 
//to switch link to specific timezone pages rather than buttons

const Aftcast = () =>{

  

    return(
        <div>
            <h1>Aftcast</h1>
            <p>Click on the region to see its aftcast.</p>
            <AftNav />  
        </div>
    )
}

export default Aftcast

// Trick was that you couldn't do another switch inside of a switch
// So instead, put route inside first switch and leave links where you want them to be.
//Not ideal, but it might work