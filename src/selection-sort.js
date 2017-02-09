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
 * Returns the index of minimum after a given index.
 */
var indexOfMinimum = function(array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for(var i = minIndex + 1; i < array.length; i++) {
    if(array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }

  return minIndex;
};

/*
 * Sorts a list of items in ascending order.
 */
var selectionSort = function(array) {
  var minIndex = 0;

  for(var i = 0; i < array.length; i++) {
    minIndex = indexOfMinimum(array, i);
    swap(array, i, minIndex);
  }

  return array;
};

/* Exports for Node module. */
try {
  module.exports.swap = swap;
  module.exports.indexOfMinimum = indexOfMinimum;
  module.exports.selectionSort = selectionSort;
} catch (e) {
  console.log(e);
}
