import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super()
      this.state = {
        // firstName: "",
        // lastName: ""
        names: [{firstName: "", lastName: ""}]   //new experiment
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
  this.setState({firstName: "", lastName: ""})
}



  render(){
    
    let {names} = this.state   //new experiment

    return (
      <form onSubmit={this.handleSubmit}>
        Put in all the names. <br/>
        <input type ="text" name="firstName" onChange={this.handleChange} placeHolder="First Name"/>
        <input type ="text" name="lastName" onChange={this.handleChange} placeHolder="Last Name"/>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        {/* <button>submit</button>  */}
        <input type="submit" value="Submit" />

        {     //new experiment also
          names.map((name) => {

          })
        }

      </form>
    )
  }

}


//In set state don't do const names = oldNames.push("new name")
//Rather, do const names = [...oldNames, "new name"]

//I'm looking at this site: https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c  <- Eric said this is a good guide

export default App
