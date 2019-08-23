// find if two binary trees are equal

function isSameTree(treeA, treeB) {
	if (!treeA && !treeB) {
		return true;
	} else if (!treeA || !treeB) {
		return false;
	}

	return treeA.val === treeB.val
					&& isSameTree(treeA.left, treeB.left)
					&& isSameTree(treeA.right, treeB.right);
}
