function arrayNesting(nums: number[]): number {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === -1) continue
    let [curAns, temp] = [0, i]
    while (nums[temp] !== -1) {
      curAns++
      let next = nums[temp]
      nums[temp] = -1
      temp = next
    }
    ans = Math.max(ans, curAns)
  }
  return ans
}
