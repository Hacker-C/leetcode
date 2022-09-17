function maxLengthBetweenEqualCharacters(s: string): number {
  let res = -1
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      res = Math.max(res, i - map.get(s[i]) - 1)
    } else {
      map.set(s[i], i)
    }
  }
  return res
}