/* A Queue object for queue-like functionality over JavaScript arrays */
var Queue = function() {
  this.items = [];
};
Queue.prototype.enqueue = function(obj) {
  this.items.push(obj);
};
Queue.prototype.dequeue = function() {
  return this.items.shift();
};
Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *  [{distance: _, predecessor: _ }]
 */
var breadthFirstSearch = function(graph, source) {
  var bfsInfo = [];

  for (var i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null
    };
  }

  bfsInfo[source].distance = 0;

  var queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    var current_v = queue.dequeue();

    for(i = 0; i < graph[current_v].length; i++) {
      var next_v = graph[current_v][i];

      if (bfsInfo[next_v].distance === null) {
        queue.enqueue(next_v);
        bfsInfo[next_v].distance = bfsInfo[current_v].distance + 1;
        bfsInfo[next_v].predecessor = current_v;
      }
    }
  }

  return bfsInfo;
};

/* Exports for Node module. */
try {
  module.exports.breadthFirstSearch = breadthFirstSearch;
} catch (e) {
  console.log(e);
}
