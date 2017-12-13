class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addNode(node) {
        if (node.value < this.value) {
            if (this.left === null) {
                this.left = node;
            } else {
                this.left.addNode(node);
            }
        } else if (node.value > this.value) {
            if (this.right === null) {
                this.right = node;
            } else {
                this.right.addNode(node);
            }
        }
    }

    search(value) {
        if (this.value === value) {
            return this;
        } else if (value < this.value && this.left !== null) {
            return this.left.search(value);
        } else if (value > this.value && this.right !== null) {
            return this.right.search(value);
        } 
        return null;
    }

    visit() {
        if (this.left !== null) {
            this.left.visit();
        }
        console.log(this.value);
        if (this.right !== null) {
            this.right.visit();
        }
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        let node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this.root.addNode(node);
        }
    }

    traverse() {
        this.root.visit();
    }

    search(value) {
        let found = this.root.search(value);
        return found;
    }
}

let tree = new Tree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(1);
console.log(tree);
tree.traverse();
console.log(tree.search(3));