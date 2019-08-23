// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

function canJump(arr) {
	let cache = {
		'0': true,
	};

	for (let i = 0; i < arr.length; i += 1) {
		cache[i] = cache[i] || false;

		if (cache[i]) {
			for (let nextJump = 1; nextJump <= arr[i]; nextJump += 1) {
				cache[i + nextJump] = true;
			}
		}
	}

	return cache[arr.length - 1];
}
