function findClosest(words: string[], word1: string, word2: string): number {
  let ans = Infinity
  let [l1, l2] = [-1, -1]
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) l1 = i
    if (words[i] === word2) l2 = i
    if (l1 !== -1 && l2 !== -1) ans = Math.min(ans, Math.abs(l1 - l2))
  }
  return ans
}
