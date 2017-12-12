class Queue {
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
    }

    enqueue(value) {
        this.collection.push(value);
    }

    dequeue() {
        return this.collection.shift();
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return (this.collection.length === 0);
    }
}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());