import React from 'react'
import Pet from './Pet';


const FriendList = (props) => {
    // console.log(props)
    const mappedBreed = props.animal.map((animal) => {
        
        return (
        //   animal.name
          <Pet petName = {animal.name}
          petBreed = {animal.breed}
          />
        )
      })
    //   console.log(mappedBreed)

      return (
       

        <div>
            {mappedBreed}
            <h3>Your friend, {props.name}, </h3>
            {/* <h2>owns {props.animal}</h2> */}
        </div>
    )
}

export default FriendList