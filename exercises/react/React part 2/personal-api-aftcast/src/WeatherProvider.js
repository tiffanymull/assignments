import React, {Component} from 'react';
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class WeatherProvider extends Component {
    constructor(){
        super()

        this.state ={
            regions: []
        }
    }


    render() {
        return (
            <Provider>

            </Provider>
        )
    }

}

export default WeatherProvider;