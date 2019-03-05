import React, {Component} from 'react';
const {Provider, Consumer} = React.createContext()
import axios from 'axios';

class WeatherProvider extends Component {
    constructor(){
        super()
        this.state = {
            cast: []
        }
    }


   render(){
       return (
           <Provider>

           </Provider>
       )
   } 
}

export default WeatherProvider


                                //<--somewhere down here I put an export funciton (C) return props and consumer div in that.