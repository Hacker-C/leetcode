/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  let ans = '', t = ''
  if (num === 0) return '0'
  if (num < 0) {
    num = -num
    t = '-'
  }
  while (num > 0) {
    ans = num % 7 + ans
    num = Math.floor(num / 7)
  }
  return t + ans
};
