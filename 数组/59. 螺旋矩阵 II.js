/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let ans = Array(n).fill('').map(_ => Array(n));
  let k = 1, c = n - 1;
  while (c > 0) {
    for (let i = n - c - 1; i < c; i++) {
      ans[n - c - 1][i] = k++;
    }
    for (let i = n - c - 1; i < c; i++) {
      ans[i][c] = k++;
    }
    for (let i = c; i >= n - c; i--) {
      ans[c][i] = k++;
    }
    for (let i = c; i >= n - c; i--) {
      ans[i][n - c - 1] = k++;
    }
    c--;
  }
  if (n & 1) ans[n >> 1][n >> 1] = n * n;
  return ans;
};

generateMatrix(3)