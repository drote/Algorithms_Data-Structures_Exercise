// JS implementation of count sort

function countSort(arr) {
	let count = new Array(10).fill(0, 0, 10);
	let sorted = new Array(arr.length);
	let num;
	let idx;

	for (let i = 0; i < arr.length; i += 1) {
		count[arr[i]] += 1;;
	}

	for (i = 1; i < count.length; i += 1) {
		count[i] = count[i] + count[i - 1];
	}

	count.unshift(0);

	for (i = 0; i < arr.length; i += 1) {
		num = arr[i];
		idx = count[num - 1];
		count[num - 1] += 1;
		sorted[idx] = num;
	}

	return sorted;
}
