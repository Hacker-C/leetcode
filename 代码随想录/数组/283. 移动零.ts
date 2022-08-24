/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let [low, high] = [0, 0]
  while (high < nums.length) {
    if (nums[high] !== 0) {
      nums[low++] = nums[high]
    }
    high++
  }
  while (low < nums.length) {
    nums[low] = 0
  }
}
