/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // api 
  // return s.split(/\s+/).filter(x => x).at(-1) 
  let l = s.length - 1, r = s.length, flag = 1
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != ' ' && flag) {
      r = i
      flag = 0
    }
    if (s[i] == ' ' && flag === 0) {
      l = i
      return r - l
    }
  }
  return r + 1
};

