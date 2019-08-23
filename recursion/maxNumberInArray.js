// recursive maxNum

function maxNumHelp(arr, l, h) {
	if (l === h) return arr[l];

	let mid = Math.floor((l + h) / 2);

	return reduce(
		maxNumHelp(arr, l, mid),
		maxNumHelp(arr, mid + 1, h)
	);
}

function maxNumberInArr(arr) {
	return maxNumHelp(arr, 0, arr.length - 1);
}
