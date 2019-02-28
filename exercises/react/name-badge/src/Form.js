import React, {Component} from 'react';
import Badge from './Badge'

class Form extends Component {
    constructor(){
        super()
//be sure that whatever you have in state is same as name attribute
        this.state = {
        inputs:{
            firstName: '',
            lastName: '',
            email: '',
            birth: '',
            phone: '',
            favFood: '',
            about: ''  
        },
        badges: []  //array outside inputs but that inputs will be pushed into with spread ... operator
        }
        //could've done this.state.email to grab it
        // this.state['email']

    }

    // handleChange = e => {      
    //     this.setState({[e.target.name]: event.target.value})
    // } 

    handleChange = e => {
        // const name = e.target.name
        // const value = e.target.value
        const {name, value} = e.target  //save as variables so don't get erased <--this is shorthand
        this.setState(prevState => {
        return {
            inputs: {
                ...prevState.inputs,
                [name]:value
            }
        }
    })  //target knows you're in state so can start there to grab. name is grabbing all of them depending on which box user types in.
}

    handleSubmit = e => {
        e.preventDefault()
        // const newBadge = this.state.inputs;
        this.setState(prevState => {
            return{
                badges: [prevState.inputs, ...prevState.badges], //<could switch order ot change order of badge appearance nw to old. spread operator
        
                inputs:   //to clear? or not, it's not working yet
                    {firstName: '',
                    lastName: '',
                    email: '',
                    birth: '',
                    phone: '',
                    favFood: '',
                    about: ''}
            }                                                   //spread rather than push bc push changes state directly spread doesn't. Wouldn't work anyway
        })
        // this.clearInputs()
    }

// clearInputs = () => {
//     this.setState({inputs:{firstName: '',
//     lastName: '',
//     email: '',
//     birth: '',
//     phone: '',
//     favFood: '',
//     about: ''}})
// }

    render(){
        console.log(this.state.inputs)
        let {firstName, lastName, email, birth, phone, favFood, about} = this.state.inputs  //variable so value only name rather than this.state.firstName in input
        
        const mappedBadges = this.state.badges.map((badge, i) => <Badge key={badge.firstName + i} badge={badge} />)  //way for key to always be unique
        
        return (
            //this acts as a parent so that react still works. One less layer of nesting.
           <React.Fragment> 
              <div className="instruction">             
                <h3>Fill it out, freak.</h3>
              </div>
           <form onSubmit={this.handleSubmit}>
                {/* <h3>Fill it out, freak.</h3> */}
                <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} required className="firstName"/>
                <input type="text" name="lastName" placeholder="Surname" value={lastName} onChange={this.handleChange} required className="surname"/>
                <input type="text" name="email" placeholder="E-mail" value={email} onChange={this.handleChange} required className="email"/>
                <input type="text" name="birth" placeholder="Birthplace" value={birth} onChange={this.handleChange} required className="birthplace"/>
                <input type="text" name="phone" placeholder="Phone #" value={phone} onChange={this.handleChange} required className="phone"/>
                <input type="text" name="favFood" placeholder="Favorite Food" value={favFood} onChange={this.handleChange} required className="favFood"/>
                <input type="text" name="about" placeholder="About" value={about} onChange={this.handleChange} required className="about"/>
                <button className="submit">Submit</button>
            </form>
            {mappedBadges}
            </React.Fragment>
        )
    }

}

export default Form


