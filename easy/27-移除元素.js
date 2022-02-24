/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let l = 0, r = nums.length
  while (l < r) {
    if (nums[l] === val) {
      nums[l] = nums[r - 1]
      r--
    } else {
      l++
    }
  }
  return r
};

