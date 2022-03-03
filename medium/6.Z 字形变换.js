/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let col = Math.ceil(s.length / (2 * numRows - 2)) * (numRows - 1)
  let ans = Array(col).fill(Array(numRows).fill(null))
  // 不写了
};


s = "PAYPALISHIRING", numRows = 3
convert(s, numRows)