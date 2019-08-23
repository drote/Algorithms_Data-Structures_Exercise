// JS implementation of a stack using an array

class Stack {
	constructor() {
		this.stack = [];
		this.length = 0;
	}

	push(item) {
		this.stack[this.length] = item;
		this.length += 1;
	}

	pop() {
		const popped = this.peek();
		this.stack.splice(this.length - 1, 1);
		this.length -= 1;

		return popped;
	}

	peek() {
		return this.stack[this.length - 1];
	}

	size() {
		return this.length;
	}
}
