import React, {Component} from 'react';
import {withWeatherProvider} from './WeatherProvider' //wrapped in { } bc not default

class FormPastWeather extends Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

        //I need to slap a handleChange function up here
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
                    <button>Submit</button>
            </form>
        )

    }

}

export default withWeatherProvider(FormPastWeather)    //referencing what made in provider

