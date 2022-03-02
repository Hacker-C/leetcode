/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  let min = 0, max = x
  while (max - min > 1) {
    let m = (max + min) >> 1
    if (((x / m) | 0) < m) {
      max = m
    } else {
      min = m
    }
  }
  return min
};

/* var mySqrt = function (x) {
  for (let i = 0; i <= x; i++) {
    if (i * i < x && (i + 1) * (i + 1) > x || i * i === x) {
      return i
    }
  }
}; */


