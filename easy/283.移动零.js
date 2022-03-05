/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let l = 0, r = 0
  for (r = 0; r < nums.length; r++) {
    if (nums[r]) {
      nums[l++] = nums[r]
    }
  }
  for (let j = l; j < nums.length; j++) {
    nums[j] = 0
  }
}

// 冒泡交换
// var moveZeroes = function (nums) {
//   for (let i = nums.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] === 0) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//       }
//     }
//   }
// };
