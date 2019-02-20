
//1. Sort an array from smallest number to largest.
// var numbers = [17, 42, 6, 103, 5, 2]

//     numbers.sort(function(a, b){
//         // return a - b        //<-- either works
//         return a > b          // <-- either works
//     })

// console.log(numbers)

//2. Sort an array from largest number to smallest.
// var numbers = [17, 42, 6, 103, 5, 2]

// numbers.sort(function(a, b){
//     // return a < b
//     return b - a      //<--both work
// })
// console.log(numbers)

//3. Sort an array from shortest string to longest.
// var food = ["cheese", "beef", "carrots", "coddled eggs"]

// food.sort(function(a, b){
//     return a.length - b.length
// });
// console.log(food);

//4. Sort an array alphabetically
// var animalNickNames = ["rhino", "pup", "birdie", "kitty", "horsey"]
//     animalNickNames.sort();

// console.log(animalNickNames);

//5. Sort the objects in the array by age.

var characters = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]

characters.sort(function(a, b){

    return parseInt(a.age) - parseInt(b.age);
});

console.log(characters)
