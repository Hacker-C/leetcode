/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = []
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i])
      i++
    } else {
      nums.push(nums2[j])
      j++
    }
  }
  while (i < nums1.length) nums.push(nums1[i++])
  while (j < nums2.length) nums.push(nums2[j++])
  if (nums.length & 1) {
    return nums[(nums.length / 2) >>> 0]
  } else {
    let r = nums.length / 2
    return (nums[r - 1] + nums[r]) / 2
  }
}
