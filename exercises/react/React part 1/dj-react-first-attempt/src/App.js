import React, {Component} from 'react';
import "./style.css"

class App extends Component {
  constructor(){
    super()
      this.state = {
        styles: {                           //styles is just an object we made
          backgroundColor: 'white'            //use function to target individual boxes with individual styles
        },                                  //then use these individual styles and add this.setState for each box style in each
        style1: {                           //if and else within each function
          backgroundColor: 'white'
        },
        style2: {
          backgroundColor: 'white'
        },
        style3: {
          backgroundColor: 'white'
        },
        style4: {
          backgroundColor: 'white'
        }
      }
  }

    toWhite = () => {
      if(this.state.styles.backgroundColor === 'white'){  //have to guide it through the object
        console.log('hit')
        this.setState({styles:{
          backgroundColor: "black"}
        })
      
      }else{                          //this is just an else statement
        console.log('hit2')
        this.setState({styles:{
          backgroundColor: "white"}
        })
      }
    }

    topPurple = () => {
      if(this.state.styles.backgroundColor === 'white'){
        this.setState({styles:{
          backgroundColor: "purple"}
        })
      }else if(this.state.styles.backgroundColor === 'black'){
        this.setState({styles:{
          backgroundColor: "purple"}
      })
      }else{
        this.setState({styles:{
          backgroundColor: "white"}
        })
      }
    }

  render(){
//inline styles to grab css style
    return (
      <div className="wrapper">
        {/* <div className="topTwoBoxes"> */}
          <div className="box1 topBox" style={this.state.styles}>Box 1</div>    
          <div className="box2 topBox" style={this.state.styles}>Box 2</div>
        {/* </div> */}
        <div className="box3" style={this.state.styles}>Box 3</div>
        <div className="box4" style={this.state.styles}>Box 4</div>
        <button onClick={this.toWhite}>Change All Black/White</button>
        <button onClick={this.topPurple}>Change Top Purple</button>
      </div>
    )
  }
}

//I'm not sure how to target only the top boxes. Maybe I add another div layer? Another set state?
//the other div layer jacked up the grid. 

export default App