/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }
  let set = new Set()
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      if (n1 === n2) {
        set.add(n1)
        break
      }
    }
  }
  return [...set]
}
