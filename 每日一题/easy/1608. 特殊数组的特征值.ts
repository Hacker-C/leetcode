function specialArray(nums: number[]): number {
  for (let i = 1; i <= nums.length - 1; i++) {
    let count = 0
    for (let n of nums) {
      if (n >= i) {
        count++
      }
    }
    if (i === count) return count
  }
  return -1
}