function valueForCoords(m, n, cache) {
  if (m < 1 || n < 1) return 0;
  
  return cache[[m, n]];
}

var uniquePaths = function(m, n) {
	let cache = {
    '1,1': 1
	};

	for (let i = 1; i <= m; i += 1) {
		for (let j = 1; j <= n; j += 1) {
			cache[[i, j]] = cache[[i, j]] || valueForCoords(i - 1, j, cache) + valueForCoords(i, j - 1, cache);
		}
	}
    
	return cache[[m, n]];
};
