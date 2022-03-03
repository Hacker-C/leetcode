/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = []
  if (rowIndex === 0) return [1]
  arr[0] = 1
  for (let i = 0; i < rowIndex; i++) {
    let pre = JSON.parse(JSON.stringify(arr))
    let len = arr.length
    for (let j = 0; j <= len; j++) {
      arr[j] = (pre[j - 1] || 0) + (pre[j] || 0)
    }
  }
  return arr
};
