import React, {Component} from 'react';

//this component actually doesn't need to be class-based 
//since it is not dealing with state

class Superhero extends Component {
    render() {
      return (
        <div className="theEndless">                          
            <h1>{this.props.name}</h1>
            <img src={this.props.pic} alt="hero pic" onClick={() => this.props.handleClick(this.props.saying)} /> 
                                                                {/* Had to put the handleclick inside an empty function () => */}
                                                                {/* Otherwise it would automatically run through all quotes when open page */}
        </div>
      )
    }
  }







export default Superhero