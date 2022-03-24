/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  let m = img.length,
    n = img[0].length
  const ans = Array(m)
    .fill('')
    .map((_) => Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0,
        count = 0
      for (let p = i - 1; p <= i + 1; p++) {
        for (let q = j - 1; q <= j + 1; q++) {
          let v = img?.[p]?.[q]
          if (v !== undefined) {
            count++
            sum += v
          }
        }
      }
      ans[i][j] = Math.floor(sum / count)
    }
  }
  return ans
}

imageSmoother([
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100]
])
