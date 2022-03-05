/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  k %= nums.length
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  reverse(nums, 0, nums - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums - 1)
}

// 时间复杂度：O(n)，空间复杂度：O(n)
// var rotate = function (nums, k) {
//   k %= nums.length
//   let ans = []
//   for (let i = nums.length - k; i < nums.length; i++) {
//     ans.push(nums[i])
//   }
//   for (let i = 0; i < nums.length - k; i++) {
//     ans.push(nums[i])
//   }
//   for (let i = 0; i < ans.length; i++) {
//     nums[i] = ans[i]
//   }
// };