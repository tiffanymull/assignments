import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      marked: []
    }
    // const styles = {
    //     backgroundImage: `url(${marked.image})`
    // }
  }

//use inline styling to set images to background div images use syntax like what I tried with {marked.image}
//except that was making it too complicated. Commented out. All I needed was to add an image tag in the first return.

  componentDidMount(){
   
    axios.get('http://s3.amazonaws.com/v-school/data/hitlist.json').then( response => {
        console.log(response.data);
        this.setState({
            marked: response.data
        })
        
    })
}
  
    render(){
        
      console.log(this.state.marked)
      const mappedArray = this.state.marked.map((marked, i)=>{
        return (
            // <div key={i} style={{backgroundImage: `url(${marked.image})`, height: 500}}>
            <div key={i}>
                {marked.name}
                <img src={marked.image} alt="the mark" />
            </div>
        )
    })
      return (
          <div>  
            <div>Hi.</div>
            <div>{mappedArray}</div>
          </div>
        )
    }

}
//console.log data getting to find where the image is.  
//Each person will be an object with an image attached to them.

export default App