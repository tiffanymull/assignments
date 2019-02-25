import React, {Component} from 'react';

class Superhero extends Component {
    render() {
      return (
        <div>
            <h1>{this.props.name}</h1>
            <img src={this.props.pic} alt="hero pic"/>
        </div>
      )
    }
  }



// const Superhero = () => {
//     return (
        // <div>
        //     <h1>{this.props.name}</h1>
        //     <img src={this.props.pic} alt="hero pic"/>
        // </div>
//     )
// }



export default Superhero