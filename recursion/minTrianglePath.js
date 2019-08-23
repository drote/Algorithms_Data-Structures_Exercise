// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example:

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

function getTriangleResult(triangle, level, idx, cache) {
	const result = cache[[level, idx]] || pathHelp(triangle, level, idx, cache);
	cache[[level, idx]] = result;
	return result;
}

function pathHelp(triangle, level, idx, cache) {
	if (triangle[level] === undefined || triangle[level] && triangle[level][idx] === undefined) {
		return Infinity;
	} else if (level === 0 && idx === 0) {
		return triangle[0][0];
	}

	const min = Math.min(
		getTriangleResult(triangle, level - 1, idx, cache),
		getTriangleResult(triangle, level - 1, idx - 1, cache)
	);

	return min + triangle[level][idx];
}

function findPath(triangle, cache) {
	let cache = {};
	let options = [];

	for (let i = 0; i < triangle[triangle.length - 1].length; i += 1) {
		options.push(pathHelp(triangle, triangle.length - 1, i, cache));
	}

	return Math.min(...options);
}
