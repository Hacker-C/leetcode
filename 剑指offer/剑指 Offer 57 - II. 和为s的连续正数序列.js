/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let ans = []
  let start = 1
  while (1) {
    let sub = []
    for (let n = 2; ; n++) {
      let sum = ((start + start + n - 1) * n) / 2
      if (sum === target) {
        for (let i = start; i <= start + n - 1; i++) {
          sub.push(i)
        }
      }
      if (sum > target) break
    }
    sub.length && ans.push(sub)
    start++
    if (start > Math.ceil(target / 2)) {
      return ans
    }
  }
}
