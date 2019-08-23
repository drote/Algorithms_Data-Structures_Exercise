// recursive bt traversal

function inOrder(node, cb) {
	if (!node) return;

	inOrder(node.left, cb);
	cb(node);
	inOrder(node.right, cb);
}

function preOrder(node, cb) {
	if (!node) return;

	cb(node);
	preOrder(node.left, cb);
	preOrder(node.right, cb);
}

function postOrder(node, cb) {
	if (!node) return;

	postOrder(node.left, cb);
	postOrder(node.right, cb);
	cb(node);
}
