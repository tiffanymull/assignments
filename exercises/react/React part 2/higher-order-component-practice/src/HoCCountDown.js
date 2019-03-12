import React, { Component } from 'react'

class HoCCountDown extends Component {
    constructor(){
        super()
        this.state={
            subtract: 10
        }
    }

    countDown = () => {
        this.setState(prevState => {
            return {subtract: prevState.subtract - 1}
        })
    }


  render() {
    
    const Comp = this.props.component
    
    return (
        <Comp 
            subtract = {this.state.subtract}
            countDown = {this.countDown}
            {...this.props}
        />

    )
  }
}

export default HoCCountDown

export function withHoCCountDown (C) {
    return function (props){
        return <HoCCountDown component = {C}{...props} /> 
    }
}
