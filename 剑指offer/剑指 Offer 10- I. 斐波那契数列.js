/**
 * @param {number} n
 * @return {number}
 */

// dp
var fib = function (n) {
  if (n < 2) return n;
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}


// 迭代
var fib = function (n) {
  if (n < 2) return n;
  let a = 0, b = 1;
  n -= 1;
  while (n--) {
    [a, b] = [b, (a + b) % 1e9 + 7];
  }
  return b;
};
