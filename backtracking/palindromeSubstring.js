// find all palindromes from string s

function partition(s) {
	let results = [];
	helper(s, [], '', 0, results);
	return results;
}

function helper(s, can, str, idx, results) {
	if (isPalindrome(str)) {
		can.push(str);

		if (idx === s.length) {
			results.push([...can]);
		} else if (idx < s.length) {
			helper(s, can, s[idx], idx + 1, results);
		}

		can.pop();
	}

	if (idx + 1 < s.length) {
		helper(s, can, str + s[idx], idx + 1, results);
	}
}

function isPalindrome(s) {
	if (s.length === 0) return false;

	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) return false;

		left += 1;
		right -= 1;
	}

	return true;
}
