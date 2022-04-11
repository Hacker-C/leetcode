/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return []
  let total = [[null], ['()']] // 0 没有组合，1 只有 "()"
  // 推导 n 对括号的情况
  for (let i = 2; i <= n; i++) {
    let arr = []
    for (let j = 0; j < i; j++) {
      arr1 = total[j]
      arr2 = total[i - 1 - j]
      for (let k1 of arr1) {
        for (let k2 of arr2) {
          if (k1 === null) {
            k1 = ''
          }
          if (k2 === null) {
            k2 = ''
          }
          let el = '(' + k1 + ')' + k2
          arr.push(el)
        }
      }
    }
    total.push(arr)
  }
  return total[n]
}
