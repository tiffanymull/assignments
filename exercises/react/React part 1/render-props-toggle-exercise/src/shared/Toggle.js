import {Component} from 'react';   //why would I not need React before {Component}?
                                    //only when say div
class Toggle extends Component {
  constructor(){
    super()
        this.state = {
            isToggled = false
        }
  }

  toggler = () => {                    //function w/in a function, right?
      this.setState(prevState => {         //prevState is a callback function. setSTate takes snapshot of state
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
        
        return this.props.render(stuffFromToggle)   //this is making state available as props
        }

}

export default Toggle