// find all unique subarrays of arr euqal to tarket

function combinationSum(arr, target) {
	let results = [];
	let last;
	arr = arr.sort((a, b) => a - b);
	helper(arr, target, [], 0, 0, used, last, results);
	return results;
}

function helper(arr, target, can, sum, sIdx, last, results) {
	if (sum === target) results.push([...can]);

	for (let i = sIdx; i < arr.length; i += 1) {
		if (sum + arr[i] > target || arr[i] === arr[i - 1] && last === arr[i]) continue;

		can.push(arr[i]);
		helper(arr, target, can, sum + arr[i], i + 1, last, results);
		last = can.pop();
	}
}
