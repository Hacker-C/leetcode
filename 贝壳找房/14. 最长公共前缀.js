/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0 || strs.length === 1) return strs[0]
  let i = 0
  let temp = strs[0][0]
  while (true) {
    let flag = false
    for (let str of strs) {
      if (i === str.length) {
        i--
        flag = true
        break
      }
      if (!str[0]) {
        flag = true
        break
      }
      if (str[i] !== temp) {
        flag = true
        i--
        break
      }
    }
    if (flag) break
    else {
      i++
      temp = strs[0][i]
    }
  }
  return strs[0].slice(0, i + 1)
}

console.log(longestCommonPrefix(['ab', 'a']))
console.log(longestCommonPrefix(['a', 'a']))
console.log(longestCommonPrefix(['', '']))
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
