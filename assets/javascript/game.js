

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// options for the choosing within an array
// these are the scoring variables
var wins = 0;
var losses = 0;
var guesses = 0;
var guessLeft = 9;
var guessSoFar = [];
// guess so far is where we are storing the users choice in the round
var userGuess = null;
//this variabel is the letter the user pics

// here we take a letter in the "letters" array and it gets chosen randomly by multiplying it by the math.random function and subsequently is rounded down by the math.floor function
// the letter is stored in the variable computer.Guess
var computerGuess = letters[Math.floor(Math.random()*letters.length)];
	console.log("Wins: " + wins + "Losses: " + losses + "guessLeft: " + guessLeft + "guessSoFar" + guessSoFar + "computerGuess: ")


document.onkeyup = function(event) {
//listen for key input
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

}
// next guesses are limited by 9

var updateGuessesLeft = function() {

	document.querySelector("#guessLeft").innerHTML = + guessLeft;
};
 

var updateLetterToGuess = function() {
	this.letterToGuess = this.options[Math.floor(Math.random()*this.options.length)];
};

// here the letters guessed are pushed to the screen
var updateGuessesMade = function() {
	document.querySelector("#letter").innerHTML = "Guess so far: " + guessesSoFar.join(', ');


};

// reset everything when guesses reach 9
var reset = function() {
	totalGuess = 9;
	guessLeft = 9;
	guessSoFar = [];


	updateGuessesMade();
	updateGuessesLeft();
	updateLetterToGuess();
}

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function(event) {
// detects which key was pressed on up release assigns it as a function
guessLeft--;
var userguess = String.fromCharCode(event.keyCode).toLowerCase();
// takes the letter you have chosen and has made it lowercase 
		
		guessedletter.push(userguess);
		updateGuessLeft();
		updateGuessLeft();


 // next we are to create the conditionals for the game's rule structure.

				if (guessLeft > 0) {
					if (userguess == letterToGuess){
						wins++;
						document.querySelector("#wins").innerHTML = "wins: " + wins;
						alert("You are a psychic!!!");
						reset();
					}
				} else if { guessLeft == 0} {
					losses++;
					document.querySelector("#losses").innerHTML = "losses: " + losses;
					alert("Sorry bro, you are no psychic. Try again.");
					reset();
				}


				
