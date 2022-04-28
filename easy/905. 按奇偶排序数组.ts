// TIP 双指针
function sortArrayByParity(nums: number[]): number[] {
  let [l, r] = [0, nums.length - 1]
  while (r - l >= 1) {
    while (!(nums[l] & 1) && l < nums.length) l++
    while (nums[r] & 1 && r >= 0) r--
    if (l >= r) break
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
  }
  return nums
}

// TIP 排序
function sortArrayByParity2(nums: number[]): number[] {
  return nums.sort((a, b) => (a & 1 && !(b & 1) ? 1 : -1))
}
console.log(sortArrayByParity2([3, 1, 2, 4]))
