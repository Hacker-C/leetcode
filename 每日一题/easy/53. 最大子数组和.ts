// tip 优化版本
function maxSubArray(nums: number[]): number {
  let pre = 0
  let res = nums[0]
  for (let n of nums) {
    pre = Math.max(pre + n, n)
    res = Math.max(res, pre)
  }
  return res
}

// tip 未优化版本
/*
function maxSubArray(nums: number[]): number {
  let dp: number[] = Array(nums.length)
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) dp[i] = dp[i - 1] + nums[i]
    else dp[i] = nums[i]
  }
  let ans = dp[0]
  for (let i = 1; i < dp.length; i++) {
    if (ans < dp[i]) ans = dp[i]
  }
  return ans
}
*/
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
