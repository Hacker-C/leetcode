/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    let sub = target - nums[i]
    if (map.has(sub)) return [i, map.get(sub)]
    map.set(nums[i], i)
  }
}
