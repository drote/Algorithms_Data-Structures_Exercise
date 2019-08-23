// Implement a queue using two stacks

class Queue {
	constructor() {
    this.in = [];
    this.out = [];		
	}

	push(item) {
  	this.in[this.in.length] = item;	
	}

	pop() {
    if (this.out.length === 0) {
    	this.prepareDQ();
    }
    
    const popped = this.peek();
    this.out.length = this.out.length - 1;

    return popped;
	}

	prepareDQ() {
    while (this.in.length !== 0) {
        this.out[this.out.length] = this.in[this.in.length - 1];
        this.in.length = this.in.length - 1;
    }
	}
	
	peek() {
    if (this.out.length === 0) {
    	this.prepareDQ();
    }
    
    return this.out[this.out.length - 1];
  }

  empty() {
  	return this.out.length === 0 && this.in.length === 0
  }
};
