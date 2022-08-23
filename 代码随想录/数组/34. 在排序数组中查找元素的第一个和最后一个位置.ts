// 这种解法是先使用二分查找到一个目标元素，然后从该目标元素两边发散寻找边界值。
// 这里已经使用了直接遍历，因此时间复杂度会高于 O(log(n)) 了。

function searchRange(nums: number[], target: number): number[] {
  let [low, high] = [0, nums.length - 1]
  let [start, end] = [-1, -1]
  while (low <= high) {
    const mid = (low + high) >> 1
    if (nums[mid] === target) {
      start = end = mid
      for (let i = mid - 1; i >= 0; i--) {
        if (nums[i] === target) {
          start = i
        }
      }
      for (let i = mid + 1; i < nums.length; i++) {
        if (nums[i] === target) {
          end = i
        }
      }
      return [start, end]
    }
    if (nums[mid] > target) high = mid - 1
    else low = mid + 1
  }
  return [start, end]
}
