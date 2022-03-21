/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let r = s.length - 1
  let words = [],
    temp = ''
  while (r >= 0) {
    if (r === 0) {
      if (s[r] === ' ') {
        return temp + words.join(' ')
      }
      temp = s[r] + temp
      words.push(temp)
      return words.join(' ')
    }
    if (s[r] === ' ') {
      temp && words.push(temp)
      temp = ''
    } else {
      temp = s[r] + temp
    }
    r--
  }
  return ''
  // api
  // return s.trim().split(/\s+/).reverse().join(' ')
}

reverseWords(' 1')
