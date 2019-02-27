import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super()
      this.state ={
        holdTheInfo:{
          firstName: "",
          lastName: "",
          email: "",
          birthplace: "",
          phone: "",
          favoriteFood: "",
          about: "",
          badges: []
      }

  }
}

//write handleChange function
handleChange = (event) => {
  event.preventDefault();
  this.setState({
    [event.target.name]: event.target.value  //<--
  })
}

//write handleSubmit function
handleSubmit = e => {
  e.preventDefault();

  this.setState((prevState) => {
    // const allInfo = prevState.firstName + " " + prevState.lastName + " " + prevState.email + " " + prevState.birthplace + " " + prevState.phone + " " + prevState.favoriteFood + " " + prevState.about
      return {
        firstName: "",
        lastName: "",
        email: "",
        birthplace: "",
        phone: "",
        favoriteFood: "",
        about: "",
        badges: []
  }
  })
}



render(){
  
  let {firstName, lastName, email, birthplace, phone, favoriteFood, about} = this.state.holdTheInfo

  const mappedInfo = this.state.holdTheInfo.badges.map((badge, i) => {
    return <li key={i}>{badge}</li>
  })
  
  return(
    <form onChange={this.handleSubmit}>
      
      <input type ="text" name="firstName" onChange={this.handleChange} placeholder="First Name" value={firstName}/>
      <input type="text" name="lastName" onChange={this.handleChange} placeholder="Last Name" value={lastName}/>
      <input type="text" name="email" onChange={this.handleChange} placeholder="E-mail" value={email}/>
      <input type="text" name="birthplace" onChange={this.handleChange} placeholder="Birthplace" value={birthplace}/>
      <input type="phone" name="phone" onChange={this.handleChange} placeholder="Phone #" value={phone}/>
      <input type="text" name="favoriteFood" onChange={this.handleChange} placeholder="Favorite Food" value={favoriteFood}/>
      <input type="text" name="about" onChange={this.handleChange} placeholder="About" value={about}/>
      {/* <button>Submit</button> */}
      <input type="submit" value="Submit" />
      <ul>
        {mappedInfo}
      </ul>
    </form>
  )
}

}

export default App

//maybe reference this: https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y