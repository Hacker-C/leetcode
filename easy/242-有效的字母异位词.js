/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  const map = new Map()
  for (let e of s) {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1)
    } else {
      map.set(e, 1)
    }
  }
  for (let e of t) {
    if (map.has(e) && map.get(e) !== 0) {
      map.set(e, map.get(e) - 1)
    } else {
      return false
    }
  }
  map.forEach(v => {
    if (v > 0) {
      return false
    }
  })
  return true
};

s = "rat", t = "car"
console.log(isAnagram(s, t))