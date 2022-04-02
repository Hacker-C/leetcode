/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let ans = 1
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  while (n) {
    if (n & 1) ans *= x
    x *= x
    n = (n / 2) >>> 0
  }
  return ans
}
