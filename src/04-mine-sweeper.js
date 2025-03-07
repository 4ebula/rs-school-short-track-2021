/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const maxY = matrix.length;
  const maxX = matrix[0].length;
  const arr = new Array(maxY);
  for (let i = 0; i < maxY; i++) {
    arr[i] = new Array(maxX).fill(0);
    for (let j = 0; j < maxX; j++) {
      if (i - 1 >= 0) {
        if (j - 1 >= 0 && matrix[i - 1][j - 1]) arr[i][j]++;
        if (matrix[i - 1][j]) arr[i][j]++;
        if (j + 1 < maxX && matrix[i - 1][j + 1]) arr[i][j]++;
      }
      if (i + 1 < maxY) {
        if (j - 1 >= 0 && matrix[i + 1][j - 1]) arr[i][j]++;
        if (matrix[i + 1][j]) arr[i][j]++;
        if (j + 1 < maxX && matrix[i + 1][j + 1]) arr[i][j]++;
      }
      if (j - 1 >= 0 && matrix[i][j - 1]) arr[i][j]++;
      if (j + 1 < maxX && matrix[i][j + 1]) arr[i][j]++;
    }
  }
  return arr;
}

module.exports = minesweeper;
