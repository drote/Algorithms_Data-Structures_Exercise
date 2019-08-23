// js implementation of merge sort

function mergeSort(arr) {
	if (arr.length === 1) return arr;
	const midPoint = Math.ceil(arr.length / 2);

	return merge(
		mergeSort(arr.slice(0, midPoint))),
		mergeSort(arr.slice(midPoint))),
	);
}

function merge(arr1, arr2) {
	let combined = [];
	let p1 = 0;
	let p2 = 0;

	while (arr1[p1] && arr2[p2]) {
		if (arr1[p1] < arr2[p2]) {
			combined.push(arr1[p1]);
			p1 += 1;
		} else {
			combined.push(arr2[p2]);
			p2 += 1;
		}
	}

	if (arr1[p1]) combined = [...combined, ...arr1.slice(p1)];
	if (arr2[p2]) combined = [...combined, ...arr2.slice(p2)];

	return combined;
}
