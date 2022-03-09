/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let help = 0, i = 0
  let map = [...s1].reduce((pre, cur) => {
    if (pre[cur]) {
      pre[cur] += 1
    } else {
      pre[cur] = 1
    }
    return pre
  }, {})
  let mp = JSON.parse(JSON.stringify(map))
  while (i < s2.length) {
    let j = i
    while (j < s2.length && mp[s2[j]] >= 1) {
      help++
      mp[s2[j]] -= 1
      if (help === s1.length) return true
      j++
    }
    i++
    help = 0
    mp = JSON.parse(JSON.stringify(map))
  }
  return false
};