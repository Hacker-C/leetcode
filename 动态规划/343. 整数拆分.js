/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // 1、确定dp[i]数组含义：拆分i的最大积
  // 2、推导式：dp[i] = Max(j * (i-j), dp[i - j])
  // 3、初值：dp[2] =1
  let dp = Array(n + 1).fill(0)
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]))
    }
  }
  return dp[n]
}
