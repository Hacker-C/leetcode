/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0, r = 0
  while (r < nums.length) {
    if (nums[r] !== 0) {
      nums[l] = nums[r]
      l++
    }
    r++
  }
  for (let i = r + 1; i <= r; i++) {
    nums[i] = 0
  }
  return l
};