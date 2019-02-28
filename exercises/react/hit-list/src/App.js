import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      marked: []
    }

  }


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
            <div key={i}>
                {marked.name}
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


export default App