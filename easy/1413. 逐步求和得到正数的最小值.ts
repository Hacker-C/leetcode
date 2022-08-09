function minStartValue(nums: number[]): number {
  let min = Math.min()
  let sum = 0
  for (let num of nums) {
    sum += num
    if (sum < min) min = sum
  }
  return min >= 0 ? 1 : 1 - min
}

console.log(minStartValue([1, -2, -3]))
