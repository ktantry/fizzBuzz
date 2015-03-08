var count = 0;
while (count < 100) {
	count++;
	if (count % 3 == 0) {
		 document.write('fizz\n');
	}
	else if (count % 5 == 0) {
		document.write('buzz\n');
	}
	else {
	document.write(count + '\n');
	}	
}