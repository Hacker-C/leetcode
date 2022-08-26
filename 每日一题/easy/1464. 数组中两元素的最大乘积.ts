function maxProduct(nums: number[]): number {
  for (let i = 0; i < 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        ;[nums[j], nums[i]] = [nums[i], nums[j]]
      }
    }
  }
  return (nums[0] - 1) * (nums[1] - 1)
}
