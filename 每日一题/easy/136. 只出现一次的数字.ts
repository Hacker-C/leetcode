function singleNumber(nums: number[]): number {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i]
  }
  return ans
}
