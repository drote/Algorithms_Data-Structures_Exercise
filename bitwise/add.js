// bitwise additions

function add(a, b) {
	while (b > 0) {
		common = a & b;
		uncommon = a ^ b;
		a = uncommon;
		b = common << 1;
	}

	return a;
}
