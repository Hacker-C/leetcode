/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map()
  for (let n of nums) {
    map.set(n, (map?.get(n) ?? 0) + 1)
  }
  for (let [k, v] of map) {
    if (v === 1) return k
  }
}
