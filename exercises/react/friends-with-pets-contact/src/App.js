import React from 'react'
import FriendList from './FriendList'
import Friend from './Friend'
import Pet from './Pet'

const friends = [
  {
    name: "Ben",
    age: 29,
    pets: [
      {
        name: "spot",
        breed: "tabby"
      },{
        name: "John Johnson",
        breed: "husky"
      },{
        name: "Bear the bear",
        breed: "Grizzly"
      }
    ]
  },{
    name: "Bob",
    age: 31,
    pets: [
      {
        name: "Sally",
        breed: "Australian Shepard"
      }
    ]
  },{
    name: "Marcus",
    age: 25,
    pets: [
      {
        name: "Indy",
        breed: "Akita"
      },{
        name: "Anna",
        breed: "persian cat"
      }
    ]
  },{
    name: "Jacob",
    age: 20,
    pets: [
      {
        name: "fluffy",
        breed: "sphynx cat"
      },{
        name: "patches",
        breed: "sphynx cat"
      },{
        name: "tiger",
        breed: "sphynx cat"
      },{
        name: "oscar",
        breed: "sphynx cat"
      }
    ]
  }
]

const App = () => {
  
  const mappedFriendList = friends.map((friend) => {
    return (
      <FriendList 
                  name={friend.name}
                  animal={friend.pets}
      />
    )
  }
  

  )

  
  return (
    <div>
      {mappedFriendList}
      <Friend />
      <Pet />
      Hi.
    </div>
  )
}

export default App
