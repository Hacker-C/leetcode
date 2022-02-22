/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = s[0]
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let a = s.slice(i, j + 1)
      let flag = true
      for (let k = 0; k < parseInt(a.length) / 2; k++) {
        if (a[k] !== a[a.length - k - 1]) {
          flag = false
          break
        }
      }
      if (flag) {
        if (a.length > ans.length) {
          ans = a
        }
      }
    }
  }
  return ans
};