var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

        // Below is how you inspect the arrays
        // console.log("fruit: ", fruit);
        // console.log("vegetables: ", vegetables);
//1. Remove the last item from the vegetable array.
        // var poppedItem = vegetables.pop();
//2. Remove the first item from the fruit array.
        // var shiftedItem = fruit.shift();
//3.  Find the index of "orange."
        // var index = fruit.indexOf("orange");
        // console.log(index);
//4. Add that number to the end of the fruit array.
        // fruit.push(2);
        // console.log(fruit);

//5. Use the length property to find the length of the vegetable array.
        // console.log(vegetables.length);
//6. Add that number to the end of the vegetable array.
        // vegetables.push(4);
        // console.log(vegetables);
//7. Put the two arrays together into one array. Fruit first. 
//Call the new Array "food."
        var combineEm = fruit.concat(vegetables);
        // console.log(combineEm);
//8. Remove 2 elements from your new array starting at index 4 with 1 method.
        var removed = combineEm.splice(4,2);
        // console.log(combineEm);
//9. Reverse your array.
        combineEm.reverse();
        // console.log(combineEm);
//10.Turn the array into a string and return it.
        combineEm.toString();
        console.log(combineEm);

//If erasing and keeping all doing, should have 
//3,pepper,1,watermelon,orange,apple