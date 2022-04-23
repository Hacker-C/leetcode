function searchRange(nums: number[], target: number): number[] {
  // 查找左边界
  const getLeftBorder = (nums: number[], target: number): number => {
    let l = 0
    let r = nums.length - 1
    let ans = -2
    while (l <= r) {
      let mid = (l + r) >> 1
      if (nums[mid] >= target) {
        r = mid - 1
        ans = r
      } else {
        l = mid + 1
      }
    }
    return ans
  }
  // 查找右边界
  const getRightBorder = (nums: number[], target: number): number => {
    let l = 0
    let r = nums.length - 1
    let ans = -2
    while (l <= r) {
      let mid = (l + r) >> 1
      if (nums[mid] <= target) {
        l = mid + 1
        ans = l
      } else {
        r = mid - 1
      }
    }
    return ans
  }
  let leftBorder = getLeftBorder(nums, target)
  let rightBorder = getRightBorder(nums, target)
  if (leftBorder === -2 || rightBorder === -2) return [-1, -1]
  if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1]
  return [-1, -1]
}
