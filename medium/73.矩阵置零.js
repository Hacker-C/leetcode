/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let temp = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        temp.push([i, j])
      }
    }
  }
  for (let e of temp) {
    for (let i = 0; i < n; i++) {
      matrix[e[0]][i] = 0
    }
    for (let i = 0; i < m; i++) {
      matrix[i][e[1]] = 0
    }
  }
};
matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
let ans = setZeroes(matrix)
