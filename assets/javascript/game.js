var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var wrongLetter = [];

// * Computer randomly chooses letter
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerLetter);

function resetGame() {
    wrongLetter = [];
}

// 1. User makes keystroke
document.onkeyup = function(event) {
    var userLetter = String.fromCharCode(event.keyCode);
   
    console.log(userLetter.toLowerCase() === computerLetter);
    
    // If userkey === computerkey
    if (userLetter.toLowerCase() === computerLetter) {
        
        // Increase wins by 1
        wins++;
        document.getElementById('wins').textContent = wins;  
        guessesLeft = 9;
        resetGame()

        // Reset guess letters

        // Reset game
        
    }

    // If userkey !== computerkey
    if (userLetter.toLowerCase() !== computerLetter) {

        // Log userkey in 'guesses' field

        // Decrease guess attempts by 1
        guessesLeft--;
        document.getElementById('guessesLeft').textContent = guessesLeft;

            // As long as guess attempts < 10

                // If that is true - reset to 1

                // If false - increase losses by 1, reset game *

    }

    if (guessesLeft === 0) {
        losses++;    
        document.getElementById('losses').textContent = losses;
        guessesLeft = 9;
        resetGame()
              
    }  

    else {
        wrongLetter.push(userLetter.toLowerCase());
        document.getElementById('guessedLetters').textContent = wrongLetter;
    }
    
};