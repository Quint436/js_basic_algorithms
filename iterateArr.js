/* Iterate through an Array */
/* Given an array X, write a function that would iterate through
each member of the array and print each value on the screen. */

function iterateArr(arr) {
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
x = [1,3,5,7,9,13];
iterateArr(x);