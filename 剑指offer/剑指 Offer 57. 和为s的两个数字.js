/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i]
    let l = i + 1,
      r = nums.length - 1
    while (l <= r) {
      let mid = (l + r) >> 1
      if (nums[mid] === k) return [nums[i], k]
      if (nums[mid] < k) l = mid + 1
      else r = mid - 1
    }
  }
}
