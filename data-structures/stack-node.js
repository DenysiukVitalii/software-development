class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = new Node(null);
    }

    isEmpty() {
        return this.top === null;
    }

    peek() {
       return this.top.data;
    }

    push(data) {
        let node = new Node(data);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        let data = this.top.data;
        this.top = this.top.next;
        return data;
    }
}

let stack = new Stack();
stack.push(1);
stack.push("hello");
stack.push("world");
console.log(stack);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

