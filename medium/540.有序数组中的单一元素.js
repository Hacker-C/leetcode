/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0, r = nums.length - 1
  while (l < r) {
    let mid = parseInt((l + r) / 2)
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        l = mid + 1
      } else {
        r = mid
      }
    } else {
      if (nums[mid - 1] === nums[mid]) {
        l = mid + 1
      } else {
        r = mid
      }
    }
  }
  return nums[l]
};
