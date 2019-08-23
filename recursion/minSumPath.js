// Given a m x n grid filled with non-negative numbers, find a path from top left to 
// bottom right which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7

function getMinPathResult(maze, row, col, cache) {
	const result = cache[[row, col]] || minPathHelp(maze, row, col, cache);
	cache[[row, col]] = result;
	return cache[[row, col]]; 
}

function minPathHelp(maze, row, col, cache) {
	const outOfBounds = (maze, row, col) => maze[row] === undefined || maze[row][col] === undefined;

	if (row === 0 && col === 0) {
		return maze[0][0];
	} else if (outOfBounds(maze, row, col)) {
		return Infinity;
	}

	const path1 = getMinPathResult(maze, row - 1, col, cache);
	const path2 = getMinPathResult(maze, row, col - 1, cache);
	const shortest = path1 < path2 ? path1 : path2;

	return maze[row][col] + shortest;
}

function minPathSum(maze) {
	return minPathHelp(maze, maze.length - 1, maze[0].length - 1, {});
}
