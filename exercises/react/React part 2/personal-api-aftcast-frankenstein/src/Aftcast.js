import React from 'react'
// import {Switch, Route} from 'react-router-dom'

import AftNav from './AftNav'
import FormPastWeather from './FormPastWeather';
import DisplayResult from './DisplayResult';


const Aftcast = () =>{

  

    return(
        <div>
            <h1>Aftcast</h1>
            <p>Quick aftcast references for timezones of the continental U.S.</p>
            <AftNav />  
            <p>
                Or, type in the latitude and longitude for the aftcast of that region.
            </p>

            <ul>
                Popular locales:
                    <li className="popLocale">Sydney: -33.8, 151.2</li>
                    <li className="popLocale">Dublin: 53.3, -6.3</li>
                    <li className="popLocale">Ottawa: 45.4, -75.7</li>
                    <li className="popLocale">London: 51.5, 0</li>
                    <li className="popLocale">Paris: 48.9, 2.4</li>
            </ul>

            <FormPastWeather />
            <DisplayResult />
        </div>
    )
}

export default Aftcast

// Trick was that you couldn't do another switch inside of a switch
// So instead, put route inside first switch and leave links where you want them to be.

//Now slapping display result in here breaks it.