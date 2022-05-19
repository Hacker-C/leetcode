function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let mid = nums[nums.length >> 1]
  let ans = 0
  nums.forEach(n => (ans += Math.abs(n - mid)))
  return ans
}
