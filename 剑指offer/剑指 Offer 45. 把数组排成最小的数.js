/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums.sort((a, b) => Number(a + '' + b) - Number(b + '' + a)).join('')
}
