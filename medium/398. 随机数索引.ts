class Solution {
  nums: number[]
  hash: Map<number, number[]> = new Map()
  constructor(nums: number[]) {
    this.nums = nums
    this.initHash()
  }

  initHash(): void {
    for (let i = 0; i < this.nums.length; i++) {
      this.hash.set(this.nums[i], [...(this.hash?.get(this.nums[i]) ?? []), i])
    }
  }

  getRandomIndex(a: number, b: number): number {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  pick(target: number): number {
    let temp: number[] = this.hash.get(target)
    let index = this.getRandomIndex(0, temp.length - 1)
    return temp[index]
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
