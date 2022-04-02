/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  // 解法1：api 一行解
  return s.trim().split(/\s+/g).reverse().join(' ')
}

var reverseWords = function (s) {
  // 解法2：不用api，但是需要额外空间，因为JS字符串不可变
  let arr = []
  let l = 0,
    r = s.length - 1
  // 模拟 trim
  while (s[l] === ' ') l++
  while (s[r] === ' ') r--
  // 模拟 split
  let temp = '',
    ans = []
  for (let i = l; i <= r; i++) {
    if (s[i] !== ' ') {
      temp += s[i]
    } else {
      temp.length && ans.push(temp)
      temp = ''
    }
  }
  temp.length && ans.push(temp)
  let ret = ''
  for (let i = ans.length - 1; i >= 0; i--) {
    if (i === 0) ret += ans[i]
    else ret += ans[i] + ' '
  }
  return ret
}

reverseWords('   he is i   si  pig')
