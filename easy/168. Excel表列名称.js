/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  // 从 1 开始的 26 进制
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let ans = ''
  while (columnNumber > 0) {
    columnNumber--
    ans = letters[columnNumber % 26] + ans
    columnNumber = Math.floor(columnNumber / 26)
  }
  return ans
}

convertToTitle(26) // z
convertToTitle(27) // AA
convertToTitle(28) // AB
convertToTitle(701) // ZY
