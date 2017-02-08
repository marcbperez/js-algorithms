var assert = require('assert');
var a = require('../src/binary-search.js');

describe('binary-search.js', function() {
  describe('binarySearch(array, targetValue)', function() {
    it('should return the index of the target or -1', function() {
      var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

      assert.deepEqual(a.binarySearch(primes, 53), 15);
      assert.deepEqual(a.binarySearch(primes, 41), 12);
      assert.deepEqual(a.binarySearch(primes, 100), -1);
    });
  });
});
