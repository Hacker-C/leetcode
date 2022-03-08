/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    let mid = (l + r) >> 1
    if (nums[mid] !== mid) r = mid - 1
    else l = mid + 1
  }
  return l
};