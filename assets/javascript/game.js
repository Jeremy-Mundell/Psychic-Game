

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
//this variable is the letter the user pics

// here we take a letter in the "letters" array and it gets chosen randomly by multiplying it by the math.random function and subsequently is rounded down by the math.floor function
// the letter is stored in the variable "computer.Guess"
var computerGuess = letters[Math.floor(Math.random()*letters.length)];
	console.log("Wins: " + wins + "Losses: " + losses + "guessLeft: " + guessLeft + "guessSoFar" + guessSoFar + "pcGuess" + computerGuess);

//computer listens for key input
document.onkeyup = function(event) {

//here the input is converted to lower case just in "case" the input in capitalized to avoid error
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//here the users guess is added to the guessSoFar empty array.

if (guessesSoFar.indexOf(userGuess)<0 && letters.indexOf(userGuess)>=0){
	guessesSoFar[guessesSoFar.lenth]=userGuess; 
	guessLeft--; //decrease guess by 1
}

//if the users guess is the same as the computer's guess then it is logged as a win and the game is reset.

if (computerGuess==userGuess) {
	wins++;
	console.log("You guessed correctly!");//indicates you won
	guessLeft = 9; //resets guesses left to 9
	guessesSoFar = []; //resets the variable set to empty
	computerGuess = letters[Math.floor(Math.random()*letters.length)]; //picks a new letter for the next round.


	console.log("Wins: " + wins + "Losses: " + losses + "guessLeft: " + guessLeft + "guessSoFar" + guessSoFar + "pcGuess" + computerGuess);
}


if (guessLeft == 0) { //if guessLeft = 0 it is recorded as a loss
	losses++; //increase losses by 1
	console.log("You have lost!"); //write to console You have lost!
	guessLeft=9; //reset guessLeft to 9
	guessesSoFar=[] //resets variable set to empty
	computerGuess = letters[Math.floor(Math.random()*letters.length)]; //picks a new letter for the next round.

console.log("Wins: " + wins + "Losses: " + losses + "guessLeft: " + guessLeft + "guessesSoFar: " guessesSoFar +"pcGuess" + computerGuess);
}


// sends game info to the HTML page

var html = "<p><h1> The Psychic Game</h1></p>"  + "<p><h4> Guess the letter I am thinking of??</h4></p>"
+ "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>guessLeft: " + guessLeft + "</h4></p>"
"<p><h4>guessesSoFar: " + guessesSoFar + "</h4></p>";



document.querySelector("#game").innerHTML = html;


}















				
