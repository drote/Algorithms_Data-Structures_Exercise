// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

function getJumpResults(arr, currentIdx, targetIdx, cache) {
	const result = cache[currentIdx] || jumpHelp(arr, currentIdx, targetIdx, cache);
	cache[currentIdx] = result;
	return cache[currentIdx];
}

function jumpHelp(arr, currentIdx, targetIdx, cache) {
	if (!(currentIdx + arr[currentIdx] >= targetIdx)) return false;

	if (currentIdx === 0) return true;

	for (let i = currentIdx - 1; i >= 0; i -= 1) {
		const result = getJumpResults(arr, i, currentIdx, cache);

		if (result) return result;
	}

	return false;
}

function canJump(arr) {
	return jumpHelp(arr, arr.length - 1, arr.length - 1, {});
}
