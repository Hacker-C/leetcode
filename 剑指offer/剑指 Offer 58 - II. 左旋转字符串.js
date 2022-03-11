/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let ans = '';
  for (let i = 0; i < n; i++) {
    ans += s[i];
  }
  for (let i = n; i < s.length; i++) {
    ans += s[i];
  }
  return ans;
};