/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      if (stack.length === 0) return false
      let top = stack[stack.length - 1]
      if (s[i] === ')' && top === '('
        || s[i] === ']' && top === '['
        || s[i] === '}' && top === '{'
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  if (stack.length != 0) return false
  return true
};