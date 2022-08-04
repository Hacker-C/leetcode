function minSubsequence(nums: number[]): number[] {
  nums.sort((a, b) => b - a)
  let sum = 0
  let total = nums.reduce((pre, cur) => pre + cur, 0)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum > total >> 1) {
      return nums.slice(0, i + 1)
    }
  }
}
