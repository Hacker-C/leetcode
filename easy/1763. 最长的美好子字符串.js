/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {

  // 生成正则
  const re = (c) => {
    let [R, r] = [c.toUpperCase(), c.toLowerCase()]
    return new RegExp(R + '.*' + r + '|' + r + '.*' + R)
  }

  // 检验是否为美好字符串
  const check = (s) => {
    for (let c of s) {
      if (!re(c).test(s)) {
        return false
      }
    }
    return true
  }

  // 穷举
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let substr = s.slice(i, j + 1)
      if (check(substr) && substr.length > ans.length) {
        ans = substr
      }
    }
  }
  return ans

};
