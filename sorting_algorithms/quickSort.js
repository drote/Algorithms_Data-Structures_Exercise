// js implementation of quick sort

function partition(arr, left, right) {
	let piv = right;
	right -= 1;
	let swap;

	while (true) {
		while (arr[left] < arr[piv]) {
			left += 1;
		} 

		while (arr[right] > arr[piv]) {
			right -= 1;
		} 

		if (left >= right) {
			break;
		}

		swap = arr[right];
		arr[right] = arr[left];
		arr[left] = swap;
	}

	swap = arr[piv];
	arr[piv] = arr[left];
	arr[left] = swap;

	return left;
}

function helper(arr, left, right) {
	if (right - left <= 0) return;

	const piv = partition(arr, left, right);

	helper(arr, left, piv - 1);
	helper(arr, piv + 1, right);
}

function quicksort(arr) {
	helper(arr, 0, arr.length - 1);
	return arr;
}
