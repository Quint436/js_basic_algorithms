/* Print Sum */
/* Write a function that prints the numbers from 0 to 255 and
the sum of the numbers that have been printed so far. */

function printSum(start, end) {
	var sum = 0;
	for(var i = start; i <= end; i++) {
		sum+= i;
		console.log("New number: "+i+" Sum: "+sum);
	}
}
printSum(0, 255);