var assert = require('assert');
var a = require('../src/merge-sort.js');

describe('merge-sort.js', function() {
  describe('merge(array, p, q, r)', function() {
    it('should merge an array that has two sorted subarrays', function() {
      var arrayA = [3, 7, 12, 14, 2, 6, 9, 11];
      var arrayB = [3, 7, 12, 14, 2, 6, 9];

      a.merge(arrayA, 0, Math.floor((0 + arrayA.length-1) / 2),
        arrayA.length-1);
      a.merge(arrayB, 0, Math.floor((0 + arrayB.length-1) / 2),
        arrayB.length-1);

      assert.deepEqual(arrayA, [2, 3, 6, 7, 9, 11, 12, 14]);
      assert.deepEqual(arrayB, [2, 3, 6, 7, 9, 12, 14]);
    });
  });
  describe('mergeSort(array, p, r)', function() {
    it('should take in an array and merge sort it', function() {
      var arrayA = [14, 7, 3, 12, 9, 11, 6, 2];
      var arrayB = [9, 1, -3, 12, -4, 11, 0, 1];

      assert.deepEqual(a.mergeSort(arrayA, 0, arrayA.length-1),
        [2, 3, 6, 7, 9, 11, 12, 14]);
      assert.deepEqual(a.mergeSort(arrayB, 0, arrayB.length-1),
        [-4, -3, 0, 1, 1, 9, 11, 12]);
    });
  });
});
