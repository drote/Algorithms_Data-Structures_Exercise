// Three stair variations allowed

function getResult(n, cache) {
  const result = cache[n] || climbStairs(n);
  cache[n] = result;

  return cache[n];
}

function stairHelp(n, cache) {  
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  } else {
    return getResult(n - 1, cache) + getResult(n - 2, cache) + getResult(n - 3, cache);
  }
};

function climbStairs(n) {
  return stairHelp(n, {});
}
