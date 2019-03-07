import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {BrowserRouter} from "react-router-dom"
import WeatherProvider from './WeatherProvider';

ReactDOM.render(
<BrowserRouter>
<WeatherProvider>
<App />
</WeatherProvider>
</BrowserRouter>, 
document.getElementById('root'))



//Some would argue you should wrap provider around
//just the switch statements on the app page
