/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // 动态规划
  // * 1、确定 dp 数组含义：dp[i][j] 表示从(i,j) 到底边的最小路径和
  // * 2、确定递推式：dp[i][j]=Math.min(dp[i+1][j],dp[i+1][j+1]) + traangle[i][j]
  // * 3、确定初值：
  let n = triangle.length
  let dp = Array(n + 1)
    .fill('')
    .map((e) => Array(n + 1).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; i <= i; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
    }
  }
  return dp[0][0]
}

triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
