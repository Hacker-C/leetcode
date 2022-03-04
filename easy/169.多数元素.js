/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map()
  for (let e of nums) {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1)
    } else {
      map.set(e, 1)
    }
  }
  for (let [k, v] of map) {
    if (v > nums.length >> 1) {
      return k
    }
  }

};