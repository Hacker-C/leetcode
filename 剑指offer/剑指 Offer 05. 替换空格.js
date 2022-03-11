/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let ans = '';
  for (let c of s) {
    if (c === ' ') {
      ans += '%20';
    } else {
      ans += c;
    }
  }
  return ans;
};