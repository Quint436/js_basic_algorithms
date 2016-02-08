/* Find Max */
/* Write a function that takes any array and prints the maximum value in the array.
Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]),
or even a mix of positive numbers, negative numbers and zero. */

function findMax(arr) {
	var max = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if(max < arr[i]) {
			max = arr[i];
		}
	}
	console.log(max);
}
x = [-3, 5, -7, 9, 0, 2, -15];
findMax(x);