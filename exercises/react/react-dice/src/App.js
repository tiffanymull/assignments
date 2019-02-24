import React, {Component} from 'react';

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
  // somewhere i would put Math.floor((Math.random() * 6) + 1); 
  //but probably as a fat arrow function
  //I believe what they're getting at is that they want 5 dice

  

render(){
  return (
    <div className="wrapper">
      <div className="dice">Die 1: {this.state.die1}</div>
      <div className="dice">Die 2: {this.state.die2}</div>
      <div className="dice">Die 3: {this.state.die3}</div>
      <div className="dice">Die 4: {this.state.die4}</div>
      <div className="dice">Die 5: {this.state.die5}</div>
      <button onClick={this.roll}>Roll</button>
    </div>
  )

}
}


export default App