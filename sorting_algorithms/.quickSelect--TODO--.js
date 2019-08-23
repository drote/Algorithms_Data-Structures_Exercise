function partition(arr, l, r) {
	let piv = r;
	let swap;
	r -= 1;

	while (true) {
		while (arr[l] < arr[piv]) {
			l += 1;
		}

		while (arr[r] > arr[piv]) {
			r -= 1;
		}

		if (arr[r] === arr[l]) {
			l += 1;
		}

		if (l >= r) {
			break;
		}s

		swap = arr[l];
		arr[l] = arr[r];
		arr[r] = swap;
	}

	swap = arr[piv];
	arr[piv] = arr[l];
	arr[l] = swap;

	return l;
}

function helper(arr, l, r, k) {
	if (r - l <= 0) return arr[arr.length - k];

	let piv = partition(arr, l, r);

	if (piv + 1 === arr.length - k) {
		return arr[piv];
	} else if (piv < arr.length - k) {
		return helper(arr, piv + 1, r, k);
	}	else {
		return helper(arr, l, piv - 1, k);
	}
}

function quickSelect(arr, k) {
	return helper(arr, 0, arr.length - 1, k);
}

console.log(quickSelect([1, 4, 6, 3, 2, 8, 0], 1))