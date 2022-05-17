function isAlienSorted(words: string[], order: string): boolean {
  const hash = Array.from(order).reduce((pre, cur, index) => {
    pre[cur] = index
    return pre
  }, {} as { [key: string]: number })
  const compare = (a: string, b: string): number => {
    let [la, lb] = [a.length, b.length]
    let n = Math.min(la, lb)
    for (let i = 0; i < n; i++) {
      if (hash[a[i]] < hash[b[i]]) {
        return -1
      }
      if (hash[a[i]] > hash[b[i]]) {
        return 1
      }
    }
    return la - lb
  }
  for (let i = 0; i < words.length - 1; i++) {
    if (compare(words[i], words[i + 1]) > 0) {
      return false
    }
  }
  return true
}
