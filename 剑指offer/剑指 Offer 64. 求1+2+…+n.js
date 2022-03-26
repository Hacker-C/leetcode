/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  return n && sumNums(n - 1) + n
}

sumNums(10)
