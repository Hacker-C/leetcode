function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length
  let l = 0
  let r = 1
  let set: Set<string> = new Set()
  let ans = 1
  set.add(s[0])
  while (r < s.length) {
    while (set.has(s[r])) {
      set.delete(s[l])
      l++
    }
    set.add(s[r])
    ans = Math.max(ans, set.size)
    r++
  }
  return ans
}

console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abcabcbb'))
