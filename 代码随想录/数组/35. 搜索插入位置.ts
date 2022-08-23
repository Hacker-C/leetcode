function searchInsert(nums: number[], target: number): number {
  let [low, high] = [0, nums.length - 1]
  while (low <= high) {
    const mid = (low + high) >> 1
    if (nums[mid] === target) return mid
    if (nums[mid] > target) high = mid - 1
    else low = mid + 1
  }
  return low
}
console.log(searchInsert([1, 3, 5, 7], 7))
