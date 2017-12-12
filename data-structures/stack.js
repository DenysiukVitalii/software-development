class Stack {
    constructor() {
        this.count = 0;
        this.storage = [];
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    size() {
        return this.count;
    }

    peek() {
        return this.storage[this.count - 1];
    }
}

let stack = new Stack();
console.log(stack);
stack.push(1);
stack.push(2);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
console.log(stack);