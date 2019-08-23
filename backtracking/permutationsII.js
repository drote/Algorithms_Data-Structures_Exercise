// find all unique permutations of array nums

function permuteUnique(nums) {
	let results = [];
	let seen = {};
	nums.sort((a, b) => a - b);
	helper(nums, [], seen, last, results);
	return results;
}

function helper(arr, can, seen, last, results) {
	if (can.length === arr.length) {
		results.push([...can]);
		return;
	}

	for (let i = 0; i < arr.length; i += 1) {
		if (seen[i] || nums[i] === nums[i - 1] && !seen[i - 1]) continue;
		
		can.push(arr[i]);
		seen[i] = true;
		helper(arr, can, seen, last, results);
		last = arr[i];
		can.pop();
		seen[i] = false;
	}
}
