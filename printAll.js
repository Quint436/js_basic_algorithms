/* Print 1 - 255 */
/* Write a function that would print all of the numbers from 1 to 255 */

/* Using a for loop */
function printAll(start, end) {
	for(var i = start; i <= end; i++) {
		console.log(i);
	}
}
printAll(1, 255);

/* Using a while loop */
function printEvery(start, end) {
	var k = start;
	while(k <= end) {
		console.log(k);
		k++;
	}
}
printEvery(1, 5);