// find if binary tree is symmetric

function isSymmetric(node) {
  return symHelp(node, node);
};

function symHelp(node1, node2) {
  if (!node1 && !node2) {
    return true;
  } else if (!node1 || !node2) { 
    return false;
  }

  return (node1.val === node2.val)
         && symHelp(node1.right, node2.left)
         && symHelp(node1.left, node2.right);
}
