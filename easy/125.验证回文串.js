/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

  let res = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  for (let i = 0; i < (res.length >> 1); i++) {
    if (res[i] !== res[res.length - 1 - i]) {
      return false
    }
  }
  return true

};
