/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  return !n
    .toString(2)
    .split('')
    .some((item, index, array) => item === array[index + 1])
}
