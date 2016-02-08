/* Shifting the values in the array */
/* Given any array x, say [1, 5, 10, 7, -2], create an algorithm
that shifts each number by one to the front.  For example, when
the program is done, an x of [1, 5, 10, 7, -2] should become [5, 10, 7, -2, 0].  */

function shiftVal(arr) {
	var min = arr[0];
	var max = arr[0];
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum+= arr[i];
		if(min > arr[i]) {
			min = arr[i];
		}
		if(max < arr[i]) {
			max = arr[i];
		}
	}
	var avg = sum/arr.length;
	console.log("Min: "+min+" Max: "+max+" Avg: "+avg);
}
x = [1, 5, 10, -2];
shiftVal(x);