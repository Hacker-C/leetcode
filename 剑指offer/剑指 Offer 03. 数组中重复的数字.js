/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希，空间：O(n)，时间：O(n)
var findRepeatNumber = function (nums) {
  let map = new Map();
  for (let n of nums) {
    if (map.get(n)) {
      return n;
    } else {
      map.set(n, 1);
    }
  }
};

// 排序，空间：O(1)，时间：O(nlogn)
var findRepeatNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
};