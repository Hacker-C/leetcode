function removeDuplicates(nums: number[]): number {
  let u = 0
  for (let x of nums) {
    if (u < 2 || nums[u - 2] != x) nums[u++] = x
  }
  return u
}
