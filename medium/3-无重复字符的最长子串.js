/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let res = 0
  if (s.length === 1) return 1
  for (let i = 0; i < s.length; i++) {
    let j = i
    while (j < s.length && !set.has(s[j])) {
      set.add(s[j])
      j++
    }
    res = Math.max(res, set.size)
    set.clear()
  }
  return res
};

