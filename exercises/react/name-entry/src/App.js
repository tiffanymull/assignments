import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super()
      this.state = {
        firstName: "",
        lastName: ""
      }
  }

handleChange = (event) => {
  event.preventDefault();
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = e => { 
  e.preventDefault();
}



  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        Put in all the names. <br/>
        <input type ="text" name="firstName" onChange={this.handleChange} placeHolder="First Name"/>
        <input type ="text" name="lastName" onChange={this.handleChange} placeHolder="Last Name"/>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        {/* <button></button> */}
        <input type="submit" value="Submit" />
      </form>
    )
  }

}


export default App
