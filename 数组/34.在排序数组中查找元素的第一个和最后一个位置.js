/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

  // 寻找左边界
  const getLeftBorder = (nums, target) => {
    let l = 0, r = nums.length - 1
    while (l <= r) {
      let mid = l + Math.floor((r - l) / 2)
      if (nums[mid] === target) {
        // 把右范围 r 一直向左逼近，直到到达 target 的左边界
        r = mid - 1
      } else if (nums[mid] < target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    // 1、若 target 大于数组中所有元素，则 l 一直右移，最后 l>=nums.length
    // 2、若 target 小于数组中所有元素，则 l = 0；
    // 3、剩下一种情况是 target 在 nums 中，结合2、3则判断 nums[l] !== target
    if (l >= nums.length || nums[l] !== target) {
      // 不存在 target
      return -1
    }
    return l
  }

  // 寻找右边界
  const getRightBorder = (nums, target) => {
    let l = 0, r = nums.length - 1, mid = 0
    while (l <= r) {
      mid = l + Math.floor((r - l) / 2)
      if (nums[mid] === target) {
        // 把左边范围 l 往右边逼近，直到到达 target 的右边界
        l = mid + 1
      } else if (nums[mid] < target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    // 1、若 target 小于数组中所有元素，则 r 一直左移，最后 r<0
    // 2、若 target 大于数组中所有元素，则 r = nums.length-1；
    // 3、剩下一种情况是 target 在 nums 中，结合2、3则判断 nums[r] !== target
    if (r < 0 || nums[r] !== target) {
      // 不存在 target
      return -1
    }
    return r
  }

  return [getLeftBorder(nums, target), getRightBorder(nums, target)]

};

