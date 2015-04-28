//Question Remaining Box 

var questionRe3 = 3
var questionRe2 = 2
var questionRe1 = 1
var questionRe0 = 0

var questionsRemaining3 = " [ " + questionRe3 + " Questions Remaining ] "
var questionsRemaining2 = " [ " + questionRe2 + " Questions Remaining ] "
var questionsRemaining1 = " [ " + questionRe1 + " Question Remaining ] "
var questionsRemaining0 = " [ " + questionRe0 + " Questions Remaining ] "

//Questions to be asked

var question_1 = prompt("What is your favorite color?" + questionsRemaining3);
var question_2 = prompt("How many fingers do you have?" + questionsRemaining2);
var question_3 = prompt("What is your favorite number?" + questionsRemaining1);
var question_4 = prompt("How many toes do you have?" + questionsRemaining0);


//Answered number questions changed into Integers

var answer_2 = parseInt(question_2);
var answer_3 = parseInt(question_3);
var answer_4 = parseInt(question_4);


//Math Random Favorite Number 

var FavoriteNumber = Math.floor(Math.random() * 10);


//Final outcome 


alert("Thank you for answering all the questions!");
document.write("<br>Your favorite color is: " + question_1 + ". Mine is Yellow!");
document.write("<br>You have " + answer_2 + " fingers...Weird, I have 11?");
document.write("<br>Your Favorite number is: " + answer_3 + "...Boo, that's a boring number! Mine is: " + FavoriteNumber);
document.write("<br>You have " + answer_4 + " toes...yuck. That's too many!");

