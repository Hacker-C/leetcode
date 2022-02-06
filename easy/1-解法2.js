// 哈希解法：O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i]
    if (map.has(sub)) {
      return [i, map.get(sub)]
    }
    map.set(nums[i], i)
  }
};

console.log(twoSum([1, 2, 3], 5))