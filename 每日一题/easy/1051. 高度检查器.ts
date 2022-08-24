function heightChecker(heights: number[]): number {
  let origin = [...heights]
  return heights.sort((a, b) => a - b).reduce((pre, cur, i) => pre + (cur === origin[i] ? 0 : 1), 0)
}
