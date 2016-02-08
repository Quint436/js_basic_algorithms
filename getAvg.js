/* Get Average */
/* Write a function that takes an array, and prints the average of the values in the array.
For example for an array [2, 10, 3], your program should print an average of 5.
Again, make sure you come up with a simple base case and write instructions to solve that base case first,
then test your instructions for other complicated cases. */

function getAvg(arr) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum+= arr[i];
	}
	var avg = sum/arr.length;
	console.log(avg);
}
x = [2, 10, 3];
getAvg(x);