function repeatedNTimes(nums: number[]): number {
  const map: Map<number, number> = new Map()
  for (let num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1)
  }
  let ans: number
  map.forEach((c, n) => {
    if (c === nums.length / 2) ans = n
  })
  return ans
}
