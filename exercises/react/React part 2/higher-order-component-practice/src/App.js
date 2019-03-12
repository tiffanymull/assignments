import React, {Component} from 'react'
import CountUp from './CountUp'
import CountDown from './CountDown'
import PopUp from './PopUp'
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <CountUp scare="Boo!" />
        <CountDown />
        <PopUp />
      </div>
    )

  }
}

export default App