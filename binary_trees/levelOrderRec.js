// traverse binary tree by level recursively

function printLevelOrder(root) {
  let height = getHeight(root); // returns number of levels in tree

  for (let i = 1; i < height; i += 1) {
    printGivenLevel(root, i);
  }
}

function printGivenLevel(root, level) {
  if (!root) return;

  if (level === 1) {
    console.log(root.val);
  } else if (level > 1) {
    printGivenLevel(root.left, level - 1);
    printGivenLevel(root.right, level - 1);
  }
}

function getHeight(node) {
  if (!root) return 0;

  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);

  return (leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1);
}
