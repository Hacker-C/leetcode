/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map()
  nums1.forEach(e => {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1)
    } else {
      map.set(e, 1)
    }
  })
  let ans = []
  for (let e of nums2) {
    if (map.has(e) && map.get(e)) {
      ans.push(e)
      map.set(e, map.get(e) - 1)
    }
  }
  return ans
};