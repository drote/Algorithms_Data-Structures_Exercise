// Recursive implementation of binary search

function recursiveBinaryHelper(arr, l, h, target) {
	const mid = Math.floor((l + h) / 2);

	if (arr[mid] === target) {
		return mid;
	} else if (l >= h) {
		return -1;
	} else if (arr[mid] > target) {
		return recursiveBinaryHelper(arr, l, mid, target);
	} else {
		return recursiveBinaryHelper(arr, mid + 1, h, target)
	}
}

function recursiveBinary(arr, target) {
	return recursiveBinaryHelper(arr, 0, arr.length - 1, target);	
}
