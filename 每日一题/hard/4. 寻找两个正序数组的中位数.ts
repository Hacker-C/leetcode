function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let nums: number[] = []
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
  if (i < nums1.length) {
    while (i < nums1.length) {
      nums.push(nums1[i++])
    }
  }
  if (j < nums2.length) {
    while (j < nums2.length) {
      nums.push(nums2[j++])
    }
  }
  let len = nums.length
  if (len <= 1) return nums[0]
  if (len & 1) return nums[(len / 2) >>> 0]
  let l = ((len / 2) >>> 0) - 1
  return (nums[l] + nums[l + 1]) / 2
}
