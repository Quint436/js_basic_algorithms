/* Number to string */
/* Write a program that takes an array of numbers and replaces
any negative number with the string 'Dojo'.  For example if
array x is initially [-1, -3, 2], after your program is done
that array should be ['Dojo', 'Dojo', 2].  */

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