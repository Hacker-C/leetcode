/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let ans = []
  for (let i = left; i <= right; i++) {
    let str = i.toString()
    let flag = true
    for (let n of str) {
      if (i % Number(n) !== 0) flag = false
    }
    if (flag) ans.push(i)
  }
  return ans
}
