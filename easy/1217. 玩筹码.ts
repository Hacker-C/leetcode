function minCostToMoveChips(position: number[]): number {
  let [old, even] = [0, 0]
  for (const n of position) {
    if (n & 1) old++
    else even++
  }
  return Math.min(old, even)
}
