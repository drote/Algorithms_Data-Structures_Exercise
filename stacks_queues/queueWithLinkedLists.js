// JS implementation of queue using linked lists

class LinkedListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.current = null;
		this.head = null;
		this.length = 0;
	}

	enqueue(val) {
		const newNode = new LinkedListNode(val);

		if (!this.head) {
			this.head = newNode;
			this.current = newNode;
		} else {		
			this.current.next = newNode;
			this.current = this.current.next;
		}

		this.length += 1;
	}

	dequeue() {
		const item = this.head;
		this.head = this.head.next;
		this.length -= 1;

		return item.val;
	}

	size() {
		return this.length;
	}
}
