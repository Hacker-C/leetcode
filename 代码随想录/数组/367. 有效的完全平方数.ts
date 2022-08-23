function isPerfectSquare(num: number): boolean {
  let [min, max] = [0, num]
  while (max - min > 1) {
    let mid = Math.floor((min + max) / 2)
    if (mid > num / mid) {
      max = mid
    } else {
      min = mid
    }
  }
  if (min * min === num) return true
  return false
}
