class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    add(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        this.length++;
    }

    remove(value) {
        let currentNode = this.head;
        let previousNode;
        if (currentNode.value === value) {
            head = currentNode.next;
        } else {
            while(currentNode.value !== value) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    isEmpty() {
        return this.length === 0;
    }

    indexOf(value) {
        let currentNode = this.head;
        let index = -1;

        while(currentNode) {
            index++;
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.next;
        }

        return -1;
    }

    elementAt(index) {
        let currentNode = this.head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

    addAt(index, value) {
        let node = new Node(value);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index > length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;
    }

    removeAt(index) {
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) {
            this.head = currentIndex.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.value;
    }

    print() {
        let array = [];
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex < this.length) {
            currentIndex++;
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
}

let friends = new LinkedList();
friends.add('John');
friends.add('Nicholas');
friends.add('Fred');
friends.add('Nick');
friends.print();
console.log(friends.elementAt(0));
console.log(friends.removeAt(2));
friends.print();