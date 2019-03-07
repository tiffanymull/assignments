import React from 'react'
// import {Switch, Route} from 'react-router-dom'

import AftNav from './AftNav'
import FormPastWeather from './FormPastWeather';
import DisplayResult from './DisplayResult';


const Aftcast = () =>{

  

    return(
        <div>
            <h1>Aftcast</h1>
            <p>Quick aftcast reference for timezones of continental U.S.</p>
            <AftNav />  
            <p>Or, type in latitude and longitude for the aftcast of that region.</p>
            <FormPastWeather />
            <DisplayResult />
        </div>
    )
}

export default Aftcast

// Trick was that you couldn't do another switch inside of a switch
// So instead, put route inside first switch and leave links where you want them to be.

//Now slapping display result in here breaks it.