/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let count = nums.reduce((pre, cur) => {
    if (pre[cur]) pre[cur]++
    else pre[cur] = 1
    return pre
  }, {})
  for (let k in count) {
    if (count[k] >= 2 && k !== '0') return false
  }
  nums = nums.filter((x) => x !== 0)
  nums.sort((a, b) => a - b)
  return nums[nums.length - 1] - nums[0] < 5
}

let ans = isStraight([0, 6, 1, 2, 5])
console.log(ans)
