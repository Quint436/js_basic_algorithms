/* Greater Than Y */
/* Write a program that takes an array and returns the number of
values in that array whose value is greater than a given value y.
For example if array = [1, 3, 5, 7] and y = 3, after your program
is run it will print 2 (since there are two values in the array
that are greater than 3). */

function greaterThan(arr, y) {
	var count = 0;
	for(var i = 0; i <= arr.length; i++) {
		if(arr[i] > y) {
			count++;
		}
	}
	console.log(count);
}
x = [1, 3, 5, 7];
greaterThan(x, 3);