/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map()
  for (let ch of magazine) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1)
    } else {
      map.set(ch, 1)
    }
  }
  for (let ch of ransomNote) {
    if (map.has(ch) && map.get(ch) > 0) {
      map.set(ch, map.get(ch) - 1)
    } else {
      return false
    }
  }
  return true
};