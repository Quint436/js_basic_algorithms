/* Eliminate Negative Numbers */
/* Given any array x, say [1, 5, 10, -2], create an algorithm
that replaces any negative number with the value of 0.
When the program is done, x should have no negative values, say [1, 5, 10, 0]. */

function noNegatives(arr) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] < 0) {
			arr[i] = 0;
		}
	}
	console.log(arr);
}
x = [1, -5, 10, -2];
noNegatives(x);