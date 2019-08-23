// generate all 'legal' combinations of n parentheses

// 1 => () )(

// 2 => ()() (())

// 3 => ()()() (())() ((())) (()()) ()(())

function generateParenthesis(n) {
	let results = [];
	helper(n, '', results, 0, 0);
	return results;
}

function helper(n, can, results, left, stack) {
	if (can.length === n * 2) {
		results.push(can);
		return;
	}

	if (can.length < n * 2) {
		if (stack > 0) {
			helper(n, can + ')', results, left, stack - 1);
		}

		if (left < n) {
			helper(n, can + '(', results, left + 1, stack + 1);
		}
	}
}
