// invert binary tree

const invertTree = function(root) {
  if (!root || !root.left && !root.right) return root;

  left = root.left;
  root.left = root.right;
  root.right = left;
  
  invertTree(root.right);
  invertTree(root.left);

  return root;
};
