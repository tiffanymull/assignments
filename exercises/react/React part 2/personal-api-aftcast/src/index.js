import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import WeatherProvider from './WeatherProvider'

import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
<BrowserRouter>
<WeatherProvider>
<App />
</WeatherProvider>
</BrowserRouter>, 
document.getElementById('root'))

//wrap provider around