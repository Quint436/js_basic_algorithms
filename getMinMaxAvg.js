/* Min, Max, Avgerage */
/* Given any array x, say [1, 5, 10, -2], create an algorithm
that prints the maximum number in the array, the minimum value
in the array, and the average of the values in the array.  */

function getMinMaxAvg(arr) {
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
getMinMaxAvg(x);