/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  let l = 1, r = 1
  while (r < nums.length) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r]
      l++
    }
    r++
  }
  return l
};