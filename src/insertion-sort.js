/*
 * Insert an item and sort from a given index.
 */
var insert = function(array, rightIndex, value) {
  for(var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
  }

  array[j + 1] = value;
  return array;
};

/*
 * Sorts a list of items in ascending order.
 */
var insertionSort = function(array) {
  for(var i = 1; i < array.length; i++) {
    insert(array, i-1, array[i]);
  }

  return array;
};

/* Exports for Node module. */
try {
  module.exports.insert = insert;
  module.exports.insertionSort = insertionSort;
} catch (e) {
  console.log(e);
}
