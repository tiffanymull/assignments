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

//4. Given a long message (more than 20 letters), return only the last half of the message. Does NOT work yet.

var tellMeAStory = readline.question('Tell me a story, but if it\'s long, I\'ll only hear the last half.')
   
    if (tellMeAStory.length > 20) {
        console.log('Your story was ' + tellMeAStory.length + ' characters long. Here\'s what I heard: ' + tellMeAStory.slice(tellMeAStory.length/2, tellMeAStory.length));
    } else {
        console.log('Your story was only ' + tellMeAStory.length + ' characters long. I heard every word. You said: ' + tellMeAStory);
    }
    

//5. Using the same long message (without making user type it again), 
//have your program print it to the terminal for the user to read again, 
//but specify from where it will print.

var repeatTheStory = readline.question('Good story, though. I\'d like to repeat it to you, starting from a different character point. Pick a number from 0 to ' + tellMeAStory.length + ': ')
    //I think I'll use slice again in some capacity.  I'm not sure how to hear what number the user picks though
    if ()


    















