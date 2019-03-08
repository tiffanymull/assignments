import React, {Component} from 'react';
import {withWeatherProvider} from './WeatherProvider';

class DisplayResult extends Component {
    render(){
        console.log(this.props)
        const mappedArray = this.props.weatherHistories.map((weatherHistory, i)=>{
            return (
                <div key={i} className="badgeContainer">
                <p className="badgeItself">
                <p className="snapshot">Weather Snapshot </p>
                                     
                    UNIX time: {weatherHistory.time} <br></br>
                    Summary:  {weatherHistory.summary} <br></br>
                    Also: {weatherHistory.icon} <br></br>
                    Precipitation Intensity: {weatherHistory.precipIntensity} <br></br>
                    Precipitation Probability: {weatherHistory.precipProbability} <br></br>
                    Temperature: {weatherHistory.temperature} <br></br>
                    Apparent Temperature: {weatherHistory.apparentTemperature} <br></br>
                    Dew Point: {weatherHistory.dewPoint} <br></br>
                    Humidity: {weatherHistory.humidity} <br></br>
                    Pressure: {weatherHistory.pressure} <br></br>
                    Wind Speed: {weatherHistory.windSpeed} <br></br>
                    Wind Bearing: {weatherHistory.windBearing} <br></br>
                    Cloud Cover: {weatherHistory.cloudCover} <br></br>
                    UV Index: {weatherHistory.uvIndex} <br></br>
                    Visibility: {weatherHistory.visibility}
                      
                  </p>
                </div>
            )
        })
        return (
            <div>
                <h2>Here 'tis:</h2>
                <div>{mappedArray}</div>
            </div>
        )

    }
}

export default withWeatherProvider(DisplayResult)