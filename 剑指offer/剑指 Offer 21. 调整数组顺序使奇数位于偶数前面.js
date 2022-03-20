/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    while (nums[l] & 1 && l < nums.length) {
      l++
    }
    while (!(nums[r] & 1) && r >= 0) {
      r--
    }
    if (l >= r) break
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
  // console.log(nums)
  return nums
}

exchange([2, 4, 6])
