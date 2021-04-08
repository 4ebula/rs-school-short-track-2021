/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  function searchBin(start, end, val) {
    let pivot = Math.floor((start + end) / 2);
    if (val !== array[pivot]) {
      if (val > array[pivot]) pivot = searchBin(pivot, end, val);
      else pivot = searchBin(start, pivot, val);
    }
    return pivot;
  }
  return searchBin(0, array.length, value);
}

module.exports = findIndex;
