/*
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
*/

/*
var playlist = [
  'Eminem',
  'RHCP',
  'Adelle',
  'Bon Jovi',
  'Fly Away',
  'SOSA',
  'Biggy Booty Bitches'
];

function print(message){
  document.write(message);
}

function printList(list){
  var listHTML = "<ol>";
  for (var i; i < list.length; i += 1){
  listHTML += "<li>" + list[i] + "</li>";
  }
  
  listHTML += "</ol>";
  print(listHTML);
  }


printList(playlist);

*/

var favNums = [];

var favNums1 = parseInt(prompt("Type your Favorite Numbers"));
												
var favNums2 = parseInt(prompt("Type your Favorite Numbers"));

var favNums3 = parseInt(prompt("Type your Favorite Numbers"));

var favNums4 = parseInt(prompt("Type your Favorite Numbers"));	

favNums.push(favNums1, favNums2, favNums3, favNums4);

console.log(favNums);
									