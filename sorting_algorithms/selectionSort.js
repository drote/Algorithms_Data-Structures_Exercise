// js implementation of selection sort

function selectionSort(arr) {
	let swapper;

	for (let i = 0; i < arr.length; i += 1) {
		let smallest = i;

		for (let j = i + 1; j < arr.length; j += 1) {
			if (arr[j] < arr[smallest]) {
				smallest = j;
			}
		}

		swapper = arr[i];
		arr[i] = arr[smallest];
		arr[smallest] = swapper;
	}

	return arr;
}
