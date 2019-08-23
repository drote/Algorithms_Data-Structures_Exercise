// JS implementation of a stack using linked lists

class LinkedListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.tail = null;
		this.length = 0;
	}

	push(item) {
		const newNode = new LinkedListNode(item);

		if (!this.tail) {
			this.tail = newNode;
		} else {
			newNode.next = this.tail;
			this.tail = newNode;
		}

		this.length += 1;
	}

	pop() {
		if (this.length === 0) return 'Stack is empty';

		const popped = this.tail;
		this.tail = this.tail.next;
		this.length -= 1;

		return popped.val;
	}

	peek() {
		if (this.length === 0) throw new Error('Stack is empty');

		return this.tail.val;
	}

	size() {
		return this.length;
	}
}
