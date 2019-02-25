import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super()
      this.state = {
        firstName: "",
        lastName: "",
        names: []
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
  
  this.setState((prevState) => {
      const fullName = prevState.firstName + " " + prevState.lastName  //<-make variable for tidiness
    return {
      firstName: '',
      lastName: '',
      names: [...prevState.names, fullName]   //<-- spread operator rather than push // if array of objects, done a little differently
    }
  }) 
    
    // {firstName: "", lastName: ""})
}



  render(){
    
    const mappedName = this.state.names.map((name, i) => {        //<--(name)
        return <li key={i}>{name}</li>  //<--return <li>{name}</li>, but i keeps track of distinct items if otherwise duplicate

    })
    
    return (
      <form onSubmit={this.handleSubmit}>
        Put in all the names. <br/>
        <input type ="text" name="firstName" onChange={this.handleChange} placeHolder="First Name"/>
        <input type ="text" name="lastName" onChange={this.handleChange} placeHolder="Last Name"/>

        {/* <h1>{this.state.firstName} {this.state.lastName}</h1> */}
        {/* <button></button> */}
        <input type="submit" value="Submit" />
        <ul>
          {mappedName}
        </ul>
      </form>
    )
  }

}


export default App
