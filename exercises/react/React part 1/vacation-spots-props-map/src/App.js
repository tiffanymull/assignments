import React from 'react'
import VacationSpots from './VacationSpots'
import "./style.css"

const destinations = [
  {
    place: "Ireland",
    price: 800,
    timeToGo: "Winter",
    imgUrl: "https://tenontours.com/wp-content/uploads/2016/04/Ireland.NorthernIReland.CarrickaRede.SS_.jpg"
  },{
    place: "Brazil",
    price: 800,
    timeToGo: "Summer",
    imgUrl:"https://www.pandotrip.com/wp-content/uploads/2016/02/Rio3-1-980x699.jpg"
  },{
    place: "Burma",
    price: 450,
    timeToGo: "Spring",
    imgUrl:"https://www.telegraph.co.uk/content/dam/Travel/leadAssets/26/50/burma-river-cruise_2650313a.jpg?imwidth=450"
  },{
    place: "Portugal",
    price: 1000,
    timeToGo: "Fall",
    imgUrl:"https://www.butterfield.com/blog/wp-content/uploads/2017/11/portugal-2400x1500.jpg"
  },{
    place: "England",
    price: 1200,
    timeToGo: "Spring",
    imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg"
  }
]

const App = () => {
  
  const mappedDestinations = destinations.map((destination) => {
      return (
        <VacationSpots 
          spot={destination.place}
          cost={destination.price}
          season={destination.timeToGo}
          imgUrl={destination.imgUrl}
        />
      )
  }

  //I think this is where I'd do an if/else to change colors etc.?
  //Maybe would be easier if background were stipulated in JavaScript?
  //Maybe later I can come back and do this, comparing dj react colors.

  )
  
  return (
    <div>
      {mappedDestinations}
      
    </div>
  )
}


export default App;