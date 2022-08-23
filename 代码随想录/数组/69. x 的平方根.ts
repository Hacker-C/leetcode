// 使用二分法求平方根
function mySqrt(x: number): number {
  if (x === 1) return 1
  let [min, max] = [0, x]
  while (max - min > 1) {
    let mid = Math.floor((max + min) / 2)
    if (mid > x / mid) {
      max = mid
    } else {
      min = mid
    }
  }
  return min
}
