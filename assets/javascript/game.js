var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var wrongLetter = [];

// * Computer randomly chooses letter
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerLetter);

// 1. User makes keystroke
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userLetter = event.key;

    console.log(userLetter === computerLetter);
    
    // If userkey === computerkey
        if (userLetter === computerLetter) {

        // Increase wins by 1
        wins++;

        // Reset guess letters

        // Reset game
        }

    // If userkey !== computerkey
    else if (userLetter !== computerLetter) {

        // Log userkey in 'guesses' field

        // Decrease guess attempts by 1
        guessesLeft--;
            // As long as guess attempts < 10

                // If that is true - reset to 1

                // If false - increase losses by 1, reset game *

    }

    else {
        console.log(wins);
    
    }

        var html =
          "<h1>The Psychic Game</h1>" + "<br>" +
          "<p>Guess what letter I'm thinking of</p>" + "<br>" +
          "<p>Wins: " + wins + "</p>" + "<br>" +
          "<p>Losses: " + losses + "</p>" + "<br>" +
          "<p>Guess left: " + guessesLeft + "</p>" + "<br>" +
          "<p>Your guesses so far: " + wrongLetter + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

};