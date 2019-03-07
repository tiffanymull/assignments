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
