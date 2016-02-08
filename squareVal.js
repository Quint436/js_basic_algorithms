/* Square the Values */
/* Given any array x, say [1, 5, 10, -2], create an algorithm that multiplies
each value in the array by itself.  When the program is done, the array x should
have values that have been squared, say [1, 25, 100, 4]. */

function squareVal(arr) {
	for(var i = 0; i < arr.length; i++) {
		arr[i] = arr[i]*arr[i];
	}
	console.log(arr);
}
x = [1, 3, 5, 7];
squareVal(x);