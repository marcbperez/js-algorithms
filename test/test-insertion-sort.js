var assert = require('assert');
var a = require('../src/insertion-sort.js');

describe('insertion-sort.js', function() {
  describe('insert(array, rightIndex, value)', function() {
    it('should insert an item and sort from a given index', function() {
      var array = [3, 5, 7, 11, 13, 2, 9, 6];

      assert.deepEqual(a.insert(array, 4, 2), [2, 3, 5, 7, 11, 13, 9, 6]);
      assert.deepEqual(a.insert(array, 5, 9), [2, 3, 5, 7, 9, 11, 13, 6]);
      assert.deepEqual(a.insert(array, 6, 6), [2, 3, 5, 6, 7, 9, 11, 13]);
    });
  });
  describe('insertionSort(array)', function() {
    it('should sort a list of items in ascending order', function() {
      var arrayA = [22, 11, 99, 88, 9, 7, 42];
      var arrayB = [3, -5, 0, 78, 4, -13, 99];

      assert.deepEqual(a.insertionSort(arrayA), [7, 9, 11, 22, 42, 88, 99]);
      assert.deepEqual(a.insertionSort(arrayB), [-13, -5, 0, 3, 4, 78, 99]);
    });
  });
});
