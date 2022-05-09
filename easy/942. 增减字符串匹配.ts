function diStringMatch(s: string): number[] {
  let [min, max] = [0, s.length]
  let ans: number[] = []
  for (let c of s) {
    if (c === 'I') {
      ans.push(min++)
    } else {
      ans.push(max--)
    }
  }
  ans.push((min + max) / 2)
  return ans
}
