// find sum of paths (right / left) in binary tree

var sumNumbers = function(root) {
  return helper(root, '');
};

function helper(node, path) {    
  if (!node) {
    return 0;
  } else if (!node.left && !node.right) {
    return parseInt(path + node.val, 10);
  }
  
  return helper(node.left, path + node.val) + helper(node.right, path + node.val);
}
