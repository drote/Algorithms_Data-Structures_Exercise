// recursive subarray with largest sum 

function maxCrossingSum(arr, l, m, h) {
	let sm = 0;
	let left_sum = -Infinity;
	let right_sum = -Infinity;

	for (let i = m - 1; i >= 0; i -= 1) {
		sm += arr[i];
		if (sm > left_sum) {
			left_sum = sm;
		}
	}

	for (i = m, sm = 0; i < arr.length; i += 1) {
		sm += arr[i];
		if (sm > right_sum) {
			right_sum = sm;
		}
	}

	return right_sum + left_sum;
}

function maxSizeHelp(arr, l, h) {
	if (l === h) return arr[l];

	const m = Math.floor((l + h) / 2);

	return Math.max(
		maxSizeSubArr(arr, l, m),
		maxSizeSubArr(arr, m + 1, h),
		maxCrossingSum(arr, l, m, h)
	);
}

function maxSizeSubArr(arr) {
	return maxSizeHelp(arr, 0, arr.length - 1);
}
