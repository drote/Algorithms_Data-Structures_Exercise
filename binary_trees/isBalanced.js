// find if binary tree is balaned

function maxDepth(node) {
	if (!node) return 0

	const rDepth = maxDepth(node.right);
	const lDepth = maxDepth(node.left);

	return (rDepth >= lDepth ? rDepth : lDepth) + 1;
}

var isBalanced = function(root) {
  if (!root) return root;
  
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  
  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
