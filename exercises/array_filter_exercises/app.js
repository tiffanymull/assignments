
//1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// var numbers = [72, 83, 4, 1, 63, 2, 5]

// var filteredArray = numbers.filter(function(number){

// return number >= 5
// })

// console.log(filteredArray);

//2. Given an array of numbers, return a new array that only includes the even numbers.

// var numbers = [72, 83, 4, 1, 63, 2, 5]

// var newArray = numbers.filter(function(number){
//     if (number % 2 === 0)
//     return number
// })

// console.log(newArray);

//3. Given an array of strings, return a new array that only includes those that are
// 5 characters or fewer in length.

// var pets = ["bird", "dog", "helper monkey", "chinchilla", "rat"]

// var newArray = pets.filter(function(pet){
//     if (pet.length <= 5)
//     return pet
// });

// console.log(newArray);

//4. Given an array of people objects, return a new array that has filtered
//out all those who don't belong to the club.

// var people = [ {
//     name: "Angelina Jolie",
//     member: true
// },
// {
//     name: "Eric Jones",
//     member: false
// },
// {
//     name: "Paris Hilton",
//     member: true
// },
// {
//     name: "Kayne West",
//     member: false
// },
// {
//     name: "Bob Ziroll",
//     member: true
// }]

// var newArray = people.filter(function(person){
//     return person.member === true
// });

// console.log(newArray);


//5. Filter out all the people who are not old enough to see The Matrix (younger than 18)

var people = [{
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

var newArray = people.filter(function(person){
    if (person.age >= 18)
    return person
})

console.log(newArray);