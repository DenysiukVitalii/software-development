class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(value) {
        this.nodes[value] = {
            edges: {}
        };
    }

    removeNode(value) {
        for (let connectedNode in this.nodes[value].edges) {
            this.removeEdge(value, connectedNode);
        }
        delete this.nodes[value];
    }

    hasNode(value) {
        return !!this.nodes[value];
    }

    addEdge(nodeFrom, nodeTo) {
        if (this.hasNode(nodeFrom) && this.hasNode(nodeTo)) {
            this.nodes[nodeFrom].edges[nodeTo] = true;
            this.nodes[nodeTo].edges[nodeFrom] = true;
        }
    } 

    removeEdge(nodeFrom, nodeTo) {
        if (this.hasNode(nodeFrom) && this.hasNode(nodeTo)) {
            delete this.nodes[nodeFrom].edges[nodeTo];
            delete this.nodes[nodeTo].edges[nodeFrom];
        }
    }

    hasEdge(nodeFrom, nodeTo) {
        return !!this.nodes[nodeFrom].edges[nodeTo];
    }
}

let graph = new Graph();
graph.addNode("Apple");
graph.addNode("iPhone X");
graph.addNode("iPad");
graph.addNode("MacBook");
graph.addNode("Microsoft");
graph.addNode("Windows 10");
graph.addNode("XBOX");

graph.addEdge("Apple", "iPhone X");
graph.addEdge("Apple", "iPad");
graph.addEdge("Apple", "MacBook");
graph.addEdge("Microsoft", "Windows 10");
graph.addEdge("Microsoft", "XBOX");

console.log(graph);