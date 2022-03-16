/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    let temp = dp[0];
    dp[0] = dp[1];
    dp[1] = (dp[1] + temp) % (1e9 + 7);
  }
  return dp[1];
}