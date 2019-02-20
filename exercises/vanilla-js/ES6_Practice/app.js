//Let and Const
// Replace all vars with let and const
// Make sure still works so pet's name isn't "John"

// let name = "John"
// const age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

// runForLoop()

// console.log(name);
// console.log(age);
// console.log(pets);
// console.log(petObjects);

                                // needs to look like:
                                // John
                                // 101
                                // [ 'cat', 'dog' ]
                                // [ { type: 'cat', name: 'fluffy' },
                                //   { type: 'dog', name: 'spot' } ]

//ES6 Arrow Functions Task 1 
// Rewrite this .map() using an arrow function

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// console.log (mapVegetables(carrots));


//My version:
// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = arr => arr.map(carrot => ({ type: "carrot", name: carrot }))


// console.log (mapVegetables(carrots));


//ES6 Arrow Functions Task 2
//Rewrite this .filter() using an arrow function
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

//no arrow version:
                // function filterForFriendly(arr) {
                //     return arr.filter(function(person) {
                //         return !!person.friendly
                //     })
                // }

//my arrow version
// const filterForFriendly = arr => arr.filter(person => !!person.friendly)

// console.log(people);


//ES6 Arrow Functions Task 3
//Rewrite the following functions to be arrow functions:

            // function doMathSum(a, b) {
            //     return a + b
            // }

//my arrow version version
// const doMathSum = (a, b) => a + b;    //<-- implicit return
//                                         //if have only 1 expression in your function,
//                                         //remove both curly brackets and return keyword

// console.log(doMathSum(1, 2));

            // var produceProduct = function(a, b) {
            //     return a * b
            // }

//my arrow version
// const produceProduct = (a, b) => a * b;

// console.log(produceProduct(1, 2));

//ES6 Arrow Functions Task 4
//Write a printString function that takes firstName, lastName, and age as 
//parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?
//Defaults should be: firstName: "Jane" lastName: "Doe" age: 100


// let firstName = "Jane"
// let lastName = "Doe"
// let age = 100

// if (firstName === "Jane"){
//     let firstName = "Kat"
//     console.log(firstName);
// }

// function printString(firstName, lastName, age) {
//     let firstName = "Jane";
//     if (firstName === "Jane") {
//         let firstName = "Kat";
//         console.log(firstName);
//     }
    
// }

// console.log(printString())
//does NOT work yet

// function printString() {
//     let firstName = "Jane";
//       if (true) {
//         let firstName = "Kat";
//         // console.log("Hi, " + firstName);
//     }
//     let lastName = "Doe";
//       if (true) {
//         let lastName = "Stark";
//         // console.log(lastName);
//     }
//     let age = 100;
//       if (true) {
//         let age = 40
//         // console.log(age);
//         console.log("Hi, " + firstName + " " + lastName + ", how does it feel to be " + age + "?")
//     }
//     console.log("Hi, " + firstName + " " + lastName + ", how does it feel to be " + age + "?")
// }

// printString();

//next attempt:
function printString() {
    let firstName = "Jane";
    let lastName = "Doe";
    let age = 100;
      if (true) {
        let firstName = "Kat";
        let lastName = Stark;
        let age = 40;
        console.log("Hi, " + firstName + " " + lastName + ", how does it feel to be " + age + "?")
    }
    
    // console.log("Hi, " + firstName + " " + lastName + ", how does it feel to be " + age + "?")
}

printString();