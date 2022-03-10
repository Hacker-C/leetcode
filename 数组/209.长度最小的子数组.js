/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let len = nums.length
  let sum = l = r = 0
  let ans = len + 1
  while (r < len) {
    sum += nums[r++]
    while (sum >= target) {
      ans = Math.min(ans, r - l)
      sum -= nums[l++]
    }
  }
  return ans > len ? 0 : ans
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3])
minSubArrayLen(4, [1, 4, 4])