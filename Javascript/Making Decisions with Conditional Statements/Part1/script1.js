var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("Guess a number between 1 - 6. See if you get it right!");

if (parseInt(guess) === randomNumber) { 
	correctGuess = true;
}

if (correctGuess) { 
	document.write("<h1> Well done, that is correct!</h1>");
} else {
	document.write("<p> That is so bad I would like to slowly walk away. The correct number is " + randomNumber
				   + " ...Better luck next time </p>");
					
}
