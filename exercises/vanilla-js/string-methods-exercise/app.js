
//Make function return any string into all caps followed by the same
//string all lowercase. WORKS.

// function upperThenLowerCase(stringParam) {
//     console.log(stringParam.toUpperCase() + stringParam.toLowerCase());
// };
//     upperThenLowerCase('rumple dump dump ');

//Make function returns a number half the length, rounded down
//use Math.floor(). WORKS.

// function halfLengthRoundDown(theParam) {
//     console.log(Math.floor(theParam.length/2));    
// };
//     halfLengthRoundDown('slapper');

//Make function uses slice() and the other functions you've written
//to return the first half of the string. WORKS.


// function returnFirstHalf(theParam) {

//     console.log(theParam.slice([0], [theParam.length/2]))

// };

// returnFirstHalf("midget");


            // or
// function halfLengthRoundDown(theParam) {
//     console.log(Math.floor(theParam.length/2));    
    
//     var result;
//     result = Math.floor(theParam.length/2);  //<-- necessary to creat a variable and call it
//                                                 //in order to be able to use it for the funciton
//     return result;                              //below
// };

//     function returnFirstHalf(theParam) {
//         console.log(theParam.slice([0], [halfLengthRoundDown(theParam)]));
//     };

//     returnFirstHalf("nuggets");

    //Make function that returns first half of string capitalized
    //and seond half lower cased. If string length is odd, capitalize
    //the shorter of the first half.

    function capThenLower (theParam) {
        
        var firstHalf = theParam.slice([0], [theParam.length/2]);

        var secondHalf = theParam.slice([theParam.length/2], [theParam.length]);

            return firstHalf.toUpperCase() + secondHalf.toLowerCase();
                
    }

    console.log(capThenLower("I want to die."))

    
    
    
    //I decided to reverse it if it were odd:
    function capThenLower (theParam) {
        
        var firstHalf = theParam.slice([0], [theParam.length/2]);

        var secondHalf = theParam.slice([theParam.length/2], [theParam.length]);

        if(theParam.length % 2 === 0) {
            return firstHalf.toUpperCase() + secondHalf.toLowerCase();
        } else {
            return firstHalf.toLowerCase() + secondHalf.toUpperCase();
        }
    }

    console.log(capThenLower("AAAAAAAAh."))