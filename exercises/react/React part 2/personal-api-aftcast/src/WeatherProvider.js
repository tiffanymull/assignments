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

            //Using template literals to shove in variable that user can stipulate
        getWeatherHistory = (latitude, longitude) => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/428c55ff888ba644ac222f62d49c46fc/${latitude},${longitude},255657600?exclude=currently,flags`).then(response => {
            console.log(response)
            this.setState({
                    weatherHistories: response.data.hourly.data
                })
            })
    }

                    //Down there in provider, created props 'value'. Then it is referencing the function
                    //Then children makes it available to kids
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
//Consumer component is now the Form

//THis down here is referencing the props created above. Could've called value tacos.