import React, {Component} from 'react';

class Superhero extends Component {
    render() {
      return (
        <button>                          
            <h1>{this.props.name}</h1>
            <img src={this.props.pic} alt="hero pic"/>
        </button>
      )
    }
  }

  //was it right for me to make this a button rather than a div?






export default Superhero