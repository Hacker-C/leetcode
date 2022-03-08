/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let l = 0, r = nums.length - 1
  let ans = Array(nums.length)
  let i = nums.length - 1
  while (l <= r) {
    if (nums[l] * nums[l] > nums[r] * nums[r]) {
      ans[i] = nums[l] * nums[l]
      l++
    } else {
      ans[i] = nums[r] * nums[r]
      r--
    }
    i--
  }
  return ans
}
