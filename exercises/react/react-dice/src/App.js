import React, {Component} from 'react';
import './style.css'

class App extends Component {
  constructor(){
    super()
      this.state = {
          die1: Math.floor((Math.random() * 6) + 1),
          die2: Math.floor((Math.random() * 6) + 1),
          die3: Math.floor((Math.random() * 6) + 1),
          die4: Math.floor((Math.random() * 6) + 1),
          die5: Math.floor((Math.random() * 6) + 1)
      }
  
  }

  roll = () => {
    this.setState((prevState) => {
      return {
        die1: prevState.die1 = Math.floor((Math.random() * 6) + 1),
        die2: prevState.die1 = Math.floor((Math.random() * 6) + 1),
        die3: prevState.die1 = Math.floor((Math.random() * 6) + 1),
        die4: prevState.die1 = Math.floor((Math.random() * 6) + 1),
        die5: prevState.die1 = Math.floor((Math.random() * 6) + 1)
      }
    })
  }

  

render(){
  return (
    <div className="wrapper">
      <div className="dice">Die One: {this.state.die1}</div>
      <div className="dice">Die Two: {this.state.die2}</div>
      <div className="dice">Die Three: {this.state.die3}</div>
      <div className="dice">Die Four: {this.state.die4}</div>
      <div className="dice">Die Five: {this.state.die5}</div>
      <button onClick={this.roll}>Roll</button>
    </div>

  )

}
}


export default App