import React, {Component} from 'react';
import axios from 'axios'

class NewYork extends Component {
    constructor(){
        super()
        this.state = {
            regions: []
        }

    }


            componentDidMount(){
                axios.get('https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/428c55ff888ba644ac222f62d49c46fc/40.730610,-73.935242,255657600?exclude=currently,flags').then(response => {
                    this.setState({
                        regions: response.data.hourly.data
                    })
                })
            }


    render(){

        console.log(this.state.regions)
        const mappedArray = this.state.regions.map((region, i)=>{
            return (
                <div key={i}>
                      <p>
                    Weather Snapshot: <br></br>
                    
                    UNIX time: {region.time} <br></br>
                    Summary:  {region.summary} <br></br>
                    Also: {region.icon} <br></br>
                    Precipitation Intensity: {region.precipIntensity} <br></br>
                    Precipitation Probability: {region.precipProbability} <br></br>
                    Temperature: {region.temperature} <br></br>
                    Apparent Temperature: {region.apparentTemperature} <br></br>
                    Dew Point: {region.dewPoint} <br></br>
                    Humidity: {region.humidity} <br></br>
                    Pressure: {region.pressure} <br></br>
                    Wind Speed: {region.windSpeed} <br></br>
                    Wind Bearing: {region.windBearing} <br></br>
                    Cloud Cover: {region.cloudCover} <br></br>
                    UV Index: {region.uvIndex} <br></br>
                    Visibility: {region.visibility}
                      
                  </p>
                </div>
            )
        })
        return (
            <div>
                <h1>America/New York Timezone</h1>
                <div>{mappedArray}</div>
            </div>
        )
    }
}

export default NewYork