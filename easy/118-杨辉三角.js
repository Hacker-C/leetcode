/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = [[1]]
  if (numRows === 1) {
    return ans
  }
  for (let i = 1; i < numRows; i++) {
    let temp = []
    for (let j = 0; j <= i; j++) {
      let [a, b] = [ans[i - 1][j - 1], ans[i - 1][j]]
      if (a === undefined) a = 0
      if (b === undefined) b = 0
      temp.push(a + b)
    }
    ans.push(temp)
  }
  return ans
};