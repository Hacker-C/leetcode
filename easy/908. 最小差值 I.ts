function smallestRangeI(nums: number[], k: number): number {
  return Math.max(
    0,
    Reflect.apply(Math.max, Math, nums) -
      Reflect.apply(Math.min, Math, nums) -
      2 * k
  )
}
