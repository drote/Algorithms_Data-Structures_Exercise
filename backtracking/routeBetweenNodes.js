// check if route exists between two nodes (can only travel to adjacent nodes)

class Node {
	constructor(val) {
		this.val = val;
		this.adj = [];

		return this;
	}

	add(val) {
		let newNode;

		if (val.val) {
			newNode = val;
		} else {
			newNode = new Node(val);
		}

		this.adj.push(newNode);
		return newNode;
	}
}

function routeExists(node1, goalVal) {
	let visited = [];
	let result = helper(goalVal, node1, visited)
	return result || false;
}

function helper(goal, current, visited) {
	if (current.val === goal) return true;

	for (let i = 0; i < current.adj.length; i += 1) {
		let next = current.adj[i];
		if (visited.indexOf(next) !== -1) continue;

		visited.push(current.val);

		let result = helper(goal, next, visited);

		if (result) return result;
	}
}
