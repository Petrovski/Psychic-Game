
var wins = 0;
var losses = 0;
var userLives = 9;
var userGuesses = [];
var cpuGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "w", "x", "y", "z"];
var winningGuesses = document.getElementById("winning-guesses");
var losingGuesses = document.getElementById("losing-guesses");
var guessesLeft = document.getElementById("guesses-left");
var userGuessId = document.getElementById("guesses-guessed");


    // Generate computer guess from the cpuGuesses array
    function generateCpuGuess() {
        cpuGuess = cpuGuesses[Math.floor(Math.random() * cpuGuesses.length)];
    } 
    generateCpuGuess();

    // Fucntion for whenever the user presses a key
    document.onkeyup = keyUp;

        function keyUp(event) {

        // Assign a variable to the key that was pressed by the user

        var userGuess = event.key;

        // Check to see who wins the games, how many lives you have left, or if you lose the game.

        if (userGuess === cpuGuess) {
            wins++;
            console.log("you win!");
            gameReset();
            alert("GREAT JOB!!! YOU GUESSED THE RIGHT KEY!")
        }

        if (userGuess != cpuGuess) {
            userLives--;
            userGuesses.push(userGuess);
            console.log("Ouch! You lost a life!");
        }

        if (userLives === 0) {
            losses++;
            console.log("YOU LOSE!!")
            gameReset();
        }


    };


    // Create a function to reset the game when win condition is met
    function gameReset() {
        cpuGuess = cpuGuesses[Math.floor(Math.random() * cpuGuesses.length)];
        console.log("Resetting the game...");
        userLives = 9;
    }
    
    