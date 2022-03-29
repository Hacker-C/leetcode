/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // api大法
  return n
    .toString(2)
    .split('')
    .reduce((pre, cur) => (cur === '1' ? pre + +cur : pre), 0)
}

var hammingWeight = function (n) {
  // 除 k 取余法
  let res = 0
  while (n > 0) {
    res += n % 2
    n = Math.floor(n / 2)
  }
  return res
}

var hammingWeight = function (n) {
  // 位运算
  let res = 0
  while (n > 0) {
    res += n & 1
    n >>>= 1
  }
  return res
}

hammingWeight(4294967293)
