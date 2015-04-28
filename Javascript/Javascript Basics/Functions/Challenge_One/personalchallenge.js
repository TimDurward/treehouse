function compHand() {
  var randomHand = Math.floor(Math.random() * 3) + 1;
  var compRock = "ROCK";
  var compPaper = "PAPER";
  var compScissors = "SCISSORS";
  if (randomHand === 1) {
    return compRock;
  }
  if (randomHand === 2) {
    return compPaper;
  }
  if (randomHand === 3) {
    return compScissors;
  }
}

function playerHand() {
  var playerWin = "You Win";
  var compWin = "You Lose";
  var playerTie = "You Tie";
  var comp = compHand();
  if (playerChoice.toUpperCase() === "ROCK" && comp === "SCISSORS") {
    playerScore += 1
    return playerWin
  } else if (playerChoice.toUpperCase() === "PAPER" && comp === "ROCK") {
    playerScore += 1
    return playerWin
  } else if (playerChoice.toUpperCase() === "SCISSORS" && comp === "PAPER") {
    playerScore += 1
    return playerWin
  } else if (playerChoice.toUpperCase() === "ROCK" && comp === "PAPER") {
    compScore += 1
    return compWin
  } else if (playerChoice.toUpperCase() === "PAPER" && comp === "SCISSORS") {
    compScore += 1
    return compWin
  } else if (playerChoice.toUpperCase() === "SCISSORS" && comp === "ROCK") {
    compScore += 1
    return compWin
  } else if (playerChoice.toUpperCase() === "SCISSORS" && comp === "SCISSORS") {
    return playerTie
  } else if (playerChoice.toUpperCase() === "ROCK" && comp === "ROCK") {
    return playerTie
  } else if (playerChoice.toUpperCase() === "PAPER" && comp === "PAPER") {
    return playerTie
  } else {
    return ("Something isn't quite working");
  }
}
var playerScore = 0;
var compScore = 0;
var playerName = prompt("Welcome to | ROCK | PAPER | SCISSORS | Please enter your name to begin");
alert("Best out of Three");
var playerChoice = prompt("Please Choose a hand: Rock, Paper, or Scissors");
alert(playerHand());
var playerChoice = prompt("Please Choose a hand: Rock, Paper, or Scissors");
alert(playerHand());
var playerChoice = prompt("Please Choose a hand: Rock, Paper, or Scissors");
alert(playerHand());
console.log("Computer Score: " + compScore);
console.log("Player Score: " + playerScore);
if (playerScore > compScore) {
  document.write("<h3>" + playerName + " Wins </h3><br><h2>You Score: " + playerScore + "!</h2>" + "<br>" + "<h2>Computer Score: " + compScore + "!</h2>")
} else if (playerScore < compScore) {
  document.write("<h3>" + playerName + " Lost </h3><br><h2>You Score: " + playerScore + "!</h2>" + "<br>" + "<h2>Computer Score: " + compScore + "!</h2>")
} else if (playerScore === compScore) {
  document.write("<h3>" + playerName + " Ties! </h3><br><h2>You Score: " + playerScore + "!</h2>" + "<br>" + "<h2>Computer Score: " + compScore + "!</h2>")
}