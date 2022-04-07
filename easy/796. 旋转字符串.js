/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// 方法1
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false
  for (let i = 0; i < s.length; i++) {
    let temp = s.slice(i) + s.slice(0, i)
    if (temp === goal) return true
  }
  return false
}
// 方法2
var rotateString = function (s, goal) {
  return s.length === goal.length && (goal + goal).indexOf(s) !== -1
}
