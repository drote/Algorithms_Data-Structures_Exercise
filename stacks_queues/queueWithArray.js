// JS implementation of queue using an array

class Queue {
	constructor() {
		this.queue = [];
		this.length = 0;
	}

	enqueue(item) {
		for (let i = this.length; i > 0; i -= 1) {
			this.queue[i] = this.queue[i - 1];
		}

		this.queue[0] = item;
		this.length += 1;
	}

	dequeue() {
		const item = this.queue[this.length - 1];
		this.queue.splice(this.length - 1, 1);
		this.length -= 1;

		return item;
	}

	size() {
		return this.length;
	}
}
