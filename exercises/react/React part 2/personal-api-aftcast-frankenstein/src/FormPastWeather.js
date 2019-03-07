import React, {Component} from 'react';
import {withWeatherProvider} from './WeatherProvider'

class FormPastWeather extends Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

        handleChange = e => {
            this.setState({[e.target.name]: e.target.value})
        }


        handleSubmit = e => {
            e.preventDefault()
            console.log(this.props)
            this.props.getWeatherHistory(this.state.latitude, this.state.longitude)
        }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input  type="text"
                        placeholder='Latitude'
                        name='latitude'
                        value={this.state.latitude}
                        onChange={this.handleChange} />
                <input  type="text"
                        placeholder='Longitude'
                        name='longitude'
                        value={this.state.longitude}
                        onChange={this.handleChange} />
                    <button>Get Aftcast</button>
            </form>
        )
    }
}

export default withWeatherProvider(FormPastWeather)