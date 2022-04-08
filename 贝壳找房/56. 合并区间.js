/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const sort = (arr) => {
    arr.forEach((item) => {
      item.sort((x, y) => x - y)
      return item
    })
    arr.sort((x, y) => {
      if (x[0] !== y[0]) return x[0] - y[0]
      else return x[1] - y[1]
    })
  }
  sort(intervals)
  let i = 0
  while (i < intervals.length - 1) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      let l = intervals[i][0]
      let r = Math.max(intervals[i][1], intervals[i + 1][1])
      intervals.splice(i, 2, [l, r])
    } else {
      i++
    }
  }
  return intervals
}

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
])
