
//1. Make an array of numbers that are doubles of the first array.

// var numbers = [6, 14, 22]

// var doubleNumbers = numbers.map(function(number){

//     return number * 2

// })
// console.log(numbers)
// console.log(doubleNumbers)

//2. Take an array of numbers and make them strings.

// var numbers = [2, 4, 6, 8]

// var turnToString = numbers.map(function(number){
//     return number.toString();

// })

// console.log(numbers)
// console.log(turnToString)

//3. Capitalize each of an array of names.

// var names = ['michael', 'jennifer', 'devin', 'juan']

// var capitalizeNames = names.map(function(name){
//     return name.toUpperCase();
// })

// console.log(names)
// console.log(capitalizeNames)

//4. Make an array of strings of the names.
// var objectArray =  [{
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]

// var newArray = objectArray.map(function(oANames){

//     return oANames.name

// })

// console.log(objectArray)
// console.log(newArray)

//5. Make an array of strings of the names saying whether or not they can go to the Matrix.
// var objectArray =  [{
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]

// var newArray = objectArray.map(function(goToMatrix){
//     if (goToMatrix.age >= 18) {
//         return goToMatrix.name + " can go to the Matrix!"
//     } else {
//         return goToMatrix.name + " is underage!"
//     }
// })

// console.log(newArray)

//6. Make an array of teh names in h1s, and the ages in h2s.
var objectArray =  [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

var newArray = objectArray.map(function(h1H2){
    return "<h1>" + h1H2.name + "</h1>" + "<h2>" + h1H2.age + "</h2>"

})

console.log(newArray)