// binary tree pre order itterative traversal

function preOrder(node, cb) {
	let stack = [];

	while (node || stack.length > 0) {
		cb(node);

		if (node.right) {
			stack.push(node.right);
		}

		if (node.left) {
			node = node.left;
		} else {
			node = stack.pop();
		}
	}
}
