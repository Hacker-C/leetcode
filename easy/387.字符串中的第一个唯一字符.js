/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map()
  for (let ch of s) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1)
    } else {
      map.set(ch, 1)
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }
  return -1
};

s = "8"
console.log(firstUniqChar(s))