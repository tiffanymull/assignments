import React, { Component } from 'react'

class HocPopUp extends Component {
    constructor(){
        super()
        this.state={
            pop: false
        }
    }

    popUp = () => {
        this.setState(prevState => {
            return ({pop: !prevState.pop})   //braces bc returning object. 
        })
    }



  render() {

    const Comp = this.props.component

    return (
      <Comp 
        pop = {this.state.pop}
        popUp = {this.popUp}
        {...this.props}
      
      />
    )
  }
}

export default  HocPopUp

export const withHocPopUp = (C) => {
    return function (props) {
        return<HocPopUp component = {C} {...props}/> 
    }
}