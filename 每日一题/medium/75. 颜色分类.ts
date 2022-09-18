/**
 Do not return anything, modify nums in-place instead.
 */

function sortColors(nums: number[]): void {
  let [n0, n1, n2] = [0, 0, 0]
  for (let n of nums) {
    if (n === 0) {
      nums[n2++] = 2
      nums[n1++] = 1
      nums[n0++] = 0
    } else if (n === 1) {
      nums[n2++] = 2
      nums[n1++] = 1
    } else {
      nums[n2++] = 2
    }
  }
}

function sortColors1(nums: number[]): void {
  const map = new Map().set(0, 0).set(1, 0).set(2, 0)
  for (let n of nums) {
    map.set(n, map.get(n) + 1)
  }
  let [zero, one] = [0, 1].map(x => map.get(x))
  for (let i=0; i<zero; i++) nums[i] = 0
  for (let i=zero; i<zero+one; i++) nums[i] = 1
  for (let i=zero+one; i<nums.length; i++) nums[i] = 2
}