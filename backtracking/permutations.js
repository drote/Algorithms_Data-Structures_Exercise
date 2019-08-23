// find all possible permutations of array nums

function permute(nums) {
	let results = [];
	helper(nums, [], results);
	return results;
}

function helper(arr, can, results) {
	if (can.length === arr.length) {
		results.push([...can]);
	} else {
		for (let i = 0; i < arr.length; i += 1) {
			if (can.indexOf(arr[i]) === -1) {
				can.push(arr[i]);
				helper(arr, can, results);
				can.pop();
			}
		}
	}
}
