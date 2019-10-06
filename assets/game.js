
// variables of letter options a-z
var letter =
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//variables for the game
var winCount = 0;
var lossCount = 0
var guessesRemaining = 10;
var guessedLetters = [];

// COMPUTER CHOOSES RANDOM LETTER
var computerChoice = letter[Math.floor(Math.random() * letter.length)];
console.log("CPU'S Letter: " + computerChoice);


//FUNCTIONS OF THE GAME
document.onkeypress = function(event){
    var userChoice = event.key;
    var userLower = userChoice.toLowerCase();
    var regexp = /[a-z]/gi;
    //IF USER'S INPUT IS NOT A LETTER
    if (!regexp.test(userLower)) {
      alert("Please select a letter");
      return guessedLetters;
    }else{
        console.log(userLower);
    }
// USER WINS
    if (computerChoice === userLower){
        alert("WINNER!!! CHICKEN DINNER!!!")
        winCount++;
        guessesRemaining = 10;
        guessedLetters = [];
        computerChoice = letter[Math.floor(Math.random() * letter.length)];
        console.log("CPU'S Letter: " + computerChoice);
    }else{
        guessesRemaining--;
        guessedLetters.push(" " + userChoice + " ");
    }
// IF USER LOSES
    if(guessesRemaining === 0){
        lossCount++;
        alert("Sorry. You've lost! Try again.")
        guessesRemaining = 10;
        guessedLetters = [];
        computerChoice = letter[Math.floor(Math.random() * letter.length)];
        console.log("CPU'S Letter: " + computerChoice);
    }
    document.getElementById("wins").innerHTML = "Wins: " + winCount;
    document.getElementById("loss").innerHTML = "Losses: " + lossCount;
    document.getElementById("guesses").innerHTML = "Guesses: " + guessesRemaining;
    document.getElementById("guessedLetters").innerHTML = "Your Guesses Letters: " + guessedLetters;

}
