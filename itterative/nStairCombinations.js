// Determine the number of 1+ stair combinations possible. 1 - 2 stair leaps allowed.

function climbStairs(n) {
	if (n === 1) return 1;

	let first = 1;
	let second = 2;
	let third = 3;

	for (let i = 2; i < n; i += 1) {
		first = second;
		second = third;
		third = second + first;
	}

	return second;
}
