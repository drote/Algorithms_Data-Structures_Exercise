// js implementation of bubble sort

function bubbleSort(arr) {
	let swapped = true;
	let swap;

	while (swapped) {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i += 1) {
			if (arr[i] > arr[i + 1]) {
				swap = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = swap;
				swapped = true;
			}
		}
	}

	return arr;
}
