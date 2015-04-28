




function userInput(input1, input2) {

	var input_1 = prompt(input1);
	var input_2 = prompt(input2);
	
	
}



function randomNumber() {
		
	var r_n1 = prompt("Enter a number");
	var r_n2 = prompt("Enter a 2nd number");
	var r_n3 = prompt("Enter a 3rd number");
	
	var math_numbers_1 = Math.floor(Math.random()* r_n1) + 1;
	var math_numbers_2 = Math.floor(Math.random()* r_n2) + 1;
	var math_numbers_3 = Math.floor(Math.random()* r_n3) + 1;
	
	document.write("<h3> You rolled: " + math_numbers_1 + " out of " + r_n1 + "</h3><br>" + "<h3> You rolled: " + math_numbers_2 + " out of " + r_n2 + "</h3><br>" + "<h3> You rolled: " + math_numbers_3  + " out of " + r_n3 +  "</h3>");
															
}

randomNumber();