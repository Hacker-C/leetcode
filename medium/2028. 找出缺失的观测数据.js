/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  let total = mean * (rolls.length + n)
  let left = total - rolls.reduce((pre, cur) => pre + cur, 0)
  let every = Math.floor(left / n)
  let remain = left % n
  if (left <= 0 || every <= 0 || every > 6 || (every === 6 && remain > 0))
    return []
  let ans = Array(n).fill(every)
  let i = 0
  while (remain--) {
    ans[i++]++
  }
  return ans
}

missingRolls(
  [
    4, 2, 2, 5, 4, 5, 4, 5, 3, 3, 6, 1, 2, 4, 2, 1, 6, 5, 4, 2, 3, 4, 2, 3, 3,
    5, 4, 1, 4, 4, 5, 3, 6, 1, 5, 2, 3, 3, 6, 1, 6, 4, 1, 3
  ],
  2,
  53
)
