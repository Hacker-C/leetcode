/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true
  let l = 0, r = num
  while (r - l > 1) {
    let mid = (l + r) >> 1
    if (mid * mid === num) {
      return true
    } else if (mid * mid < num) {
      l = mid
    } else {
      r = mid
    }
  }
  return false
};
