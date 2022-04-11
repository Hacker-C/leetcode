/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {

  // 1、确定dp数组含义：dp[i] 
  // 2、推导式：dp[i] = dp[i-1]+dp[i-2]
  // 3、初值：dp[0]=1,dp[1]=1,dp[2]=2
  let dp = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7);
  }
  return dp[n];
};