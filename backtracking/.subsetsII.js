function subsetsWithDup(arr) {
	let results = {};
	arr = arr.sort((a, b) => a - b);
	helper(arr, [], 0, results);
	return Object.values(results);
}

function helper(arr, can, start, results) {
	results[[...can]] = [...can];

	for (let i = start; i < arr.length; i += 1) {
		if (i > start && arr[i] === arr[i - 1]) continue;

		can.push(arr[i]);
		helper(arr, can, i + 1, results);
		can.pop();
	}
}
