// Find unique paths in n by m grid. Only right and down turns allowed.

function getPathResult(m, n, mem) {
  const result = mem[[m, n]] || pathHelp(m, n, mem);
  mem[[m, n]] = result;
  return mem[[m, n]];
}

function pathHelp(m, n, mem) {
  if (m === 1 || n === 1) return 1;

  return getPathResult(m - 1, n, mem) + getPathResult(m, n - 1, mem);
}

var uniquePaths = function(m, n) {
	return pathHelp(m, n, {});
};
