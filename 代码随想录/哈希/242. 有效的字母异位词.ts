function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const map: Map<string, number> = new Map()
  for (let c of s) {
    map.set(c, (map.get(c) ?? 0) + 1)
  }
  for (let c of t) {
    if (!map.has(c) || map.get(c) === 0) {
      return false
    }
    map.set(c, map.get(c) - 1)
  }
  return true
}