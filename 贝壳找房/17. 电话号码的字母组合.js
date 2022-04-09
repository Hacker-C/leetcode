/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let hash = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  if (digits.length === 0) return []
  if (digits.length === 1) return hash[digits[0]].split('')
  let l = Array(4)
  for (let i = 0; i < 4; i++) {
    l[i] = hash[digits[i]]
  }
  l = l.filter(Boolean)
  let res = []
  for (let i = 0; i < l[0].length; i++) {
    temp = ''
    for (let j = 0; j < l[1].length; j++) {
      if (l.length === 2) res.push(l[0][i] + l[1][j])
      // 大于等于3，继续累加
      if (l.length >= 3) {
        for (let k = 0; k < l[2].length; k++) {
          if (l.length === 3) res.push(l[0][i] + l[1][j] + l[2][k])
          // 大于等于4，继续累加
          if (l.length === 4) {
            for (let m = 0; m < l[3].length; m++) {
              res.push(l[0][i] + l[1][j] + l[2][k] + l[3][m])
            }
          }
        }
      }
    }
  }
  return res
}

letterCombinations('234')

// let res = String.fromCharCode(
//   ...Array(26)
//     .fill('')
//     .map((e, i) => i + 97)
// )
// console.log(res)
