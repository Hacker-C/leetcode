function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0 // 当前子数组和
  let res = Infinity // 返回结果
  let start = 0 // 滑动窗口起始位置
  let subLength = 0 // 当前子数组长度
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end]
    while (sum >= target) {
      subLength = end - start + 1
      res = subLength < res ? subLength : res
      sum -= nums[start++]
    }
  }
  return res === Infinity ? 0 : res
}
