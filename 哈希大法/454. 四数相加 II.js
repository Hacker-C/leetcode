/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map()
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      let sum = n1 + n2
      if (map.has(sum)) map.set(sum, map.get(sum) + 1)
      else map.set(sum, 1)
    }
  }
  let res = 0
  for (let n3 of nums3) {
    for (let n4 of nums4) {
      let sum = -(n3 + n4)
      if (map.has(sum)) res += map.get(sum)
    }
  }
  return res
}
