/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  let max = nums.reduce((pre, cur) => pre | cur);
  let count = 0;

  const help = (arr) => {
    let n = arr.length, res = [];
    for (let i = 0; i < 2 ** n; i++) {
      let temp = [];
      for (let j = 0; j < n; j++) {
        if ((i >> j) % 2) {
          temp.push(arr[j]);
        }
      }
      res.push(temp);
    }
    return res;
  }
  let res = help(nums)
  res.forEach(arr => {
    if (arr.length && arr.reduce((pre, cur) => pre | cur) === max) {
      count++;
    }
  });
  return count;
}




countMaxOrSubsets([1, 1, 2])