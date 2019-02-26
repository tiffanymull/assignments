import React, {Component} from 'react';
import Superhero from './Superhero'



class App extends Component {
  constructor(){
    super()
      this.state = {
        superheroes: [

          {
            hero: "Dream",
            imgUrl:"https://www.toplessrobot.com/wp-content/uploads/2010/04/6a00d8341c630a53ef0105362cfe42970c-800wi.jpg",
            quote: "It is time for me to walk the abyss"
          },{
            hero: "Death",
            imgUrl:"https://cdn3.whatculture.com/images/2017/06/9ed9cc33d6b7af8a-600x338.jpg",
            quote: "When the first living thing existed, I was there, waiting."
          },{
            hero: "Destiny",
            imgUrl: "https://i.imgur.com/3PKrynU.jpg",
            quote: ""
          },{
            hero: "Destruction",
            imgUrl: "https://vignette.wikia.nocookie.net/marvel_dc/images/4/4a/Destruction_01.jpg/revision/latest?cb=20080619161027",
            quote: ""
          },{
            hero: "Despair",
            imgUrl: "https://i.pinimg.com/236x/38/16/be/3816bef5fdb0550b5bf9b937d72630af--endless-fandom.jpg",
            quote: ""
          },{
            hero: "Delirium",
            imgUrl: "https://i1.wp.com/cdn.quotesgram.com/img/54/96/150588923-delirium_sandman-fe5f462c74eca898ed2e7be235d40723_h.jpg",
            quote: ""
          },{
            hero: "Desire",
            imgUrl: "http://circulador.files.wordpress.com/2010/06/desire3.jpg",
            quote: ""
          }
          ]
    }  
      this.handleClick = this.handleClick.bind(this)   //<--unless doing fat arrow function
  }
    
    handleClick(event){
      alert('Quote: ' + this.state.superheroes.quote)
      event.preventDefault();
    }
      // only methods you want to belong to component go here
  

render(){
  const mappedHeroes = this.state.superheroes.map((superhero) => {     //<-turns out this had to go in render byt before the return
        
        
    return(
      <button onClick={this.handleClick}>
        <Superhero
          name={superhero.hero}
          pic={superhero.imgUrl}
          />
      </button>
    )

  })
  return (
    <div>
      {mappedHeroes}
    </div>
  )
}

}



export default App
