/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let ans = []
  if (!mat[0].length) {
    for (let e of mat) {
      ans.push([e])
    }
    return ans
  }
  if (r * c !== mat.length * mat[0].length) {
    return mat
  }
  let temp = []
  for (let arr of mat) {
    for (let e of arr) {
      temp.push(e)
      if (temp.length >= c) {
        ans.push(temp)
        temp = []
      }
    }
  }
  return ans
};

mat = [1, 2, 3, 4], r = 4, c = 1

console.log(matrixReshape(mat, r, c))