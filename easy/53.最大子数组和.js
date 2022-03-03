/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0]
  let sum = 0
  for (let num of nums) {
    sum = sum > 0 ? sum + num : num
    res = Math.max(res, sum)
  }
  return res
};
