//#1. Loop through the following array and count how many "computerS" there are. Log the final count.
// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for(var i = 0; i <officeItems.length; i++) {
//     if (officeItems[i] === "computer") {
//       console.log(i);          //<-- this identifies the index number of the computers, revealing 4
//     }
// }


//#2. Loop through the following array and log to the console "old enough"
//if they are 18 or older  and "not old enough" if not.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough.');
    } else {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough.');
    }
  }
  
  
  
  
//   for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (age >= 18){
//       console.log(name + 'is old enough.');
//     } else {
//       console.log(name + 'is not old enough.');
//     }
//   }







  //   console.log(peopleWhoWantToSeeMadMaxFuryRoad)
//    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//      if (age >= 18){
//        console.log(name + 'is old enough.');
//      } else {
//        console.log(name + 'is not old enough.');
//      }
//    }
