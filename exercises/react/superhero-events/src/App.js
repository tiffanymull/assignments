import React, {Component} from 'react';
import Superhero from './Superhero'



class App extends Component {
  constructor(){
    super()
      this.state = {
        superheroes: [

          {
            hero: "Dream",
            imgUrl:"https://www.toplessrobot.com/wp-content/uploads/2010/04/6a00d8341c630a53ef0105362cfe42970c-800wi.jpg"
          },{
            hero: "Death",
            imgUrl:"https://cdn3.whatculture.com/images/2017/06/9ed9cc33d6b7af8a-600x338.jpg"
          },{
            hero: "Destiny",
            imgUrl: "https://i.imgur.com/3PKrynU.jpg"
          },{
            hero: "Destruction",
            imgUrl: "https://vignette.wikia.nocookie.net/marvel_dc/images/4/4a/Destruction_01.jpg/revision/latest?cb=20080619161027"
          },{
            hero: "Despair",
            imgUrl: "https://i.pinimg.com/236x/38/16/be/3816bef5fdb0550b5bf9b937d72630af--endless-fandom.jpg"
          },{
            hero: "Delirium",
            imgUrl: "https://i1.wp.com/cdn.quotesgram.com/img/54/96/150588923-delirium_sandman-fe5f462c74eca898ed2e7be235d40723_h.jpg"
          },{
            hero: "Desire",
            imgUrl: "http://circulador.files.wordpress.com/2010/06/desire3.jpg"
          }
          ]
    }
    
      const mappedHeroes = this.state.superheroes.map((superhero) => {
        
        
        return(
          <Superhero
            name={superhero.hero}
            pic={superhero.imgUrl}
            />
        )

      })
  
  
  }



render(){
  return (
    <div>
      {mappedHeroes}
    </div>
  )
}

}








export default App
