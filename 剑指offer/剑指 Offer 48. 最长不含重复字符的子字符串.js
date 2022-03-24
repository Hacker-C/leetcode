/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    r = 0,
    ans = 0
  let set = new Set()
  while (l < s.length) {
    if (l !== 0) set.delete(s[l - 1])
    while (r < s.length && !set.has(s[r])) {
      set.add(s[r++])
    }
    ans = Math.max(r - l, ans)
    l++
  }
  return ans
}
