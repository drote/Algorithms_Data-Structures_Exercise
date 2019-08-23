// Given an array of integers nums sorted in ascending order, 
// find the starting and ending position of a given target value.

function recursiveLoRangeBinaryHelper(arr, l, h, target) {
	const mid = Math.floor((l + h) / 2);

	if (arr[mid] === target && arr[mid - 1] !== target) {
		return mid;
	} else if (l >= h) {
		return -1;
	} else if (arr[mid] >= target) {
		return recursiveLoRangeBinaryHelper(arr, l, mid, target);
	} else {
		return recursiveLoRangeBinaryHelper(arr, mid + 1, h, target)
	}
}

function recursiveHiRangeBinaryHelper(arr, l, h, target) {
	const mid = Math.floor((l + h) / 2);

	if (arr[mid] === target && arr[mid + 1] !== target) {
		return mid;
	} else if (l >= h) {
		return -1;
	} else if (arr[mid] <= target) {
		return recursiveHiRangeBinaryHelper(arr, mid + 1, h, target)
	} else {
		return recursiveHiRangeBinaryHelper(arr, l, mid, target);
	}
}

function recursiveRangeBinary(arr, target) {
	const rangeStart = recursiveLoRangeBinaryHelper(arr, 0, arr.length - 1, target);

	if (rangeStart === -1) return [-1, -1];

	const rangeEnd = recursiveHiRangeBinaryHelper(arr, 0, arr.length - 1, target);

	return [rangeStart, rangeEnd];
}
