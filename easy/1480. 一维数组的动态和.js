/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = Array(nums.length)
  sum[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i]
  }
  return sum
}
