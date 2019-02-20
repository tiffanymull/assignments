//Preliminary 1

// for (var i = 0; i <= 9; i++){
//     console.log(i);
// }
//Preliminary 2
// for (var i = 9; i >= 0; i--){
//     console.log(i)
// }

//Preliminary 3
// var fruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']

//    for (i = 0; i <= 5; i++) {
//     console.log(fruit[i]);
//    }

//Bronze part 1.
// var fruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']

// for (var i = 0; i <= 9; i++){
//     //    console.log(i);
//        fruit.push([i]);
//     }
//     console.log(fruit);

   //Bronze part 2 attempt A. Works.
//  var i;
//    for (var i = 0; i <= 100; i++){
//      if (i % 2 === 0){
//          console.log(i);
//      }
//  }

// Bronze part 2 attempt B, works, but janky. 
// var i;
//    for (var i = 0; i <= 100; i += 2) {
//        console.log(i);
//    }

//Bronze part 3 attempt A. Works.


// var fruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']
//   for (var i = 0; i <= 5; i += 2) {
//       console.log(fruit[i]);
//   }

//Silver part 1. Loop that prints names of people. Works.

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"  
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"  
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
// ]
//   for (var i = 0; i <= 3; i++) {
//       console.log(peopleArray[i].name);
//   }

//Silver part 2. Loop that pushes names 
// into names array and occupations into occupations array
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"  
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"  
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]
for (var i = 0; i === peopleArray.length; i++){
           console.log(i);
           peopleArray.push([i].name);
           peopleArray.push([i].occupation)
        }
        console.log(peopleArray);

// for (var i = 0; i <= 9; i++){
//     //    console.log(i);
//        fruit.push([i]);
//     }
//     console.log(fruit);