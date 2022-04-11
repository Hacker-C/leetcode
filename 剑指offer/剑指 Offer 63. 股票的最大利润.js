/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 1、确定dp含义：dp[i]，第i天能获得的最大利润
  // 2、推导式：dp[i] = pricies[i] - max(priceis[i-1], ...)
  // 维护一个变量，表示当前位置之前最小的值
  // 3、初值：dp[0]=0,dp[1]=0
  let min = Infinity;
  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    min = prices[i] < min ? prices[i] : min;
    ans = Math.max(ans, prices[i] - min);
  }
  return ans;
};

maxProfit([7, 6, 4, 3, 1]);