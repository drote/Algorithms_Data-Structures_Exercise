// js implementation of radix sort

function countSortByDig(arr, place) {
	let count = new Array(10).fill(0, 0, 10);
	let sorted = new Array(arr.length);
	let map = {};
	let num;
	let digit;
	let idx;

	for (let i = 0; i < arr.length; i += 1) {
		num = String(arr[i])
		digit = parseInt(num[num.length - place - 1] || 0, 10);
		count[digit] += 1;

		map[arr[i]] = digit;
	}

	for (i = 1; i < count.length; i += 1) {
		count[i] = count[i] + count[i - 1];
	}

	count.unshift(0);

	for (i = 0; i < arr.length; i += 1) {
		num = arr[i];
		digit = map[num];
		idx = count[digit];
		count[digit] += 1;
		sorted[idx] = num;
	}

	return sorted;
}


function radixSort(arr) {
	let place = 0;
	const places = String(Math.max(...arr)).length;

	while (place < places) {
		arr = countSortByDig(arr, place);
		place += 1;
	}

	return arr;
}

console.log(radixSort([2, 1, 22, 3, 43, 5, 6, 8, 10, 1093, 46, 199, 88]));
