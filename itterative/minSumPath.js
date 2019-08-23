// Given a m x n grid filled with non-negative numbers, find a path from top left to 
// bottom right which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.

function getResults(cache, grid, row, col) {
	if (row < 0 || col < 0) return Infinity;

	return cache[[row, col]];
}

function minSumPath(grid) {
	let cache = {
		'0,0': grid[0][0],
	}

	for (let i = 0; i < grid.length; i += 1) {
		for (let j = 0; j < grid[0].length; j += 1) {
			if (cache[[i, j]] === undefined) {
				cache[[i, j]] = Math.min(
					getResults(cache, grid, i - 1, j),
					getResults(cache, grid, i, j - 1 )
				) + grid[i][j];
			}
		}
	}

	return cache[[grid.length - 1, grid[0].length - 1]];
}
