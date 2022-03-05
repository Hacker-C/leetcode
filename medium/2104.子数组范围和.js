/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    let _max = -Infinity, _min = +Infinity
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > _max) _max = nums[j]
      if (nums[j] < _min) _min = nums[j]
      ans += _max - _min
    }
  }
  return ans
};