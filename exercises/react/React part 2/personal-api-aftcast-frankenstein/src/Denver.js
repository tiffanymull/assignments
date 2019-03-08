import React, {Component} from 'react';
import axios from 'axios';

class Denver extends Component {
    constructor(){
        super()
        this.state = {
            regions: []
        }

    }

        componentDidMount(){
            axios.get('https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/428c55ff888ba644ac222f62d49c46fc/39.742043,-104.991531,255657600?exclude=currently,flags').then(response => {
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
                <p className="badgeItself">
                <p className="snapshot">Weather Snapshot </p>
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
                <h1>Denver</h1>
                <div>{mappedArray}</div>
            </div>
        )
    }
}


export default Denver