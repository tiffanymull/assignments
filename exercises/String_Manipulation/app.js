var readline = require('readline-sync');

//1. Make one of the inputs all uppercase

// var userName = readline.question('What\'s your name? ');
// console.log('Hi, ' + userName.toUpperCase() + '!');

//2. Report back the number of characters in a given input.

// var spellYourName = readline.question('How do you spell your name? ');
// console.log('Your name is ' + spellYourName.length + ' characters long, including spaces.')

//3. Concatenate 2 separate strings together. <-- could also use concat

// var whereYouFrom = readline.question('Where are you from? ');
// var whereYouNow = readline.question('Where do you live now? ');
// console.log('You are from ' + whereYouFrom + " and you live in " + whereYouNow)

//4. Given a long message (more than 20 letters), return only the last half of the message.

var tellMeAStory = readline.question('Tell me a story, but if it\'s long, I\'ll only hear the last half.')
   
    if (tellMeAStory.length > 20) {
        console.log('Your story was ' + tellMeAStory.length + ' characters long. Here\'s what I heard: ' + tellMeAStory.slice(tellMeAStory.length/2, tellMeAStory.length));
    }  else {
        console.log('Your story was only ' + tellMeAStory.length + ' characters long. I heard every word. You said: ' + tellMeAStory);
    }
    

//5. Using the same long message (without making user type it again), 
//have your program print it to the terminal for the user to read again, 
//but specify from where it will print.

var repeatTheStory = readline.question('Good story, though. I\'d like to repeat it to you, starting from a different character point. Pick a number from 0 to ' + tellMeAStory.length + ': ')
    //I think I'll use slice gain in some capacity?  I'm not sure how to hear what number the user picks though
    //Or do I do a for loop to look for the index the selected?  Wait, maybe charAt  <--probably, but it's only giving me the character at that index.
    console.log(tellMeAStory.charAt(repeatTheStory));
    
    
// Would something like this work?
    // function charCount(myChar, str) {
    //     var counter = 0
    //     for (var i = 0; i < str.length; i++ ){
    //       if (str[i] === myChar ) {
    //         console.log((myChar, str));
    //         counter++
    //       }
    //     }
    //     return counter
    //   }
    
    // for (var i = 0; i <= tellMeAStory.length; i++) {
    //     if (i <= tellMeAStory.length) {
    //         console.log(tellMeAStory.(i));
    //     }
    // }

    















