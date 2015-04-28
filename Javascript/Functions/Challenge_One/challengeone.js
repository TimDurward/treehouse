/***************************************************************************************************************************************
****************************************************************************************************************************************
****************************************************************************************************************************************
****************************************************************************************************************************************
													Time for a quick challenge.

				take a random number generating function ~ the function needs to accept two values, a lower and an upper value. 
														i.e. 5 & 15, 10 & 20


						Once the function is done, make sure you call it by passing different values.
				You can either display the values using the alert, document.write or console.log functions.
			
****************************************************************************************************************************************
***************************************************************************************************************************************/


//Math.floor(Math.random() * (6 - 1 + 1)) + 1; 

/*

function upperLower(){  
  var min = parseInt(prompt("Type the lowest possible value"));
  var max = parseInt(prompt("Type the highest possible value"));

  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }

  document.write("<p>You chose: <br>" + 
    "lowest number: " + min + "<br>" +
    "highest number: " + max + "<br>" + "</p>");

  return Math.floor(Math.random() * (max - min + 1)) + min;
}



document.write("<p>You rolled a " + upperLower() + ".</p>");

*/

function upperLower() {
	
	var min = parseInt(prompt("type the lowest possible number"));
	var max = parseInt(prompt("Type the highest possible number"));
	
	if (min > max) {
		var temp = min;
		min = max;
		max = temp;
	}
	
	document.write("<p>You chose: <br>" +
				   "Lowest number: " + min + "<br>" +
				   "Highest number: " + max + "<br>" + "</p>");
	
	return Math.floor(Math.random() * (max - min + 1)) + min;
	
}

document.write("<p>You rolled a " + upperLower() + ".</p>");