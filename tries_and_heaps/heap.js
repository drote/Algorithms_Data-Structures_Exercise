// JS implementation of a Heap DS.

const parent = (i) => Math.floor((i - 1) / 2);
const leftCh = (i) => 2 * i + 1;
const rightCh = (i) => 2 * i + 2;
const swap = (arr, a, b) => {
	let c = arr[a];
	arr[a] = arr[b];
	arr[b] = c;
}

class MinHeap {
	constructor() {
		this.heap = [];
	}

	insert(val) {
		let i = this.heap.length;
		this.heap[i] = val;

		while (i >= 0 && this.heap[i] < this.heap[parent(i)]) {
			swap(this.heap, i, parent(i));
			i = parent(i);
		}
	}

	extractMin() {
		const min = this.min();
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.length = this.heap.length - 1;
		this.heapify(0)
		return min;
	}

	delete(index) {
		this.decreaseKey(index, -Infinity);
		this.extractMin();
	}

	decreaseKey(i, val) {
		this.heap[i] = val;

		while (i > 0 && this.heap[i] < this.heap[parent(i)]) {
			swap(this.heap, i, parent(i));
			i = parent(i);
		}
	}

	min() {
		return this.heap[0];
	}

	heapify(i) {
		let l = leftCh(i);
		let r = rightCh(i);
		let smallest = i;

		if (l < this.heap.length && this.heap[l] < this.heap[i]) {
			smallest = l;
		}

		if (r < this.heap.length && this.heap[r] < this.heap[smallest]) {
			smallest = r;
		}

		if (smallest != i) {
			swap(this.heap, i, smallest);
			this.heapify(smallest);
		}
	}
}
