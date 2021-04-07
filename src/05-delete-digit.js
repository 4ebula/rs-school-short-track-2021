/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const arr = new Array(str.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = str.split('');
    arr[i].splice(i, 1);
    arr[i] = +arr[i].join('');
  }
  return Math.max(...arr);
}

module.exports = deleteDigit;
