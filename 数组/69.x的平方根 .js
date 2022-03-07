/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  if (x === 1) return 1
  let l = 0, r = x
  while (r - l > 1) {
    // let mid = l + Math.ceil((r - l) / 2)
    let mid = (l + r) >> 1
    if (((x / mid) | 0) < mid) {
      r = mid
    } else {
      l = mid
    }
  }
  return l
};
