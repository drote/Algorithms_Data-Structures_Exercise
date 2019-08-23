// find all subsets of array nums

function helper(nums, results, candidate, idx) {
	results.push([...candidate]);
		
	for (let i = idx; i < nums.length; i += 1) {
		candidate.push(nums[i])
		helper(nums, results, candidate, i + 1);
		candidate.pop();
	}
}

function subsets(nums) {
	let results = [];
	helper(nums, results, [], 0);
	return results;
}
