function minElements(nums: number[], limit: number, goal: number): number {
  const sum = nums.reduce((p, c) => p + c, 0)
  const temp = Math.abs(goal - sum)
  return Math.ceil(temp / limit)
}
