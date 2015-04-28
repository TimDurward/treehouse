/***************************************************************************************************************************
****************************************************************************************************************************
****************************************************************************************************************************
****************************************************************************************************************************


Ready for a challenge?

For this challenge, write a simple quiz application.

First, it has to ask at least five questions.

Second, keep track of the number of questions the user answered correctly.

Third, provide a final message after the quiz letting the user know the number of questions he or she got right.

fourth, rank the player.

If the player answered all five correctly, give that player the gold crown.

Three to four is a silver crown.

One to two correct answers is a bronze crown.

And zero correct is no crown at all.


//Questions
var question1 = prompt("How many sides does an equilateral Square have?");
var question2 = prompt("If walked 10 ft, ran 15 ft and jumped 5ft. How many feet in total would I have moved?");
var question3 = prompt("How old is your boyfriend?");
var question4 = prompt("What color does Blue & Red combined make?");
var question5 = prompt("What's fun to chew & has all the colors of the rainbow!?");

***************************************************************************************************************************
***************************************************************************************************************************
***************************************************************************************************************************
***************************************************************************************************************************/

//
////Questions
//var question1 = "How many sides does an equilateral Square have?";
//var question2 = "If walked 10 ft, ran 15 ft and jumped 5ft. How many feet in total would I have moved?";
//var question3 = "How old is your boyfriend?";
//var question4 = "What color does Blue & Red combined make?";
//var question5 = "What's fun to chew & has all the colors of the rainbow!?";
//
//// Answers
//var answer1 = 4;
//var answer2 = 30;
//var answer3 = 21;
//var answer4 = "Purple";
//var answer5 = "Gum";
//
//var quiz1 = prompt(question1);
//if (parseInt(quiz1) === answer1 || quiz1.toUpperCase() === "FOUR" ) {
//	alert("Very nice! That is correct.");
//} else {
//	alert("You're wrong");
//}
//
//if ()
//

var correct = 0

var answer1 = prompt("How many sides does an equilateral Square have?");
if (parseInt(answer1) === 4 || answer1.toUpperCase() === "FOUR" ) {
	alert("Correct. Carry on to the next question!");
correct +=1
} else {
	alert("You suck. Try the next question...Ugh.");
}

var answer2 = prompt("If you walked 10 ft, ran 15 ft and jumped 5ft. How many feet in total would I have moved?");
if (parseInt(answer2) === 30 || answer2.toUpperCase() === "THIRTY"  ){
	alert("Correct. Carry on to the next question!");
correct +=1
}else {
	alert("You suck. Try the next question...Ugh.");
}

var answer3 = prompt("How old is your boyfriend?");
if (parseInt(answer3) === 21 || answer3.toUpperCase() === "TWENTY ONE"  ) {
	alert("Correct. Carry on to the next question!");
correct +=1
}else {
	alert("You suck. Try the next question...Ugh.");
}

var answer4 = prompt("What color does Blue & Red combined make?");
if (answer4.toUpperCase() === "PURPLE" ) {
	alert("Correct. Carry on to the next question!");
correct +=1
}else {
	alert("You suck. Try the next question...Ugh.");
}

var answer5 = prompt("What's fun to chew & has all the colors of the rainbow!?");
if (answer5.toUpperCase() === "GUM" || answer5.toUpperCase() === "BUBBLEGUM" || answer5.toUpperCase() === "GUM BALLS") {
	alert("Correct. Take a look at your at your status!");
correct +=1
}else {
	alert("You suck. Check your Crown status.");
}

document.write("<h1> You got " + correct + " out of 5 questions correct!</h1>");

if (correct ===5 ) {
	document.write("<h1>You earned a Gold crown!</h1>" + "<br>" + '<img src="http://www.clker.com/cliparts/g/p/b/r/9/D/yellow-gold-crown-hi.png"');
} else if ( correct > 3) { 
	document.write("<h1>You earned a Silver crown!</h1>");
} else if ( correct > 2) {
	document.write("<h1>You earned a bronze crown!</h1>");
} else {
	document.write("<h1>You earned no crown. Because you suck!</h1>" + "<br>" + '<img src="http://www.reactiongifs.com/r/goys.gif"');
}






















































