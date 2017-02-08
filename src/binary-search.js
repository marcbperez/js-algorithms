/*
 * Returns the index of the target or -1.
 */
var binarySearch = function(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;

  while(min <= max) {
    guess = Math.floor((min + max) / 2);

    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

/* Exports for Node module. */
try {
  module.exports.binarySearch = binarySearch;
} catch (e) {
  console.log(e);
}
