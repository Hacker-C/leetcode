/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let res = 0
  const map = ['b', 'a', 'l', 'o', 'n'].reduce((prev, cur) => prev.set(cur, 0), new Map())
  for (let ch of text) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1)
    }
  }
  while (
    map.get('b')
    && map.get('a')
    && map.get('l') >= 2
    && map.get('o') >= 2
    && map.get('n')
  ) {
    res++
    ['b', 'a', 'l', 'o', 'n'].forEach(item => {
      if (item === 'l' || item === 'o') {
        map.set(item, map.get(item) - 2)
      } else {
        map.set(item, map.get(item) - 1)
      }
    })
  }

  return res
};

