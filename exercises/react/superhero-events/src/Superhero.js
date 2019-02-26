import React, {Component} from 'react';

class Superhero extends Component {
    render() {
      return (
        <div className="theEndless" id={this.props.saying}>                          
            <h1>{this.props.name}</h1>
            <img src={this.props.pic} alt="hero pic"/>
            
        </div>
      )
    }
  }







export default Superhero