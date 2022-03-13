/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

  // 左边界
  const getLeft = (arr, x) => {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
      let mid = (l + r) >> 1;
      if (arr[mid] === x) r = mid - 1;
      else if (arr[mid] < x) l = mid + 1;
      else r = mid - 1;
    }
    if (l >= arr.length || nums[l] !== x) {
      return -1;
    }
    return l;
  }

  // 右边界
  const getRight = (arr, x) => {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
      let mid = (l + r) >> 1;
      if (arr[mid] === x) l = mid + 1;
      else if (arr[mid] < x) l = mid + 1;
      else r = mid - 1;
    }
    if (r < 0 || nums[r] !== x) {
      return -1;
    }
    return r;
  }

  let r = getRight(nums, target);
  return r === -1 ? 0 : r - getLeft(nums, target) + 1;

}

let a = search(nums = [5, 7, 7, 8, 8, 10], target = 9);
console.log(a)