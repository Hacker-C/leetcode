/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let n = 0
  // 求 x^y
  for (let num of nums) {
    n ^= num
  }
  // 求 ..010..，即 x^y 中首位 1
  let m = 1
  while ((n & m) === 0) {
    m <<= 1
  }
  // 根据 num & m 对 nums 分组
  let x = 0,
    y = 0
  for (let num of nums) {
    if (num & m) x ^= num
    else y ^= num
  }
  return [x, y]
}
