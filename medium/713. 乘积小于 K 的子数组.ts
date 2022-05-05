function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0
  let ans = 0
  let i = 0
  while (i < nums.length) {
    let mul = 1
    for (let j = i; j < nums.length; j++) {
      mul *= nums[j]
      if (mul >= k) break
      else ans++
    }
    i++
  }
  return ans
}

numSubarrayProductLessThanK([10, 5, 2, 6], 100)
