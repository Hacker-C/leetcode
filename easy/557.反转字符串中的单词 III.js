/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let w = '', ans = '', i = 0
  s = s + ' '
  while (i < s.length) {
    if (s[i] !== ' ') {
      w = s[i] + w
    } else {
      ans += w + s[i]
      w = ''
    }
    i++
  }
  return ans.slice(0, -1)
};
