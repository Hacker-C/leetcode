/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let sum = 0
  let i = 0
  let line = 1
  while (i < s.length) {
    sum += widths[s[i].charCodeAt(0) - 97]
    if (sum > 100) {
      line++
      sum = 0
    } else if (sum === 100) {
      line++
      sum = 0
      i++
    } else {
      i++
    }
  }
  if (sum === 0) return [line - 1, 100]
  return [line, sum]
}

widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
S = 'bbbcccdddaaa'

numberOfLines(widths, S)
