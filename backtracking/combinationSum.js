// find all combinations of array k equal to target

function combinationSum(k, target) {
	let results = [];
	helper(k, target, [], 0, 0, results);
	return results;
}

function helper(arr, n, can, start, sum, results) {
	if (sum === n) {
		results.push([...can]);
	}

	for (let i = start; i < arr.length; i += 1) {
		if (sum + arr[i] > sum) continue;

		can.push(arr[i]);
		helper(arr, n, can, i, sum + arr[i], results);
		can.pop()
	}
}
