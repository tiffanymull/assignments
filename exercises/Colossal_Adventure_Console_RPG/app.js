var readline = require('readline-sync')

// var isAlive = true;

//these objects are blueprints that must be instantiated in the actual code you are playing
var player = {
    health: 100,
    inventory: ['pocket knife', 'circus ticket'],
}

var clown = {
    health: 20,
    inventory: ['butcher knife']
}

var acrobaticDuo = {
    health: 15,
    inventory: ['length of tightrope']
}

var ringmaster = {
    health: 20,
    inventory: ['baton']
}

function encounter(aggressor){         //<--The clown, ringmaster, or acro pass through aggressor. It remembers which it is.
    var chanceOfEscape = 1;
    while((player1.health > 0 && aggressor.health > 0) && chanceOfEscape === 1){
      var action = readline.keyIn('Would you like to [r] run or [f] fight? ', {limit: '$<rf>'});
      if(action === 'r'){
        chanceOfEscape = Math.floor(Math.random()*2)
        if(chanceOfEscape === 0){
            console.log("You got away. ")
        } else if(chanceOfEscape === 1){
            var playerDamage = Math.floor(Math.random()*9 + 1); //<--only variable need playerDamage if you want to say how much damage they did 
            player1.health = player1.health - playerDamage; //<--otherwise could replace playerDamage with Math.etc.
            console.log('You can\'t get away and the enemy attacked you. You now have ' + player1.health + ' health points left. ')

        }
      }else if(action === 'f'){
        var aggressorDamage = Math.floor(Math.random()*9 + 1);
        aggressor.health = aggressor.health - aggressorDamage;
        console.log('You sliced him! He now has ' + aggressor.health + ' health points left. ');

        var playerDamage = Math.floor(Math.random()*9 + 1);
        player1.health = player1.health - playerDamage;  //<-- must have equals when change things
        console.log('He hurt you! You now have ' + player1.health + ' health points left. ');
        
      }
    }if(aggressor.health <= 0){
        player1.inventory.push(aggressor.inventory);  //<--must put .join where you check player inventory to incorporate this.
        console.log('Nicely done! You gained your enemy\'s possession. Check your inventory to see what it is. ')
    }
}

function whoAttacks(){
    var badGuy = Math.floor(Math.random()*3)
      if(badGuy === 0){
          console.log("In the dark behind the big top, there is a heavy smell of alcohol. It's a clown! As he approaches, you see the red around his mouth isn't paint; it's coagulated blood. ")
          var clown1 = Object.create(clown);
          encounter(clown1);
      }else if(badGuy === 1){
          console.log("You enter the big top. Suddenly, an acrobatic duo drops from above. They try to strangle you with a length of tightrope. ")
          var acrobaticDuo1 = Object.create(acrobaticDuo); //<--given life, mutability when instantiated
          encounter(acrobaticDuo1);
      }else if(badGuy === 2){
          console.log("You walk down a line of carnival booths. A ringmaster with tattered coattails jumps out at you, swinging a baton. ")
          var ringmaster1 = Object.create(ringmaster);
          encounter(ringmaster1);
      }
}

function walk(){
    var chanceOfAttack = Math.floor(Math.random()*4) //<--0-3
    // console.log(chanceOfAttack);
    if(chanceOfAttack === 3){
        console.log("Uh-oh.")
        whoAttacks();
    } else {
        console.log('Nothing has happened yet.')
    } //I need this to loop back to choose to explore w, though
}

var playerName = readline.question('You\'re going to the circus! Bright lights, acrobats, and clowns. Color and candy and peanut shells. What\'s your name? ')
    // console.log('Okay, ' + playerName + ', hit enter to enter the grounds.')

var player1 = Object.create(player);  //<--Must instantiate objects to make real.


while(player1.health > 0) {

    var choose = readline.keyIn('Well, ' + playerName + ', The circus is eerily empty and quiet. Press [w] to walk and explore or [p] to check inventory and health. ', {limit: '$<wp>'});
      if (choose === 'w') {
          walk();
      } else {
          console.log(player1.inventory.join(', '));
          console.log(player1.health);
      }


} //<--while playerhealth > 0

console.log('Well, shucks, ' + playerName + ', you died all alone in a creepy circus.')
