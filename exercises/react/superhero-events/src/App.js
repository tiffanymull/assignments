import React, {Component} from 'react';
import Superhero from './Superhero'
import "./style.css"


class App extends Component {
  constructor(){
    super()
      this.state = {
        superheroes: [

          {
            hero: "Dream",
            imgUrl:"https://www.toplessrobot.com/wp-content/uploads/2010/04/6a00d8341c630a53ef0105362cfe42970c-800wi.jpg",
            quote: "It is time for me to walk the abyss."
          },{
            hero: "Death",
            imgUrl:"https://cdn3.whatculture.com/images/2017/06/9ed9cc33d6b7af8a-600x338.jpg",
            quote: "When the first living thing existed, I was there, waiting."
          },{
            hero: "Destiny",
            imgUrl: "https://i.imgur.com/3PKrynU.jpg",
            quote: "My dominion is that which is, of actions and consequences and paths."
          },{
            hero: "Destruction",
            imgUrl: "https://vignette.wikia.nocookie.net/marvel_dc/images/4/4a/Destruction_01.jpg/revision/latest?cb=20080619161027",
            quote: "Worlds don't last; and stars and galaxies are transient, fleeting things that twinkle like fireflies and vanish into cold and dust. But I can pretend."
          },{
            hero: "Despair",
            imgUrl: "https://i.pinimg.com/236x/38/16/be/3816bef5fdb0550b5bf9b937d72630af--endless-fandom.jpg",
            quote: "Today he's sitting in their family room, realizing that his life is over, wondering if he has the courage physically to end it.  He doesn't.  Isn't that beautiful?"
          },{
            hero: "Delirium",
            imgUrl: "https://i1.wp.com/cdn.quotesgram.com/img/54/96/150588923-delirium_sandman-fe5f462c74eca898ed2e7be235d40723_h.jpg",
            quote: "I lost some time once.  It's always in the last place you look for it."
          },{
            hero: "Desire",
            imgUrl: "http://circulador.files.wordpress.com/2010/06/desire3.jpg",
            quote: "Is there something you crave?"
          }
          ]
    }  
      this.handleClick = this.handleClick.bind(this)   //<--unless doing fat arrow function
  }
    
    handleClick(quote){
      alert(`Quote: ${quote}`)
      // alert('Quote: ' + this.state.superheroes.quote)
      // alert('Quotes: ' + event.target.id)   //<--whole superhero object is the target
    }
      // only methods you want to belong to component go here
  

render(){
  const mappedHeroes = this.state.superheroes.map((superhero) =>  <Superhero
                                                                      name={superhero.hero}
                                                                      pic={superhero.imgUrl}
                                                                      saying={superhero.quote}
                                                                      handleClick={this.handleClick}
                                                                      />)
  return (
    <div>
      {mappedHeroes}
    </div>
  )
}

}



export default App
