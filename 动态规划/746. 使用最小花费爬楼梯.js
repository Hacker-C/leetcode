/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // 1、确定dp数组含义：dp[i] 到达第i个台阶花费的最少体力
  // 2、dp[i] = min(dp[i-1], dp[i-2])
  // 3、dp[0]=cost[0], dp[1]=cost[1]
  if (cost.length <= 1) return cost[i];
  let dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};