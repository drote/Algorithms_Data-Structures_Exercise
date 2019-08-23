// bitwise find difference between two arrs

function findTheDifference(a, b) {
	let res = 0;
	for (let i = 0; i < b.length; i += 1) {

		if (a[i] !== undefined) {
			res = res ^ a[i].charCodeAt(0);
		}

		res = res ^ b[i].charCodeAt(0);
	}

	return String.fromCharCode(res);
}
