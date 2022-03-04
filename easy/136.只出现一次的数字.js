/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((pre, cur) => pre ^ cur)

  /* const map = new Map()
  for (let e of nums) {
    if (map.get(e) === 1) {
      map.set(e, 0)
    } else {
      map.set(e, 1)
    }
  }
  for (let [k, v] of map) {
    if (v === 1) return k
  } */

};
