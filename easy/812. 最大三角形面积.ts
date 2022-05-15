function largestTriangleArea(points: number[][]): number {
  interface func {
    (a: number, b: number, c: number, p: number): number
  }
  interface Distanse {
    (x1: number[], x2: number[]): number
  }
  const halun: func = (a, b, c, p) => {
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
  }
  const distanse: Distanse = ([x1, y1], [x2, y2]) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
  }
  let ans = -Infinity
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        let a = distanse(points[i], points[j])
        let b = distanse(points[j], points[k])
        let c = distanse(points[k], points[i])
        const p = (a + b + c) / 2
        let res = halun(a, b, c, p)
        if (res > ans) ans = res
      }
    }
  }
  return ans
}
