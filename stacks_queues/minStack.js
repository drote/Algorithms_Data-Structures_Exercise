// Implement a stack that can retirieve the min value in the stack in O(1);

class minStack {
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	push(item) {
		const min = this.getMin();

		if (min === undefined) {
			min = Infinity;
		}

		if (item <= min) {
			this.minStack[this.minStack.length] = item;
		}

		this.stack[this.stack.length] = item;
	}

	pop() {
		const popped = this.peek();
		this.stack.length = this.stack.length - 1;

		if (popped === this.getMin()) {
			this.minStack.length = this.minStack.length - 1;
		}

		return popped;
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}

	getMin() {
		return this.minStack[this.minStack.length - 1];
	}
}
