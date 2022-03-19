/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length,
    n = obstacleGrid[0].length
  let dp = Array(m)
    .fill('')
    .map((_) => Array(n))
  let flag1 = false,
    flag2 = false
  let i = 0,
    j = 0
  for (; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      flag1 = true
      break
    }
    dp[i][0] = 1
  }
  if (flag1) {
    for (let k = i; k < m; k++) {
      dp[k][0] = 0
    }
  }
  for (; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      flag2 = true
      break
    }
    dp[0][j] = 1
  }
  if (flag2) {
    for (let k = j; k < n; k++) {
      dp[0][k] = 0
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
}
