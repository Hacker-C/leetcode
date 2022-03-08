/**
 * @param {number[]} nums
 * @return {number}
 */

// 找出最小两个数，和最大三个数，比较最小两数与最大数乘积和最大三数乘积
var maximumProduct = function (nums) {
  let [min1, min2] = Array(2).fill(+Infinity)
  let [max1, max2, max3] = Array(3).fill(-Infinity)
  for (let x of nums) {
    if (x < min1) {
      min2 = min1
      min1 = x
    } else if (x < min2) {
      min2 = x
    }
    if (x > max1) {
      max3 = max2
      max2 = max1
      max1 = x
    } else if (x > max2) {
      max3 = max2
      max2 = x
    } else if (x > max3) {
      max3 = x
    }
  }
  return Math.max(min1 * min2 * max1, max1 * max2 * max3)
};

//  var maximumProduct = function (nums) {
//   nums.sort((a, b) => a - b)
//   let n = nums.length
//   return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3])
// };