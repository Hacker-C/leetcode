/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let ans = [], m = matrix.length, n = matrix[0].length
  for (let i = 0; i < m; i++) {
    let _min = matrix[i][0], index = 0
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] < _min) {
        _min = matrix[i][j]
        index = j
      }
    }
    let _max = matrix[i][index], index2 = 0
    for (let j = 0; j < m; j++) {
      if (matrix[j][index] > _max) {
        _max = matrix[j][index]
        index2 = j
      }
    }
    if (_max === _min) {
      ans.push(_min)
    }
  }
  return ans
};