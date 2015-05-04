
// Simple Array
var shoppingList = ['eggs', 'pants', 'candy'];


// Adding (Pushing/Shifting) Arrays
var playlist = [];

playlist.push('I did it my way');
playlist.push('Eminem');
playlist.unshift('this should be first');

//Removing Arrays

var shoppingList = ['eggs', 'pants', 'candy'];

//Removing 'eggs' .shift() = first index
shoppingList.shift(0);

//Removing 'candy' .pop() = last index
shoppingList.pop(2);




var favNums = [];
var favNames = [];

var favNums1 = parseInt(prompt("Type your Favorite Numbers"));
var favNums2 = parseInt(prompt("Type your Favorite Numbers"));
var favNums3 = parseInt(prompt("Type your Favorite Numbers"));
var favNums4 = parseInt(prompt("Type your Favorite Numbers"));	

favNums.push(favNums1, favNums2, favNums3, favNums4);

var favNames1 = prompt("Type your Favorite Names");
var favNames2 = prompt("Type your Favorite Names");
var favNames3 = prompt("Type your Favorite Names");
var favNames4 = prompt("Type your Favorite Names");

favNames.push(favNames1, favNames2, favNames3, favNames4);

var allArrays = favNums.concat(favNames);

console.log(allArrays);



									