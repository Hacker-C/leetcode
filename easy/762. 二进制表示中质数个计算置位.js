/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  const hash = {
    2: true,
    3: true,
    5: true,
    7: true,
    11: true,
    13: true,
    17: true,
    19: true
  }
  let ans = 0
  for (let j = left; j <= right; j++) {
    let count = 0
    let i = j
    while (i) {
      if (i & 1) count++
      i >>>= 1
    }
    if (hash[count]) ans++
  }
  return ans
}
