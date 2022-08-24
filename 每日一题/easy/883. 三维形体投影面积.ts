function projectionArea(grid: number[][]): number {
  let [s1, s2, s3] = [0, 0, 0]
  let ss3: Map<number, number[]> = new Map()
  for (let i = 0; i < grid.length; i++) {
    let max = 0
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] !== 0) s1++
      ss3.set(j, [...(ss3?.get(j) ?? []), grid[i][j]])
      max = Math.max(max, grid[i][j])
    }
    s2 += max
  }
  for (let [_, v] of ss3) {
    let max = 0
    for (let e of v) {
      max = Math.max(max, e)
    }
    s3 += max
  }
  return s1 + s2 + s3
}
