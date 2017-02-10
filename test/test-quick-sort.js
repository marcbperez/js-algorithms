var assert = require('assert');
var a = require('../src/quick-sort.js');

describe('quick-sort.js', function() {
  describe('swap(array, firstIndex, secondIndex)', function() {
    it('should swap the position of two items', function() {
      var array = [7, 9, 4];

      assert.deepEqual(a.swap(array, 0, 1), [9, 7, 4]);
      assert.deepEqual(a.swap(array, 1, 0), [7, 9, 4]);
      assert.deepEqual(a.swap(array, 1, 2), [7, 4, 9]);
    });
  });
  describe('partition(array, p, r)', function() {
    it('should partition an array and return the pivot', function() {
      var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
      var q = a.partition(array, 0, array.length-1);

      assert.deepEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);
      assert.deepEqual(q, 4);
    });
  });
  describe('quickSort(array, p, r)', function() {
    it('should take in an array and quick sort it', function() {
      var arrayA = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
      var arrayB = [9, 7, 5, 11, 12, -2, 14, 3, 10, 6];

      a.quickSort(arrayA, 0, arrayA.length-1);
      assert.deepEqual(arrayA, [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);

      a.quickSort(arrayB, 0, arrayB.length-1);
      assert.deepEqual(arrayB, [ -2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);
    });
  });
});
