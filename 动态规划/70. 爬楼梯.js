/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 1、确定dp数组含义： dp[i] 表示走到 i 阶台阶的方案
  // 2、推导递推式（状态转移）： dp[i] = dp[i-1] + dp[i-2]
  // 3、初值：dp[0] = 0,dp[1]=1,dp[2]=2
  let dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};