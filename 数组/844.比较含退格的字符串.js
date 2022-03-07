/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const res = (str) => {
    let stack = []
    for (let ch of str) {
      console.log(ch)
      if (ch === '#') {
        stack.pop()
      } else {
        stack.push(ch)
      }
    }
    return stack.join('')
  }
  return res(s) === res(t)
};
