/* Print Odd Numbers 1 - 255 */
/* Write a function that would print all of the odd numbers from 1 to 255 */

function printOdd(start, end) {
	for(var i = start; i <= end; i+= 2) {
		console.log(i);
	}
}
printOdd(1, 255);