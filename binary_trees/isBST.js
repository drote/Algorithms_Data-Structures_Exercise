// find if valid binary search tree

function isValidBST(root) {
	return validHelper(root);
};

function validHelper(node, lower = -Infinity, upper = Infinity) {
  if (!node) return true;

  const val = node.val;
  const nodeValid = !(val <= lower || val >= upper);

  return nodeValid && validHelper(node.right, val, upper) && validHelper(node.left, lower, val);
}
