// 双指针很秒
function removeDuplicates(nums: number[]): number {
  let [i, j] = [0, 1]
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j]
      i++
    }
    j++
  }
  return i + 1
}
