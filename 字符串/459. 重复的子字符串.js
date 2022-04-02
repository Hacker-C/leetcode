/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return (s + s).slice(1, 2 * s.length - 1).indexOf(s) === -1 ? false : true
}
