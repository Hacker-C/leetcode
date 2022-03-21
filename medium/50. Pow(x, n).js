/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 快速幂模板题
  let ans = 1
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  while (n) {
    if (n & 1) ans *= x
    x *= x
    n = Math.floor(n / 2)
  }
  return ans
}

console.log(myPow(2.0, -2147483649))
console.log(myPow(1.0, 9999999999))
