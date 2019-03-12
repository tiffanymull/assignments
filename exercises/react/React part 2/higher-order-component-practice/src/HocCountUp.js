import React, { Component } from 'react'

class HocCountUp extends Component {
    constructor(){
        super()
        this.state={
            add: 0
        }
    }

    countUp = () => {
        this.setState(prevState => {
            return {add: prevState.add + 1}
        })
    }


  render() {
    
    const Comp = this.props.component
    
    return (
        <Comp 
            add = {this.state.add}  //don't have to call add, but convention to call same
            countUp = {this.countUp}   //could add countdown in here too if wanted rather than separate
            {...this.props}
        />

    )
  }
}

export default HocCountUp

export function withHocCountUp (C) {
    return function (props){
        return<HocCountUp component={C}{...props}/>
    }
}