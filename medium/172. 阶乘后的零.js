/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let ans = 0
  for (let i = 0; i < n + 1; i += 5) {
    let j = i
    while (j && j % 5 === 0) {
      ans++
      j = Math.floor(j / 5)
    }
  }
  return ans
}

trailingZeroes(3)
