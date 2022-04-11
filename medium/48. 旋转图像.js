/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// # 方法2：两次反转，先上下，再对角
var rotate = function (matrix) {
  let n = matrix.length
  for (let i = 0; i <= Math.floor(n / 2) - 1; i++) {
    ;[matrix[i], matrix[n - i - 1]] = [matrix[n - i - 1], matrix[i]]
  }
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
}

// # 方法1
var rotate = function (matrix) {
  const help = (arr, start) => {
    let temp = []
    let end = arr.length - start - 2
    for (let i = start; i <= end; i++) temp.push(arr[start][i])
    for (let i = start; i <= end; i++) temp.push(arr[i][end + 1])
    for (let i = end + 1; i >= start + 1; i--) temp.push(arr[end + 1][i])
    for (let i = end + 1; i >= start + 1; i--) temp.push(arr[i][start])
    let n = temp.length / 4
    while (n--) {
      temp.unshift(temp.pop())
    }
    for (let i = start; i <= end; i++) arr[start][i] = temp.shift()
    for (let i = start; i <= end; i++) arr[i][end + 1] = temp.shift()
    for (let i = end + 1; i >= start + 1; i--) arr[end + 1][i] = temp.shift()
    for (let i = end + 1; i >= start + 1; i--) arr[i][start] = temp.shift()
  }
  for (let i = 0; i <= Math.floor(matrix.length / 2) - 1; i++) {
    help(matrix, i)
  }
}

let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]

rotate(matrix)
