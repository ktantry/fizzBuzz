var number = prompt('Please enter a number');
number = parseFloat(number);

while (isNaN(number) == true) {
	number = prompt('EXCEPTION: Please enter a valid number');
	number = parseFloat(number);
}

while (number % 1 != 0) {
	number = prompt('EXCEPTION: Please enter a valid number');
	number = parseFloat(number);
}

function fizzbuzz(x) {
	var count = 0;
	while (count < x) {
		count++;
		if (count % 15 == 0) {
			document.write('fizzbuzz\n');
		}
		else if (count % 3 == 0) {
			document.write('fizz\n');
		}
		else {
			document.write(count + '\n');
		}	
	}
}

fizzbuzz(number);

/*fizzbuzz(number);*/
/*var count = 0;
while (count < 100) {
	count++;
	if (count % 15 == 0) {
		document.write('fizzbuzz\n');
	}
	else if (count % 3 == 0) {
		 document.write('fizz\n');
	}
	else if (count % 5 == 0) {
		document.write('buzz\n');
	}
	else {
	document.write(count + '\n');
	}	
}*/