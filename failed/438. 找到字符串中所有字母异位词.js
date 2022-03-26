/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let ans = []
  for (let i = 0; i <= s.length - p.length; i++) {
    const map = new Map()
    for (let c of p) {
      if (!map.has(c)) map.set(c, 1)
      else map.set(c, map.get(c) + 1)
    }
    let j = i
    while (j < i + p.length) {
      map.set(s[j], map.get(s[j]) - 1)
      j++
    }
    let flag = true
    map.forEach((v) => {
      if (v !== 0) flag = false
    })
    if (flag) ans.push(i)
  }
  return ans
}

let s = 'cbaebabacd',
  p = 'abc'
findAnagrams(s, p)
