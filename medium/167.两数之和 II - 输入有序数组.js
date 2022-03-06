/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0, r = numbers.length - 1
  while (l < r) {
    let sub = target - numbers[l]
    while (numbers[r] > sub) {
      r--
    }
    if (sub === numbers[r]) {
      return [l + 1, r + 1]
    }
    if (numbers[r] < sub) {
      l++
    }
  }
};
