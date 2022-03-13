/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) return false;
  let n = matrix.length, m = matrix[0].length;
  let top = m - 1, right = 0;
  while (top >= 0 && right < n) {
    if (matrix[right][top] === target) {
      return true;
    }
    if (matrix[right][top] > target) {
      top--;
    } else {
      right++;
    }
  }
  return false;
};

matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

findNumberIn2DArray(matrix, 13)
findNumberIn2DArray(matrix, 10)
findNumberIn2DArray(matrix, 17)
findNumberIn2DArray(matrix, 30)
findNumberIn2DArray(matrix, 31)
findNumberIn2DArray(matrix, -22)