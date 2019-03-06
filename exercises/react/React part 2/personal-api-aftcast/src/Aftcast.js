import React from 'react'
import FormPastWeather from './FormPastWeather'
// import {Link, Switch, Route} from 'react-router-dom'; 
//may not need this? Maybe I imitate what's happening on the App in order 
//to switch link to specific timezone pages rather than buttons

const Aftcast = () =>{

    // componentDidMount(){          <--make class component and pull in from WeatherProvider
    //     this.props.getWeather()
    // }

    return(
        // this.props.weatherList.map() <--Map into from WeatherProvider state whatever
        <div>
            <h1>Aftcast</h1>
            Here is Aftcast. I think the buttons will be here?
            <FormPastWeather />
        </div>
    )
}

export default Aftcast

//I'm going to want to shove AftcastRegion in here w/ switch
//There will need to be mapping?
//But shouldn't I do a weather provider for practice instead?