/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

  const getLeft = (nums, target) => {
    let l = 0, r = nums.length - 1
    while (l <= r) {
      let mid = (l + r) >> 1
      if (nums[mid] === target) r = mid - 1
      else if (nums[mid] < target) l = mid + 1
      else r = mid - 1
    }
    if (l >= nums.length || nums[l] !== target) return -1
    return l
  }

  const getRight = (nums, target) => {
    let l = 0, r = nums.length - 1
    while (l <= r) {
      let mid = (l + r) >> 1
      if (nums[mid] === target) l = mid + 1
      else if (nums[mid] < target) l = mid + 1
      else r = mid - 1
    }
    if (r < 0 || nums[r] !== target) return -1
    return r
  }

  return getLeft(nums, target) === -1 ? 0 : (getRight(nums, target) - getLeft(nums, target) + 1)
  // console.log(getLeft(nums, target), getRight(nums, target))

};