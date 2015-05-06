var mathGuess = Math.floor(Math.random()* 10) + 1;
var gNums = [];
var userGuess;
var i = 0;





while(i < 5){
   userGuess = parseInt(prompt("Guess the number from 1 - 10. You have 5 Chances."));
    
   if (userGuess !== mathGuess && userGuess !== NaN){
       i+=1;
   } else if (userGuess === mathGuess){
       document.write("<h1> You got it muthafucka!</h1>");
       break;
   }

}
if (i === 5){
document.write("<h1> You lost</h1><br><h2>The Number was: " + mathGuess);
}