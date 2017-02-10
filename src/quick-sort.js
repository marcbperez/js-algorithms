/*
 * Swaps the position of two items.
 */
var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

  return array;
};

/*
 * Partitions an array and returns the pivot.
 */
var partition = function(array, p, r) {
  var j, q = p;

  for (j = q; j < r; j++) {
    if (array[j] <= array[r]) {
      swap(array, j, q);
      q += 1;
    }
  }

  swap(array, q, r);
  return q;
};

/*
 * Takes in an array and quick sorts it.
 */
var quickSort = function(array, p, r) {
  if (p < r) {
    var q = partition(array, p, r);
    quickSort(array, p, q-1);
    quickSort(array, q+1, r);
  }

  return array;
};

/* Exports for Node module. */
try {
  module.exports.quickSort = quickSort;
  module.exports.swap = swap;
  module.exports.partition = partition;
} catch (e) {
  console.log(e);
}
