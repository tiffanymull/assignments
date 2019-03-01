import {Component} from 'react';   //why would I not need React before {Component}?

class Toggle extends Component {
  constructor(){
    super()
        this.state = {
            isToggled = false
        }
  }

  toggler = () => {                    //function w/in a function, right?
      this.setState(prevState => {         //how exactly is this interacting with state?
          return {
              isToggled: !prevState.isToggled
          }
      })
  }


    render(){
        
        const stuffFromToggle = {       //how exactly is this interacting with state
            isToggled: this.state.isToggled,      //is this a sort of object, then?
            toggler: this.toggler             //what does it mean to call on the function in here?
        };
        
        return this.props.render(stuffFromToggle)   //why is this necessary, what is this doing?
        }

}

export default Toggle