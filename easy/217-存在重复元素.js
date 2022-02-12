/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map()
  for (let num of nums) {
    if (map.get(num) === undefined) {
      map.set(num, 1)
    } else {
      return true
    }
  }
  return false
};