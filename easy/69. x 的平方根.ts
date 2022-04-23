function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x
  let l = 0
  let r = x
  while (r - l > 1) {
    let mid = (l + (r - l)) >> 1
    if (x / mid < mid) r = mid
    else l = mid
  }
  return l
}
