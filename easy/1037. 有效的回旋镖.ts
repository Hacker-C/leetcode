function isBoomerang(points: number[][]): boolean {
  const [p1, p2, p3] = points
  if (p1[0] === p2[0] && p2[0] === p3[0]) {
    return false
  }
  const isEqual = (p1: number[], p2: number[]): boolean => {
    return p1[0] === p2[0] && p1[1] === p2[1]
  }
  if (isEqual(p1, p2) || isEqual(p1, p3) || isEqual(p2, p3)) {
    return false
  }
  if (p1[0] === p2[0] || p2[0] === p3[0] || p1[0] === p3[0]) {
    return true
  }
  const k1 = (p1[1] - p2[1]) / (p1[0] - p2[0])
  const k2 = (p2[1] - p3[1]) / (p2[0] - p3[0])
  if (k1 === k2) return false
  return true
}
