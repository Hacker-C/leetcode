/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const map = new Map()
  for (const c of s) {
    if (map.has(c)) map.set(c, map.get(c) + 1)
    else map.set(c, 1)
  }
  for (const c of t) {
    if (!map.has(c) || map.get(c) === 0) return false
    map.set(c, map.get(c) - 1)
  }
  return true
}
