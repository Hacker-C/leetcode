function CheckPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false
  }
  let map = new Map()
  for (let c of s1) {
    map.set(c, (map.get(c) ?? 0) + 1)
  }
  for (let c of s2) {
    if (!map.has(c)) {
      return false
    }
    if (map.get(c) <= 0) {
      return false
    }
    map.set(c, map.get(c) - 1)
  }
  for (let [v, _] of map) {
    if (v > 0) return false
  }
  return true
};