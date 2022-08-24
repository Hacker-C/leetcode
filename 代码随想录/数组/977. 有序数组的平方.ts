// 时间复杂度 O(n)
function sortedSquares(nums: number[]): number[] {
  let start = 0
  while (start < nums.length) {
    if (nums[start] >= 0) break
    start++
  }
  let low = start - 1
  let high = start
  let ans = []
  while (low >= 0 && high < nums.length) {
    let [l, h] = [nums[low] ** 2, nums[high] ** 2]
    if (l < h) {
      ans.push(l)
      low--
    } else {
      ans.push(h)
      high++
    }
  }
  while (low >= 0) {
    ans.push(nums[low] ** 2)
    low--
  }
  while (high < nums.length) {
    ans.push(nums[high] ** 2)
    high++
  }
  return ans
}
