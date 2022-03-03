/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let l1 = nums1.length, l2 = nums2.length
  let i = 0, j = 0
  let nums = []
  while (i < l1 && j < l2) {
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i])
      i++
    } else {
      nums.push(nums2[j])
      j++
    }
  }
  if (i < l1) {
    for (; i < l1; i++) {
      nums.push(nums1[i])
    }
  }
  if (j < l2) {
    for (; j < l2; j++) {
      nums.push(nums2[j])
    }
  }
  let res = (l1 + l2) % 2 === 1
    ? nums[(l1 + l2 - 1) / 2]
    : (nums[(l1 + l2) / 2] + nums[(l1 + l2) / 2 - 1]) / 2
  return res
};

