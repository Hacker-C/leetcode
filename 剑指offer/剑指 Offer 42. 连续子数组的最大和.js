/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // dp[i-1] >=0, dp[i] = dp[i-1] + nums[i]
  // dp[i-1] <0, dp[i] = nums[i]
  let dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] < 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = dp[i - 1] + nums[i];
    }
  }
  return Reflect.apply(Math.max, Math, dp);
};
