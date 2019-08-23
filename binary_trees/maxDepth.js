// find the length (depth) of the longest branch in a tree

function maxDepth(node) {
	if (!node) return 0

	const rDepth = maxDepth(node.right);
	const lDepth = maxDepth(node.left);

	return (rDepth >= lDepth ? rDepth : lDepth) + 1;
}
