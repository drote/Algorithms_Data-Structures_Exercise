//flatten Btree in place (all nodes like LL to the right, preOrder)

const flatten = (root) => {
  let stack = [];

  while (root || stack.length) {
    if (root.right) {
      stack.push(root.right);
    }

    if (root.left) {
      root.right = root.left;
      root.left = null;
    } else {
      root.right = stack.pop();
    }
    
    root = root.right;
  }
};
