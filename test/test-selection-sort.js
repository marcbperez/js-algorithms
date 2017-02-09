var assert = require('assert');
var a = require('../src/selection-sort.js');

describe('selection-sort.js', function() {
  describe('swap(array, firstIndex, secondIndex)', function() {
    it('should swap the position of two items', function() {
      var array = [7, 9, 4];

      assert.deepEqual(a.swap(array, 0, 1), [9, 7, 4]);
      assert.deepEqual(a.swap(array, 1, 0), [7, 9, 4]);
      assert.deepEqual(a.swap(array, 1, 2), [7, 4, 9]);
    });
  });
  describe('indexOfMinimum(array, startIndex)', function() {
    it('should return the index of minimum after a given index', function() {
      var array = [18, 6, 66, 44, 9, 22, 14];

      assert.deepEqual(a.indexOfMinimum(array, 2), 4);
      assert.deepEqual(a.indexOfMinimum(array, 0), 1);
      assert.deepEqual(a.indexOfMinimum(array, 3), 4);
    });
  });
  describe('selectionSort(array)', function() {
    it('should sort a list of items in ascending order', function() {
      var arrayA = [22, 11, 99, 88, 9, 7, 42];
      var arrayB = [5, 2, -1, 0, 4, 1, 3];

      assert.deepEqual(a.selectionSort(arrayA), [7, 9, 11, 22, 42, 88, 99]);
      assert.deepEqual(a.selectionSort(arrayB), [-1, 0, 1, 2, 3, 4, 5]);
    });
  });
});
