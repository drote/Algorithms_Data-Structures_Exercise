// recursive palindrome

function paliHelper(str, left, right) {
	if (left === right || left > right) {
		return true;
	} else {
		return str[left] === str[right] && paliHelper(str, left + 1, right - 1);
	}
}

function isPalindrome(str) {
	return paliHelper(str, 0, str.length - 1);
}
