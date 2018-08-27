var wins = 0;
var losses = 0;
var userGuesses = [];
var cpuGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "w", "x", "y", "z"];
var winningGuesses = document.getElementById("winning-guesses");
var losingGuesses = document.getElementById("losing-guesses");
var guessesLeft = document.getElementById("guesses-left");
var userGuessId = document.getElementById("guesses");




// Fucntion for whenever the user presses a key
document.onkeyup = function(event) {

    
    // The key that was pressed by the user
    userGuess = event.key;
    console.log(event);

    // Generate computer guess from the cpuGuesses array
    cpuGuess = cpuGuesses[Math.floor(Math.random() * cpuGuesses.length)];



}