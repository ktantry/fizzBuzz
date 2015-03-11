var count = 0;
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
}