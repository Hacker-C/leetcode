/**
 * @param {number[]} nums
 * @return {number}
 */

// 前缀最小值，时间复杂度：O(n)
var maximumDifference = function (nums) {
  let ans = -1, premin = nums[0]
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] > premin) {
      ans = Math.max(ans, nums[j] - premin)
    } else {
      premin = nums[j]
    }
  }
  return ans
};

// 暴力解，时间复杂度O(n^2)
// var maximumDifference = function (nums) {
//   let res = -Infinity
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] - nums[i] > res) {
//         res = nums[j] - nums[i]
//       }
//     }
//   }
//   return res <= 0 ? -1 : res
// };


