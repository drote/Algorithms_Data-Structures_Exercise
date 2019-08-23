// js implementation of insertion sort

function insertionSort(arr) {
	let lift;

	for (let i = 1; i < arr.length; i += 1) {
		lift = arr[i];

		for (let j = i - 1; j >= 0; j -= 1) {
			if (arr[j] <= lift) {
				arr[j + 1] = lift;
				break;
			}
			
			arr[j + 1] = arr[j];

			if (j === 0) {
				arr[j] = lift;
			}
		}
	}

	return arr;
}
