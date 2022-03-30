/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 解法1：哈希
  // 解法2：排序
  // 解法3：摩尔投票法
  // 俩俩相拼，不同的消除，最后剩下来的肯定是众数
  let votes = 0
  let x = nums[0]
  for (let n of nums) {
    if (votes === 0) x = n
    if (x === n) votes++
    else votes--
  }
  return x
}
