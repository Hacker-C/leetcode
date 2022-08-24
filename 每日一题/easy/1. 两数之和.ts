function twoSum(nums: number[], target: number): number[] {
  let map: Map<number, number> = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [i, map.get(target - nums[i])]
    else map.set(nums[i], i)
  }
}
