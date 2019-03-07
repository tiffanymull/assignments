import React, {Component} from 'react';
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class WeatherProvider extends Component {
    constructor(){
        super()

        this.state ={
            weatherHistories: []
        }
    }

        getWeatherHistory = (latitude, longitude) => {
            axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/428c55ff888ba644ac222f62d49c46fc/${latitude},${longitude},255657600?exclude=currently,flags`).then(response => {
                console.log(response)
                this.setState({
                    weatherHistories: response.data.hourly.data
                })
            })
        }

    render() {

        const value = {
            getWeatherHistory: this.getWeatherHistory,
            ...this.state
        }

        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }

}

export default WeatherProvider;

export const withWeatherProvider = C => props => (
    <Consumer>
        {value => <C {...value}{...props}/>}
    </Consumer>
)