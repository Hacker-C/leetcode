/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (s === ' ') ans += '%20'
    else ans += s[i]
  }
  return ans
}
