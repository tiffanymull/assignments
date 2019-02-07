var readline = require('readline-sync');

//Declare stuff up here, then access it below.  You can assign it to numbers.  [1].  Set conditions to true or false, etc. Indexes
//Maybe see if you can incorporate a while loop.  Use, of course if/else/if/else OR switch statements. It'd be good to get familiar 
//with switch statements.

var isAlive = true;
var hasKey = false;

var playerName = readline.question('What\'s your name?')
    console.log('Hi, ' + playerName + ', you\'re in trouble. ')

while(isAlive){
    
    ask what do you want to do? 3 options
    if option 1 { //put hand in hole
        console. youre dead
        isAlive = false
    }else if option 2{ //open door
        do this
        if has key {
            console open good job
            isAlive = false
        }else {
            consoel go find key
        }
    }else if option 3{
        do this
    }
}
//1.

// //2.
var handHole = readline.question('You\'re trapped in a room. You need to get out or you\'ll die. There is a hole in the wall. Do you stick your hand in it? Type Yes or No.')
    if (handHole === 'Yes'){
        console.log('The tiger snake that lives in the hole bit your hand and you died. Game over. ')
    } else if (handHole === 'No'){
        console.log('You kept your hand out of the hole. You are still alive.')
    } else {
        console.log('You must type either Yes or No.')
    }

// //3.
var lookOrNot = readline.question('The door to the room is locked. There may be a key somewhere. Will you look for it? Type Yes or No.')
    if (lookOrNot === 'Yes'){
        console.log('Good idea. ')
    } else if (lookOrNot === 'No'){
    console.log('Since you didn\'t want to look for the key, you slowly died of thirst. ')
    } else {
    console.log('You must type either Yes or No.')
    }

//4. 
var lookWhere = readline.question('You see a [loose floorboard], a [hanging lamp], [box of cigarettes], and a [jar of change]. Type the place you want to look first exactly as it is written inside the brackets. ')
    if (lookWhere === 'loose floorboard') {
        console.log('You pry up the floorboard. All you see is a spider and its web. Where do you look next? ')   //<---I need to get this to loop back up into that question.
    } else if (lookWhere === 'hanging lamp') {
        console.log('You tip the hanging lamp upside down. It\'s hot and dusty, but there\'s nothing there. Where do you look next?') 
    } else if (lookWhere === 'box of cigarettes') {
        console.log('You tear open the cigarette box. All that\'s inside are two withered gaspers. No key. Where do you look next?' )
    } else if (lookWhere === 'jar of change') {
        console.log('You dump the change on the floor and paw through it. There\'s a key!')
    } else {
        console.log('Invalid. Please type one of the options next time.')
    }

//5.
var openDoor = readline.question('Now that you have the key, are you going to try the door? Type Yes or No.')
    if (openDoor === 'Yes') {
        console.log('You try the key. It worked! The door opened! Unfortunately, there is a murderous clown on the other side. Have fun!')
    } else {
        console.log('Though you have the key, you are too scared to try the door. You opt to starve to death rather than see what\'s on the other side.')
    }




