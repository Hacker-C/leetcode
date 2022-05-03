function removeElement(nums: number[], val: number): number {
  let low = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (val !== nums[fast]) {
      nums[low++] = nums[fast]
    }
  }
  return low
}
