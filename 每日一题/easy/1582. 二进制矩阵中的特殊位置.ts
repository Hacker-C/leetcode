function numSpecial(mat: number[][]): number {
  let res = 0
  for (let i = 0; i < mat.length; i++) {
    let m = mat[i].indexOf(1)
    let n = mat[i].lastIndexOf(1)
    if (m === n && m !== -1) {
      let sum = 0
      for (let k = 0; k < mat.length; k++) {
        sum += mat[k][m]
      }
      if (sum === 1) res++
    }
  }
  return res
}
