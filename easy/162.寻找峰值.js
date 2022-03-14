/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    let side1 = nums[mid - 1] || -Infinity, side2 = nums[mid + 1] || -Infinity;
    if (nums[mid] > side1 && nums[mid] > side2) {
      return mid;
    }
    if (nums[mid] > nums[mid + 1]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return 0;
};

findPeakElement([1])
findPeakElement([1, 2])
findPeakElement([1, 2, 3])
findPeakElement([1, 3, 2])
findPeakElement([3, 2, 1])