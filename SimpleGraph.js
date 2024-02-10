class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (this.vertices[vertex1] && this.vertices[vertex2]) {
        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1); // For an undirected graph
      }
    }
  
    printGraph() {
      for (const vertex in this.vertices) {
        console.log(`${vertex} -> ${this.vertices[vertex].join(', ')}`);
      }
    }
  }
  
  // Example usage
  const myGraph = new Graph();
  
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  myGraph.addVertex('D');
  
  myGraph.addEdge('A', 'B');
  myGraph.addEdge('A', 'C');
  myGraph.addEdge('B', 'D');
  myGraph.addEdge('C', 'D');
  
  myGraph.printGraph();
  