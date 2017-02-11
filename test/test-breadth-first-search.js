var assert = require('assert');
var a = require('../src/breadth-first-search.js');

describe('breadth-first-search.js', function() {
  describe('breadthFirstSearch(graph, source)', function() {
    it('should perform a breadth-first search on a graph', function() {
      var adjList = [
        [1],
        [0, 4, 5],
        [3, 4, 5],
        [2, 6],
        [1, 2],
        [1, 2, 6],
        [3, 5],
        []
      ];

      var bfsInfo = a.breadthFirstSearch(adjList, 3);

      assert.deepEqual(bfsInfo[0], {distance: 4, predecessor: 1});
      assert.deepEqual(bfsInfo[1], {distance: 3, predecessor: 4});
      assert.deepEqual(bfsInfo[2], {distance: 1, predecessor: 3});
      assert.deepEqual(bfsInfo[3], {distance: 0, predecessor: null});
      assert.deepEqual(bfsInfo[4], {distance: 2, predecessor: 2});
      assert.deepEqual(bfsInfo[5], {distance: 2, predecessor: 2});
      assert.deepEqual(bfsInfo[6], {distance: 1, predecessor: 3});
      assert.deepEqual(bfsInfo[7], {distance: null, predecessor: null});
    });
  });
});
