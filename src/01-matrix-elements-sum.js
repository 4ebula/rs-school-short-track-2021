/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const matrix1 = matrix;
  for (let i = matrix1.length - 1; i > 0; i--) {
    for (let j = 0; j < matrix1[0].length; j++) {
      if (!matrix1[i - 1][j]) matrix1[i][j] = 0;
    }
  }
  return matrix1.flat().reduce((acc, e) => acc + e);
}

module.exports = getMatrixElementsSum;
