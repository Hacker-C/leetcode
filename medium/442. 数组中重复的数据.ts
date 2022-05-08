// 利于数组本身的正负性来充当哈希数组，很妙
function findDuplicates(nums: number[]): number[] {
  const ans: number[] = []
  for (let num of nums) {
    let temp = Math.abs(num)
    if (temp < 0) ans.push(num)
    else nums[temp - 1] *= -1
  }
  return ans
}
