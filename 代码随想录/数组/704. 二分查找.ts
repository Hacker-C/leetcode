function search(nums: number[], target: number): number {
  let [low, high] = [0, nums.length - 1]
  while (low <= high) {
    let mid = (low + high) >> 1
    if (nums[mid] === target) return mid
    if (nums[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}
