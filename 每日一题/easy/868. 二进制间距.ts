function binaryGap(n: number): number {
  let s = n.toString(2)
  let l = 0
  let r = 0
  let ans = 0
  while (l < s.length) {
    if (s[l] === '1') {
      while (s[r] === '0') {
        r++
      }
    }
    if (s[l] === '1' && s[r] === '1') ans = Math.max(ans, r - l)
    l = r
    r++
  }
  return ans
}

console.log(binaryGap(22)) // 10110
console.log(binaryGap(8))
console.log(binaryGap(5))
