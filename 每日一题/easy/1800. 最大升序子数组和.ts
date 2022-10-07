function maxAscendingSum(nums: number[]): number {
  let ans = -Infinity
  for (let i=0; i<nums.length; i++) {
    let res = nums[i]
    for (let j=i+1; j < nums.length; j++) {
      if (nums[j] > nums[j-1]) {
        res += nums[j]
      } else {
        break
      }
    }
    if (res > ans) {
      ans = res
    }
  }
  return ans
};

console.log(maxAscendingSum([12,17,15,13,10,11,12]))