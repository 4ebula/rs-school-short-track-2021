/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let temp;
  const newArr = arr;
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] !== -1) {
      for (let j = i + 1; j < newArr.length; j++) {
        if (newArr[j] < newArr[i] && newArr[j] !== -1) {
          temp = newArr[i];
          newArr[i] = newArr[j];
          newArr[j] = temp;
        }
      }
    }
  }
  return newArr;
}

module.exports = sortByHeight;
