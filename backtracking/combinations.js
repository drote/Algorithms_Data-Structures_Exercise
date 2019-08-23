// find all possible subarrays of n of length k

function combine(n, k) {
  let results = [];
  helper(n, k, [], results, 1);
  return results;
};

function helper(n, k, can, results, lo) {
  if (can.length === k) {
    results.push([...can]);
  } else {
    for (let i = lo; i <= n; i += 1) {
      can.push(i);
      helper(n, k, can, results, i + 1);
      can.pop();
    }
  }
}
