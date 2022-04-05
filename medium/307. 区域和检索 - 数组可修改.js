/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums
  // 前缀和
  this.prefixSum = Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    this.prefixSum[i] = (this.prefixSum[i - 1] ?? 0) + nums[i]
  }
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  // 修改前 index 前面所有的前缀和
  for (let i = 0; i <= index; i++) {
    let diff = val - this.nums[i]
    this.prefixSum[i] += diff
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSum[right] - (this.prefixSum[left - 1] ?? 0)
}
// 1 2 3 4
// 1 3 6 10
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
