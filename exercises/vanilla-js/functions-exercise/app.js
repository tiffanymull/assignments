//1st Part, function accepts two nums as parameters
//and returns the sum. Works.

// function addNumbers(paramOne, paramTwo) {
//     console.log(paramOne + paramTwo);
// }
//     addNumbers(4, 5)

//2nd Part, function accepts three nums as parameters
//and returns teh largest of those numbers. Works.

// function returnLargest(paramOne, paramTwo, paramThree) {
//     console.log(Math.max(paramOne, paramTwo, paramThree));
// }
//     returnLargest(5, 17, 2)

//3rd Part, function that accepts one num as a parameter
//and returns whether that num is even or odd
//Return the string "even" or "odd"

    //First tactic. Works.
// function evenOrOdd(param) {
//     if (param % 2 === 0) {
//         console.log("Even.")
//     } else {
//         console.log("Odd.")
//     }
// }
//     evenOrOdd(7)
    

    //Second tactic, drawing from https://forum.tutorials7.com/1884/check-if-a-number-is-odd-or-even-in-javascript
    // which accounts for decimals
    // function evenOdd(number) {
    //     let reminder = number % 2;
    //     if (reminder == 0) {
    //         console.log("even");
    //     } else if (reminder == Math.round(reminder)) {
    //         console.log("odd");
    //     } else {
    //         console.log("invalid");
    //     }
    // }
     
    // evenOdd(0);

//Fourth Part. Function that accepts a string as a parameter
// If length of string is <= 20 characters, return string
//concatenated with itself (string + string). 
// If string > 20 characters, return 1st half of string. Works.

//look here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// .length starts at one, but we are looking for index, hence -1. 
// check the functions review for 1/29
function fullOrHalfString(param) {
    if (param.length <= 20) {
        console.log(param + param);
    } else {
        console.log(param.slice(0, (param.length/2)-1));
    }
}
    fullOrHalfString("\’Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe. ")

// Here is what Eric did.  He said you don't need to do the -1,
//Because slice goes up to but not including. Test it.
// function doubleHalfString(str) {
// 	if(str.length <= 20) {
// 	     return str.concat(str);
// 	} else {
// 	     return str.slice(0, str.length/2)
// 	}
// 	return finalString;
// }


