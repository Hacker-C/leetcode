/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }
  for (let c of s) {
    if (map.has(c)) {
      return c;
    }
  }
};