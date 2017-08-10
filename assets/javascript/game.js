





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
//this variable is the letter the user picks

// here we take a letter in the "letters" array and it gets chosen randomly by multiplying it by the math.random function and subsequently is rounded down by the math.floor function
// the letter is stored in the variable "computer.Guess"
var computerGuess = letters[Math.floor(Math.random()*letters.length)];

	console.log("Wins: " + wins + "Losses: " + losses + "GuessLeft: " + guessLeft + "GuessSoFar: " + userGuess + "computerPick: " + computerGuess);

//computer listens for key input
document.onkeyup = function(event) {

//here the input is converted to lower case just in "case" the input is capitalized to avoid error
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// guessSoFar.push(" " + userGuess);
// //here the user's guess is added to the guessSoFar empty array.

if (guessSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0){
	guessSoFar[guessSoFar.lenth]=userGuess; 
	guessLeft--; //new letter to decrease guess by 1, only letter not numbers or symbols count towards guess.
}

//if the users guess is the same as the computer's guess then it is logged as a win and the game is reset.

if (computerGuess==userGuess) {
	alert("You guessed correctly!");//indicates you won
	wins++;
	
	guessLeft = 9; //resets guesses left to 9
	guessSoFar = []; //resets the variable set to empty
	computerGuess = letters[Math.floor(Math.random()*letters.length)]; //picks a new letter for the next round.


	console.log("Wins: " + wins + "Losses: " + losses + "guessLeft: " + guessLeft + "GuessSoFar: " + userGuess + "computerPick: " + computerGuess);
}


if (guessLeft == 0) { //if guessLeft = 0 it is recorded as a loss
	alert("I saw this coming...You have lost this round!"); //write to console You have lost!
	losses++; //increase losses by 1
	
	guessLeft=9; //reset guessLeft to 9
	guessSoFar=[]; //resets variable set to empty
	computerGuess = letters[Math.floor(Math.random()*letters.length)]; //picks a new letter for the next round.

	console.log("Wins: " + wins + "Losses: " + losses + "guessLeft: " + guessLeft + "GuessSoFar: " + userGuess + "computerPick: " + computerGuess);
}
	
	guessSoFar.push(" " + userGuess);


	var html = "<p><h1> The Psychic Game</h1></p>" + 
	"<p><h4>Welcome...Can you guess what letter I am thinking of?</h4></p>" +
	 "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + 
	 "<p><h4>Guesses Left: " + guessLeft + "</h4></p>" + "<p><h4>Your guesses so far: " +
	  guessSoFar +"</h4></p>";

	document.querySelector("#game").innerHTML = html;

}










