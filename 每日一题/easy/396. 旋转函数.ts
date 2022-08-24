function maxRotateFunction(nums: number[]): number {
  let n = nums.length
  let f = 0
  for (let i = 0; i < n; i++) {
    f += i * nums[i]
  }
  let ans = f
  let sum = nums.reduce((pre, cur) => pre + cur, 0)
  for (let i = 1; i < n; i++) {
    f += sum - n * nums[n - i]
    ans = Math.max(ans, f)
  }
  return ans
}
