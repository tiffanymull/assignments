import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      box1: "white",
      box2: "white",
      box3: "white",
      box4: "white",
      isWhite: true
    }
  }

toggle = () => {
  this.setState((prevState) => {
    if(prevState.isWhite) {
      return {
        box1: "black",
      box2: "black",
      box3: "black",
      box4: "black",
      isWhite: false
      }
    }else {
      return{
      box1: "white",
      box2: "white",
      box3: "white",
      box4: "white",
      isWhite: true
      }
    }
  })
}

turnPurple = () => {
  this.setState({box1: "purple", box2: "purple"})
}

turnLeftBlue = () => {
  this.setState({box3: "blue"})
}

turnRightBlue = () => {
  this.setState({box4: "blue"})
}

  render() {
    return (
      <div className="wrapper">
        <div className="box" style={{backgroundColor: this.state.box1}}>Box 1</div>
        <div className="box" style={{backgroundColor: this.state.box2}}>Box 2</div>
        <div className="box" style={{backgroundColor: this.state.box3}}>Box 3</div>
        <div className="box" style={{backgroundColor: this.state.box4}}>Box 4</div>
        <button onClick={this.toggle}> {this.state.isWhite ? "Change all to Black": "Change all to White"}</button>
        <button onClick={this.turnPurple}>Top Purple</button>
        <button onClick={this.turnLeftBlue}>Bottom Left Blue</button>
        <button onClick={this.turnRightBlue}>Bottom Right Blue</button>
      </div>
    );
  }
}

export default App;





