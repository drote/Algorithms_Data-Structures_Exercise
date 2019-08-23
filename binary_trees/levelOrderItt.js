// travers binary tree by levels itteratively

function levelOrder(currentNode, cb) {
	let q = [];
	q.push(currentNode);

	while (q.length > 0) {
		cb(q[0]);
		const node = q.shift();

		if (node.left) {
			q.push(node.left);
		}

		if (node.right) {
			q.push(node.right);
		}
	}
}
