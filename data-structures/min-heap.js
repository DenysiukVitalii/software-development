/* MinHeap */

// left child: i * 2 + 1
// right child: i * 2 + 2
// parent: (i - 1) / 2

class MinHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1 }
    getRightChildIndex(parentIndex) { return 2 * parentIndex + 2 }
    getParentIndex(childIndex) { return (childIndex - 1) / 2 }

    hasLeftChild(index) { return this.getLeftChildIndex(index) < this.size }
    hasRightChild(index) { return this.getRightChildIndex(index) < this.size }
    hasParent(index) { return this.getParentIndex(index) >= 0 }

    leftChild(index) { return this.heap[this.getLeftChildIndex(index)] }
    rightChild(index) { return this.heap[this.getRightChildIndex(index)] }
    parent(index) { return this.heap[this.getParentIndex(index)] }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    peek() {
        if (this.size === 0) {
            console.log("Heap is empty!");
            return;
        }
        return this.heap[0];
    }

    pop() {
        if (this.size === 0) {
            console.log("Heap is empty!");
            return;
        }

        let item = this.heap[0];
        this.heap[0] = this.heap[this.size - 1];
        this.heap.pop();
        this.size--;
        this.heapifyDown();
        return item;        
    }

    add(item) {
        this.heap.push(item);
        this.size++;
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.size - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        } 
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            
            index = smallerChildIndex;
        } 
    }
};

let heap = new MinHeap();
heap.add(5);
heap.add(4);
heap.add(2);
heap.add(1);
heap.pop();
heap.add(1);
heap.add(3);
console.log(heap);