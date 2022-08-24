// 时隔多年再做，秒解，是我变强了吗
function removeElement(nums: number[], val: number): number {
  let [low, high] = [0, nums.length - 1]
  while (low <= high) {
    if (nums[low] === val) {
      nums[low] = nums[high--]
    } else low++
  }
  return low
}
